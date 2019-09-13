<template>
  <div id="update-form">
    <div class="logo-box">
      <span class="logo-icon"></span>
      <div class="logo-component">
        <div class="logo-component-title"></div>
        <div class="logo-component-underbar"></div>
      </div>
    </div>
    <div class="form-box">
      <!-- ID -->
      <div class="data-box">
        <div class="data-logo">
          <span class="data-icon"></span>
        </div>
        <div class="data-component">
          <div class="data-component-title"></div>
          <div class="data-component-underbar"></div>
        </div>
      </div>
      <!-- PW -->
      <div class="data-box">
        <div class="data-logo">
          <span class="data-icon"></span>
        </div>
        <div class="data-component">
          <input class="data-component-value"/>
          <input class="data-component-value"/>
          <div class="data-component-underbar"></div>
        </div>
      </div>
      <!-- Email -->
      <div class="data-box">
        <div class="data-logo">
          <span class="data-icon"></span>
        </div>
        <div class="data-component">
          <input class="data-component-value"/>
          <div class="data-component-underbar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sign-update"
    }
</script>

<style scoped>

</style>
