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
            phonePage.fnShowList(0);
        },
        /*绑定事件*/
        bindEvent:function(){
            $('.g_tab button').click(function(){
                var index=$(this).index();
                $(this).addClass('tab_active').siblings('button').removeClass('tab_active');
                phonePage.fnShowList(index);
            })
        },
        fnShowList:function(index){
            /*判断是否注册过*/
            /*$.ajax({
                url: '/usercen/getCheckUserName',
                type:"get",
                data:{index:index},
                success: function (result) {
                    if(result.code==200){*/
                        //var data=result.data;
                        var data=[
                            {danwei:'单位名称单位名称单位名称单位名称单位名称单位..',time:'2019-08-20',type:'去确认'},
                            {danwei:'单位名称单位名称单位名称单位名称单位名称单位..',time:'2019-08-20',type:'已过期'},
                            {danwei:'单位名称单位名称单位名称单位名称单位名称单位..',time:'2019-08-20',type:'去确认'}
                        ];
                        var html='';
                        $('.g_list').empty();
                        for(var i=0;i<data.length;i++){
                            html+='<li>'+
                                '<div class="ellips_1">预约单位：<span class="">'+data[i].danwei+'</span></div>'+
                                '<div class="m_content">预约日期：<span>'+data[i].time+'</span>';
                                if(data[i].type=='已过期'){
                                    html+='<button class="f_fr">'+data[i].type+'</button>';
                                }else{
                                    html+='<button class="f_fr c_green">'+data[i].type+'</button>';
                                }
                                html+='</div>'+
                            '</li>';
                        }
                        $('.g_list').append(html);
                   /* }
                }
            });*/
        }
    }
})();

