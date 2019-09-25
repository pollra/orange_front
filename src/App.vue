<template>
  <div id="app">
    <vue-headful
      :title="this.$store.state.blog_info.metaTitle"
      :image="this.$store.state.blog_info.imgPath"
      :description="this.$store.state.blog_info.explanation"
    />
    <navigation>
      <user-icon slot="left" class="nav_user_icon" v-bind:imgPath="this.$store.state.blog_info.imgPath"></user-icon>
      <logo-texts slot="left">
        <template slot="logo-title" v-if="this.$store.state.j_token === ''">
          {{this.$store.state.blog_info.title}}
        </template>
        <template slot="logo-title" v-if="this.$store.state.j_token !== ''">
          {{this.$store.state.blog_info.title}}
          <router-link to="/create/post" class="icon-pencil-squared user-info-btn"/>
          <label class="icon-user user-info-btn" for="toggle-user-info"/>
          <input id="toggle-user-info" type="checkbox" required="required" checked>
          <sign-update slot="left"
                       class="update-form"
                       v-if="this.$store.state.j_token !== ''"
                       v-bind:username="this.$store.state.login_info.name"
                       v-bind:date="this.$store.state.login_info.date"
          >
<!--            <template slot="user-name">{{this.$store.state.login_info.name}}</template>-->
<!--            <template slot="user-date">{{this.$store.state.login_info.date}}</template>-->
          </sign-update>
        </template>

        <template slot="logo-explanation">{{this.$store.state.blog_info.explanation}}</template>
      </logo-texts>

      <categories slot="center">
        <category
          slot="categories"
          v-for="(category,index) in (this.$store.state.categories)"
          :key="index"
          :uri="'/list/'+category.name"
        >
          {{category.name}}
        </category>
      </categories>
    </navigation>

    <router-view class="contents" slot="contents"/>

    <footer-box>
      <span slot="introduce-text">{{this.$store.state.blog_info.explanation}}</span>
      <span slot="introduce-date">2019</span>
      <span slot="introduce-name">pollra</span>
    </footer-box>
  </div>
</template>

<script>
import Vue from "vue"
import Vuex from "vuex"

import navigation from "./components/molecules/navigation/navigation";
import userIcon from "./components/atoms/buttons/user-icon";
import logoTexts from "./components/atoms/textBox/logoText/logo-texts";
import Categories from "./components/molecules/category/categories";
import Category from "./components/atoms/textBox/category";
import ContentBox from "./components/molecules/contents/content-box";
import ContentInfo from "./components/molecules/contents/content-info";
import FooterBox from "./components/molecules/footer/footer-box";
import vueHeadful from "vue-headful";
import SignUpdate from "./components/molecules/contents/sign/sign-update";

Vue.use(Vuex)

export default {
  name: 'App',
    components: {
        SignUpdate,
      FooterBox,
      Category,
      Categories,
      "logo-texts":logoTexts,
      "user-icon":userIcon,
      "navigation":navigation,
      "content-box":ContentBox,
      "content-info":ContentInfo,
      "vue-headful":vueHeadful
    },
    data(){
      return {
          user_data_update:{
              username : "guest",
              pw: "",
              pw_m:"",
              email:""
          }
      }
    },
    created() {
      this.$store.commit("set_blog_info");
      this.$store.commit("set_categories_list");
    }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .nav_user_icon{
    width: 40px;
    height: 40px;
    top: 7px;
    left: 10px;
    display: inline-block;
    float: left;
  }
  .contents{
    transition: all .2s ease;
  }
  .user-info-btn{
    float: right;
    color: #666666;
    cursor: pointer;
  }
  .user-info-btn:hover{
    color: #4facfe;
  }
  #toggle-user-info{
    position: absolute;
    left: -9999px;
  }
  #toggle-user-info:checked ~ .update-form{
    display: none;
  }
</style>
