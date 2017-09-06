define([],
    function() {

        //请求之前执行
        webix.attachEvent("onBeforeAjax", function(mode, url, data, request, headers, files, promise) {
            headers["Content-type"] = "application/json";
        });
        //请求出错时执行
        webix.attachEvent('onAjaxError', function(request) {});
        //错误数据时执行
        webix.attachEvent('onLoadError', function(text, xml, xhttp, obj) {});

        webix.ajax._callback = webix.ajax.$callback;
        webix.ajax.$callback = function(owner, call, text, data, x, isError) {
            if (text.indexOf('errorCode') > -1) {
                switch (data.json().errorCode) {
                    case '0000002':
                        webix.alert({
                            title: '友情提示',
                            width: 380,
                            text: '您的登录信息已经失效！点击确定后将重新登录〜',
                            callback: function() {
                                alert('toLogin~');
                            }
                        });
                        break;
                    case '0000004':
                        webix.alert({
                            title: '友情提示',
                            width: 380,
                            text: '服务端请求出错了，请稍候刷新页面〜'
                        });
                        break;
                }
            } else {
                webix.ajax._callback(owner, call, text, data, x, isError);
            }
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