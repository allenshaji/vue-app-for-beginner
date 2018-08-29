<template>
<div v-if="Authorization == false">
  Hello
</div>
<div v-else>
  <div class="row">
    <div class="col-md-12">
      <h2>
        Book List
        <a href="#/add-book">(Add Book)</a>
      </h2>
      <h2>Book List
        <a @click="logout()">(Logout)</a>
      </h2>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">{{Authorization}}</th>
      <th scope="col">Name</th>
      <th scope="col">Branch</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="er in students">
      <th scope="row">1</th>
      <td>{{er.name}}</td>
      <td>{{er.branch}}</td>
      <td>{{er.age}}</td>
    </tr>
  </tbody>
</table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import store from '../store';

export default {
  name: "BookList",
  data() {
    return {
      students: [],
      errors: [],
      Authorization: store.state.isLoggedIn,

    };
  },

  created() {
    axios
      .get(`http://localhost:4000/docs/getall`,{
          headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
      })
      .then(response => {
        this.students = response.data;
      })
      .catch(e => {
        this.errors.push(e);
        if (e.response.status === 401) {
          this.$router.push({
            name: "login"
          });
        }
      });
  },
  methods: {
    details(book) {
      this.$router.push({
        name: "add",
        params: { id: book._id }
      });
    },
    logout() {
      localStorage.removeItem('token')
            store.commit('logoutUser')
            this.$router.push({ name: 'login' })
    }
  }
};
</script>