$(document).ready(function () {
    phonePage.onload();
});
var phonePage = (function () {


    /*初始化*/
    var init=function(){
    };
    return{
        onload:function(){
            init();
            phonePage.bindEvent();
        },
        /*绑定事件*/
        bindEvent:function(){
            $("#datetime-picker").datetimePicker();
        }
    }
})();

