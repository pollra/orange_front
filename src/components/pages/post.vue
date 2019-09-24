<template>
  <content-box>
    <content-info slot="content-info">
      <span slot="content-parent">{{this.$store.state.board_info.category}}</span>
      <span slot="content-title">{{this.$store.state.board_info.title}}</span>
      <span slot="content-date">{{this.$store.state.board_info.date}}</span>
      <span slot="content-comment">{{this.$store.state.board_info.comment}}</span>
    </content-info>
    <div id="content-board" slot="contents">
      <template v-if="this.$store.state.board_info.contents === ''">
        <content-none></content-none>
      </template>
      <viewer class="viewer" v-model="this.$store.state.board_info.contents">
      </viewer>
    </div>
  </content-box>
</template>

<script>
  import ContentBox from '@/components/molecules/contents/content-box';
  import ContentInfo from '@/components/molecules/contents/content-info';
  import ContentNone from "../molecules/contents/content-none";

    export default {
        name: "post",
        components:{
            ContentNone,
            "content-box":ContentBox,
            "content-info":ContentInfo
        },
        methods:{
            // 블로그 정보를 가져옴
            get_blogInfo(){
                this.$store.commit("set_blog_info")
            },
            // 포스팅을 가져옴
            get_one_post(){
                const postNum = this.$route.params.num;
                this.$store.dispatch("get_one_post_action", postNum)
                    .then(()=>{
                        console.log("페이지 로드");
                    })
            },

        },
        created() {
            // 네비게이션 좌측 상단의 리다이렉트 버튼의 경로를 변경
            // this.$store.commit("page_redirect_update","/login");
            // 블로그와 포스팅 정보를 가져옴.
            this.get_blogInfo();
            this.get_one_post();
        }
    }
</script>

<style scoped>
  #content-board > p{
    margin-bottom: 10px;
  }
  .viewer{
    width: 100%;
  }
</style>
