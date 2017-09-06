define([], function() {
    'use strict';
    var version = "@VERSION", //版本
        environment = "@ENVIRONMENT"; //发布环境

    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

        // Matches dashed string for camelizing
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g;

    (function(obj, prototype) {
        if (obj in window) {
            throw new Error(obj.concat('allready'));
        }
        Object.defineProperty(window, obj, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: prototype
        });
    })('Untils', {
        isReady: true,
        version: version,
        environment: environment,
        error: function(msg) {
            throw new Error(msg);
        },
        getter: function(attr) {},
        setter: function(attr) {},
        isFunction: function(obj) {
            return typeof obj === "function" && typeof obj.nodeType !== "number";
        },

        isNumeric: function(obj) {
            var type = Untils.type(obj);
            return (type === "number" || type === "string") &&
                !isNaN(obj - parseFloat(obj));
        },

        isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
                return false;
            }

            proto = getProto(obj);

            if (!proto) {
                return true;
            }

            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },

        isEmptyObject: function(obj) {

            /* eslint-disable no-unused-vars */
            // See https://github.com/eslint/eslint/issues/6125
            var name;

            for (name in obj) {
                return false;
            }
            return true;
        },

        type: function(obj) {
            if (obj == null) {
                return obj + "";
            }

            // Support: Android <=2.3 only (functionish RegExp)
            return typeof obj === "object" || typeof obj === "function" ?
                class2type[toString.call(obj)] || "object" :
                typeof obj;
        },

        // Evaluates a script in a global context
        globalEval: function(code) {
            DOMEval(code);
        },

        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },

        each: function(obj, callback) {
            var length, i = 0;

            if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }

            return obj;
        },

        trim: function(text) {
            return text == null ?
                "" :
                (text + "").replace(rtrim, "");
        },


        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        }
    });
});