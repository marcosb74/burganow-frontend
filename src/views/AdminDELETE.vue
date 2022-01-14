<template>
      <v-container fluid>
      <v-layout row wrap>
        <v-flex class="text-center" xs12 sm6 offset-sm3 mt-3>
          <h1>Product Manager - Delete existing Burger!</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form ref="form" @submit.prevent="handleDelete()">
            <v-layout column>
              <v-flex>
                <v-text-field
                  v-model="id"
                  name="id"
                  label="Product ID"
                  id="id"
                  type="id"
                  required
                ></v-text-field>
              </v-flex>
              <v-row class="mb-4">
                <v-col xs="6">
                  <v-flex class="text-xs-center" mt-2>
                    <v-btn color="#630000"  class="white--text mt-2 mb-2" type="submit">Delete Burger</v-btn
                    >
                  </v-flex>
                  </v-col>
              </v-row>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'adminMODIFY',

  components: {
  },

  data: () => ({
    food: {
      title: "",
      price: 0,
      description:"",
      img:""
    },
  }),
    methods: {
     handleDelete(){
        const id = this.id
        console.log(id);
        axios.delete(`${process.env.VUE_APP_PROD}/api/listing/products/${id}`).then(()=>{
        });
        this.$swal("Success!", "The burger has been deleted from the database!", "success");

      }
    },
};
</script>

<style scoped lang="scss">

</style>
