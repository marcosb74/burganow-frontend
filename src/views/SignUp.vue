<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 mt-3>
        <h1 >Sign Up Form</h1>   
      </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form ref="form" @submit.prevent="handleSubmit()">
            <v-layout column>
              <v-flex>
                <v-text-field
                  v-model="username"
                  name="username"
                  label="Username"
                  id="username"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="email"
                  name="email"
                  label="Email"
                  id="email"
                  type="email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="password"
                  class="inputPrice"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="verify"
                  name="verify"
                  label="Re-enter Password"
                  id="verify"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex class="text-xs-center" mt-5>
                <v-btn color="#630000" type="submit" class="white--text mb-4">Sign Up</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="js">
import axios from 'axios';
  export default  {
    name: 'sign-up',
    props: [],
    mounted () {

    },
  data: () => ({
    user: {
      username: "",
      email: "",
      password: "",
    },

    
  }),
    methods: {
       async handleSubmit(){
        if(this.verify !== this.password){
          this.$swal("Error","yey warning");
          return;      
        }
        this.user = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        await axios.post("http://localhost:4000/api/auth/signup",this.user).then((data) => {
          if(data.data === "user already on DB"){
            return this.$swal("Error!", "The user already exists on our db!", "error");
          }else {
           this.$swal("Success!", "The user has been successfully created!", "success");
           this.$router.push("/login");
          }

        })

      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

h1{
margin-top: 2rem;
font-family: 'Roboto', sans-serif;
text-align: center;
}
.brownish{
  color:#630000;
}
</style>
