/**
 * @class  	Dialog
 * @author  Flavio De Stefano <flavio.destefano@caffeinalab.com>
 *
 * The `dict` arguments must be in the form:
 *
 * ```javascript
 * [
 * 	{ title: 'Option one', selected: true, callback: function(){ ... } },
 * 	{ title: 'Option two', callback: function(){ ... } },
 * 	{ title: 'Cancel', cancel: true },
 * 	...
 * ]
 * ```
 */


function parseDict(dict) {
	return {
		cancel: _.indexOf(dict, _.findWhere(dict, { cancel: true })),
		selectIndex: _.indexOf(dict, _.findWhere(dict, { selected: true })),
		destructive: _.indexOf(dict, _.findWhere(dict, { destructive: true })),
	};
}


function onClickDict(e, dict, dialog) {
	if (OS_IOS && e.index == e.source.cancel) return;
	if (OS_ANDROID && e.cancel === true) return;

	var d = dict[+e.index];
	if (d != null && _.isFunction(d.callback)) {
		d.callback.call(dialog, e);
	}
}


/**
 * @method alert
 * Create and show an Alert Dialog
 *
 * @param  {String}  	title    		The title
 * @param  {String}   	message    		The message
 * @param  {Function} 	[callback] 		The callback to invokie when clicking **OK**
 * @param  {Object}	 	ext 				Extends the `AlertDialog`
 * @return {Ti.UI.AlertDialog}
 */
function dialogAlert(title, message, callback, ext) {
	if (OS_ANDROID && title == null) title = Ti.App.name;

	var dialog = Ti.UI.createAlertDialog(_.extend({
		title: title,
		message: message,
		ok: L('OK')
	}, ext));

	if (_.isFunction(callback)) {
		dialog.addEventListener('click', callback);
	}

	dialog.show();
	return dialog;
}
exports.alert = dialogAlert;


/**
 * @method confirm
 * Create and show a confirm dialog
 *
 * @param  {String}   		title       	The title
 * @param  {String}   		message        The message
 * @param  {Dictonary}    	dict     		Buttons as Dictonary
 * @param  {Object}			ext 				Extends the `AlertDialog`
 * @return {Ti.UI.AlertDialog}
 */
function dialogConfirm(title, message, dict, ext) {
	var dialog = Ti.UI.createAlertDialog(_.extend(parseDict(dict), {
		buttonNames: _.pluck(dict, 'title'),
		title: title,
		message: message
	}, ext));

	dialog.addEventListener('click', function(e) {
		onClickDict(e, dict, dialog);
	});

	dialog.show();
	return dialog;
}
exports.confirm = dialogConfirm;


/**
 * @method option
 * Create and show an Option Dialog
 *
 * @param  {Dictonary}    	dict     		Buttons as Dictonary
 * @param  {Object}			ext 				Extends the `AlertDialog`
 * @return {Ti.UI.AlertDialog}
 */
function dialogOption(dict, ext) {
	var dialog = Ti.UI.createOptionDialog(_.extend(parseDict(dict), {
		options: _.pluck(dict, 'title'),
	}, ext));

	dialog.addEventListener('click', function(e) {
		onClickDict(e, dict, dialog);
	});

	dialog.show();
	return dialog;
}
exports.option = dialogOption;


/**
 * @method confirmYes
 * Create and show a confirm dialog with *Cancel* and *Yes* button.
 *
 * @param  {String}   title 				The title
 * @param  {String}   message   			The message
 * @param  {Function} [callback]    	The callback to invoke when clicking *Yes*.
 * @param  {String}   [buttonTitle]		Alternative title for *Yes*.
 * @return {Ti.UI.AlertDialog}
 */
function confirmYes(title, message, callback, buttonTitle) {
	return dialogConfirm(title, message, [
	{
		title: L('Cancel'),
		cancel: true
	},
	{
		title: buttonTitle || L('Yes'),
		callback: callback,
		selected: true
	}
	]);
}
exports.confirmYes = confirmYes;


/**
 * @method prompt
 * Create a prompt dialog.
 *
 * @param  {String}   title 				The title
 * @param  {String}   message   			The message
 * @param  {Function} [callback]    	The callback to invoke when clicking *Yes*.
 * @return {Ti.UI.AlertDialog}
 */
function dialogPrompt(title, message, dict) {
	if (OS_IOS) {
		return dialogConfirm(title, message, dict, {
			style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT
		});
	} else if (OS_ANDROID) {
		_.each(dict, function(d) {
			if (d.cancel === true || d.callback == null) return;
			d._origCallback = d.callback;
			d.callback = function(e) {
				_.extend(e, { text: this.androidView.value });
				d._origCallback.call(this, e);
			};
		});
		return dialogConfirm(title, message, dict, {
			androidView: Ti.UI.createTextField()
		});
	}
}
exports.prompt = dialogPrompt;
