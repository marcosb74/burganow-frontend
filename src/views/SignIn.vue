<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 mt-3>
        <h1 style="text-align:center;" class="mt-5" >Sign In Form</h1>   
      </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form ref="form" @submit.prevent="handleSubmit()">
            <v-layout column>
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
              <v-flex class="text-xs-center" mt-5>
                <v-btn color="#630000" type="submit" class="white--text mb-4">Sign In</v-btn>
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
    name: 'sign-in',
    props: [],
    mounted () {

    },
  data: () => ({
    user: {
      email: "",
      password: "",
    },
  }),
    methods: {
      handleSubmit (){
        this.user = {
          email: this.email,
          password: this.password,
        };
        axios.post(`${process.env.VUE_APP_PROD}/api/auth/login`,this.user).then(data=>{
          if(data.data === "not_found"){
             return this.$swal("Error!", "This user doesn't exist on the Database!", "warning");
          }
          if(data.data == "email o password erroeno") {
            return this.$swal("Oh-oh!", "Either the email or password are wrong!", "error");
          }else{
          this.$swal("Success!", "You have logged in successfuly", "success");

          this.$store.dispatch("authAction");
          if(data.data.isAdmin){
          this.$store.dispatch("adminAuth");
          }
          this.$router.push("/products")
          }
        
        });
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">

</style>
