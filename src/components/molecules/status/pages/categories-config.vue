<template>
  <div class="categories-config">
    <!--title-->
    <div class="cc-title">
      <!--icon-->
      <h1 class="icon-tags"/>
      <!--text-->
      <h1>카테고리 관리</h1>
      <!--auth-->
      <auth-button :auth="'admin'" class="icon"/>
    </div>
    <!--content-->
    <div class="cc-content">
      <!--get-->
      <div class="container-outBox">
        <div class="get container">
          <h3>카테고리 목록</h3>
          <ul>
            <li class="item-category-list"
              v-for="(get_category, get_index) in this.$store.state.categories"
                :key="get_index"
            >
              {{get_category.name}}
            </li>
          </ul>
        </div>
      </div>
      <!--add-->
      <div class="container-outBox">
        <div class="add container">
          <h3>ADD</h3>
          <div class="add box">
            <span>카테고리 추가</span>
            <input type="text" placeholder="추가할 카테고리 이름 입력">
          </div>
          <save-btn class="save-btn"/>
        </div>
      </div>

      <!--update-->
      <div class="container-outBox">
        <div class="update container">
          <h3>UPDATE</h3>
          <div class="update box">
            <select v-model="update_select">
              <option v-for="(update_category, update_index) in this.$store.state.categories">{{update_category.name}}</option>
            </select>
            <span>선택한 카테고리의 이름을 다음으로 변경</span>
            <input type="text" placeholder="변경할 이름 입력">
          </div>
          <save-btn class="save-btn"/>
        </div>
      </div>

      <!--delete-->
      <div class="container-outBox">
        <div class="delete container">
          <h3>DELETE</h3>
          <div class="delete box">
            <select v-model="delete_select">
              <option v-for="(update_category, update_index) in this.$store.state.categories">{{update_category.name}}</option>
            </select>
            <span>선택한 데이터를 삭제합니다.</span>
          </div>

          <save-btn class="save-btn"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    import AuthButton from "../../../atoms/buttons/auth/auth-button";
    import SaveBtn from "../../../atoms/buttons/save-btn";
    export default {
        name: "categories-config",
        components: {SaveBtn, AuthButton},
        data(){
            return {
                update_select:"",
                delete_select:"",

            }
        }
    }
</script>

<style scoped>
  .categories-config{
    display: flex;
    flex-direction: column;
  }
  .cc-title{
    display: flex;
  }
  .cc-title > .icon-tags{
    line-height: 46px;
  }
  .cc-title > .icon{
    margin-top: 36px;
  }
  /*content*/
  .cc-content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 800px;
  }
  .container-outBox{
    margin: 5px;
    width: 390px;
    height: 390px;
    background: none;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    border-radius: 3px;
  }
  /*GET 박스*/
  .get.container{
    width: 360px;
    height: 310px;
  }
  .get.container > h3{
    text-align: left;
    margin-left: 15px;
  }
  .get.container > ul{
    list-style: none;
    text-align: left;
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
  .item-category-list{
    font-size: 20px;
    margin: 5px 0px;
  }

  /*모든 컨테이너*/
  .container{
    margin: 15px;
    position: relative;
    min-height: 310px;
    height: 100%;
    max-height: 360px;
  }
  .container > .save-btn{
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
  .box{
    display: flex;
    flex-direction: column;
    background: #333333;
    border-radius: 3px;
    padding: 10px;
    min-height: 100px;
  }
  .box > span{
    color: #999999;
    text-align: left;
  }
  .box > select{
    font-size: 20px;
    background: #333333;
    color: white;
    outline: #4facfe;
  }
  .box > input{
    font-size: 20px;
    border: none;
    background: none;
    padding: 5px;
    margin: 10px 0px;
    color: white;
    outline: none;
    border-bottom: 2px solid #4facfe;
  }
  .box > input::placeholder{
    color: #cccccc;
  }
  /*add 박스*/
  .add.container{
    text-align: left;
  }

  /*각 컨테이너*/
  .add.container{
  }
  .update.container{
  }
  .delete.container{
  }
</style>
