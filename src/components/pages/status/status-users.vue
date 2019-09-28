<template>
  <my-status>
    <div slot="page">
      <users-config></users-config>
    </div>
  </my-status>
</template>

<script>
    import MyStatus from "../../molecules/status/my-status";
    import UsersConfig from "../../molecules/status/pages/users-config";

    export default {
        name: "status-users",
        components: {UsersConfig, MyStatus}
    }
</script>

<style scoped>

</style>
