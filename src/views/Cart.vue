<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <v-card max-width="1000" class="mx-auto">
          <v-container>
            <v-row dense>
              <v-col v-for="(food, i) in cart" :key="i" cols="12">
                <v-card color="#EEEBDD">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline text-no-wrap"
                        v-text="food.title"
                      ></v-card-title>
                      <v-divider class="15"></v-divider>
                      <v-card-subtitle v-text="food.description"></v-card-subtitle>
                    </div>

                    <v-card-text class="text-right font-weight-bold">
                      $ {{ food.price }}
                    </v-card-text>
                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="food.img"></v-img>
                    </v-avatar>
                    <v-btn>
                      <v-icon color="pink" @click="deleteItem(food._id)"
                        >mdi-delete
                      </v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card color="#EEEBDD">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-card-text class="text-center font-weight-bold">
                      TOTAL: $ {{this.$store.getters.total}}
                    </v-card-text>
                    <v-card-actions class="justify-right">
                      <v-btn color="#630000"  class="white--text mt-2 mb-2"> Check Out </v-btn>
                    </v-card-actions>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  data: () => ({
    loading: false,
    selection: 1,
  }),
    computed: {
    ...mapGetters(["cart"]),
  },
      methods: {
    ...mapActions(["removeCartItem"]),
    deleteItem(food) {
    const index = this.cart.findIndex((item) => {
        item.id === food;
    });
    // Dispatcheo el index hacia la store
    this.$store.dispatch("removeCartItem",index);
    this.$swal("Success!", "The burger has been deleted from the cart!", "success");

    },
  },
};
</script>


