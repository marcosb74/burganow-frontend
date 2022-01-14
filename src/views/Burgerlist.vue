<template>
  <v-container>
    <v-row>
      <v-flex class="text-center" xs12 sm6 offset-sm3 mt-3>
          <h1>List of all our active Burgers!</h1>
      </v-flex>
      <v-col col="12">
        <v-card max-width="1000" class="mx-auto">
          <v-container>
            <v-row dense>
               <div>
                  <v-spacer></v-spacer>
                  <v-data-table
                   :headers="headers"
                    item-key="id"
                    class="elevation-1"
                    :items=products
                  >
                    <template>
                      <tr v-for="(prod, i) in products" :key="i">
                        <td>{{ prod._id }}</td>
                        <td>{{ prod.title }}</td>
                        <td>{{ prod.price }}</td>
                        <td>{{ prod.description }}</td>
                        <td>{{ prod.img }}</td>
                      </tr>
                    </template>
                  </v-data-table>
              </div>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Burgerlist",
  data: () => ({
    loading: false,
    selection: 1,
  }),
    computed: {
    ...mapGetters(["products"]),
    headers() {
      return [
        { text: "Id", value: "_id" },
        { text: "Title", value: "title" },
        { text: "Price", value: "price" },
        { text: "Description", value: "description" },
        { text: "Img URL", value: "img" },
      ];
    },
  },
      methods: {
    ...mapActions(["getProducts"]),
      getItems(){
      axios({
      method: "get",
      url: "http://localhost:4000/api/listing/products",
    }).then((response) => {
      this.getProducts(response.data)
    });
    },
  },
  mounted() {
    this.getItems();
  },
};
</script>


