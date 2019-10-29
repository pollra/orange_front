<template>
  <div :class="'block-check-'+block+' check-box'">
    <!-- 아이콘-->
<!--    <div class="icon-emo-devil hovIcon"/>-->
<!--    <div class="icon-emo-laugh hovIcon"/>-->
    <div class="icon-box" v-if="!block">
      <div class="icon-emo-laugh b-icon"/>
      <div class="icon-emo-devil f-icon"/>
    </div>
    <div class="icon-box" v-if="block">
      <div class="icon-emo-devil f-icon"/>
      <div class="icon-emo-laugh b-icon"/>
    </div>
    <span v-if="block" class="btn-text">해제</span>
    <span v-if="!block" class="btn-text">차단</span>
  </div>
</template>

<script>
    export default {
        props:['block'],
        name: "lock-btn"
    }
</script>

<style scoped>

  .check-box{
    width: 80px;
    height: 20px;
    border-radius: 3px;
    color: white;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .block-check-false{
    background: #42b983;

  }
  .block-check-true{
    background: crimson;

  }
  /* 색 반전 css*/
  .block-check-false:hover{
    background: crimson;
    transition: all .2s ease;
  }
  .block-check-true:hover{
    background: #42b983;
    transition: all .2s ease;
  }
  /*아이콘 박스 기본셋팅*/
  .icon-box{
    overflow: hidden;
    top: 2px;
    left: 28px;
    width: 20px;
    height: 18px;
    position: absolute;
    transition: all .2s ease;
    display: flex;
    flex-direction: column;
  }
  /*텍스트 기본셋팅*/
  .btn-text{
    position: absolute;
    opacity: 0;
    top: 20px;
    left: 14px;
    transition: all .2s ease;
    font-size: 14px;
  }
  /*f-icon / b-icon 가시성*/
  .f-icon{
    transition: all .2s ease;
  }
  .b-icon{
    transition: all .2s ease;
  }
  /*아이콘 위로 올라가는 애니메이션*/
  .check-box:hover > .icon-box > div{
    transform: translateY(-18px);
    transition: all .2s ease;
  }
  .check-box:hover > .icon-box{
    transform: translateX(-18px);
  }
  .check-box:hover > .btn-text{
    transform: translate(22px, -18px);
    opacity: 1;
    transition: all .2s ease;
  }
</style>
