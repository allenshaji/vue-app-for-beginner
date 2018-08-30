<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <a class="navbar-brand" href="/">Vueapp</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" v-if="loggedIn == true">
      <li class="nav-item">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/add">Add</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/display">Display</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  @click="logout()" style="float:right;">Logout</a>
      </li>

     
    </ul>
    <ul  class="navbar-nav" v-else>
       <li class="nav-item">
        <a class="nav-link" href="/register">Register Now</a>
      </li>
         <li class="nav-item">
        <a class="nav-link" href="/login">Log in</a>
      </li>
    </ul>
    
  </div>
</nav>
</template>

<script>
import store from '../store';
   export default {
        name:"NavbarComponent",
        data(){
            return {}
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