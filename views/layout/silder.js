define([
    "views/webix/menutree"
], function() {

    return {
        $ui: {
            width: 200,

            rows: [{
                view: "tree",
                id: "app:menu",
                type: "menuTree2",
                css: "menu",
                activeTitle: true,
                select: true,
                tooltip: {
                    template: function(obj) {
                        return obj.$count ? "" : obj.details;
                    }
                },
                on: {
                    onBeforeSelect: function(id) {
                        if (this.getItem(id).$count) {
                            // debugger;
                            return false;
                        }

                    },
                    onAfterSelect: function(id) {
                        this.$scope.show("./" + id);
                        var item = this.getItem(id);
                        webix.$$("title").parse({ title: item.value, details: item.details });
                    }
                },
                data: [{
                    id: "desktop",
                    value: "Desktop",
                    open: true,
                    data: [
                        { id: "desktop.dashboard", value: "Dashboard", icon: "home", $css: "dashboard", details: "reports and statistics" },
                    ]
                }, {
                    id: "system",
                    value: "System",
                    open: true,
                    data: [
                        { id: "system.users.index", value: "Users", icon: "check-square-o", $css: "users", details: "users manager" },
                        { id: "system.roles.index", value: "Roles", icon: "check-square-o", $css: "roles", details: "roles manager" }
                    ]
                }, {
                    id: "config",
                    open: true,
                    value: "Config",
                    data: [
                        { id: "i18n", value: "I18n", icon: "check-square-o", $css: "i18n", details: "i18n manager" }
                    ]
                }, {
                    id: "uis",
                    value: "UI Examples",
                    open: 1,
                    data: [
                        { id: "uis.orders", value: "Orders", icon: "check-square-o", $css: "orders", details: "order reports and editing" },
                        { id: "uis.products", value: "Products", icon: "cube", $css: "products", details: "all products" },
                        { id: "uis.product_edit", value: "Product Edit", icon: "pencil-square-o", details: "changing product data" },
                        { id: "uis.datatables", value: "Datatables", icon: "table", details: "datatable examples" },
                        { id: "uis.charts", value: "Charts", icon: "bar-chart-o", details: "charts examples" },
                        { id: "uis.forms", value: "Forms", icon: "list-alt", details: "forms examples" },
                        { id: "uis.calendar", value: "My Calendar", icon: "calendar", details: "calendar example" },
                        { id: "uis.files", value: "File Manager", icon: "folder-open-o", details: "file manager example" }

                    ]
                }]
            }]
        }
    };

});