<template>
  <div>
    <h1>{{ message }}</h1>
    <!-- this.$route.params.○○でqueryを渡せる -->
    <p>id: {{ this.$route.params.show }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'user/_showを表示中'
    }
  },
  // paramsの validate 数字であればtrue 数字以外だとエラーを表示する
  validate({ params }) {
    return /^\d+$/.test(params.show)
  }
}
</script>
