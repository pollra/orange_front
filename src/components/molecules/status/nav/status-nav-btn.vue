<template>
  <div class="status-nav-btn no-drag">
    <!--아이콘-->
    <div class="status-icon-box">
      <div :class="icon" class="no-drag"></div>
    </div>
    <!--텍스트-->
    <div class="status-text-box">
      <slot name="text">{{text}}</slot>
    </div>
    <!--권한-->
    <div class="status-auth" :class="auth">
      <div :class="('icon-'+auth)"/>
      <span>{{this.auth.toUpperCase()}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        props:['icon','text', 'auth'],
        name: "status-nav-icon"
    }
</script>

<style scoped>
  .status-nav-btn{
    display: flex;
    flex-direction: row;
    color: #666666;
    padding: 5px 0px 5px 20px;
    border-radius: 3px;
    cursor: pointer;
  }
  .status-nav-btn:hover{
    background: #cccccc;
    transition: all .2s ease;
  }
  .status-icon-box{
    font-size: 22px;
  }
  .status-text-box{
    font-size: 18px;
    margin-left: 15px;
    flex: 1;
  }
  .no-drag {
    -ms-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }
  .status-auth.user{
    font-size: 10px;
    padding: 5px 10px;
    background: #4facfe;
    border-radius: 3px;
    color: white;
    margin-right: 8px;
  }
  .status-auth.admin{
    font-size: 10px;
    padding: 5px 10px;
    background: crimson;
    border-radius: 3px;
    color: white;
    margin-right: 8px;
  }
  .status-auth{
    display: flex;
    flex-direction: row;
    margin-top: 2px;
    margin-bottom: 2px;
  }
</style>
