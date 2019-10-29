<template>
  <div :class="'block-check-'+block+' check-box'">
    <!--불량 사용자-->
    <div v-if="block" class="true-btn">
      <div class="icon-emo-devil"/>
      <span></span>
    </div>
    <!---->
    <div v-if="!block" class="false-btn">
      <div class="icon-emo-laugh"/>
      <span></span>
    </div>
  </div>
</template>

<script>
    export default {
        props:['block'],
        name: "block-button"
    }
</script>

<style scoped>

  .check-box{
    width: 80px;
    height: 20px;
    position: relative;
    border-radius: 3px;
    color: white;
  }
  .check-box > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    line-height: 10px;
  }
  .block-check-false{
    background: #42b983;
  }
  .block-check-true{
    background: crimson;
  }
</style>
