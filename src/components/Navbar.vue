<template lang="html">

<v-app-bar fade-img-on-scroll  color="#630000">
  <div class="d-flex align-center">
        <v-img
        class="shrink mr-2"
        contain
        src="@/assets/logo.svg"
        transition="scale-transition"
        width="50"
        to="/"
        v-on:click="$router.push('/')"
      />
  <v-toolbar-title >
    <span class="font-weight-bold" style="color: white;">Burga N o W!</span>
  </v-toolbar-title>
</div>
<v-spacer></v-spacer>

  <v-btn to="/admin" color="#FAEDF0" text v-if='this.$store.state.isAdmin'>
      <span  class="options">Product Manager</span>
      <v-icon >mdi-format-list-checkbox</v-icon>
    </v-btn>
  <v-btn to="/products" color="#FAEDF0" text>
      <span  class="options">Products!</span>
      <v-icon > mdi-cow</v-icon>
    </v-btn>
  <v-btn to="/register" color="#FAEDF0" text v-if='!this.$store.state.isLogged' >
      <span  class="options">Sign Up</span>
      <v-icon >mdi-draw-pen</v-icon>
  </v-btn>

    <v-btn to="/login"  color="#FAEDF0" text v-if='!this.$store.state.isLogged'>
      <span class="options ">Sign In</span>
      <v-icon>mdi-account-lock-open</v-icon>
    </v-btn>
      <v-btn color="#FAEDF0" to="/cart" text>
      <v-icon>mdi-cart-minus </v-icon>
  </v-btn>
      <v-btn  color="#FAEDF0" text v-if='this.$store.state.isLogged' @click="onLogout()">
      <span class="options ">Logout</span>
      <v-icon>mdi-account-lock-open</v-icon>
    </v-btn>
</v-app-bar>
</template>

<script lang="js">

  export default  {
    name: 'navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      onLogout(){
          this.$store.dispatch("authAction");
          this.$router.push("/");
          if(this.$store.state.isAdmin){
          this.$store.dispatch("adminAuth");
          }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
.main{
  color:snow;
  font-family: 'Roboto', sans-serif;
}
.nav-principal {
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.options{
  text-transform: capitalize;
  font-family: 'Roboto', sans-serif;
  }
.logo{
  display:inline
}

</style>
