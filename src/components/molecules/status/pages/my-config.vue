<template>
  <div class="my-config">
    <h1 class="my-config-logo">
      <!--아이콘-->
      <div class="icon-user-circle-o"/>
      <!--카테고리-->
      <div>내 정보 수정</div>
    </h1>
    <!--내 정보 수정 페이지-->
    <div class="my-config-user">
      <div class="auth-box">
        <auth-button class="auth" :auth="'user'"/>
        <date-button :date="'19.09.26'"/>
      </div>
      <span>Pollra</span>
    </div>
    <!--
    표시할 정보
    아이디
    권한
    차단여부
    비밀번호 변경
    이메일 변경
    -->
    <!--비밀번호 수정-->
<!--      <div>비밀번호를 수정합니다</div>-->
<!--      <div>-->
<!--        <h3>비밀번호를 수정합니다</h3>-->
<!--        <span>현재 비밀번호를 입력하면 비밀번호 수정 입력창이 나옵니다.</span>-->
<!--        <span>비밀번호 확인창까지 입력을 완료하면 저장 버튼이 나오고 저장 버튼을 눌러 변경사항을 저장합니다.</span>-->
<!--      </div>-->
    <div class="update-cards">
      <!--비밀번호 수정 카드-->
      <div class="pw-update-container card">
        <h2>비밀번호 수정</h2>
        <div class="pw-update-input">
          <div id="current-pw-title" class="title-text">현재 비밀번호</div>
          <input id="current-pw" class="current in-pw" type="password" placeholder="현재 비밀번호" required="required">
          <div class="new-pw">
            <div class="pw-title title-text">새로운 비밀번호</div>
            <input class="pw in-pw" type="password" placeholder="새로운 비밀번호" required="required">
            <div class="pw-match-title title-text">새로운 비밀번호 확인</div>
            <input class="pw-match in-pw" type="password" placeholder="새로운 비밀번호 확인" required="required">
          </div>
        </div>
        <div class="pw-ex">
          <div class="icon-help-circled-1"/>
          <span>도움말</span>
        </div>
        <div class="pw-save-btn">
          <save-btn/>
        </div>
      </div>
      <!--이메일 수정 카드-->
      <div class="email-update-container card">
        <h2>이메일 수정</h2>
        <div class="email-update-box">
          <span>변경할 이메일 주소</span>
          <input type="password" placeholder="변경할 이메일 주소">
        </div>
        <div class="email-ex">
          <div class="icon-help-circled-1"/>
          <span>도움말</span>
        </div>
        <div class="email-save-btn">
          <save-btn/>
        </div>
        <!--<div>등록된 이메일을 수정합니다.</div>
        <div>
          <h3>이메일을 수정합니다.</h3>
          <span>현재 비밀번호를 입력하면 이메일 입력창이 나옵니다.</span>
          <span>이메일을 입력하면 나오는 저장버튼을 눌러 변경사항을 저장합니다.</span>
        </div>-->
      </div>
    </div>

  </div>
</template>

<script>
    import StatusUserIcon from "../nav/status-user-icon";
    import AuthButton from "../../../atoms/buttons/auth/auth-button";
    import DateButton from "../../../atoms/buttons/date/date-button";
    import BlockButton from "../../../atoms/buttons/auth/block-button";
    import SaveBtn from "../../../atoms/buttons/save-btn";
    export default {
        name: "my-config",
        components: {SaveBtn, BlockButton, DateButton, AuthButton, StatusUserIcon}
    }
</script>

<style scoped>
  .my-config{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 800px;
    position: relative;
  }
  .my-config-logo{
    display: flex;
    color: #005580;
  }
  .my-config-logo > .icon-user-circle-o{
    line-height: 45px;
  }

  /*유저 아이콘*/
  .my-config-user{
    display: flex;
    font-family: 'Montserrat', sans-serif;
    margin-left: 5px;
    margin-bottom: 10px;
  }
  .my-config-user > .icon{
    width: 48px;
    height: 48px;
    background: #666666;
    color: #cccccc;
    border-radius: 5px;
    position: relative;
  }
  .my-config-user > span{
    font-size: 26px;
    letter-spacing: 3px;
    margin-left: 25px;
    line-height: 45px;
  }
  .my-config-user > .icon > span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 26px;
  }
  /*업데이트 카드들*/
  .update-cards{
    display: flex;
  }
  .card{
    width: 390px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    padding: 10px;
    position: relative;
  }
  /* 비밀번호 수정 */
  .pw-update-container{
    display: flex;
    flex-direction: column;
  }
  .pw-update-container > h2{
    margin: 5px 0px 10px 0px;
  }
  .pw-update-input{
    background: #333333;
    border-radius: 3px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
  .new-pw{
    display: flex;
    flex-direction: column;
  }
  .in-pw{
    font-size: 18px;
    background: none;
    border: none;
    border-bottom: 1px solid #4facfe;
    padding: 5px;
    outline: none;
    color: white;
    letter-spacing: 2px;
  }
  .in-pw::placeholder{
    color: #999999;
  }
  .title-text{
    color: white;
    font-size: 12px;
  }
  .current{
    margin-bottom: 15px;
  }
  .pw{
    margin-bottom: 5px;
  }
  .pw-save-btn{
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
  .pw-ex{
    display: flex;
    color: #666666;
    font-size: 14px;
    position: absolute;
    left: 10px;
    bottom: 15px;
    cursor: help;
  }
  .pw-ex > div {
    line-height: 18px;
    margin-right: 3px;
  }
  /*이메일 수정 스타일*/
  .email-update-container > h2{
    margin: 5px 0px 10px 0px;
    position: relative;
  }
  .email-save-btn{
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
  .email-update-box{
    border-radius: 3px;
    background: #333333;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  .email-update-box > span{
    color: white;
    font-size: 12px;
  }
  .email-update-box > input {
    font-size: 18px;
    background: none;
    padding: 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid #4facfe;
  }
  .email-ex{
    display: flex;
    color: #666666;
    font-size: 14px;
    position: absolute;
    left: 10px;
    bottom: 15px;
    cursor: help;
  }
  .email-ex > div{
    line-height: 18px;
    margin-right: 3px;
  }
</style>
