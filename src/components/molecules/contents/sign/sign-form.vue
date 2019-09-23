<template>
    <div id="signup-form">
      <div class="signup-logo">
        <div class="icon-user-plus"></div>
      </div>
      <div id="signup-data">
        <div>
          <label for="username">아이디</label>
          <input id="username" type="text" v-model="user_account.id" @keyup="{set_login_data_id}"/>
          <span :class="this.$store.state.signup_data.id.icon"></span>
          <div class="under-line"></div>
        </div>
        <div>
          <label for="password">비밀번호</label>
          <input id="password" type="text" v-model="user_account.pw"/>
          <div class="under-line"></div>
        </div>
        <div>
          <label for="password-match">비밀번호 확인</label>
          <input id="password-match" type="password" v-model="user_account.pw_m"/>
          <div class="under-line"></div>
        </div>
        <div>
          <label for="email">이메일</label>
          <input id="email" type="text" v-model="user_account.email"/>
          <div class="under-line"></div>
        </div>
      </div>
      <button id="signup-button" @click="go_signIn()">회원가입</button>
    </div>
</template>

<script>
    import CustomAlert from "../popup/custom-alert";
    export default {
        name: "sign-form",
        components: {CustomAlert},
        data(){
            return {
                user_account:{
                    id:"",
                    pw:"",
                    pw_m:"",
                    email:""
                }
            }
        },
        methods:{
            go_signIn(){
                this.$store.dispatch("signup_action",[
                    this.user_account.id,
                    this.user_account.pw,
                    this.user_account.pw_m,
                    this.user_account.email
                ]).then(function () {
                    this.$router.push("/login")
                })
            }
        },
        computed:{
            set_login_data_id(){
                this.$store.state.signup_data.id.data = this.id;
                this.$store.commit("sign_up_id_standby");
                this.$store.commit('sign_up_count_id');
                // console.log(`set_login_data_id[${this.$store.state.sign_data.id_count}]`);
                const self = this;
                setTimeout(function () {
                    console.log("ㅇㅅㅇ??? 1")
                    if(self.$store.state.signup_data.id.count <= 0){
                        console.log("ㅇㅅㅇ??? 2");
                        self.$store.commit("sign_up_check_id");
                    }
                },810);
                console.log("ㅇㅅㅇ??? 3");
                return this.$store.state.signup_data.id.data;
            },
        }
    }
</script>

<style scoped>
  #signup-form{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #cccccc;
    border-radius: 5px;
    width: 500px;
    min-height: 700px;
  }
  #signup-data{
    margin: 10px;
    display: flex;
    flex-direction: column;
  }
  #signup-data > div{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  #signup-data > div > span{
    position: absolute;
    right: 10px;
    top: 49px;
  }
  .spin{
    transform: rotate(1000rad);
    transition: all 300s linear;
    margin:0px;
    display: inline-flex;
  }
  #signup-data > div > input {
    padding: 8px;
    border-radius: 5px;
    /*border: 1px solid #cccccc;*/
    border: none;
    outline: none;
  }
  #signup-data > div > input:focus{
    /*border: 1px solid #0088cc;*/
    /*text-shadow: 0px 0px 3px #4facfe;*/
    transition: all .2s ease;
  }
  #signup-data > div > label{
    text-align: left;
    margin: 15px 10px 5px 10px;
  }

  #signup-button{
    position: absolute;
    bottom: 10px;
    width: 480px;
    left: 10px;
    padding: 15px;
    border: none;
    background: #4facfe;
    border-radius: 5px;
    color: white;
    font-size: 16px;
  }
  .icon-spin1{
    right: 15px;
    top:26px;
  }
  .icon-spin1:before{
    color:orange;
  }
  .icon-cancel{
    right: 15px;
    top:26px;
  }
  .icon-cancel:before{
    color: crimson;
  }
  .icon-ok{
    right: 15px;
    top:26px;
  }
  .icon-ok:before{
    color: #42b983;
  }
  .signup-logo{
    margin: 30px auto 0px auto;
  }
  .icon-user-plus{
    font-size: 80px;
    color: #4facfe;
    /*text-shadow: 0px 0px 3px #4facfe;*/
  }
  #username:focus ~ .under-line,
  #password:focus ~ .under-line,
  #password-match:focus ~ .under-line,
  #email:focus ~ .under-line{
    width: 473px;
    height: 2px;
    /*background: #42b983;*/
    background-image: linear-gradient(to right, #43e97b -50%, #38f9d7 100%);
    margin: 0px auto;
    transition: all 2s ease;
  }
  .under-line{
    width: 473px;
    height: 2px;
    /*background: #0088cc;*/
    background-image: linear-gradient(to left, #4facfe -50%, #00f2fe 100%);
    margin: 0px auto;
    transition: all 2s ease;
  }
</style>
