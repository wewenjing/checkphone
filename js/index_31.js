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
            /*预约时间*/
            //$("#date").calendar();
            /*时间段选择*/
            var mobileSelect1 = new MobileSelect({
                trigger: '#time',
                title: '',
                ensureBtnText:'确定',
                wheels: [
                    {data:['14:00-16:00','16:00-18:00']}
                ],
                position:[0] ,//初始化定位
                callback:function(indexArr, data){
                    console.log(data); //Returns the selected json data
                }
            });
            /*预约地点选择*/
            var mobileSelect2 = new MobileSelect({
                trigger: '#area',
                title: '',
                ensureBtnText:'确定',
                wheels: [
                    {data:['预约地点1','预约地点2']}
                ],
                position:[0] ,//初始化定位
                callback:function(indexArr, data){
                    console.log(data); //Returns the selected json data
                }
            });

        }
    }
})();

