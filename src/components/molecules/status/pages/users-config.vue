<template>
  <div class="users-config">
    <div class="status-title">
      <h1 class="title-icon icon-users"/>
      <h1>회원 관리</h1>
      <auth-button class="title-auth" :auth="'admin'"/>
    </div>
    <div class="status-data">
      <div class="data-title">
        <h3>회원 목록</h3>
        <div class="title-line"/>
      </div>
      <div class="data-ex">
        <span class="ex-auth">AUTH</span>
        <span class="ex-id">ID</span>
        <span class="ex-email">EMAIL</span>
        <span class="ex-locked">LOCKED</span>
      </div>
      <div id="data-content-box" class="data-content-box">
        <li
          class="data-content"
          v-for="(user, index) in this.currentPage"
        >
          <div class="ex-auth"><auth-button :auth="user.auth"/></div>
          <div class="ex-id"><span>{{user.id}}</span></div>
          <div class="ex-email"><span>{{user.email}}</span></div>
          <div class="ex-locked">
            <lock-btn :block="user.locked"/>
          </div>
        </li>
      </div>
      <!--페이징 버튼-->
      <div class="paging-btns">
        <div>
          <button
            class="angle-btns"
            @click="goToPage((index - 1) > 0 ? (index - 1):0)">
            <span class="icon-angle-left"/>
          </button>
        </div>
        <div
          v-for="(item, index) in this.usersData"
        >
          <button
            @click="goToPage(index)"
            class="page-btns"
            :class="currentIndex(index)">
            {{index+1}}
          </button>
        </div>
        <div>
          <button
            class="angle-btns"
            @click="goToPage((index + 1) < usersData.length ? (index + 1):(usersData.length-1))">
            <span class="icon-angle-right"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import AuthButton from "../../../atoms/buttons/auth/auth-button";
    import BlockButton from "../../../atoms/buttons/auth/block-button";
    import LockBtn from "../../../atoms/buttons/auth/lock-btn";
    export default {
        name: "users-config",
        data(){
            return {
                index: 0,
                usersData:[],
                currentPageUsersData:[]
            }
        },
        components: {LockBtn, BlockButton, AuthButton},
        methods:{
            goToPage(index) {
                this.index = index;
                this.currentPageUsersData = this.usersData[index];
            },
            dataSet: function () {
                this.usersData = this.$store.getters.paging_users;
                this.currentPageUsersData = this.$store.getters.paging_users[this.index];
            },
            currentIndex(index){
                return index === this.index ? 'currentIndex' : ''
            },
            wheelAction(event){
                console.log(`휠 액션: index[${this.index}] / pageData[${this.usersData.length+1}] `);
                console.log(`이벤트: ${event}`);
                this.index < this.usersData.length-1 ? this.index++ : this.index = 0;
                this.currentPageUsersData = this.usersData[this.index];
            },
            createWheel(){
                const self = this;
                const target = 'data-content-box';
                const wheel = {
                    down:"wheelDown",
                    up: "wheelUp"
                }
                window.addEventListener('wheel', function(event)
                {
                    if (event.deltaY < 0){
                        console.log(`scrolling up: ${self.index}`);
                        document.getElementById(target).classList.add(wheel.up);
                        setTimeout(function () {
                            // 가만히 있음
                            self.index > 0 ? self.index-- : self.index = self.usersData.length-1;
                            self.currentPageUsersData = self.usersData[self.index];
                            setTimeout(function () {
                                document.getElementById(target).classList.remove(wheel.up);
                            },80)
                        }, 80);
                        // document.getElementById('status').textContent= 'scrolling up';
                    }
                    else if (event.deltaY > 0){
                        console.log(`scrolling down: ${self.index}`);
                        // 아래로 사라짐
                        document.getElementById(target).classList.add(wheel.down);
                        setTimeout(function () {
                            // 가만히 있음
                            self.index < self.usersData.length-1 ? self.index++ : self.index = 0;
                            self.currentPageUsersData = self.usersData[self.index];
                            setTimeout(function () {
                              document.getElementById(target).classList.remove(wheel.down);
                            },80)
                        }, 80);
                        // document.getElementById('status').textContent= 'scrolling down';
                    }
                });
            }
        },
        computed:{
            currentPage:function () {
                return this.currentPageUsersData;
            },
        },
        created() {
            /*데이터 셋팅*/
            this.dataSet();
            this.createWheel();
        },
    }
</script>

<style scoped>
  /*최상위 컴포넌트*/
  .users-config{
    display: flex;
    flex-direction: column;
    width: 800px;
  }
  /*제목*/
  .status-title{
    display: flex;
  }
  .status-title > .title-icon{
    line-height: 46px;
  }
  .status-title > .title-auth{
    margin-top: 38px;
  }
  /*회원 목록 박스*/
  .status-data{
    display: flex;
    flex-direction: column;
  }
  /*회원 목록 타이틀*/
  .data-title{
    display: flex;
  }
  .title-line{
    flex: 2;
    height: 2px;
    background: #42b983;
    margin-top: 30px;
    margin-left: 10px;
  }
  .data-ex{
    display: flex;
    margin-bottom: 10px;
  }
  .data-ex > span{
    font-family: 'Montserrat', sans-serif;
  }
  .ex-auth{
    width: 80px;
    /*background: #4facfe;*/
  }
  .ex-id{
    /*background: #42b983;*/
    flex: 3;
  }
  .ex-email{
    /*background: hotpink;*/
    flex: 1.5;
  }
  .ex-locked{
    /*background: #999999;*/
    width: 80px;
  }
  .data-content-box{
    min-height: 300px;
    transition: all .02s ease;
  }
  .data-content{
    display: flex;
    margin-bottom: 5px;
  }
  .data-content:hover{
    background: #eeeeee;
  }
  .paging-btns{
    display: flex;
    width: 100%;
    margin: 20px 0px 30px;
  }
  .paging-btns > div{
    flex: 1;
    margin: 0px 3px;
  }
  .paging-btns > div > button{
    width: 30px;
    height: 30px;
    font-size: 18px;
    color: white;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    /*transition: all .2s ease;*/
    outline: none;
  }
  .paging-btns > div > button:hover{
    background: #93beff;
  }
  .paging-btns > div > .currentIndex{
    background: #4facfe;
  }
  .page-btns{
    background: #999999;
  }
  .angle-btns{
    background: #4facfe;
  }
  /*휠 트랜지션*/
  .wheelDown{
    transform: translateY(20px);
    opacity: 0;
    transition: all .08s ease;
  }
  .wheelUp{
    opacity: 0;
    transform: translateY(-20px);
    transition: all .08s ease;
  }
</style>
