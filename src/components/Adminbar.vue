<template>
  <v-app>
    <v-card>
        <v-tabs
            v-model="tab"
            background-color="#1B1717"
            centered
            dark
            icons-and-text
        >
            <v-tabs-slider></v-tabs-slider>
            <v-tab   href="#addburger">
              <v-tab-item value="addburger"></v-tab-item>
                Add Burger
                <v-icon>mdi-application-edit</v-icon>
            </v-tab>

            <v-tab  href="#modifyburger">
                Modify Burger
                <v-icon>mdi-wrench-clock</v-icon>
            </v-tab>
            <v-tab  href="#deleteburger">
                Delete Burger
                <v-icon>mdi-delete-alert</v-icon>
            </v-tab>
            <v-tab  href="#activeburgers">
                View all burgers
                <v-icon>mdi-badge-account-horizontal-outline</v-icon>
            </v-tab>
              <v-tab  href="#activeusers">
                View all Users
                <v-icon>mdi-contacts</v-icon>
            </v-tab>
              <v-tab  href="#giveadmin">
                Grant Admin
              <v-icon>mdi-pencil</v-icon>
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item  value="addburger">
            <AdminPOST/>
          </v-tab-item>
          <v-tab-item value="modifyburger">
            <AdminMODIFY/>
          </v-tab-item>
          <v-tab-item value="deleteburger">
            <AdminDELETE/>
          </v-tab-item>
            <v-tab-item value="activeburgers">
            <Burgerlist/>
          </v-tab-item>
          <v-tab-item value="activeusers">
            <Userlist/>
          </v-tab-item>
          <v-tab-item value="giveadmin">
            <GrantAdmin/>
          </v-tab-item>
        </v-tabs-items>
    </v-card>
  </v-app>
    
</template>

<script>
import AdminPOST from "../views/AdminPOST.vue"
import AdminMODIFY from "../views/AdminMODIFY.vue"
import AdminDELETE from "../views/AdminDELETE.vue"
import Burgerlist from "../views/Burgerlist.vue"
import Userlist from "../views/Userlist.vue"
import GrantAdmin from "../views/GrantAdmin.vue"
export default {
  name: 'Adminbar',

  components: {
    AdminPOST,
    AdminMODIFY,
    AdminDELETE,
    Burgerlist,
    Userlist,
    GrantAdmin
  },

  data: () => ({
    tab: null
  }),
};
</script>

<style scoped lang="scss">

</style>
