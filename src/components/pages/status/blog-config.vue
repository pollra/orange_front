<template>
  <div id="blog-config">
    <!--title-->
    <div class="blog-config-title no-drag">
      <h1 class="icon-cog"/>
      <h1 class="config-title">블로그 설정</h1>
    </div>
    <!--content-->
    <div class="blog-config-content">
      <browser-title class="browser"/>
      <save-btn class="save-btn"/>
    </div>
    <label class="icon-help-circled" for="help-check-meta">브라우저 탭에 표시할 이름을 재설정합니다.</label>
    <input type="checkbox" id="help-check-meta" required="required">
    <div class="ex1">
      <span class="explanation no-drag">
        <h3>브라우저 탭에 표시할 이름을 재설정합니다.</h3>
        <span class="ex-in-title">"{{this.$store.state.blog_info.metaTitle}}"</span>값을 클릭하고 데이터를 수정한 뒤 오른쪽의 저장 버튼을 눌러 변경할 수 있습니다.
      </span>
    </div>
    <div class="under-line"/>
    <!--블로그 정보 수정-->
    <blog-status-update/>
    <label class="icon-help-circled" for="help-check-info">블로그 정보를 재설정합니다.</label>
    <input type="checkbox" id="help-check-info" required="required">
    <div class="ex2">
      <span class="explanation no-drag">
        <h3>블로그 정보를 재설정합니다.</h3>
        <span>원형의 이미지를 클릭하면 블로그 이미지를 수정할 수 있습니다.</span>
        <span><span class="ex-in-title">"{{this.$store.state.blog_info.title}}"</span> 값을 수정하면 블로그의 타이틀을 수정할 수 있습니다.</span>
        <span><span class="ex-in-ex">"{{this.$store.state.blog_info.explanation}}"</span> 값을 수정하면 블로그의 설명을 수정할 수 있습니다.</span>
        <span>텍스트 입력 후 오른쪽의 저장버튼을 눌러 변경사항을 저장할 수 있습니다.</span>
      </span>
    </div>
    <div class="under-line"/>
  </div>
</template>

<script>
    import BrowserTitle from "../../molecules/status/content/browser-title";
    import BlogStatusUpdate from "../../molecules/status/content/blog-status-update";
    import SaveBtn from "../../atoms/buttons/save-btn";
    export default {
        name: "blog-config",
        components: { SaveBtn, BlogStatusUpdate, BrowserTitle},
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
  #blog-config{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }
  .blog-config-title{
    display: flex;
    flex-direction: row;
  }
  .icon-cog{
    line-height: 45px;
  }
  .blog-config-content{
    margin-bottom: 20px;
    position: relative;
    display: flex;
  }
  .browser{
    width: 100%;
  }
  .save-btn{
    margin-left: 53px;
    margin-top: 8px;
  }
  .ex{
    text-align: left;
  }
  .ex-in-title{
    color: white;
    font-weight: bold;
  }
  .ex-in-ex{
    color: #4facfe;
    font-weight: bold;
  }
  h3{
    color: white;
  }
  .explanation{
    display: flex;
    color: #cccccc;
    margin: 5px 5px 5px 5px;
    flex-direction: column;
    text-align: left;
    transition: all ease .2s;
    background-image: linear-gradient(to bottom, #434343 0%, black 100%);
    border-radius: 5px;
    width: 800px;
    padding-left: 15px;
    padding-bottom: 30px;
  }
  .no-drag {
    -ms-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }
  .icon-help-circled{
    text-align: left;
    color: #005580;
    cursor: help;
  }
  .under-line{
    width: 820px;
    height: 1px;
    background: #999999;
    margin: 10px 0px;
  }
  #help-check-meta, #help-check-info{
    position: absolute;
    left: -9999px;
  }
  /* 탭 수정 열림 */
  #help-check-meta:checked ~ .ex1 > .explanation{
    opacity: 1;
    transform: translateY(10px);
    transition: opacity .1s ease, translateY .2s ease;
  }
  /* 탭 수정 열림 */
  #help-check-meta:checked ~ .ex1{
    height: 150px;
  }
  /* 탭 수정 닫힘 */
  #help-check-meta ~ .ex1 > .explanation{
    opacity: 0;
    transform: translateY(-10px);
  }
  /* 탭 수정 닫힘 */
  #help-check-meta ~ .ex1{
    height: 0px;
    transition: all .1s ease;
  }

  /* 정보수정 열림 */
  #help-check-info:checked ~ .ex2 > .explanation{
    opacity: 1;
    transform: translateY(10px);
    transition: opacity .1s ease, translateY .2s ease;
  }
  /* 정보수정 열림 */
  #help-check-info:checked ~ .ex2{
    height: 200px;
  }
  /* 정보수정 닫힘 */
  #help-check-info ~ .ex2{
    height: 0px;
    transition: all .1s ease;
  }
  /* 정보수정 닫힘 */
  #help-check-info ~ .ex2 > .explanation{
    opacity: 0;
    transform: translateY(-10px);
  }
</style>

