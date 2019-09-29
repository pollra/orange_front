<template>
  <div class="test">
    <template v-for="(post, index) in this.$store.state.board_list">
      <div
        v-if="post.category.toLowerCase() === category.toLowerCase()"
        class="post-data"
      >
        <date-button
          class="date-btn names-date"
          :date="post.date"
        />
        <span class="names-uri">{{post.uri}}</span>
        <span class="names-name">{{post.title}}</span>
        <div class="names-ud">
          <div class="names-update">
            <div class="icon-pencil"/>
            <span>수정</span>
          </div>
          <div class="names-update-under-delete"/>
          <div class="names-delete">
            <div class="icon-cancel-1"/>
            <span>삭제</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
    import DateButton from "../../../atoms/buttons/date/date-button";
    export default {
        name: `posts-config`,
        props:['category'],
        components: {DateButton}
    }
</script>

<style scoped>
  .post-data{
    display: flex;
    margin: 3px 0px;
    padding: 3px;
    border-radius: 3px;
    transition: all .2s ease;
  }
  .date-btn{

  }
  .names-date{
    width: 80px;
  }
  .names-uri{
    width: 50px;
  }
  .names-name{
    width: 510px;
    text-align: left;
    cursor: pointer;
    border-radius: 3px;
  }
  .names-name:hover{
    background: #eeeeee;
    transition: all .1s ease;
  }
  .names-ud{
    width: 160px;
    display: flex;
  }
  .names-update{
    width: 75px;
    border-radius: 3px;
    color: #42b983;
    cursor: pointer;
    display: flex;
    position: relative;
  }
  .names-update > div{
    position: absolute;
    left: 8px;
    transform: translateX(20px);
    transition: all .1s ease;
  }
  .names-update > span{
    position: absolute;
    right: 25px;
    opacity: 0;
    transition: all .1s ease;
  }
  .names-update:hover {
    color: #42b983;
    background: #c9ffea;
    transition: background .3s ease;
  }
  .names-update:hover > div{
    transform: translateX(0px);
  }
  .names-update:hover > span{
    transform: translateX(13px);
    opacity: 1;
  }
  .names-update-under-delete{
    width: 2px;
    background: #333333;
    margin: 0px 4px;
  }

  .names-delete{
    width: 75px;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    color: crimson;
    position: relative;
  }
  .names-delete > div{
    position: absolute;
    left: 8px;
    transform: translateX(18px);
    transition: all .1s ease;
  }
  .names-delete > span{
    position: absolute;
    right: 25px;
    opacity: 0;
    transition: all .1s ease;
  }
  .names-delete:hover {
    color: crimson;
    background: #f7a2b5;
    transition: background .3s ease;
  }
  .names-delete:hover > div{
    transform: translateX(0px);
  }
  .names-delete:hover > span{
    transform: translateX(13px);
    opacity: 1;
  }
</style>
