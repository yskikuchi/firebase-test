<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{name}}</p>
      <p>{{email}}</p>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
    data(){
      return{
        name:null,
        email:null,
      }
  },
  created(){
    firebase.auth().onAuthStateChanged(user =>{
      this.name = user.displayName;
      this.email = user.email;
    })
    }
}
</script>

<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>