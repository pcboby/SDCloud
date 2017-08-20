define(function() {

    return {
        $ui: {
            view: "toolbar",
            css: "highlighted_header header6",
            paddingX: 5,
            paddingY: 5,
            height: 40,
            cols: [{
                    view: "pager",
                    id: "pagation",
                    template: "{common.first()}{common.prev()}&nbsp; {common.pages()}&nbsp; {common.next()}{common.last()}",
                    // autosize: true,
                    height: 35,
                    group: 5
                }

            ]
        }
    };

});