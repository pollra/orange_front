import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import VueRouter from "vue-router";

Vue.use(Vuex);


export const store = new Vuex.Store({
  state:{
    _location:"http://localhost",
    page_status:{
      icon_redirect: {
        login_page: "/",
        other_page: "/login"
      },
      alert_data:{
        text:"알림",
      }
    },
    blog_info:{
      name:"Pollra 블로그",
      explanation: "잊을만 하면 찾아오는 기억 저장소",
      imgPath: "../static/test/icon/content02.png"
    },
    categories:[{
        num:1,
        owner:"pollra",
        name:"Hobby"
      }],
    board_info:{
      parent: "main",
      title: "포스팅을 확인할 수 없습니다.",
      date: "",
      comment: "",
      contents: ""
    },
    board_list:[
      // {
      //   title:"Java",
      //   date:"19.08.18",
      //   uri:"1",
      //   img_path:""
      // },
    ],
    currentPath:"",
    // 로그인 데이터
    signin_data:{
      id:{
        data:"",
        msg:"",
        count:0,
        classes:"",
        icon:""
      },
      pw:{
        data:""
      }
    },
    // 가입 데이터
    signup_data:{
      id:{
        data:"",
        msg:"",
        count:0,
        classes:"",
        icon:""
      },
      pw:{
        data:"",
        msg:"",
        count:0,
        classes:"",
        icon:""
      },
      pw_m:{
        data:"",
        msg:"",
        count:0,
        classes:"",
        icon:""
      },
      email:{
        data:"",
        msg:"",
        count:0,
        classes:"",
        icon:""
      }
    },
    j_token:""
  },
  mutations:{
    /**
     * 서버에 board_list 데이터를 요청하여 특정 카테고리 포스팅 리스트를 가져옵니다.
     * @param state       vuex store
     * @param currentPath 현재 페이지의 경로
     */
    set_board_list:(state, currentPath) =>{
      console.log(`set_board_list[${currentPath}]`);
      axios.get(state._location+"/boards/"+currentPath)
        .then(function (response) {
          state.board_list = response;
          console.log(`get_board_list[success]: ${response}`)
        })
        .catch(function (error) {
          state.board_list = [];
          console.log(`get_board_list[fail]: ${error}`);
        })
    },
    /**
     * 서버에 blog_info 데이터를 요청하여 블로그의 정보를 가져옵니다.
     * @param state       vuex store
     */
    set_blog_info:(state)=>{
      axios.get(state._location+"/api/public/blog")
        .then(function (response) {
          console.log("수신한 정보[get_blogInfo] : "+JSON.stringify(response.data));
          state.blog_info = response.data;
        })
        .catch(function (error) {
          /*에러 발생 시 서버로 에러 전송*/
          console.log("블로그 정보를 불러오는데 실패 했습니다.");
        })
    },
    /**
     * 카테고리 정보를 가져옵니다.
     * @param state
     */
    set_categories_list:(state)=>{
      axios.get(state._location+"/api/public/categories/list")
        .then(function (response) {
          console.log(`수신한 정보[set_categories_list]: ${JSON.stringify(response.data)}`)
          state.categories = response.data;
        }).catch(function (error) {
          console.log('카테고리 데이터를 받아오는데 실패했습니다.');
          state.categories = [];
        })
    },
    /**
     * 로그인 데이터 동기화
     * @param state   저장소
     * @param target  대상 ( id, pw )
     * @param value   변경하고자 하는 값
     */
    set_sign_data:(state, target_value)=>{
      const target = target_value[0];
      const value = target_value[1];
      console.log(`set_login_data : ${target}, ${value}`)
      if(target === "id"){
        state.signin_data.id.data = value;
      }
      if(target==="pw"){
        state.signin_data.pw.data = value;
      }
    },
    /**
     * 아이디가 존재하는지 확인합니다.
     * @param state
     */
    sign_check_id:(state)=>{
        state.signin_data.id.msg = "처리중...";
        state.signin_data.id.icon = "icon-spin1 spin";
        let postData = new URLSearchParams();
        postData.append('username', state.signin_data.id.data)
        axios.post(state._location+"/api/public/users/id",postData)
          .then(function (response) {
            // console.log("수신 정보"+JSON.stringify(response));
            state.signin_data.id.icon = "icon-ok";
          })
          .catch(function (error) {
            console.log("아이디를 찾을 수 없습니다.")
            state.signin_data.id.msg = "아이디를 찾을 수 없습니다.";
            state.signin_data.id.icon = "icon-cancel";
          })
    },
    sign_up_check_id:(state)=>{
      state.signup_data.id.msg = "처리중...";
      state.signup_data.id.icon = "icon-spin1 spin";
      let postData = new URLSearchParams();
      postData.append('username', state.signup_data.id.data)
      axios.post(state._location+"/api/public/users/id",postData)
        .then(function (response) {
          // console.log("수신 정보"+JSON.stringify(response));
          state.signup_data.id.icon = "icon-ok";
        })
        .catch(function (error) {
          console.log(error.message)
          state.signup_data.id.msg = "아이디를 찾을 수 없습니다.";
          state.signup_data.id.icon = "icon-cancel";
        })
    },

    /**
     * 로그인
     * @param state
     */
    login_mutations:(state)=>{
      // j_token
        let result = false;
        let postData = new URLSearchParams;
        let locate = 0;
        postData.append('username', state.signin_data.id.data);
        postData.append('password', state.signin_data.pw.data);
        axios.defaults.headers.common['Authorization'] = "";
        console.log("ㅇㅅㅇa1");
        axios.post(state._location+"/api/authenticate", postData)
          .then(function (response) {
            console.log("ㅇㅅㅇa2");
            locate = 0;
            state.j_token = response.data.Authorization;
            // state.commit("set_j_token", response.data.Authorization);
            console.log("ㅇㅅㅇa3");
            console.log("ㅇㅅㅇa3: "+state.j_token);
            if(response.data.redirectLocate !== undefined){
              console.log("ㅇㅅㅇa4");
              locate = response.data.redirectLocate;
            }
            console.log("ㅇㅅㅇa5");
            // this.$router.push({name:'Post',params:{num:locate}})
            // 페이지 이동
            console.log("ㅇㅅㅇa6");
            result = true;
          }).catch(function (err) {
            console.log("ㅇㅅㅇa7");
            result = false;
            console.log(err);
        })
        return result;
    },
    set_j_token:(state, payload)=>{
      state.j_token = payload;
    },
    sign_id_standby:(state)=>{
      state.signin_data.id.icon = "";
    },
    sign_up_id_standby:(state)=>{
      state.signin_data.id.icon = "";
    },
    sign_count_id:(state)=>{
      state.signin_data.id.count++;
      state.signin_data.id.msg = "사용자의 입력을 기다리고있습니다...";
      state.signin_data.id.class = "";

      setTimeout(function () {
        state.signin_data.id.count--;
      },500)
    },
    sign_up_count_id:(state)=>{
      state.signup_data.id.count++;
      state.signup_data.id.msg = "사용자의 입력을 기다리고있습니다...";
      state.signup_data.id.class = "";

      setTimeout(function () {
        state.signin_data.id.count--;
      },500)
    },
    page_redirect_update:(state,payload)=>{
      state.page_status.icon_redirect = payload;
    }
  },
  actions:{
    set_sign_data:function (context, payload){
      context.commit('set_sign_data', payload);
    },
    check_sign_data_id:function (context, payload) {
      context.commit('sign_check_id', payload);
    },
    signup_action:function (context, payload) {
      let result = false;
      let postData = new URLSearchParams;
      postData.append("username",payload[0]);
      postData.append("password",payload[1]);
      postData.append("password-match",payload[2]);
      postData.append("email",payload[3]);
      /*console.log(`username ${payload[0]}`);
      console.log(`password ${payload[1]}`);
      console.log(`password-match ${payload[2]}`);
      console.log(`email ${payload[3]}`);
      console.log(`location : ${context._location}`)*/
      axios.post("http://localhost/api/public/users",postData)
        .then(function (response) {
          // console.log("ㅇㅂㅇ!: "+response);
          if(response.status === 200){
            // this.$router.push("/login");
            result = true;
          }
        })
        .catch(function (err) {
          console.log("ㅇㅅㅇ? : "+err.message);
          result = false;
        })
      return result;
    },
    login_action:function (context) {
      context.commit("login_mutations");
    }
  }
});
