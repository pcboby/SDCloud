define([
        "helpers/locale",
        "views/menus/search",
        "views/menus/mail",
        "views/menus/message",
        "views/menus/profile",
        "views/webix/icon"
    ],
    function(locale,
        search,
        mail,
        message,
        profile) {

        return {
            $ui: {
                view: "toolbar",

                elements: [{
                        view: "label",
                        label: "<a href='./'><img class='photo' src='assets/imgs/logo.png' /></a>",
                        width: 200
                    },
                    {
                        view: "richselect",
                        height: 32,
                        css: "header_project",
                        label: 'Project:',
                        labelAlign: "right",
                        value: "SDCloud",
                        options: ["SDCloud"]
                    },
                    {},
                    {
                        view: "richselect",
                        borderless: true,
                        css: "header_lang",
                        value: locale.getLang(),
                        options: ["zh-CN", "en-US"],
                        width: 96,
                        on: {
                            onChange: function() {
                                var val = this.getValue();
                                locale.setLang(val);
                            }
                        }
                    },
                    {
                        view: "icon",
                        icon: "envelope-o",
                        value: 3,
                        width: 45,
                        popup: "mailPopup"
                    },
                    {
                        view: "icon",
                        icon: "comments-o",
                        value: 5,
                        width: 45,
                        popup: "messagePopup"
                    },
                    {
                        height: 46,
                        id: "person_template",
                        css: "header_person",
                        borderless: true,

                        width: 180,
                        data: {
                            id: 2,
                            name: "Oliver Parr"
                        },
                        template: function(obj) {
                            var html = "<div style='height:100%;width:100%;' onclick='webix.$$(\"profilePopup\").show(this)'>";
                            html += "<img class='photo' src='assets/imgs/photos/" + obj.id + ".png' /><span class='name'>" + obj.name + "</span>";
                            html += "<span class='webix_icon fa-angle-down'></span></div>";
                            return html;
                        }
                    }
                ]
            },
            $oninit: function(view,
                scope) {
                scope.ui(search.$ui);
                scope.ui(mail.$ui);
                scope.ui(message.$ui);
                scope.ui(profile.$ui);

            }
        };

    });