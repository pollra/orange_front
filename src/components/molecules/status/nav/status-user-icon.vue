<template>
  <div class="status-user-icon">
    <!--아이콘-->
    <div class="icon-box no-drag">
      <slot name="icon">{{icon}}</slot>
    </div>
    <!--텍스트-->
    <div class="text-box no-drag">
      <slot name="text" >{{text}}</slot>
    </div>
    <div class="icon">
      <div class="icon-cog"></div>
    </div>
  </div>
</template>

<script>
    export default {
        props:['icon', 'text'],
        name: "status-user-icon"
    }
</script>

<style scoped>
  .status-user-icon{
    display: flex;
    flex-direction: row;
    font-family: 'Montserrat', sans-serif;
    padding: 5px;
    border-radius: 3px;
    box-shadow: 0 0 4px -10px black;
  }
  .status-user-icon:hover{
    background: #cccccc;
    cursor: pointer;
    transition: all .2s ease;
    /*box-shadow: 0 0 1px black;*/
  }
  .status-user-icon:hover > .icon{
    color: #666666;
    transition: all .2s ease;
  }
  .icon-box{
    padding: 10px;
    background: #666666;
    font-size: 26px;
    color: #cccccc;
    min-width: 25px;
    width: 25px;
    min-height: 25px;
    height: 25px;
    border-radius: 3px;
    line-height: 22px;
    text-align: center;
  }
  .text-box{
    overflow: hidden;
    padding-top: 8px;
    margin-left: 20px;
    color: #333333;
    font-size: 26px;
    letter-spacing: 3px;
    flex: 1;
    text-align: left;
  }
  .icon{
    color: white;
    position: relative;
    min-width: 25px;
    width: 25px;
    min-height: 25px;
    height: 25px;
    padding: 10px;
  }
  .icon > div{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 26px;
  }
  .no-drag {
    -ms-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }

</style>
