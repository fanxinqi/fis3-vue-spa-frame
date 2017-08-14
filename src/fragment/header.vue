<template>
<div class="header_all">
    <div class="header">
                    <span class="header_left"><a href="/"><img src="http://portal.yanxiu.com/statics/area_yanxiu2.0_show/image/logo.png" alt=""></a></span>
                    <span class="header_right">
                    <ul>
    			        <li>
                            <a href="http://xb.yanxiu.com" target="_blank">
                                首页
                                <em class="English_title">home</em>
                            </a>
                        </li>
    					<li class="click">
                            <a  href="http://xb.yanxiu.com/fw_index/" target="_blank">
                                服务中心
                                <em class="English_title">service</em>
                            </a>
                        </li>
                        <li class="">
                            <a  href="http://xb.yanxiu.com/jjfa/" target="_blank">
                                解决方案
                                <em class="English_title">programme</em>
                            </a>
                        </li>
                        <li class="">
                            <a  href="http://xb.yanxiu.com/hzfw/" target="_blank">
                                 合作模式
                                 <em class="English_title">cooperation</em>
                            </a>
                        </li>
                        <li class="login">
                                <a href="javascript:;" id="login">登录</a>
                        </li>
                        <span class="xbuserName">
                                <a href="javascript:;" class="xbusername">
                                    <img src="http://portal.yanxiu.com/statics/area_yanxiu2.0_show/image/userImg.png">
                                </a>
                                <a href="javascript:;" class="xblogout">退出</a>
                        </span>
    		        </ul>
                </span>
    </div>
</div>
</template>
<style>
    html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img {
        margin: 0;
        padding: 0;
        font-family: "微软雅黑";
    }
    h1, h2, h3, h4, h5, h6 {
        text-decoration: none;
        font-weight: normal;
        font-size: 100%;
    }
    s, i, em {
        font-style: normal;
        text-decoration: none;
    }
    .cl:after,.cl:before{content:'';display:table;clear:both;}
    .cl{zoom:1}
    .header_all{
        background-color:#4fa6ce;
        width: 100%;
        height: 100px;
    }
    div.header{
        width:1200px;
        margin:0 auto;
        height:100px;
        background-color: #4fa6ce;
    }
    .header_left{
        float:left;
    }
    .header_left img{
        margin-top: 10%;
    }
    .header_right{
        float:right;
        height:100px;
    }
    .header_right ul{
        margin-top:4%;
    }
    .header_right li{
        width:80px;
        float:left;
        display: inline-block;
        margin-left: 82px;
        font-size: 18px;
        height:65px;
    }
    .header_right li a{
        display: block;
        text-align: center;
        color: white;
    }
    .header_right li em{
        display: block;
        font-size: 12px;
        height: 17px;
        line-height: 17px;
        opacity: 0.5;
        cursor: pointer;
        text-align: center;
    }
    .header_right  ul li:hover {
        font-weight: 600;
        border-bottom: 3px solid #fff;
    }
    .header_right  ul li:hover em.English_title{
        opacity: 1;
    }
    .header_right  ul li.click{
        font-weight: 600;
        border-bottom: 3px solid #fff;
    }
    .header_right  ul li.click em.English_title{
        opacity: 1;
    }
    .w{
        width:1200px;
        margin:0 auto;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    .header_right li.login{
         font-size: 14px;
         width: 60px;
         height: 30px;
         background-color: #fff;
         line-height: 30px;
         border-radius: 30px;
         margin-top: 3px;
    }
    .header_right li.login a{
         color: #4fa6ce;
    }
    .header_right .xbuserName{
        color: #fff;
        font-size: 15px;
        margin-right: 0px;
        margin-left: 70px;
        width: auto;
        line-height: 25px;
    }
    .header_right .xbusername img{
        margin-top: 5px;
        margin-bottom: -3px;
        width:25px;
        height:25px;
    }
    .header_right .xblogout{
        margin-left: 15px;
        color: #fff;
    }
</style>