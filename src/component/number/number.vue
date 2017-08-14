<template>
    <div class="number_box">
     <span  @click="reduce" class="minus"></span><input v-bind:value="message"  /><span @click="plus" class="addition"></span>
    </div>
</template>
<style>
    .number_box input{
        width:35px;
        height:25px;
        text-align:center;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    .minus{
        display:inline-block;
        width:20px;
        height:20px;
        background: url(./img/minus.png) no-repeat 0px 13px;
        cursor: pointer;
    }
    .addition{
       display:inline-block;
       width:20px;
       height:20px;
       background: url(./img/addition.png) no-repeat 5px 5px;
       cursor: pointer;
    }
</style>

<script>
export default {
        data(){
            return {number:0}
        },
        props: ['message'],
        watch: {
            number: function () {
            var regu = /^\d+$/;
            if(!regu.test(this.number)){
                this.number=0
            }
        }
    },
    methods:{
      reduce() {
           if(this.number>=1){
               this.number--;
               //this.total=this.number;
               this.$emit('reduce', this.number);//1.0不能直接改变父亲组件传递过来的属性值 子组件只能通知父亲组件数据改变了
           }
        },
      plus(){
            this.number++;
           // this.total=this.number;
            this.$emit('plus', this.number);
      }
    }
  }
</script>
