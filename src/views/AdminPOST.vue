<template>
<div>
   <v-container fluid>
      <v-layout row wrap>
        <v-flex class="text-center" xs12 sm6 offset-sm3 mt-3>
          <h1>Product Manager - Add a new Burger!</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form ref="form" @submit.prevent="handlePost()">
            <v-layout column>
              <v-flex>
                <v-text-field
                  v-model="title"
                  name="title"
                  label="Product Name"
                  id="title"
                  type="title"
                  required
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
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="description"
                  name="description"
                  label="Details of the Burger"
                  id="description"
                  type="string"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="img"
                  name="img"
                  label="Image URL"
                  id="img"
                  type="string"
                  required
                ></v-text-field>
              </v-flex>
              <v-row class="mb-4">
                <v-col xs="6">
                  <v-flex class="text-xs-center" mt-2>
                    <v-btn color="#630000"  class="white--text mt-2 mb-2" type="submit" @click="addProd"
                      >Add Burger</v-btn
                    >
                  </v-flex>
                  </v-col>
              </v-row>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'adminPOST',
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
      handlePost(){
        this.food = {
          title: this.title,
          price: Number(this.price),
          description: this.description,
          img: this.img
        };
        axios.post("http://localhost:4000/api/listing/products",this.food).then(data=>{
          console.log(data) 
        });
        this.$swal("Success!", "The burger has been added to the database!", "success");

      },
    },
};
</script>

<style scoped lang="scss">

</style>
