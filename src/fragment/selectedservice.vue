<template>
    <div id="print_service">
        <div id="print_view">
            <span class="select_serviceTitle">{{isEdit?"已选择服务":"打印清单"}}</span>
                <div class="service-list">
                    <div class="service_years">
                        <span class="service_yearAll">服务/年份</span>
                        <span>第一年</span>
                        <span>第二年</span>
                        <span>第三年</span>
                    </div>
                    <div>
                        <div v-for="(sitem,sitemIndex) in services">

                            <div v-if="!noOneCheck(sitem)" class="title_selected">{{sitem.name}}</div>

                            <div v-for="(item,itemIndex) in sitem.list" v-bind:class="{ selected_border:item.isselect,selected_borderNull:!item.isselect }">
                                <div v-if="item.isselect" class="selected_list">
                                        <div class="list_TitleBox">
                                            <span class="small_title">{{item.name}}</span> <span class="time_selected">{{item.currency+item.price+item.des}}</span>
                                        </div>
                                        <div v-if="item.people" v-for="(yitem,yindex) in item.year" class="people_true">
                                                <div v-if="isEdit">
                                                    <yx-number :message="yitem" v-on:plus="puls(sitemIndex,itemIndex,yindex)" v-on:reduce="reduce(sitemIndex,itemIndex,yindex)"  ></yx-number></div>
                                                <div v-else>
                                                    <span> {{yitem}}</span>
                                                </div>
                                        </div>
                                        <div v-if="!item.people" v-for="(yitem,yindex) in item.year" class="people_false">
                                            <div v-if="isEdit">
                                                <yx-checkbox v-on:check="check(sitemIndex,itemIndex,yindex)" v-on:uncheck="uncheck(sitemIndex,itemIndex,yindex)"></yx-checkbox></div>
                                            <div v-else>
                                                <span v-if="yitem==1" class="select_after">√</span>
                                                <span v-else >未选择</span>
                                            </div>
                                        </div>
                                         <a v-on:click="cancelselect(sitemIndex,itemIndex,item.name)" class="delete" v-bind:class="{ delete_show:isEdit,delete_hide:!isEdit }">删除</a>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            	<div class="total_All" v-if="!noAllCheck()">
                   <div class="fl">
                        <span class="total">合计：</span>
                        <span class="price">{{total}}</span>
                        <span class="unit">元</span>
                    </div>

                    <div class="fr">
                        <a href="javascript:void(0)" @click="toggleEdit" class="confirm">{{buttonNameGroup[0]}}</a>
                        <a href="javascript:void(0)" v-on:click="print" class="print" v-bind:class="{ list_print:isEdit,list_printed:!isEdit}">打印</a>
                    </div>
                </div>
                <div class="total_All" v-else v-bind:class="{laugh_prompt:true}">
                    请从左侧添加服务
                </div>
        </div>
</div>
</template>
<style>
    .laugh_prompt{
         background: url(./img/laugh_prompt.png) no-repeat 38% 50%;
         text-align: center;
         color: #333333;
    }
    .selected_border{
        border-bottom: 1px solid #eee;
    }
    .selected_borderNull{
        border-bottom:0;
    }
    .select_serviceTitle{
        font-size:24px;
        color:#333333;
        width:760px;
        text-align:center;
        display:block;
        font-weight: 600;
        margin-bottom: 7px;
        height: 60px;
        line-height: 60px;
    }
    #print_service{
        float:right;
    }
   .people_true{
        display:inline-block;
        width: 145px;
        text-align: center;
   }
   .people_false{
        display:inline-block;
        width: 145px;
        text-align: center;
   }
   .service_years{
       border-top: 1px solid #eee;
       border-bottom: 1px solid #eee;
       background-color: #f9f9f9;
   }
   .service_years span{
        display:inline-block;
        width:145px;
        text-align:center;
        height:60px;
        line-height:60px;
        font-size:14px;
        color:#999999;
   }
   .service_years .service_yearAll{
        width:266px;
        text-align:left;
   }
   .selected_list{
        height:80px;
        line-height:80px;
   }
   .selected_list:hover .delete_show{
        display:inline-block;
   }
   .delete_hide{
        display:none;
   }
   .list_TitleBox{
        display:inline-block;
        width:275px;
   }
   .small_title{
        color: #4fa6ce;
        border-left: 5px solid #4fa6ce;
        padding-left: 20px;
        padding-right: 5px;
   }
   .time_selected{
        color: #ccc;
   }
   .title_selected{
        height:60px;
        line-height:60px;
        font-size:24px;
        background-color: #f9f9f9;
   }
   .delete{
        color:#ccc;
        cursor: pointer;
        display:none;
   }
   .delete:hover{
        color:#4fa6ce;
   }
   .total_All{
        height: 100px;
        line-height: 100px;
   }
   .total_All div{
        display:inline-block;
   }
   .total_All div span{
        display:inline-block;
   }
   .total_All .total{
        font-size:18px;
        color:#333333;
   }
   .price{
        color:#4fa6ce;
        font-size:30px;
   }
   .unit{
        color:#4fa6ce;
        font-size:16px;
   }
   .confirm{
        width:120px;
        height:60px;
        text-align:center;
        line-height:60px;
        border-radius:3px;
        background-color:#4fa6ce;
        color:#fff;
        display:inline-block;
        margin-right: 40px;
   }
   .print{
        width:120px;
        height:60px;
        text-align:center;
        line-height:60px;
        border-radius:3px;
        display:inline-block;
   }
   .list_print{
        background-color:#f0efef;
        color:#ccc;
   }
   .list_printed{
        background-color:#4fa6ce;
        color:#fff;
   }
   .select_after{
       font-weight: bolder;
       color: #4fa6ce;
   }
   .select_total{
        display:none;
   }
   .selected_total{
           display:block;
      },

   .delete_hide{
       display:none;
      }
</style>
<script>
    import {mapGetters,mapState,mapActions } from 'vuex';
    import number from '../component/number/number';
    import checkbox from '../component/checkbox/checkbox';
    import { SERVICE_CANCEL,ADD_TOTAL,REDUCE_TOTAL,SETYEARSELECT,TOGGLE_EDITE } from '../vuex/store/service';
    import {printArea} from "../js/util/util.js";
    import Messagebox from "../../node_modules/element-ui/lib/message-box.js";
    export default {
        data(){
          return {
              buttonNameGroup:["确定","编辑"],
              nodata:false,
              Messagebox:Messagebox
          }
        },
        computed: mapState({
                    services: state=>state.service.services, //= >不能有空格
                    total:state=>state.service.total,//= >不能有空格,
                    isEdit:state=>state.service.isEdit
                }),
        components:{
            "yx-number":number,
            "yx-checkbox":checkbox
        },
        methods:{
            toggleEdit(){
                this.TOGGLE_EDITE();
                this.buttonNameGroup.reverse();
            },
            print(){
                printArea(document.getElementById("print_view"));
            },
            check(serviceindex,itemIndex,yIndex){
                this.SETYEARSELECT({
                    serviceindex,
                    itemIndex,
                    yIndex,
                    number:1
                });
            },
            uncheck(serviceindex,itemIndex,yIndex){
                this.SETYEARSELECT({
                    serviceindex,
                    itemIndex,
                    yIndex,
                    number:-1
                });
            },
            puls(serviceindex,itemIndex,yIndex){
                this.SETYEARSELECT({
                    serviceindex,
                    itemIndex,
                    yIndex,
                    number:1
                });
            },
            reduce(serviceindex,itemIndex,yIndex){
                this.SETYEARSELECT({
                    serviceindex,
                    itemIndex,
                    yIndex,
                    number:-1
                });
            },
            cancelselect(serviceindex,itemIndex,servicename){
                var me=this;
                this.Messagebox.confirm('确定取消【'+servicename+'】服务', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    showCancelButton:true
                }).then(() => {
                    me.REDUCE_TOTAL(this.singleTotal);
                     me.SERVICE_CANCEL({
                         serviceindex,
                        itemIndex
                    });
                }).catch(() => {
        });
            },
             noOneCheck(sitem){
                var isflag=true;
                sitem.list.forEach((listvalue,listindex)=>{
                    if(!isflag) return;
                    if(listvalue.isselect){
                        isflag=false;
                        return;
                     }
                });
                return isflag;
            },
           noAllCheck(){
                    var isflag=true;
                  this.services.forEach((value,index)=>{
                    if(!isflag) return;
                    value.list.forEach((listvalue,listindex)=>{

                         if(listvalue.isselect){
                                 isflag=false;
                            return;
                         }
                 });
                });
                 return isflag;
            },
            ...mapActions([SERVICE_CANCEL,ADD_TOTAL,REDUCE_TOTAL,SETYEARSELECT,TOGGLE_EDITE])
        }
     }
</script>
