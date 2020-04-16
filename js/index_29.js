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
            var mobileSelect1 = new MobileSelect({
                trigger: '#type',
                title: '',
                ensureBtnText:'确定',
                wheels: [
                    {data:['参与调查1','参与调查2']}
                ],
                position:[0] ,//初始化定位
                callback:function(indexArr, data){
                    console.log(data); //Returns the selected json data
                    $('#type').html(data[0]);
                }
            });
        }
    }
})();

