$(document).ready(function () {
    common.onload();
});
var common = (function () {


    var init=function(){

    };
    return{
        onload:function(){
            init();
            common.bindEvent();

        },
        /*绑定事件*/
        bindEvent:function(){
            var mobileSelect1 = new MobileSelect({
                trigger: '#trigger1',
                title: '',
                ensureBtnText:'确定',
                wheels: [
                    {data:['2019-10-20','2019-10-20','2019-10-20']}
                ],
                position:[0] //初始化定位
            });
        }
    }
})();

