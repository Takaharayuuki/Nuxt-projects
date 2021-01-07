<template>
  <div class="container">
    <div>
      <p>Hello World</p>
      <hr>
      <router-link to="/price">Price page</router-link>
    </div>
    <div>
      <ul v-for="user in users" :key="user.id">
        <li>{{ user.id }},{{ user.name }} </li><p>{{ user.company.name}}</p>
      </ul>
    </div>
    <img src="~/assets/sayu.jpg" alt="imgテスト">
  </div>
</template>

<script>
const axios = require('axios')
let url = 'https://jsonplaceholder.typicode.com/users'
export default {
  data() {
    return {
      users:[]
    }
  },
  // asyncDataメソッドはNuxt.jsのメソッド
  asyncData({ params, error }) {
    return axios.get(url)
    .then((res) => { //resにはサーバーから取得したデータが入っている
      return { users: res.data }
    })
    .catch((e => {
      error({ users: e.response.status, message: 'Error' }) //非同期通信のエラー処理
    }))
  }
}
</script>

<style>

</style>
