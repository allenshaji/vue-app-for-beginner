<template>
  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <div v-if="errors && errors.length">
        <div v-for="error in errors">
          <b-alert show>{{error.response.data.msg}}</b-alert>
        </div>
      </div>
      <h3 style="text-align:center;">Login Now</h3>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal1"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Username">
          <b-form-input id="username"  v-model.trim="login.username"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Password">
          <b-form-input type="password" id="password"  v-model.trim="login.password"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
        <b-button type="button" variant="success" @click.stop="register()">Register</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";
import store from "../store";

export default {
  name: "login",
  data() {
    return {
      login: {},
      errors: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post(`http://localhost:4000/api/auth/login/`, this.login)
        .then(response => {
          store.commit("loginUser");
          localStorage.setItem("token", response.data.token);
          this.$router.push({
            name: "Index"
          });
        })
        .catch(e => {
          this.loginError = true;
          console.log(e);
          this.errors.push(e);
        });
    },
    register() {
      this.$router.push({
        name: "register"
      });
    }
  }
};
</script>