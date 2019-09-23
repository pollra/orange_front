<template>
  <div id="update-form">
    <div class="logo-box">
      <div class="icon-cog-alt logo-icon"></div>
      <div class="logo-component">
        <div class="logo-component-title">
          <span >{{username}}</span>
        </div>
        <div class="logo-component-content">
          <span v-model="date">{{date}}</span>
        </div>
        <div class="logo-component-underbar"></div>
      </div>
    </div>
    <div class="form-box">
      <!-- ID -->
      <!-- PW -->
      <div class="data-box">
        <div class="data-logo">
          <span class="data-icon icon-key"></span>
          <span class="data-logo-title">비밀번호</span>
        </div>
        <div class="data-component">
          <input class="data-component-value" id="pw-input" v-model="pw" type="password" required="required"/>
          <div class="data-component-underbar"></div>
          <input class="data-component-value" id="pw-match" v-model="pw_m" type="password" required="required"/>
          <div class="data-component-underbar" id="pw-match-bar"></div>
          <button class="update-action password-button" @click="update_user_data('password')">변경</button>
        </div>
      </div>
      <div class="data-box-underbar"></div>
      <!-- Email -->
      <div class="data-box">
        <div class="data-logo">
          <span class="data-icon icon-at"></span>
          <span class="data-logo-title">이메일</span>
        </div>
        <div class="data-component">
          <input class="data-component-value" id="email-input" v-model="email" required="required"/>
          <div class="data-component-underbar"></div>
          <button class="update-action email-button" @click="update_user_data('email')">변경</button>
        </div>
      </div>
    </div>
    <div id="logout-box">
      <button id="logoutBtn" @click="logout_user">로그아웃</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sign-update",
        props:['username', 'date'],
        data(){
            return {
                pw:"",
                pw_m:"",
                email:"",
            }
        },
        methods:{
            update_user_data:function(option){
                console.log(`update_user_data[option: ${option}] start`);
                console.log(`username: ${this.$store.state.login_info.name}`);
                console.log(`this.current_pw: `+this.current_pw);
                let data = "";
                let password = document.getElementById("pw-input").value;
                // let user = this.$store.state.login_info.name;
                // console.log(`password: ${password}, username: ${user}`);
                switch (option) {
                    case "email":
                        data = [option, this.username, this.email];
                        this.email = "";
                        break;
                    case "password":
                        data = [option, this.username, this.pw, this.pw_m];
                        this.pw = "";
                        this.pw_m = "";
                        break;
                    default:
                        data = [option, this.username];
                }
                console.log(`Activation userUpdate logic: ${data}`);
                this.$store.commit("update_user_data_mutations",data);
            },
            logout_user:function () {
                this.$store.commit("logout_user");
            }
        },
        computed:{
            current_pw:()=>{
                return this.pw;
            },
        },
        created() {
        }
    }
</script>

<style scoped>
  #update-form{
    display: flex;
    flex-direction: column;
    position: fixed;
    background: #333333;
    top: 61px;
    width: 300px;
    /*height: 170px;*/
    padding-bottom: 30px;
    border-radius: 0px 0px 5px 0px;
  }
  .form-box{
    display: flex;
    flex-direction: column;
  }
  .logo-icon{
    color: white;
    font-size: 70px;
  }
  .logo-box{
    display: flex;
    flex-direction: row;
    overflow: hidden;
    height: 60px;
    margin: 10px;
    position: relative;
  }
  .logo-component{
    /*background: #666666;*/
    position: absolute;
    right: 5px;
    bottom: 0px;
    text-align: right;
    max-width: 150px;
    overflow: hidden;
  }
  .logo-component-title{
    color: white;
    font-size: 22px;
    letter-spacing: 2px;
  }
  .logo-component-content{
    color: #cccccc;
    font-size: 14px;
    letter-spacing: 5px;
  }
  .logo-component-underbar{
    width: 160px;
    height: 2px;
    background-image: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    margin-top: 2px;
  }
  .data-box{
    display: flex;
    flex-direction: row;
  }
  .data-component{
    display: flex;
    flex-direction: column;
    position: relative;
  }

  #pw-input:valid ~ #pw-match {
    display: block;
    /*display: block;*/
  }
  #pw-input:valid ~ #pw-match-bar {
    display: block;
    /*display: block;*/
  }
  #update-form > #pw-input:valid ~ #update-form{
    height: 200px;
  }
  #pw-match-bar{
    display: none;
  }
  #pw-match{
    display: none;
  }
  #pw-match:valid ~ .password-button {
    display: block;
  }

  .update-action{
    display: none;
    position: absolute;
    right: -42px;
    height: 54px;
    width: 35px;
    background: #999999;
    border: none;
    border-radius: 3px;
    transition: .2s all ease;
    color: white;
    cursor: pointer;
  }
  .data-logo{
    color: white;
    width: 100px;
    text-align: left;
    margin-left: 10px;
  }
  .data-component-underbar{
    width: 100%;
    height: 1px;
    margin-bottom: 3px;
    background: #999999;
  }
  .data-component-value{
    background: none;
    border-radius: 3px 3px 0px 0px;
    font-size: 16px;
    border: 0px;
    color: white;
    padding: 3px;
    width: 130px;
    /*margin: 5px 1px 0px 3px;*/
    margin-left: 5px;
  }
  .data-component-value:valid {
    background: #383838;
  }
  .data-box-underbar{
    width: 100%;
    height: 5px;
  }
  .em-update-action{

  }
  .email-button{

  }
  .email-button{
    display: none;
    height: 26px;
  }
  .data-component-value:valid ~ .email-button{
    display: block;
  }
  #logout-box{
    width: 100%;
    min-height: 50px;
    display: flex;
  }
  #logoutBtn{
    width: 250px;
    margin: 10px auto;
    border: none;
    border-radius: 3px;
    background: #cccccc;
  }
  #logoutBtn:hover{
    background: #666666;
    transition: all .2s ease;
    color: white;
    font-weight: bold;
    cursor: pointer;
    width: 260px;
  }
</style>
