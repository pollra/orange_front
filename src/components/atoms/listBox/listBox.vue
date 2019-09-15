<template>
  <div>
    <select v-model="currentValue">
      <option v-for="(item, index) in this.$store.state.categories" v-bind:value="item.num" :key="index">
        {{item.name}}
      </option>
    </select>
  </div>
</template>

<script>
    export default {
        name: "listBox",
        data(){
            return {
                currentValue:''
            }
        }
    }
</script>

<style scoped>

</style>
