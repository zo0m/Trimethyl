Ext.data.JsonP.Util({"tagname":"class","name":"Util","autodetected":{},"files":[{"filename":"util.js","href":"util.html#Util"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"buildQuery","tagname":"method","owner":"Util","id":"method-buildQuery","meta":{}},{"name":"bytesForHumans","tagname":"method","owner":"Util","id":"method-bytesForHumans","meta":{}},{"name":"dialog","tagname":"method","owner":"Util","id":"method-dialog","meta":{}},{"name":"errorAlert","tagname":"method","owner":"Util","id":"method-errorAlert","meta":{}},{"name":"facebookGraphWithAppToken","tagname":"method","owner":"Util","id":"method-facebookGraphWithAppToken","meta":{}},{"name":"fromNow","tagname":"method","owner":"Util","id":"method-fromNow","meta":{}},{"name":"getAppDataDirectory","tagname":"method","owner":"Util","id":"method-getAppDataDirectory","meta":{}},{"name":"getDatabaseDirectoryName","tagname":"method","owner":"Util","id":"method-getDatabaseDirectoryName","meta":{}},{"name":"getDomainFromURL","tagname":"method","owner":"Util","id":"method-getDomainFromURL","meta":{}},{"name":"getErrorMessage","tagname":"method","owner":"Util","id":"method-getErrorMessage","meta":{}},{"name":"getFacebookAvatar","tagname":"method","owner":"Util","id":"method-getFacebookAvatar","meta":{}},{"name":"getIOSVersion","tagname":"method","owner":"Util","id":"method-getIOSVersion","meta":{}},{"name":"hashJavascriptObject","tagname":"method","owner":"Util","id":"method-hashJavascriptObject","meta":{}},{"name":"isIOS6","tagname":"method","owner":"Util","id":"method-isIOS6","meta":{}},{"name":"isIOS7","tagname":"method","owner":"Util","id":"method-isIOS7","meta":{}},{"name":"isIOS8","tagname":"method","owner":"Util","id":"method-isIOS8","meta":{}},{"name":"now","tagname":"method","owner":"Util","id":"method-now","meta":{}},{"name":"openFacebookProfile","tagname":"method","owner":"Util","id":"method-openFacebookProfile","meta":{}},{"name":"openInStore","tagname":"method","owner":"Util","id":"method-openInStore","meta":{}},{"name":"openTwitterProfile","tagname":"method","owner":"Util","id":"method-openTwitterProfile","meta":{}},{"name":"openTwitterStatus","tagname":"method","owner":"Util","id":"method-openTwitterStatus","meta":{}},{"name":"openURL","tagname":"method","owner":"Util","id":"method-openURL","meta":{}},{"name":"parseAsXCallbackURL","tagname":"method","owner":"Util","id":"method-parseAsXCallbackURL","meta":{}},{"name":"parseJSON","tagname":"method","owner":"Util","id":"method-parseJSON","meta":{}},{"name":"parseSchema","tagname":"method","owner":"Util","id":"method-parseSchema","meta":{}},{"name":"requireOrNull","tagname":"method","owner":"Util","id":"method-requireOrNull","meta":{}},{"name":"startActivity","tagname":"method","owner":"Util","id":"method-startActivity","meta":{}},{"name":"timestamp","tagname":"method","owner":"Util","id":"method-timestamp","meta":{}},{"name":"timestampForHumans","tagname":"method","owner":"Util","id":"method-timestampForHumans","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Util","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/util.html#Util' target='_blank'>util.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-buildQuery' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-buildQuery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-buildQuery' class='name expandable'>buildQuery</a>( <span class='pre'>obj, prepend</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Generate URL-encoded query string. ...</div><div class='long'><p>Generate URL-encoded query string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>Object key-value to parse.</p>\n</div></li><li><span class='pre'>prepend</span> : String<div class='sub-desc'><p>The prepended char</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bytesForHumans' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-bytesForHumans' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-bytesForHumans' class='name expandable'>bytesForHumans</a>( <span class='pre'>bytes</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get a human representation of bytes ...</div><div class='long'><p>Get a human representation of bytes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bytes</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-dialog' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-dialog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-dialog' class='name expandable'>dialog</a>( <span class='pre'>tel</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Dial a number. ...</div><div class='long'><p>Dial a number.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tel</span> : String<div class='sub-desc'><p>The number to call.</p>\n</div></li></ul></div></div></div><div id='method-errorAlert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-errorAlert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-errorAlert' class='name expandable'>errorAlert</a>( <span class='pre'>err, [callback]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>err</span> : Object<div class='sub-desc'><p>The object error</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>The callback</p>\n</div></li></ul></div></div></div><div id='method-facebookGraphWithAppToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-facebookGraphWithAppToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-facebookGraphWithAppToken' class='name expandable'>facebookGraphWithAppToken</a>( <span class='pre'>path, object, opt, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Call the graph using app token. ...</div><div class='long'><p>Call the graph using app token.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : String<div class='sub-desc'><p>The path for the open graph request.</p>\n</div></li><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The data for the open graph request.</p>\n</div></li><li><span class='pre'>opt</span> : Object<div class='sub-desc'><p>The options.\nRequired options are:\n* <strong>appid</strong>: Application ID\n* <strong>appsecret</strong>: Application secret\n* <strong>[expire]</strong>: Cache the request for specified seconds.\n* <strong>[error]</strong>: Error callback</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li></ul></div></div></div><div id='method-fromNow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-fromNow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-fromNow' class='name expandable'>fromNow</a>( <span class='pre'>[t]</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the UNIX timestamp from now with delay expressed in seconds. ...</div><div class='long'><p>Get the UNIX timestamp from now with delay expressed in seconds.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>t</span> : Number (optional)<div class='sub-desc'><p>Seconds from now.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAppDataDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-getAppDataDirectory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-getAppDataDirectory' class='name expandable'>getAppDataDirectory</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the app-data directory. ...</div><div class='long'><p>Return the app-data directory.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDatabaseDirectoryName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-getDatabaseDirectoryName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-getDatabaseDirectoryName' class='name expandable'>getDatabaseDirectoryName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the private documents directory ...</div><div class='long'><p>Get the private documents directory</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDomainFromURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-getDomainFromURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-getDomainFromURL' class='name expandable'>getDomainFromURL</a>( <span class='pre'>url</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the clean domain of an URL ...</div><div class='long'><p>Return the clean domain of an URL</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The URL to parse</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Clean domain</p>\n</div></li></ul></div></div></div><div id='method-getErrorMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-getErrorMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-getErrorMessage' class='name expandable'>getErrorMessage</a>( <span class='pre'>obj</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>An error parser that parse a String/Object ...</div><div class='long'><p>An error parser that parse a String/Object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getFacebookAvatar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-getFacebookAvatar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-getFacebookAvatar' class='name expandable'>getFacebookAvatar</a>( <span class='pre'>fbid, [w], [h]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the Facebook avatar from the graph ...</div><div class='long'><p>Get the Facebook avatar from the graph</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fbid</span> : String<div class='sub-desc'><p>Facebook ID</p>\n</div></li><li><span class='pre'>w</span> : Number (optional)<div class='sub-desc'><p>Width</p>\n</div></li><li><span class='pre'>h</span> : Number (optional)<div class='sub-desc'><p>Height</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The open graph url pointing to the image</p>\n</div></li></ul></div></div></div><div id='method-getIOSVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-getIOSVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-getIOSVersion' class='name expandable'>getIOSVersion</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the iOS major version ...</div><div class='long'><p>Return the iOS major version</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hashJavascriptObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-hashJavascriptObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-hashJavascriptObject' class='name expandable'>hashJavascriptObject</a>( <span class='pre'>obj</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the seralized representation of any JS object. ...</div><div class='long'><p>Return the seralized representation of any JS object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The hash</p>\n</div></li></ul></div></div></div><div id='method-isIOS6' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-isIOS6' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-isIOS6' class='name expandable'>isIOS6</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if is iOS 6 ...</div><div class='long'><p>Check if is iOS 6</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isIOS7' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-isIOS7' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-isIOS7' class='name expandable'>isIOS7</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if is iOS 7 ...</div><div class='long'><p>Check if is iOS 7</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isIOS8' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-isIOS8' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-isIOS8' class='name expandable'>isIOS8</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if is iOS 8 ...</div><div class='long'><p>Check if is iOS 8</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-now' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-now' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-now' class='name expandable'>now</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current UNIX timestamp. ...</div><div class='long'><p>Get the current UNIX timestamp.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-openFacebookProfile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-openFacebookProfile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-openFacebookProfile' class='name expandable'>openFacebookProfile</a>( <span class='pre'>fbid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Open a Facebook profile in the Facebook application ...</div><div class='long'><p>Open a Facebook profile in the Facebook application</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fbid</span> : String<div class='sub-desc'><p>Facebook ID</p>\n</div></li></ul></div></div></div><div id='method-openInStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-openInStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-openInStore' class='name expandable'>openInStore</a>( <span class='pre'>appid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Open the iTunes Store or Google Play Store of specified appid ...</div><div class='long'><p>Open the iTunes Store or Google Play Store of specified appid</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>appid</span> : String<div class='sub-desc'><p>Application ID</p>\n</div></li></ul></div></div></div><div id='method-openTwitterProfile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-openTwitterProfile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-openTwitterProfile' class='name expandable'>openTwitterProfile</a>( <span class='pre'>twid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Open a Twitter profile in the Twitter application ...</div><div class='long'><p>Open a Twitter profile in the Twitter application</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>twid</span> : String<div class='sub-desc'><p>Twitter screen name</p>\n</div></li></ul></div></div></div><div id='method-openTwitterStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-openTwitterStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-openTwitterStatus' class='name expandable'>openTwitterStatus</a>( <span class='pre'>userid, statusid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Open a Twitter status in the Twitter application ...</div><div class='long'><p>Open a Twitter status in the Twitter application</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userid</span> : String<div class='sub-desc'><p>The user id</p>\n</div></li><li><span class='pre'>statusid</span> : String<div class='sub-desc'><p>The status id</p>\n</div></li></ul></div></div></div><div id='method-openURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-openURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-openURL' class='name expandable'>openURL</a>( <span class='pre'>url, [fallback], [error]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Try to open the URL with Ti.Platform.openURL, catching errors. ...</div><div class='long'><p>Try to open the URL with <code>Ti.Platform.openURL</code>, catching errors.</p>\n\n<p>If can't open the primary argument (url), open the fallback.</p>\n\n<p>If can't open the fallback, and <code>error</code> is set, show the error dialog.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The URL to open</p>\n</div></li><li><span class='pre'>fallback</span> : String|Function (optional)<div class='sub-desc'><p>If is a string, try to open the URL. If is a functions, call it.</p>\n</div></li><li><span class='pre'>error</span> : String (optional)<div class='sub-desc'><p>The error to show</p>\n</div></li></ul></div></div></div><div id='method-parseAsXCallbackURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-parseAsXCallbackURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-parseAsXCallbackURL' class='name expandable'>parseAsXCallbackURL</a>( <span class='pre'>url</span> ) : XCallbackURL<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The URL to parse</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>XCallbackURL</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseJSON' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-parseJSON' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-parseJSON' class='name expandable'>parseJSON</a>( <span class='pre'>json</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Try to parse a JSON, and silently fail on error, returning a null in this case. ...</div><div class='long'><p>Try to parse a JSON, and silently fail on error, returning a <code>null</code> in this case.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>json</span> : String<div class='sub-desc'><p>The JSON to parse.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseSchema' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-parseSchema' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-parseSchema' class='name expandable'>parseSchema</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Parse the initial arguments URL schema ...</div><div class='long'><p>Parse the initial arguments URL schema</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-requireOrNull' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-requireOrNull' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-requireOrNull' class='name expandable'>requireOrNull</a>( <span class='pre'>name</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Require a module, or return a null object ...</div><div class='long'><p>Require a module, or return a null object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-startActivity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-startActivity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-startActivity' class='name expandable'>startActivity</a>( <span class='pre'>opt, [error]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Valid only on Android, start the activity catching any possible errors. ...</div><div class='long'><p>Valid only on Android, start the activity catching any possible errors.</p>\n\n<p>If <code>error</code> is provided, show the error dialog with this message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>opt</span> : Object<div class='sub-desc'><p>Options for <code>createIntent(...)</code></p>\n</div></li><li><span class='pre'>error</span> : String (optional)<div class='sub-desc'><p>Error message</p>\n</div></li></ul></div></div></div><div id='method-timestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-timestamp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-timestamp' class='name expandable'>timestamp</a>( <span class='pre'>[arg]</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the UNIX timestamp. ...</div><div class='long'><p>Get the UNIX timestamp.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arg</span> : Object (optional)<div class='sub-desc'><p>The date to parse.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-timestampForHumans' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-timestampForHumans' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-timestampForHumans' class='name expandable'>timestampForHumans</a>( <span class='pre'>ts</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return in human readable format a timestamp ...</div><div class='long'><p>Return in human readable format a timestamp</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ts</span> : Number<div class='sub-desc'><p>The timestamp</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});