<template>
  <v-footer
    dark
    padless
    absolute
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class=" justify-center" style="backgroundColor:#630000;">
        <strong class="text-center">Website developed by Marcos Balbuena for Coderhouse Vue Course, framework used Vuetify + MEVN Stack. Developed with ❤</strong>

      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Marcos Balbuena</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="js">

  export default  {
    name: 'footer',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">

</style>
