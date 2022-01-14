<template>

  <v-app >
    
       <Adminbar/>
    
  </v-app>

</template>

<script>
import Adminbar from "@/components/Adminbar.vue";
export default {
  name: "Admin",
    components: {
      Adminbar
  },
  data: () => ({

  }),
  methods: {
     
      

    },
  mounted() {
    if(!this.$store.state.isAdmin){
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>
.inputPrice >>> input[type="number"] {
  -moz-appearance: textfield;
}
.inputPrice >>> input::-webkit-outer-spin-button,
.inputPrice >>> input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
