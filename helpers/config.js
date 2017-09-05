define(function() {

    //请求之前执行
    webix.attachEvent("onBeforeAjax", function(mode, url, data, request, headers, files, promise) {
        headers["Content-type"] = "application/json";
    });
    //请求出错时执行
    webix.attachEvent('onAjaxError', function(request) {});
    //错误数据时执行
    webix.attachEvent('onLoadError', function(text, xml, xhttp, obj) {});

    webix.ajax.$callback = function(owner, call, text, data, x, isError) {
        console.log('isCallBack')
    };

    var config = {
        id: 'SDCloud',
        name: 'SDCloud Admin',
        version: '1.0.0',
        defaultLang: 'en-US', //en-US,zh-CN
        defaultTheme: 'siberia:webix',
        debug: true,
        start: '/app/desktop.dashboard'
    };
    return config;
});