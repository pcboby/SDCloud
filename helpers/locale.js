define([], function() {

    var default_lang = "",
        current_lang = "";
    var key = ":lang";

    function _get_lang() {

        return webix.storage.local.get(key) || default_lang;
    }

    function _set_lang(lang, init) {
        webix.storage.local.put(key, lang);
        webix.i18n.setLocale(lang);
        if (current_lang != lang) {
            document.location.reload();
        }
    }

    function create_locale(lang) {
        current_lang = lang;
        _set_lang(lang);
    }

    return {
        $oninit: function(app, config) {
            key = (app.config.id || "") + key;

            default_lang = app.config.defaultLang;
            var lang = _get_lang();

            create_locale(lang);
        },
        setLang: _set_lang,
        getLang: _get_lang,
        isNow: function(val) { return val == _get_lang(); }
    };
});