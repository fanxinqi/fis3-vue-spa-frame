<template>
    <div>
        <span class="yx-check"  @click="checkclick" v-bind:class="{ 'check':check, 'un-check': !check }"></span><span>{{check?"已选择":"选择"}}</span>
    </div>
</template>
<style>
    .yx-check{
        display: inline-block;
        width: 20px;
        height: 20px;
    }
    .check{
        background: url(./img/check.png) no-repeat center 6px;
    }
    .un-check{
        background: url(./img/uncheck.png) no-repeat center 6px;
    }
</style>
<script>
    export default {
        data(){
             return{
                 check:false
             }
        },
        methods:{
            checkclick() {
                this.check=!this.check;
                if(this.check) this.$emit("check");
                else this.$emit("uncheck");
            }
        }
    }
</script>
