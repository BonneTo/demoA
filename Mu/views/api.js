// *************随机排列指定长度连续的数字****************************************** 
function randomOrdering(count) {
    var array = [];
    var num = [];
    for (let i = 1; i <= count; i++) {
        array.push(i)
    }
    for (let j = 0; j < count; j++) {
        var randomNum = parseInt(Math.random() * (array.length))
        for (let x = 0; x < array.length; x++) {
            if (randomNum == x) {
                var n = array.slice(0, x);
                var k = array.slice(x, x + 1);
                var arr = [];
                arr = [].concat(n)
                arr = arr.concat(array.slice(x + 1, array.length))
                array = arr;
                num = num.concat(k)
            }
        }
    }
    return num;
}
// ***********图片旋转动画,40毫秒旋转4度*******************************************
var degs = 0;
function imgRotate(id) {
    var deg = degs;
    flag = 1;
    timer = setInterval(function () {
        document.querySelector(id).style.transform = "rotate(" + deg + "deg)";
        deg += 2;
        if (deg > 360) {
            deg = 0;
        }
        degs = deg;
    }, 40)
}
// ************图片暂停***********************************************************
function imgPause() {
    clearInterval(timer3);
    flag = 0;
}
// ***********获取音频或视频的长度*************************************************
function duration(id) {
    var time = parseInt(document.querySelector(id).duration);
    // console.log(time)
    return time;
}
//********进度条*******************************************************************
function loadingBar(id) {

    var t1 = duration(id);

    var fill = document.getElementById("filling")
    timer3 = setInterval(function () {
        var cur = parseInt(document.querySelector(id).currentTime);
        var len = (cur / t1) * 285;
        fill.style.width = len + "px";
        if (len >= 285) {
            len = 0;
            fill.style.width = len + "px";
        }
    }, 50)
}
// *******歌曲名字******************************************************
function muName() {
    var muname = document.getElementById("muname");
    var sourceStr = au.src.split(".");
    var name = sourceStr[0].split("/")
    muname.innerHTML = name[7]
}
// ******日期格式yyyy-MM-dd*********************************************************
function obtainDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDay();
    let hours = date.getHours();
    let minu = date.getMinutes();
    let second = date.getSeconds();
    let arr = [month,day,hours,minu,second]
    arr.forEach(item => {
        item < 10?"0" + item:item;
    })
    console.log(year+"-"+arr[0]+"-"+arr[1]+" "+arr[2]+":"+arr[3]+":"+arr[4])
}
// *****获取滚动条距顶部的距离*************************************
function getScollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}
// ******设置一个元素距离文档（document）的距离*******************************************
function offset(ele) {
    var pos = {
        left:0,
        top:0
    }
    while (ele) {
        pos.left += ele.offsetLeft;
        pos.top += ele.offsetTop;
        ele = ele.offsetParent
    }
    return pos;
}
// ********验证邮箱格式*********************************************************
function isEmail(str) {
    if (str == "" || str == undefined || str == null) {
        alert("Please enter Email")
        return ""
    }else{
       return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str) 
    }
    
}
// *******身份证号验证*********************************
function isIdCardNum(str) {
    if (str == undefined || str == null || str == "") {
        alert("Please enter IdCard number");
        return ""
    }else{
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3})((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
    }
}
// *******手机号验证*******************************************
function isPhoneNum(str) {
    if (str =="" || str == null || str == undefined) {
        alert("Please enter Phone number")
        return ""
    }else{
        return /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
    }
}
// *******URL格式验证*************************************************
function isUrl(str) {
    if (str == "" || str == null || str == undefined) {
        alert("Please enter Url");
        return ""
    }else{
        return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z-0-9@:%_\+.~#?&//=]*)/i.test(str)
    }
}
// ******输入时间（"2017/5/25 20:11:11"）距现在多长时间*************************************************
function formatPassTime(startTime) {
    var currentTime = Date.parse(new Date()),
        time = currentTime - (new Date(startTime)).getTime(),
        day = parseInt(time / (1000 * 60 * 60 * 24)),
        hour = parseInt(time / (1000 * 60 * 60)),
        min = parseInt(time / (1000 * 60)),
        month = parseInt(day / 30),
        year = parseInt(month / 12);
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    else return '刚刚'
}
// ******现在距离目标时间("2018/5/25 20:11:11")还有多久*************************************************
function formatRemainTime(endTime) {
    var startDate = new Date();
    var endDate = new Date(endTime);
    var t = endDate.getTime() - startDate.getTime();
    var d = 0,h=0,m=0,s=0;
    if (t >= 0) {
        d=Math.floor(t/1000/3600/24);
        h=Math.floor(t/1000/60/60%24);
        m=Math.floor(t/1000/60%60);
        s=Math.floor(t/1000%60)
    }
    return d+"天"+h+"小时"+m+"分钟"+s+"秒"
}
// ******url参数转对象*************************************************************************
function parseQueryString(url) {
    url = url == null ? window.location.href : url
    var search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
        return {}
    }else{
      return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')  
    }
    
}
// ******将对象转为URL参数**************************************************
function stringfyQueryString(obj) {
    if (!obj) return '';
    var pairs = [];

    for (var key in obj) {
        var value = obj[key];

        if (value instanceof Array) {
            for (var i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
}
// ******函数节流（毫秒，ture/false，function节流时调用的函数，true，clear在delay后执行/false，callback在delay后执行）***********
function throttle(delay, noTrailing, callback, debounceMode) {

    // After wrapper has stopped being called, this timeout ensures that
    // `callback` is executed at the proper times in `throttle` and `end`
    // debounce modes.
    var timeoutID;

    // Keep track of the last time `callback` was executed.
    var lastExec = 0;

    // `noTrailing` defaults to falsy.
    if (typeof noTrailing !== 'boolean') {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = undefined;
    }

    // The `wrapper` function encapsulates all of the throttling / debouncing
    // functionality and when executed will limit the rate at which `callback`
    // is executed.
    function wrapper() {

        var self = this;
        var elapsed = Number(new Date()) - lastExec;
        var args = arguments;

        // Execute `callback` and update the `lastExec` timestamp.
        function exec() {
            lastExec = Number(new Date());
            callback.apply(self, args);
        }

        // If `debounceMode` is true (at begin) this is used to clear the flag
        // to allow future `callback` executions.
        function clear() {
            timeoutID = undefined;
        }

        if (debounceMode && !timeoutID) {
            // Since `wrapper` is being called for the first time and
            // `debounceMode` is true (at begin), execute `callback`.
            exec();
        }

        // Clear any existing timeout.
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        if (debounceMode === undefined && elapsed > delay) {
            // In throttle mode, if `delay` time has been exceeded, execute
            // `callback`.
            exec();

        } else if (noTrailing !== true) {
            // In trailing throttle mode, since `delay` time has not been
            // exceeded, schedule `callback` to execute `delay` ms after most
            // recent execution.
            //
            // If `debounceMode` is true (at begin), schedule `clear` to execute
            // after `delay` ms.
            //
            // If `debounceMode` is false (at end), schedule `callback` to
            // execute after `delay` ms.
            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }

    }

    // Return the wrapper function.
    return wrapper;

};
// ******防止短时间多次触发（延时，true延时执行回调，消抖动执行的函数）************************************************************

function debounce(delay, atBegin, callback) {
    return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};