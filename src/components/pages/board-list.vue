<template>
  <content-box>
    <content-info slot="content-info">
      <span slot="content-parent">{{this.$store.state.board_info.parent}}</span>
      <span slot="content-title">{{this.$route.params.category}}</span>
    </content-info>
    <div
      slot="contents"
      class="board-list"
      v-if="currentCategory()"
    >
      <div class="board-none-box">
        <p class="icon-help-circled"></p>
        <span>포스팅이 존재하지 않습니다.</span>
      </div>
    </div>
    <div
      slot="contents"
      class="board-list"
      v-if="!currentCategory()"
    >
        <div
          is="board-item"
          v-for="(board, index) in this.$store.state.board_list"
          :key="index"
          :imgPath="board.img_path"
          :uri="board.uri"
          :name="board.category"
        >
          <template slot="item-date">{{board.date}}</template>
          <template slot="item-title">{{board.title}}</template>
        </div>
    </div>
  </content-box>
</template>

<script>
  import ContentBox from '@/components/molecules/contents/content-box';
  import ContentInfo from '@/components/molecules/contents/content-info';
  import BoardItem from "../molecules/contents/board-item";
  import Axios from 'axios';

  export default {
      name: "category",
      components:{
          BoardItem,
          "content-box":ContentBox,
          "content-info":ContentInfo
      },
      methods:{
          /*
          * URI 로 직접 접속을 시도했을 때 해당 URI 가 실제 존재하는
          * 페이지 인지 검사하고 실제 존재하는 경로 일 경우 실제 경로를
          * 리턴하고 존재하지 않는다면 "존재하지 않는 경로입니다" 리턴.
          */
          is_realPath(){
              this.$store.commit("update_currentPath",this.$route.params.category);
          },
          get_board_list(){
              let currentPath = this.$route.params.category;
              this.$store.commit("set_board_list", currentPath);

          },

          /*
          * 넘어온 인자의 첫 글자를 대문자로 변경
          * */
          capitalizeFirstLetter(string) {
              return string.charAt(0).toUpperCase() + string.slice(1);
          },
          get_postsList(){
              // console.log(this.$route.params.category);
              this.$store.dispatch("getPostList_action","admin")
                  .then(()=> {
                      this.$store.dispatch("update_list_count_action");
                  })
          },
          currentCategory:function(item){
              // console.log(`listCount: ${this.$store.state.listCount[this.$route.params.category.toLowerCase()] === 0}`);
              if(this.$store.state.listCount === undefined) return true;
              return this.$store.state.listCount[this.$route.params.category.toLowerCase()] === 0;
          }
      },
      created(){
          this.get_postsList();
          // this.currentCategory();
      },
      computed:{
      }
  }
</script>

<style scoped>
  .board-list{
    display: flex;
    min-height: 300px;
    flex-flow: row wrap;
  }
  .board-none-box{
    width: 100%;
  }
  .board-none-box > p{
    font-size: 200px;
    color: #0088cc;
  }
  .board-none-box > span{
    font-size: 22px;
    color: #0088cc;
  }
</style>
