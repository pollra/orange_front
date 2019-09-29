<template>
  <div class="date-btn">
    <div class="icon-calendar"/>
    <span>{{date}}</span>
  </div>
</template>

<script>
    export default {
        props:['date'],
        name: "date-button"
    }
</script>

<style scoped>
  .date-btn{
    display: flex;
    /*font-size: 10px;*/
    color: white;
    background: #999999;
    border-radius: 3px;
    padding: 3px 5px;
    max-height: 16px;
    font-family: 'Montserrat', sans-serif;
    max-width: 70px;
    min-width: 65px;
  }
  .date-btn > div{
    line-height: 12px;
    font-size: 10px;
  }
  .date-btn > span{
    font-size: 11px;
  }
</style>
