<template>
  <my-status>
    <div slot="page">
      <blog-config></blog-config>
    </div>
  </my-status>
</template>

<script>
    import MyStatus from "../../molecules/status/my-status";
    import BlogConfig from "../../molecules/status/pages/blog-config";
    export default {
        name: "status-blog",
        components: {BlogConfig, MyStatus}
    }
</script>

<style scoped>

</style>
