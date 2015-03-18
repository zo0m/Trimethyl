Ext.data.JsonP.Router({"tagname":"class","name":"Router","autodetected":{},"files":[{"filename":"router.js","href":"router.html#Router"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"config","tagname":"property","owner":"Router","id":"property-config","meta":{}},{"name":"currentRoute","tagname":"property","owner":"Router","id":"property-currentRoute","meta":{}},{"name":"currentUrl","tagname":"property","owner":"Router","id":"property-currentUrl","meta":{}},{"name":"stack","tagname":"property","owner":"Router","id":"property-stack","meta":{}},{"name":"alias","tagname":"method","owner":"Router","id":"method-alias","meta":{}},{"name":"autoMapModel","tagname":"method","owner":"Router","id":"method-autoMapModel","meta":{}},{"name":"dispatch","tagname":"method","owner":"Router","id":"method-dispatch","meta":{}},{"name":"go","tagname":"method","owner":"Router","id":"method-go","meta":{}},{"name":"on","tagname":"method","owner":"Router","id":"method-on","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Router","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/router.html#Router' target='_blank'>router.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-config' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/router.html#Router-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<ul><li><span class='pre'>protocol</span> : String<div class='sub-desc'><p>Force all protocol different from this to be discarded</p>\n</div></li></ul></div></div></div><div id='property-currentRoute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/router.html#Router-property-currentRoute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-property-currentRoute' class='name expandable'>currentRoute</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>@properties currentRoute\nLatest Route (not URL) dispatched</p>\n</div><div class='long'><p>@properties currentRoute\nLatest Route (not URL) dispatched</p>\n</div></div></div><div id='property-currentUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/router.html#Router-property-currentUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-property-currentUrl' class='name expandable'>currentUrl</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>@properties currentUrl\nLatest URL dispatched</p>\n</div><div class='long'><p>@properties currentUrl\nLatest URL dispatched</p>\n</div></div></div><div id='property-stack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/router.html#Router-property-stack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-property-stack' class='name expandable'>stack</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>@properties stack\nAll routes in a stack ...</div><div class='long'><p>@properties stack\nAll routes in a stack</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-alias' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/router.html#Router-method-alias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-alias' class='name expandable'>alias</a>( <span class='pre'>url, newUrl</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Make an alias route ...</div><div class='long'><p>Make an alias route</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>newUrl</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-autoMapModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/router.html#Router-method-autoMapModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-autoMapModel' class='name expandable'>autoMapModel</a>( <span class='pre'>single, [plural]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Create the routes for a model ...</div><div class='long'><p>Create the routes for a model</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>single</span> : String<div class='sub-desc'><p>The name for the model</p>\n</div></li><li><span class='pre'>plural</span> : String (optional)<div class='sub-desc'><p>The name for the model, plural.</p>\n</div></li></ul></div></div></div><div id='method-dispatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/router.html#Router-method-dispatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-dispatch' class='name expandable'>dispatch</a>( <span class='pre'>url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Dispatch the router\n\nThis function call the defined function with Router.on\n\nThe param this represents an XCallback-U...</div><div class='long'><p>Dispatch the router</p>\n\n<p>This function call the defined function with <code><a href=\"#!/api/Router-method-on\" rel=\"Router-method-on\" class=\"docClass\">Router.on</a></code></p>\n\n<p>The param <code>this</code> represents an XCallback-URL Object for selected route.</p>\n\n<p>See https://github.com/FokkeZB/UTiL/blob/master/XCallbackURL/XCallbackURL.js for more details.</p>\n\n<p>The arguments passed are the matches for your regex definition (if present)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The route</p>\n\n</div></li></ul></div></div></div><div id='method-go' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/router.html#Router-method-go' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-go' class='name expandable'>go</a>( <span class='pre'>url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for dispatch ...</div><div class='long'><p>Alias for <a href=\"#!/api/Router-method-dispatch\" rel=\"Router-method-dispatch\" class=\"docClass\">dispatch</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The route</p>\n\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/router.html#Router-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-on' class='name expandable'>on</a>( <span class='pre'>key, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Register a route with defined callbacks ...</div><div class='long'><p>Register a route with defined callbacks</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'><p>The route name.\nIt can be:</p>\n\n<ul>\n<li><code>String</code>: (exact route match)</li>\n<li><code>RegExp</code>: is evaluated with the argument and the matches are passed to the callback</li>\n<li><code>Function</code>: must return a <code>non-undefined</code> value to be executed. That value is passed to the callback</li>\n</ul>\n\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});