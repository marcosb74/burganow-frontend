<template>
      <v-container fluid>
      <v-layout row wrap>
        <v-flex class="text-center" xs12 sm6 offset-sm3 mt-3>
          <h1>User Manager - Grant Admin!</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form ref="form" @submit.prevent="handlePost()">
            <v-layout column>
              <v-flex>
                <v-text-field
                  v-model="id"
                  name="id"
                  label="User ID"
                  id="id"
                  type="id"
                  required
                ></v-text-field>
              </v-flex>
                <v-radio-group
                  v-model="aux"
                  row
                >
                <v-radio
                  label="Make Admin"
                  value="true"
                  ></v-radio>
                <v-radio
                  label="Remove Admin"
                  value="false"
                  ></v-radio>
                </v-radio-group>
              <v-row class="mb-4">
                <v-col xs="6">
                  <v-flex class="text-xs-center" mt-2>
                    <v-btn color="#630000"  class="white--text mt-2 mb-2" type="submit">Make Admin</v-btn
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
  name: 'GrantAdmin',

  components: {
  },

  data: () => ({
    aux:false,
    permissions: {
      id:"",
      isAdmin:false,

    },
  }),
    methods: {
     handlePost(){
      this. permissions = {
        id: this.id,
        isAdmin: this.aux
      }
        axios.put(`http://localhost:4000/api/auth/userlist/${this.permissions.id}`,this.permissions).then(()=>{
        this.$swal("Success!", "The user has changed  its status successfully!", "success");
        });
      }
    },
};
</script>

<style scoped lang="scss">

</style>
