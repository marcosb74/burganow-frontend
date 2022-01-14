<template>
  <div>
    <h1 class="text-center mt-4" style="font-size: 4rem;">Our Products!</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="food in products" :key="food.id">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="#FFF"
                height="15"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img height="250" :src="food.img"></v-img>

            <v-card-title style="background-color: #810000; color:white;">{{ food.title }}</v-card-title>
            <v-divider class="mx-4"></v-divider>

            <v-card-text style="background-color: #EEEBDD;">
              <div class="my-4 text-subtitle-1">$ {{ food.price }}</div>
              <div class="">
                {{ food.description }}
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions class="justify-center"  style="background-color: #1B1717;">
                <v-btn color="#630000" type="submit" class="white--text mt-2 mb-2" @click="addItem(food)">Add to Cart</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  data: () => ({
    loading: false,
    selection: 1,
    foods: [],
  }),
    computed: {
    ...mapGetters(["products","cart"]),
  },
    methods: {
    ...mapActions(["getProducts","addCart"]),
    addItem(food) {
    // DISPATCHEAR ESTA FOOD AL STORE
    this.$store.dispatch("addCart",food);
    this.$swal("Success!", "The burger has been added to the cart!", "success");
    },
    getItems(){
      axios({
      method: "get",
      url: "http://localhost:4000/api/listing/products",
    }).then((response) => {
      this.getProducts(response.data)
    });
    }
  },
   mounted() {
    this.getItems();
    
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
</style>