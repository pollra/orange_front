<template>
  <content-box>
    <content-info slot="content-info">
      <div slot="content-parent">
        <select v-model="category">
          <option v-for="(item, index) in this.$store.state.categories" v-bind:value="item.num" :key="index">
            {{item.name}}
          </option>
        </select>
      </div>
      <span class="icon-pencil" slot="content-title" v-model="title"></span>
      <input slot="content-title" id="content-title"/>
      <div slot="content-title" class="underline"></div>
    </content-info>
    <div id="content-board" slot="contents">
      <span class="message icon-down-hand">
        오른쪽에서 작성한 마크다운 코드가 이곳에서 보여집니다.
        <span class="icon-down-hand"></span>
      </span>
      <viewer v-model="text" id="viewer"></viewer>
      <div class="editor-box">
        <editor v-model="text" id="editor"></editor>
        <button id="post-action-btn" class="icon-pencil" slot="contents">
          작성
        </button>
      </div>
    </div>
  </content-box>
</template>

<script>
    import ContentBox from '@/components/molecules/contents/content-box';
    import ContentInfo from '@/components/molecules/contents/content-info';
    import ContentNone from "../molecules/contents/content-none";
    import ListBox from "../atoms/listBox/listBox";

    export default {
        name: "post-create",
        components:{
            ListBox,
            ContentNone,
            "content-box":ContentBox,
            "content-info":ContentInfo
        },
        data(){
            return {
                title: "",
                text:"",
                category:""
            }
        },
        methods:{
            one_post_insert(){
                let result = this.$store.commit(
                    "post_insert_mutations",
                    [this.title,this.text,this.category]);
                this.$router.push("/post/"+result);
            }
        }
    }
</script>

<style scoped>
  #content-title{
    font-size: 20px;
    border: none;
    border-radius: 3px;
    background: none;
    outline: none;
    color: white;
    text-align: center;
    width: 300px;

  }
  .underline{
    width: 340px;
    height: 2px;
    background: #4facfe;
    margin: 5px auto;
  }
  .icon-pencil{
    font-size: 18px;
  }
  #viewer{
    width: 960px;
    min-height: 500px;
    border-radius: 3px;
    border: 1px solid #ececec;
  }
  .editor-box{
    width: 30%;
    min-height: 490px;
    position:sticky;
    display: inline-table;
    top: 80px;
  }
  #editor{
    min-height: 490px;
    margin-left: 20px;
  }
  #content-board{
    display: flex;
    flex-direction: row;
    width: 1400px;
    margin: 30px auto;
    position: relative;
  }
  .message{
    position: absolute;
    color: #999999;
    left: 240px;
    top: -20px;
  }
  #post-action-btn{
    background: #4facfe;
    border-radius: 3px;
    border: none;
    padding: 10px 30px;
    color: white;
    font-size: 16px;
    letter-spacing: 5px;
    margin-top: 10px;
    float: right;
  }
</style>
