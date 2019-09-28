<template>
  <my-status>
    <div slot="page">
      <my-config></my-config>
    </div>
  </my-status>
</template>

<script>
    import MyStatus from "../../molecules/status/my-status";
    import MyConfig from "../../molecules/status/pages/my-config";
    export default {
        name: "status-my",
        components: {MyConfig, MyStatus}
    }
</script>

<style scoped>

</style>
