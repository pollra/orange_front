<template>
  <div class="browser-title">
    <div class="browser-left"></div>
    <div class="browser-center">
      <label for="title-input" class="icon-chrome"/>
      <input id="title-input" type="text" :placeholder="this.$store.state.blog_info.metaTitle">
      <div class="icon-cancel-1"/>
    </div>
    <div class="browser-right">
      <div class="icon-plus"/>
    </div>
  </div>
</template>

<script>
    export default {
        props:["title"],
        name: "browser-title"
    }
</script>

<style scoped>
  .browser-title{
    display: flex;
    flex-direction: row;
    height: 30px;
    /*background: #555555;*/
    padding-top: 5px;
    width: 520px;
    background-image: linear-gradient(to right, #ffffff 0%, #333333 1%, #333333 99%, #ffffff 100%);
  }
  .browser-left{
    border-radius: 0px 0px 8px 0px;
    border-bottom: 1px solid #666666;
    border-right: 1px solid #666666;
    width: 20px;
    height: 30px;
    margin-top: 10px;
    margin-right: -1px;
    /*background: #555555;*/
    background-image: linear-gradient(left, #ffffff 0%, #333333 26%);
  }
  .browser-center{
    border-radius: 8px 8px 0px 0px;
    border-left: 1px solid #666666;
    border-top: 1px solid #666666;
    border-right: 1px solid #666666;
    width: 400px;
    height: 30px;
    margin-right: -1px;
    background: white;
    position: relative;
    text-align: left;
  }
  .browser-right{
    border-radius: 0px 0px 0px 8px;
    border-bottom: 1px solid #666666;
    border-left: 1px solid #666666;
    width: 100px;
    height: 30px;
    margin-top: 10px;
    position: relative;
    background-image: linear-gradient(right, #ffffff 0%, #333333 5.3%);
  }
  .icon-cancel-1{
    position: absolute;
    right: 11px;
    top: 11px;
    font-size: 19px;
    color: #666666;
    cursor: pointer;
  }
  .icon-plus{
    position: absolute;
    left: 5px;
    top: -4px;
    font-size: 28px;
    color: white;
    cursor: pointer;
  }
  #title-input{
    font-size: 19px;
    margin-top: 10px;
    margin-left: 45px;
    width: 290px;
    outline: none;
    border: none;
  }
  .icon-chrome{
    position: absolute;
    left: 11px;
    top: 9px;
    font-size: 20px;
    color: #666666;
    cursor: pointer;
  }
</style>
