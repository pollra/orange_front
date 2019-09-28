<template>
  <div class="status-auth" :class="auth">
    <div :class="('icon-'+auth)"/>
    <span>{{this.auth.toUpperCase()}}</span>
  </div>
</template>

<script>
    export default {
        props:['auth'],
        name: "auth-button"
    }
</script>

<style scoped>
  .status-auth.user{
    font-size: 10px;
    padding: 5px 10px;
    background: #4facfe;
    border-radius: 3px;
    color: white;
  }
  .status-auth.admin{
    font-size: 10px;
    padding: 5px 10px;
    background: crimson;
    border-radius: 3px;
    color: white;
  }
  .status-auth{
    display: flex;
    flex-direction: row;
    margin-top: 2px;
    margin-bottom: 2px;
  }
</style>
