<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a class="navbar-brand" href="#">Vue App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div v-if="loggedIn == true" style="color:#fff;"><a @click="logout()">Logout</a></div>
        <div v-else style="color:#fff;"><a href="/login">Log In</a></div>
    </nav>
</template>

<script>
import store from '../store';
   export default {
        name:"NavbarComponent",
        data(){
            return {
                title:"ACME's Staff List",

            }
        },
        computed: {
        loggedIn(){
            return  store.state.isLoggedIn
        }
    },
      methods: {
    logout() {
      localStorage.removeItem('token')
      store.commit('logoutUser')
      this.$router.push({ name: 'login' })
    }
  }

    }
</script>