<template>
  <div id="my-status">
        <!--왼쪽 네비게이션 바-->
      <div id="left-nav">
        <status-user-icon class="user-state-logo" :icon="'P'" :text="'Pollra'"/>
        <div class="under-line"/>
        <router-link to="/info/my" class="links">
          <status-nav-icon class="item" :icon="'icon-user-circle-o'" :text="'내 정보'" :auth="'user'"/>
        </router-link>
        <router-link to="/info/blog" class="links">
          <status-nav-icon class="item" :icon="'icon-cog-alt'" :text="'블로그 설정'" :auth="'admin'"/>
        </router-link>
        <router-link to="/info/posts" class="links">
          <status-nav-icon class="item" :icon="'icon-doc-text'" :text="'글 관리'" :auth="'admin'"/>
        </router-link>
        <router-link to="/info/users" class="links">
          <status-nav-icon class="item" :icon="'icon-users'" :text="'회원 관리'" :auth="'admin'"/>
        </router-link>
        <router-link to="/info/categories" class="links">
          <status-nav-icon class="item" :icon="'icon-tags'" :text="'카테고리 관리'" :auth="'admin'"/>
        </router-link>
      </div>
      <!--컨텐츠 위치하는곳-->
      <div id="center-content">
        <slot name="page"></slot>
      </div>
  </div>
</template>

<script>
    import StatusUserIcon from "./nav/status-user-icon";
    import StatusNavIcon from "./nav/status-nav-btn";
    import BlogConfig from "@/components/molecules/status/pages/blog-config";
    import MyConfig from "@/components/molecules/status/pages/my-config";

    export default {
        name: "my-status",
        components: {MyConfig, BlogConfig, StatusNavIcon, StatusUserIcon}
    }
</script>

<style scoped>
  #my-status{
    display: flex;
    flex-direction: row;
    min-height: 500px;
  }
  #left-nav{
    background: white;
    border: none;
    /*box-shadow: 0px -3px 5px black;*/
    width: 300px;
    border-right: 1px solid #cccccc;
    padding: 15px;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  #center-content{
    flex: 1;
    margin-left: 210px;
  }
  .user-state-logo{
    margin-bottom: 20px;
  }
  .under-line{
    width: 90%;
    height: 1px;
    background: #cccccc;
    margin-bottom: 20px;
  }
  .item{
    margin-right: 8px;
  }
  .links{
    text-decoration: none;
  }
</style>
