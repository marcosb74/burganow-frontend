<template>
      <v-container fluid>
      <v-layout row wrap>
        <v-flex class="text-center" xs12 sm6 offset-sm3 mt-3>
          <h1>Product Manager - Modify existing Burger!</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form ref="form" @submit.prevent="handlePut()">
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
              <v-flex>
                <v-text-field
                  v-model="title"
                  name="title"
                  label="Product Name"
                  id="title"
                  type="title"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="price"
                  class="inputPrice"
                  name="price"
                  label="Product Price"
                  id="price"
                  type="number"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="description"
                  name="description"
                  label="Details of the Burger"
                  id="description"
                  type="string"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="img"
                  name="img"
                  label="Image URL"
                  id="img"
                  type="string"
                ></v-text-field>
              </v-flex>
              <v-row class="mb-4">
                <v-col xs="6">
                  <v-flex class="text-xs-center" mt-2>
                    <v-btn color="#630000"  class="white--text mt-2 mb-2" type="submit">Edit Burger</v-btn
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
      handlePut(){
        this.food = {
          id:this.id,
          title: this.title,
          price: Number(this.price),
          description: this.description,
          img: this.img
        };
        axios.put(`http://localhost:4000/api/listing/products/${this.food.id}`,this.food).then(()=>{

        this.$swal("Success!", "The burger has been modified from the database!", "success");
        });
      },
    },
};
</script>

<style scoped lang="scss">

</style>
