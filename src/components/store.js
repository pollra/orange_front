import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

Vue.use(Vuex);

const axios = require('axios');
axios.interceptors.request.use(function (config) {
  // console.log(config)
  config.validateStatus = function (status) {
    return status >= 200 && status < 501; // default
  }
  return config;
}, function (error) {
  return Promise.reject(error)
})

export const store = new Vuex.Store({
  state:{
    _location:"http://blog.pollra.com",
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
      title:"Pollra 블로그",
      explanation: "잊을만 하면 찾아오는 기억 저장소",
      imgPath: "",
      metaTitle:""
    },
    categories:[
      {
        num:1,
        owner:"pollra",
        name:"Hobby"
      },
      {
        num:2,
        owner:"pollra",
        name:"Programing"
      },
      {
        num:3,
        owner:"pollra",
        name:"Board"
      }
    ],
    board_info:{
      parent: "main",
      title: "포스팅을 확인할 수 없습니다.",
      date: "",
      comment: "",
      contents: ""
    },
    create_board_to_redirect:0,
    board_list:[
      {
        title:"Java",
        date:"19.08.18",
        uri:"1",
        img_path:"",
        category:"Hobby"
      },
      {
        title:"ㅅㄷㄴㅅ",
        date:"19.09.22",
        uri:"5",
        img_path:null,
        category:"programing"
      }
    ],
    // board_list_result:true,
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
      },
      result:false,
      message:"",
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
      },
      result: false
    },
    j_token:"",
    login_info:{
      name:"GUEST",
      date:""
    },
    listCount:{}
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
     * 블로그 정보 불러오기
     *
     * 서버에 blog_info 데이터를 요청하여 블로그의 정보를 가져옵니다.
     * @param state       vuex store
     */
    set_blog_info:(state)=>{
      axios.get(state._location+"/api/blog")
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
     *
     * @param state
     */
    set_categories_list:(state)=>{
      axios.get(state._location+"/api/categories/value/list")
        .then(function (response) {
          console.log(`수신한 정보[set_categories_list]:${response}\n ${JSON.stringify(response.data)}`);
          state.categories = response.data.data;
          if(!(JSON.stringify(response.status)==="200")){
            console.log(`카테고리 정보를 받아오지 못했습니다: ${response.message}`);
          }
        }).catch(function (error) {
          console.log('카테고리 데이터를 받아오는데 실패했습니다.');
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
        axios.post(state._location+"/api/users/check/id",postData)
          .then(function (response) {
            // console.log("수신 정보"+JSON.stringify(response));
            if(JSON.stringify(response.status)==="200") {
              state.signin_data.id.icon = "icon-ok";
            }else{
              console.log("아이디를 찾을 수 없습니다.")
              state.signin_data.id.msg = "아이디를 찾을 수 없습니다.";
              state.signin_data.id.icon = "icon-cancel";
            }
          })
    },
    sign_up_check_id:(state)=>{
      state.signup_data.id.msg = "처리중...";
      state.signup_data.id.icon = "icon-spin1 spin";
      let postData = new URLSearchParams();
      postData.append('username', state.signup_data.id.data)
      axios.post(state._location+"/api/users/check/id",postData)
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
      state.signin_data.result = false;
      let result = false;
      let postData = new URLSearchParams;
      let locate = 0;
      postData.append('username', state.signin_data.id.data);
      postData.append('password', state.signin_data.pw.data);
      axios.defaults.headers.common['Authorization'] = "";
      axios.post(state._location + "/api/users/login", postData,/*{validateStatus: function (status) {
          return status >= 200 && status < 501; // default
        },}*/)
      .then(function (response) {
        if(JSON.stringify(response.status)==="200") {
          state.j_token = response.data.data;
          state.login_info.name = response.data.message;
          // state.commit("set_j_token", response.data.Authorization);
          if(response.data.redirectLocate !== undefined){
            locate = response.data.redirectLocate;
          }
          state.signin_data.result = true;
          console.log(`로그인 성공했습니다 ${state.signin_data.result}`)
        }else{
          alert(response.data.message);
          state.signin_data.result = false;
          console.log(`로그인 실패했습니다 ${state.signin_data.result}`)
        }
      })
    },
    /**
     * 개인정보 수정
     *
     * @param state
     * @param payload
     *  email : 이메일 수정
     *  password : 비밀번호 수정
     */
    update_user_data_mutations:(state, payload)=>{
      // payload 로 원하는 옵션을 선택할 수 있게 설정
      // email 수정, password 수정.
      // email 수정 기능 받는 데이터 : username(id), email
      // password 수정 기능 받는 데이터 : username(id), password, password-match
      let option = payload[0];
      if(payload.length <= 2) alert("존재하지 않는 명령입니다.");
      let postData = new URLSearchParams;
      axios.defaults.headers.common['Authorization'] = state.j_token;
      console.log(axios.default)
      postData.append("username",payload[1]);
      switch (option) {
        case "email":
          postData.append("email",payload[2]);
          break;
        case "password":
          postData.append("password",payload[2]);
          postData.append("password-match",payload[3]);
          break;
        default:
      }
      axios.put(state._location+"/api/users/type/"+option, postData)
        .then(response =>{
          console.log(`update_user_data_mutations -> axios.put[${state._location}/api/users/type/+${option}] 실행`)
          const result = response.data;
          if(JSON.stringify(response.status)==="200"){ // 성공
            alert(result.message);
          }else{ // 실패
            alert(result.message);
          }
        });
    },
    /**
     * 회원가입
     * @param state
     * @param payload
     */
    signup_user: (state, payload) => {
      let postData = new URLSearchParams;
      postData.append("username",payload[0]);
      postData.append("password",payload[1]);
      postData.append("password-match",payload[2]);
      postData.append("email",payload[3]);
      axios.post(state._location+"/api/users",postData)
        .then(function (response) {
          // console.log("ㅇㅂㅇ!: "+response);
          if(response.status === 200){
            // this.$router.push("/login");
            state.signup_data.result = true;
          }else{
            console.log("회원가입 실패: "+response.data.message);
            alert(response.data.message)
            state.signup_data.result = false;
          }
        })
        .catch(function (err) {
          console.log("회원가입 실패: "+err.message);
          state.signup_data.result = false;
        })
    },
    /**
     * 로그아웃
     * @param state
     */
    logout_user:state =>{
      axios.defaults.headers.common['Authorization'] = state.j_token;
      axios.post(state._location+"/api/users/logout")
        .then(function (response) {
          const result = response.data;
          if(JSON.stringify(response.status)==="200") { // 성공
            state.j_token = "";
            alert(result.message);
          }else{
            state.j_token = "";
            console.log(result.message);
          }
        })
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
    },
    /**
     * Post 관련 요청
     */

    /**
     * 포스팅 작성 요청
     * title : 글 제목
     * post_content : 글 내용
     * date : 날짜 데이터. 서버에서 처리함
     * owner : 작성자. 서버에서 처리
     *
     * @param state
     * @param payload
     *  [0] : title : 글 제목
     *  [1] : post_content : 글 내용
     */
    post_insert_mutations:(state, payload) => {
      let result = 0;
      let postData = new URLSearchParams;
      postData.append("title",payload[0]);
      postData.append("content",payload[1]);
      postData.append("category",payload[2]);
      axios.defaults.headers.common['Authorization'] = state.j_token;
      axios.post(state._location+"/api/posts",postData)
        .then(function (response) {
          if(response.status === 200){
            console.log("post_insert : OK");
            // 요청을 처리한 결과는 보여질 페이지의 위치
            state.create_board_to_redirect = response.data.data;
          }
        })
        .catch(function (err) {
          console.log("err.message : "+err.message);
          console.log("JSON.stringify(err).message : "+JSON.stringify(err).message);
          // alert(err.message);
          result = -1;
        })
      return result;
    },
    /**
     * 포스트 리스트를 가져옴
     * @param state
     * @param payload
     */
    get_post_list_mutations:(state, payload) => {
      axios.get(state._location + "/api/posts/list/o/"+payload)
        .then(function (response) {
          console.log(`[get_post_list_mutations]:${typeof response.status}`)
          if(response.status === 200){
            state.board_list_result = true;
            state.board_list = response.data.data;
            console.log("[/api/posts/list/"+payload+"] 요청 받은 데이터");
          }else{
            state.board_list_result = false;
            state.board_list = [];
          }
        })
    },
    /**
     * 카테고리별 리스트 보유 현황 업데이트
     * @param state
     */
    update_list_count_mutation:(state) => {
      let list = state.board_list;          // array
      let categories = state.categories;    // array
      let listCount = {};
      let categoriesList = [];
      console.log(categories[0].name);
      //
      for(let i=0; i<categories.length; i++){
        categoriesList.push(categories[i].name.toLowerCase());
        listCount[categoriesList[i]] = 0;
      }
      for(let j=0; j<categoriesList.length; j++){
        console.log(`categoriesList[${j}]: `+categoriesList[j])
        for(let k=0; k<list.length; k++){
          // console.log(`${list[k].category.toLowerCase()} :: ${categoriesList[j]}`);
          if(list[k].category.toLowerCase() === categoriesList[j]) listCount[categoriesList[j]]++;
        }
      }
      // return listCount;
      state["listCount"] = listCount;
    },
    /**
     * 포스팅 하나를 가져옴
     * @param state   vuex
     * @param payload currentPageParam:num
     */
    get_one_post_mutation:(state, payload) => {
      let currentPageNum = payload;
      axios.get(state._location+"/api/posts/one/"+currentPageNum)
        .then(function (response) {
          const context = response.data;
          console.log(response);
          if(response.status === 200){
            console.log(`${state._location+"/api/posts/one/"+currentPageNum} 으로의 요청 결과 성공`);
            console.log(`[get_one_post] 받은 데이터: ${context.data}`)
            state.board_info = context.data;
          }else{
            console.log(`${state._location+"/api/posts/one/"+currentPageNum} 으로의 요청 결과 실패`);
          }
        })

    },
    /**
     * 보드 리스트 기본셋팅
     * 보드 리스트로 갔을때 현재 정보에 영향을 끼치지 않게 설정
     */
    set_post_list_default_mutation:state => {
      state.board_info.date = "";
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
      return new Promise(function (resolve) {
        context.commit("signup_user", payload);
        setTimeout(function () {
          resolve();
        }, 100)
      });
    },
    login_action:function (context) {
      return new Promise((resolve, reject) => {
        context.commit("login_mutations")
        setTimeout(()=>{
          resolve();
        }, 200)
      })
    },
    getPostList_action: function (context, payload) {
      return new Promise((resolve, reject) => {
        context.commit("get_post_list_mutations", payload);
        setTimeout(()=>{
          resolve();
        },500)
      })
    },
    update_list_count_action:function (context) {
      return new Promise(resolve => {
        context.commit("update_list_count_mutation");
        setTimeout(()=>{
          resolve();
        },100)
      })
    },
    get_one_post_action:function (context, payload) {
      return new Promise(resolve => {
        context.commit("get_one_post_mutation", payload)
        setTimeout(()=>{
          resolve();
        }, 100)
      })
    },
    post_insert_action:function (context, payload) {
      return new Promise(resolve => {
        context.commit("post_insert_mutations",payload)
        setTimeout(()=>{
          resolve();
        }, 1000)
      })
    }
  },
  getters:{
    login_data:(state)=>{
      return state.signin_data;
    },
    login_result:(state, getters)=>{
      return getters.login_data.result;
    }
  }
});
