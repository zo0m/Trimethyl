/**
 * @class  	Notifications
 * @author  Flavio De Stefano <flavio.destefano@caffeinalab.com>
 */

/**
 * @property config
 * @property {Boolean} 	[config.autoReset=true] 	Check if auto-reset the badge when app is open.
 * @property {String} 	[config.driver="http"] 		The driver to use.
 * @property {Boolean} 	[config.useRouter=true]		When a notification with a `{url:""}` parameter is received, auto-route using the Router class.
 * @type {Object}
 */
exports.config = _.extend({
	autoReset: true,
	useRouter: true,
	driver: 'cloud',
}, Alloy.CFG.T ? Alloy.CFG.T.notifications : {});

var Event = require('T/event');
var Util = require('T/util');
var Router = require('T/router');

var wasInBackground = false;

// Driver loader
function load(name) {
	return require('T/notifications/'+name);
}

function onNotificationReceived(e) {
	e = e || {};
	Ti.API.debug("Notifications: Received", e);

	if (OS_ANDROID) {
		// When the app is in background, the type is !== 'callback'
		// So, we simply save the state wasInBackground and return because the notification.received event must NOT be triggered
		if (e.type !== 'callback') {
			wasInBackground = true;
			return;
		}

		// Reformat in iOS style
		if (e.payload != null) {
			e.data = Util.parseJSON(e.payload);
			_.extend(e.data, e.data.android);
		}
		e.inBackground = wasInBackground;
	}

	// Auto-reset the badge
	if (exports.config.autoReset) {
		exports.resetBadge();
	}

	// Router
	if (exports.config.useRouter) {
		if (e.inBackground) {
			if (e.data.url != null) {
				Router.go(e.data.url);
			}
		}
	}

	Event.trigger('notifications.received', e);
}

/**
 * @method event
 */
exports.event = function(name, cb) {
	Event.on('notifications.'+name, cb);
};

var subscribeFunction = null;
var unsubscribeFunction = null;

if (OS_IOS) {

	subscribeFunction = function(callback) {
		if (Util.getIOSVersion() >= 8) {

			var tmpSubscribe = function() {
				Ti.App.iOS.removeEventListener('usernotificationsettings', tmpSubscribe);
				Ti.Network.registerForPushNotifications({
					callback: onNotificationReceived,
					success: function(e) {
						Ti.API.debug('Notifications: Device token is <' + e.deviceToken + '>');
						callback(e.deviceToken);
					},
					error: function(err) {
						Ti.API.error('Notifications: Retrieve device token failed', err);
						Event.trigger('notifications.subscription.error', err);
					}
				});
			};

			Ti.App.iOS.addEventListener('usernotificationsettings',  tmpSubscribe);
			Ti.App.iOS.registerUserNotificationSettings({
				types: [ Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT, Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND, Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE ]
			});

		} else {

			Ti.Network.registerForPushNotifications({
				callback: onNotificationReceived,
				types: [ Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND ],
				success: function(e) {
					Ti.API.debug('Notifications: Device token is <' + e.deviceToken + '>');
					callback(e.deviceToken);
				},
				error: function(err) {
					Ti.API.error('Notifications: Retrieve device token failed', err);
					Event.trigger('notifications.subscription.error', err);
				},
			});
		}
	};

	unsubscribeFunction = function(){
		Ti.Network.unregisterForPushNotifications();
	};

} else if (OS_ANDROID) {

	var CloudPush = require('ti.cloudpush');
	CloudPush.debug = !ENV_PRODUCTION;
	CloudPush.showAppOnTrayClick = true;
	CloudPush.showTrayNotification = true;
	CloudPush.showTrayNotificationsWhenFocused = false;

	subscribeFunction = function(callback) {
		// add a series of callback on the same functions, and set values inset
		CloudPush.addEventListener('callback', onNotificationReceived);
		CloudPush.addEventListener('trayClickLaunchedApp', onNotificationReceived);
		CloudPush.addEventListener('trayClickFocusedApp', onNotificationReceived);

		CloudPush.retrieveDeviceToken({
			success: function(e) {
				Ti.API.debug('Notifications: Device token is <' + e.deviceToken + '>');
				callback(e.deviceToken);
			},
			error: function(e) {
				Ti.API.error('Notifications: Retrieve device token failed', e);
				Event.trigger('notifications.subscription.error', e);
			}
		});
	};

	unsubscribeFunction = function(){
		CloudPush.removeEventListener('callback', onNotificationReceived);
		CloudPush.removeEventListener('trayClickLaunchedApp', onNotificationReceived);
		CloudPush.removeEventListener('trayClickFocusedApp', onNotificationReceived);
	};

}


/**
 * @method subscribe
 * Subscribe for that channel
 * @param {String} channel 	Channel name
 * @param {Object} data 		Additional data
 */
exports.subscribe = function(channel, data) {
	subscribeFunction(function(deviceToken) {
		Ti.App.Properties.setString('notifications.token', deviceToken);

		load(exports.config.driver).subscribe({
			deviceToken: deviceToken,
			channel: channel,
			data: data,
			success: function(response) {
				Event.trigger('notifications.subscription.success', { channel: channel });
				Ti.API.debug('Notifications: Subscription to channel <' + channel + '> succeded', response);
			},
			error: function(err) {
				Event.trigger('notifications.subscription.error', err);
				Ti.API.error('Notifications: Subscription failed to channel <' + channel + '>', err);
			}
		});
	});
};


/**
 * @method unsubscribe
 * Unsubscribe for that channel
 * @param {String} channel 	Channel name
 * @param {Object} data 		Additional data
 */
exports.unsubscribe = function(channel, data) {
	var deviceToken = Ti.App.Properties.getString('notifications.token');
	if (_.isEmpty(deviceToken)) {
		Ti.API.error('Notifications: Error while getting deviceToken');
		return;
	}

	Ti.App.Properties.removeProperty('notifications.token');
	load(exports.config.driver).unsubscribe({
		deviceToken: deviceToken,
		channel: channel,
		data: data,
		success: function(response) {
			Event.trigger('notifications.unsubscription.error', { channel: channel });
			Ti.API.debug('Notifications: Unsubscription to channel <' + channel + '> succeded', response);
		},
		error: function(err) {
			Event.trigger('notifications.unsubscription.error', err);
			Ti.API.error('Notifications: Unsubscription failed to channel <' + channel + '>', err);
		}
	});
};


/**
 * @method setBadge
 * Set the App badge value
 * @param {Number} x
 */
exports.setBadge = function(x) {
	if (OS_IOS) {
		Ti.UI.iPhone.setAppBadge(Math.max(x,0));
	} else if (OS_ANDROID) {
		// TODO
	}
};

/**
 * @method getBadge
 * Get the App badge value
 * @return {Number}
 */
exports.getBadge = function() {
	if (OS_IOS) {
		return Ti.UI.iPhone.getAppBadge();
	} else if (OS_ANDROID) {
		// TODO
	}
};

/**
 * @method resetBadge
 * Reset to 0 the badge
 */
exports.resetBadge = function() {
	exports.setBadge(0);
};

/**
 * @method incBadge
 * Increment the badge app
 * @param  {Number} i The value to increment
 */
exports.incBadge = function(i) {
	exports.setBadge(exports.getBadge() + i);
};


/*
Init
*/

if (exports.config.autoReset) {
	exports.resetBadge();
	Ti.App.addEventListener('resumed', exports.resetBadge);
}
