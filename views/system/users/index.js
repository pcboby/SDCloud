define([
    "tpls/model.pager",
    "tpls/model.export",
    "./index.add",
    "models/orders"
], function(pager, exports, userAdd, datas) {


    var search = [{
        padding: 10,
        elementsConfig: { labelWidth: 100, labelAlign: "right" },
        view: "form",
        id: "userSearch",
        elements: [{
                cols: [{
                        view: "combo",
                        name: "product",
                        label: "Product",
                        options: [
                            { id: 1, value: "Webix Chai" },
                            { id: 2, value: "Webix Syrup" },
                            { id: 3, value: "Webix Cajun Seasoning" },
                            { id: 4, value: "Webix Olive Oil" },
                            { id: 5, value: "Webix Boysenberry Spread" },
                            { id: 6, value: "Webix Dried Pears" },
                            { id: 7, value: "Webix Curry Sauce" },
                            { id: 8, value: "Webix Walnuts" },
                            { id: 9, value: "Webix Fruit Cocktail" },
                            { id: 10, value: "Webix Chocolate Biscuits Mix" },
                            { id: 11, value: "Webix Marmalade" },
                            { id: 12, value: "Webix Scones" },
                            { id: 13, value: "Webix Beer" },
                            { id: 14, value: "Webix Crab Meat" },
                            { id: 15, value: "Webix Clam Chowder" },
                            { id: 16, value: "Webix Coffee" },
                            { id: 17, value: "Webix Chocolate" }
                        ]
                    },
                    {
                        view: "combo",
                        name: "shipment",
                        label: "Shipping Company",
                        options: ["Shipping A",
                            "Shipping B",
                            "Shipping C",
                            "Shipping D",
                            "Shipping E",
                            "Shipping F",
                            "Shipping G"
                        ]
                    },
                    {
                        view: "datepicker",
                        label: "Order Date",
                        value: new Date(),
                        format: "%d  %M %Y"
                    }
                ]
            },
            {
                margin: 10,
                cols: [
                    {},
                    {
                        view: "button",
                        label: "Search",
                        type: "form",
                        align: "center",
                        width: 120,
                        click: function() {}
                    },
                    {
                        view: "button",
                        label: "Reset",
                        align: "center",
                        width: 120,
                        click: function() {}
                    },
                    {}
                ]
            }

        ]
    }]
    var btns = [{
            view: "button",
            type: "iconButton",
            icon: "plus",
            label: "Add",
            autowidth: true,
            click: function() {
                this.$scope.ui(userAdd.$ui).show();
            }
        },
        {
            view: "button",
            type: "iconButton",
            icon: "external-link",
            label: "Export",
            autowidth: true,
            popup: exports
        },
        {},
        {
            view: "richselect",
            id: "user_filter",
            value: "all",
            maxWidth: 400,
            minWidth: 250,
            vertical: true,
            labelWidth: 100,
            options: [
                { id: "all", value: "All" },
                { id: "new", value: "Need Invoicing" },
                { id: "ready", value: "Ready to Ship" },
                { id: "completed", value: "Completed" },
                { id: "cancelled", value: "Cancelled" }
            ],
            label: "Filter orders",
            on: {
                onChange: function() {
                    var val = this.getValue();
                    if (val == "all")
                        $$("orderData").filter("#status#", "");
                    else
                        $$("orderData").filter("#status#", val);
                }
            }
        }
    ];

    var grid = {
        margin: 10,
        rows: [{
            id: "userList",
            view: "datatable",
            leftSplit: 2,
            select: true,
            columns: [
                { id: "id", header: "#", width: 50 },
                { id: "trash", header: "Operation", width: 120, template: "<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>" },
                { id: "employee", header: ["Employee", { content: "selectFilter" }], sort: "string", minWidth: 150, fillspace: 1 },
                { id: "customer", header: ["Customer", { content: "selectFilter" }], sort: "string", minWidth: 150, fillspace: 1 },

                { id: "status", header: "Status", sort: "string", width: 90 },
                { id: "fee", header: "Fee", width: 90, sort: "string", format: webix.i18n.priceFormat },
                { id: "taxes", header: "Taxes", width: 90, sort: "string", format: webix.i18n.priceFormat },
                { id: "total", header: "Total", width: 90, sort: "string", format: webix.i18n.priceFormat },
                { id: "shipping_company", header: "Shipping Company", sort: "string" },
                { id: "payment_method", header: "Payment method", width: 130, sort: "string" },
                { id: "date", header: "Date", sort: "string", width: 100 }
            ],
            "export": true,
            on: {
                onAfterLoad: function() {
                    this.select(4);
                }
            },
            pager: "pager",
            data: datas.getAll,
            onClick: {
                webix_icon: function(e, id, node) {
                    webix.confirm({
                        text: "The order will be deleted.<br/> Are you sure?",
                        ok: "Yes",
                        cancel: "Cancel",
                        callback: function(res) {
                            if (res) {
                                webix.$$("orderData").remove(id);
                            }
                        }
                    });
                }
            }
        }]

    };


    var layout = {
        type: "space",
        rows: [{
                rows: search
            }, {
                height: 40,
                cols: btns
            },
            {
                rows: [grid, pager]
            }



        ]

    };

    return {
        $ui: layout
    };

});