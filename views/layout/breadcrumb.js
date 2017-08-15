define(function() {

    return {
        $ui: {
            height: 49,
            id: "title",
            css: "title",
            template: "<div class='header'>#title#</div><div class='details'>( #details# )</div>",
            data: {
                text: "",
                title: ""
            }
        }
    };

});