<template>
  <div class="login">
    <div class="login-page">
      <div class="login-container">
        <div>
         <div v-if="errors && errors.length">
        <div v-for="error in errors">
          <b-alert show>{{error.response.data.msg}}</b-alert>
        </div>
      </div>
          <div class="login-form-container">
            <form class="sm-login" id="sm-login" @submit="onSubmit">
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" />
              </div>
              <h3 class="login-page-title">Sign In</h3>
              <div class="form-group">
                <label for="email"> Username </label>
                <input type="text" name="email" id="email" class="form-control" aria-describedby="Enter username" placeholder="Enter username"
                  maxlength="75" v-model="login.username"/>
                <span class="help-block"></span>
              </div>
              <div class="form-group">
                <label for="password"> Password </label>
                <input type="password" name="password" id="password" class="form-control" aria-describedby="Enter Password" placeholder="Enter Password" v-model="login.password"
                />
                <span class="help-block"></span>
              </div>
              <div class="form-row">
                <div class="form-group col-6">
                  <div class="form-check">
                    <input type="hidden" name="remember_me" value="0" />
                    <input type="checkbox" name="remember_me" value="1" id="remember_me" class="form-check-input" aria-describedby="Remember me checkbox">
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                </div>
                <div class="form-group col-6 text-right spt-3">
                  <router-link to="/forget-password">Forgot your password?</router-link> 
                </div>
              </div>
              <div class="mt-10">
                <button type="submit" class="btn btn-success btn-lg btn-block">Sign In</button>
              </div>
            </form>
          </div>
          <div class="text-center mt-10">
            <p> Dont have an account?
              <router-link to="/register">Sign Up</router-link> 
            </p>
          </div>
        </div>
      </div>
    </div>
</div>
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
<style>
@media only screen and (min-width: 576px){
.login-container {
    max-width: 540px;
}
}
.login-page {
    padding: 60px 0;
    margin: 0 auto;
}
.login-container {
    font-size: 14px;
    font-weight: 500;
    padding: 0px 15px;
    margin-left: auto;
    margin-right: auto;
}
.login-container .login-form-container {
    background-color: #fff;
    padding: 20px;
    border-width: 0;
    border-top: 3px solid #c9c9c9;
    border-top-color: #4285f4;
    -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04);
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04);
    border-radius: 3px;
    text-align: left;
}
.login-container .brand-container {
    text-align: center;
    margin-bottom: 25px;
}
</style>
