<template>
  <my-status>
    <div slot="page" class="status-posts">
      <div class="status-posts-title">
        <h1 class="icon-doc-text icon"/>
        <h1>글 관리</h1>
        <auth-button :auth="'admin'" class="auth-btn"/>
      </div>
      <div slot="page">
        <!--카테고리 하나의 데이터들을 찍음-->
        <div
          v-for="(category, index) in this.$store.state.categories" :key="index"
          class="status-posts-categories"
        >
          <div class="categories-title-box">
            <h3>{{category.name}}</h3>
            <div class="title-line"/>
          </div>
          <div class="posts-content-box">
            <!--목차 테이블 설명-->
            <div class="posts-content-names">
              <span class="names-date">DATE</span>
              <span class="names-uri">URI</span>
              <span class="names-name">TITLE</span>
              <div class="names-ud">
                <span class="names-update">UPDATE</span>
                <div class="names-update-under-delete"/>
                <span class="names-delete">DELETE</span>
              </div>
            </div>
            <!--데이터-->
            <posts-config
              :category="category.name"
              class="posts-content-data"
            />
          </div>
        </div>
      </div>
    </div>
  </my-status>
</template>

<script>
    import AuthButton from "@/components/atoms/buttons/auth/auth-button";
    import MyStatus from "../../molecules/status/my-status";
    import PostsConfig from "../../molecules/status/pages/posts-config";

    export default {
        name: "status-posts",
        components: {PostsConfig, MyStatus, AuthButton},
        methods:{
            get_postsList(){
                // console.log(this.$route.params.category);
                this.$store.commit("set_post_list_default_mutation");
                this.$store.dispatch("getPostList_action","ad")
                    .then(()=> {
                        this.$store.dispatch("update_list_count_action");
                    })
            },
        },
        created() {
            this.get_postsList();
        }
    }
</script>

<style scoped>
  .status-posts{
    width: 800px;
  }
  .status-posts-title{
    display: flex;
  }
  .status-posts-title > .icon{
    line-height: 44px;
  }
  .status-posts-title > .auth-btn{
    margin-top: 38px;
    margin-left: 10px;
  }
  .status-posts-categories{
    display: flex;
    flex-direction: column;
  }
  .categories-title-box{
    display: flex;
    text-align: left;
  }
  .categories-title-box > .title-line{
    flex: 2;
    margin-left: 10px;
    height: 3px;
    background: #4facfe;
    margin-top: 28px;
  }
  .posts-content-box{

  }
  .posts-content-names{
    display: flex;
    margin-bottom: 10px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
  }
  .posts-content-data{
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
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
  }
  .names-ud{
    width: 162px;
    display: flex;
  }
  .names-update{
    width: 74px;
  }
  .names-update-under-delete{
    width: 2px;
    background: #333333;
    margin: 0px 4px;
  }
  .names-delete{
    width: 75px;
  }
</style>
