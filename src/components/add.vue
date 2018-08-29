<template>

  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <h2>Please Add the details</h2>
      <div v-if="errors && errors.length">
        <div v-for="error of errors">
          <b-alert show>{{error.data.msg}}</b-alert>
        </div>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group horizontal :label-cols="4" breakpoint="md" label="Enter Name">
          <b-form-input id="username"  v-model="register.name"></b-form-input>
        </b-form-group>
        <b-form-group  horizontal :label-cols="4" breakpoint="md" label="Enter Age">
          <b-form-input type="text" id="age"  v-model="register.age"></b-form-input>
        </b-form-group>
         <b-form-group horizontal :label-cols="4" breakpoint="md" label="Fathers Name">
          <b-form-input type="text" id="fathersname"  v-model="register.fathersname"></b-form-input>
        </b-form-group>
         <b-form-group  horizontal :label-cols="4" breakpoint="md" label="Address">
          <b-form-input type="text" id="address"  v-model="register.address"></b-form-input>
        </b-form-group>
         <b-form-group  horizontal :label-cols="4" breakpoint="md" label="Branch">
          <b-form-input type="text" id="branch"  v-model="register.branch"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>
<script>
import axios from 'axios'

export default {
  name: 'add',
  data () {
    return {
      register: {},
      errors: []
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:4000/docs/add`,this.register,{
          headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
      })
      .then(response => {
          console.log(response)
          this.errors.push(response)
        alert("Alert Success")
      })
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
  }
}
</script>
