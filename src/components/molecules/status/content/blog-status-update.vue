<template>
  <div class="blog-config-status">
    <!--이미지 수정-->
    <div class="img-container">
      <div class="img-box">
        <img :src="this.$store.state.blog_info.imgPath">
        <div class="update-btn">편집</div>
      </div>
    </div>
    <div class="info-container">
      <div class="title-box">
        <input id="info-title"
               type="text"
               v-model="$store.state.infoUpdate.blog.title"
               :placeholder="this.$store.state.blog_info.title">
      </div>
      <div class="explanation-box">
        <input id="info-explanation"
               type="text"
               v-model="$store.state.infoUpdate.blog.ex"
               :placeholder="this.$store.state.blog_info.explanation">
      </div>
    </div>
  </div>
</template>

<script>
    import SaveBtn from "../../../atoms/buttons/save-btn";
    export default {
        name: "blog-status-update",
        components: {SaveBtn}
    }
</script>

<style scoped>
  input{
    background: none;
  }
  .blog-config-status{
    display: flex;
    width: 520px;
  }
  .img-container{
    margin: 10px;
  }
  .img-box{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
  }
  .img-box > .update-btn{
    background: #666666;
    width: 100px;
    opacity: 0.9;
    color: white;
    margin-top: -28px;
    height: 30px;
  }
  .img-box > img{
    width: 100%;
    height: 100%;
  }
  .info-container{
    display: flex;
    flex-direction: column;
    margin: 15px;
    width: 520px;
  }
  #info-title{
    font-size: 36px;
    outline: none;
    border: none;
    margin-bottom: 10px;
    color: black;
    width: 440px;
  }
  #info-explanation{
    font-size: 26px;
    outline: none;
    border: none;
    color: #0088cc;
    width: 440px;
  }
  #info-explanation::placeholder{
    color: rgba(0, 136, 204, 0.57);
  }
  .title-box{
    display: flex;
  }
  .explanation-box{
    display: flex;
    position: relative;
  }
</style>
