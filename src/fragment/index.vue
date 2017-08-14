<template>
  <div class="index" >
    <header-service></header-service>
    <line-content></line-content>
    <div class="Content">
        <all-service></all-service>
        <selected-service></selected-service>
    </div>
    <footer-service></footer-service>
  </div>
</template>
<style>
    .Content{
        width: 1200px;
        margin:0 auto;
    }
</style>
<script>
  import AllService from './allservice';
  import SelectedService from  './selectedservice';
  import HeaderService from './header';
  import FooterService from './footer';
  import LineContent from './line_content';

  export default {
    components: {
      "all-service":AllService,
      "selected-service":SelectedService,
      "header-service":HeaderService,
      "footer-service":FooterService,
      "line-content":LineContent
    },
    created() {
      //调试用
      window.store=this.$store;
    }
  }
</script>
