<template>
  <button class="save-btn">
    <div class="icon-floppy"/>
    <span>저장</span>
  </button>
</template>

<script>
    export default {
        name: "save-btn"
    }
</script>

<style scoped>
  .save-btn{
    position: relative;
    width: 82px;
    height: 30px;
    border-radius: 3px;
    border: none;
    color: white;
    background: #333333;
    cursor: pointer;
    transition: all .2s ease;
    outline: none;
  }
  .save-btn > .icon-floppy {
    position: absolute;
    top: 7px;
    left: 30px;
    transition: all .2s ease;
  }
  .save-btn > span{
    position: absolute;
    opacity: 0;
    top: 5px;
    right: 20px;
    transition: all .2s ease;
  }
  /*마우스 올렸을 때*/
  .save-btn:hover{
    background: #42b983;
    transition: background-color .1s ease;
  }
  .save-btn:hover > .icon-floppy{
    transform: translateX(-15px);
    transition: all .2s ease;
  }
  .save-btn:hover > span{
    opacity: 1;
    transform: translateX(5px);
    transition: all .2s ease;
  }
  /*마우스 눌렀을 때*/
  .save-btn:active{
    transform: scale(0.9);
    transition: all .1s ease;
  }
</style>
