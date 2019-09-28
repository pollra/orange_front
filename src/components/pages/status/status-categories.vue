<template>
  <my-status>
    <div slot="page">
      <categories-config></categories-config>
    </div>
  </my-status>
</template>

<script>
    import MyStatus from "../../molecules/status/my-status";
    import CategoriesConfig from "../../molecules/status/pages/categories-config";
    export default {
        name: "status-category",
        components: {CategoriesConfig,MyStatus}
    }
</script>

<style scoped>

</style>
