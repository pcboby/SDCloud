/*
	App configuration
*/

define([
    "libs/core",
    "helpers/config",
    "helpers/menu",
    "helpers/locale"
], function(core, config, menu, locale) {


    //webix.codebase = "libs/webix/";
    //CKEditor requires full path
    webix.codebase = document.location.href.split("#")[0].replace("index.html", "") + "libs/webix/";

    if (!webix.env.touch && webix.ui.scrollSize && webix.CustomScroll)
        webix.CustomScroll.init();


    //configuration
    var app = core.create(config);

    app.use(locale);
    app.use(menu);

    return app;
});