<template>
  <v-container>
    <v-row>
      <v-flex class="text-center" xs12 sm6 offset-sm3 mt-3>
          <h1>List of all our active Users!</h1>
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
                    :items=users
                  >
                    <template>
                      <tr v-for="(item, i) in users" :key="i">
                        <td>{{ item._id }}</td>
                        <td>{{ item.username }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.isAdmin }}</td>
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

export default {
  name: "Userlist",
  data: () => ({
    users: []
  }),
    methods: {
    addItem(food) {
    this.$store.dispatch("addCart",food);
    this.$swal("Success!", "The burger has been added to the cart!", "success");
    },
    async getUsers()  {
       await axios({
      method: "get",
      url: `${process.env.VUE_APP_PROD}/api/auth/userlist`,
    }).then((response) => {
      this.users = response.data;
    });
    }
  },
   mounted() {
    this.getUsers();
 },
      computed: {

    headers() {
      return [
        { text: "Id", value: "_id" },
        { text: "Username", value: "username" },
        { text: "Email", value: "email" },
        { text: "isAdmin", value: "isAdmin" },
      ];
    },
  },
};
</script>


