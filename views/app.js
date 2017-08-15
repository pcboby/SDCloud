define([
    "views/layout/header",
    "views/layout/silder",
    "views/layout/breadcrumb",
    "views/layout/wraper",
    "views/layout/footer",
], function(header, silder, breadcrumb, wraper, footer) {

    var layout = {
        rows: [
            header,
            {
                cols: [
                    silder,
                    {
                        rows: [
                            breadcrumb,
                            wraper
                        ]
                    }
                ]
            },
            footer
        ]
    };

    return {
        $ui: layout,
        $menu: "app:menu",
        $oninit: function(view, scope) {}
    };

});