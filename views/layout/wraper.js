define(function() {

    return {
        $ui: {
            view: "scrollview",
            scroll: "native-y",
            body: { cols: [{ $subview: true }] }
        }
    };

});