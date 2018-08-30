<template>
 <div class="login">
    <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
  </div>
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
              <h3 class="login-page-title">Sign Up</h3>
              <div class="form-group">
                <label for="email"> Username </label>
                <input type="text" name="email" id="email" class="form-control" aria-describedby="Enter username" placeholder="Enter username"
                  maxlength="75" v-model="register.username"/>
                <span class="help-block"></span>
              </div>
              <div class="form-group">
                <label for="password"> Password </label>
                <input type="password" name="password" id="password" class="form-control" aria-describedby="Enter Password" placeholder="Enter Password" v-model="register.password"
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
                <button type="submit" class="btn btn-success btn-lg btn-block">Register</button>
              </div>
            </form>
          </div>
          <div class="text-center mt-10">
            <p> Dont have an account?
              <router-link to="/login">Login</router-link> 
            </p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      register: {},
      errors: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post(`http://localhost:4000/api/auth/register/`, this.register)
        .then(response => {
          alert("Registered successfully");
          this.$router.push({
            name: "login"
          });
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e);
        });
    }
  }
};
</script>
<style>
@media only screen and (min-width: 576px) {
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
.cloud {
    width: 350px; height: 120px;

    background: #FFF;
    background: linear-gradient(top, #FFF 100%);
    background: -webkit-linear-gradient(top, #FFF 100%);
    background: -moz-linear-gradient(top, #FFF 100%);
    background: -ms-linear-gradient(top, #FFF 100%);
    background: -o-linear-gradient(top, #FFF 100%);

    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;

    position: absolute;
    margin: 120px auto 20px;
    z-index:-1;
    transition: ease 1s;
}

.cloud:after, .cloud:before {
    content: '';
    position: absolute;
    background: #FFF;
    z-index: -1
}

.cloud:after {
    width: 100px; height: 100px;
    top: -50px; left: 50px;

    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
}

.cloud:before {
    width: 180px; height: 180px;
    top: -90px; right: 50px;

    border-radius: 200px;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
}

.x1 {
    top:-50px;
    left:100px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    opacity: 0.9;
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
}

.x1_5{
    top:-80px;
    left:250px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    -webkit-animation: moveclouds 17s linear infinite;
    -moz-animation: moveclouds 17s linear infinite;
    -o-animation: moveclouds 17s linear infinite; 
}

.x2 {
    left: 250px;
    top:30px;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6; 
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
}

.x3 {
    left: 250px; bottom: -70px;

    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8; 

    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
}

.x4 {
    left: 470px; botttom: 20px;

    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75;

    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
}

.x5 {
    left: 200px; top: 300px;

    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.8; 

    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
}

@-webkit-keyframes moveclouds {
    0% {margin-left: 1000px;}
    100% {margin-left: -1000px;}
}
@-moz-keyframes moveclouds {
    0% {margin-left: 1000px;}
    100% {margin-left: -1000px;}
}
@-o-keyframes moveclouds {
    0% {margin-left: 1000px;}
    100% {margin-left: -1000px;}
}
body{
    margin: 0;
    padding: 20px;
    background-color:#33cc99;
    font-family: arial;
  	height: 600px
}
</style>
