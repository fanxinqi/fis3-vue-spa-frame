<template>
    <div class="service-categoryBox">
        <div v-for="(sitem,sitemIndex) in services" class="service-category" >
            <h1 v-bind:style="{background:'url('+sitem.icon+') no-repeat 0px'}"  @click="toggleshow(sitemIndex)">{{sitem.name}}<em v-bind:class="{list_show:!sitem.isShow,list_hide:sitem.isShow}"></em></h1>
            <ul v-if="sitem.isShow" id="example-1">
                <li v-for="(item,itemIndex) in sitem.list" v-bind:class="{ list_Select:!item.isselect,list_Selected:item.isselect }">
                    <em v-if="item.isselect" class="select"></em>
                    <span v-bind:class="{ list_titleSelect:!item.isselect,list_titleSelected:item.isselect }" class="list_liTitle">{{ item.name }}</span>
                    <span class="list_liTime" v-bind:class="{ list_timeSelect:!item.isselect,list_timeSelected:item.isselect }">{{item.currency+item.price+item.des}}</span>
                    <a v-if="item.isselect" v-on:click="cancelselect(sitemIndex,itemIndex)" class="cancel">取消</a>
                    <a v-else v-on:click="select(sitemIndex,itemIndex)" class="ensure"> 选择</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
    .service-categoryBox{
        float:left;
        width: 380px;
    }
    .service-category{
        margin-bottom: 50px;
    }
    .service-category h1{
        font-size: 24px;
        color: #333333;
        height: 60px;
        line-height: 60px;
        text-indent:45px;
    }
    .service-category h1 em{
        width:20px;
        height:20px;
        display:inline-block;
        float:right;
        margin-top: 25px;
        cursor: pointer;
    }
    .list_show{
        background:url(./img/icon_retract.png) no-repeat;
    }
    .list_hide{
        background:url(./img/icon_spread.png) no-repeat;
    }
    .service-category ul li{
        font-size: 16px;
        display: block;
        height: 60px;
        line-height: 60px;
        padding-left: 40px;
        margin-top:5px;
    }
    .list_liTitle{
        margin-right:20px;
        width: 165px;
        display: inline-block;
    }
    .list_titleSelect{
        color:#000;
    }
    .list_titleSelected{
        color: #4fa6ce;
    }

    .list_timeSelect{
        color:#d16767;
    }
    .list_timeSelected{
        color: #4fa6ce;
        }
    .list_liTime{
        margin-right:20px;
    }
    .service-category ul li a{
        font-size:14px;
        cursor: pointer;
        padding: 2px 5px;
        border-radius: 3px;
    }
    .cancel{
        color:#4fa6ce;
    }
    .ensure{
        color:#d16767;
        border: 1px solid #d16767;
    }
    .list_Select:hover{
        background-color:#fff8ee;
    }
    .list_Select{
            background-color:#f9f9f9;
        }
    .list_Selected{
        background-color:#ebf4f9;
    }
    .list_Select:hover .list_titleSelect{
        color:#d16767;
    }
    .list_Select:hover .ensure{
        background-color:#d16767;
        color:#fff;
    }
    em.select{
        background: url(./img/select.png) no-repeat 0px 4px;
        width: 18px;
        height: 18px;
        display: inline-block;
        margin-left: -22px;
    }
    li{
        list-style: none;
    }
</style>
<script>
    import {mapGetters,mapState,mapActions } from 'vuex';
    import { SERVICE_SELECT,SERVICE_CANCEL,TOGGLE_SHOW } from '../vuex/store/service';
    const serviceindex=0;
    export default {
        computed: mapState({services: state => state.service.services}),
        methods:{
            select(serviceindex,itemIndex) {
                this.SERVICE_SELECT({
                    serviceindex,
                    itemIndex
                });
            },
            cancelselect(serviceindex,itemIndex){
                this.SERVICE_CANCEL({
                    serviceindex,
                    itemIndex
                });
            },
            toggleshow(serviceindex){
                this.TOGGLE_SHOW({
                    serviceindex
                });
            },
            ...mapActions([SERVICE_SELECT,SERVICE_CANCEL,TOGGLE_SHOW])
         }
    }
</script>
