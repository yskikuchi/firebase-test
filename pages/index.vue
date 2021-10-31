<template>
  <div class="login">
    <div>
      <button @click="login">googleアカウントでログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
const provider = new firebase.auth.GoogleAuthProvider();
export default {
  methods: {
    login() {
      firebase.auth()
      .signInWithPopup(provider)
      .then(() => {
        this.$router.push('/confirm')
      })
      .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage)
      })
    },
  }
};
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>