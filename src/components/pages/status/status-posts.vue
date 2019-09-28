<template>
  <my-status>
    <div slot="page">
      <div class="status-posts-title">
        <div class="icon-doc-text"/>
        <h1>글 관리</h1>
        <auth-button :auth="'admin'"/>
      </div>
      <div slot="page">
        <!--카테고리 하나의 데이터들을 찍음-->
        <div v-for="">

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
        components: {PostsConfig, MyStatus, AuthButton}
    }
</script>

<style scoped>
  .status-posts-title{
    display: flex;
  }
</style>
