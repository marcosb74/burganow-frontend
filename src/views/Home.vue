<template>
  <div>
    <h1 class="text-center mt-4 mb-3" style="font-size: 4rem;">Welcome to Burga <span style="font-weight:bold;">Now!</span></h1>
      <v-layout row wrap>
       <v-carousel
       cycle
       show-arrows-on-hover
       hide-delimiters
       class="mb-8">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade"
            transition="fade"
            :show-arrows=false
          ></v-carousel-item>
       </v-carousel>
    </v-layout>
    </div>
    
</template>



<script>
export default {
    data: () => ({
    items: [
        {
          src: 'https://realfood.tesco.com/media/images/Ollys-thank-you-burger-1400x919--5f35d254-d9ef-4e33-bd3b-ffcdb3aad569-0-1400x919.jpg'
        },
        {
          src: 'https://cloudfront-us-east-1.images.arcpublishing.com/gmg/GE6XGX7QSFFPFDC6MZ244XWFBM.jpg'
        },
        {
          src: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/impossible-burger-1296x728-feature-1296x728.jpg?h=1528'
        },
        {
          src: 'https://assets.epicurious.com/photos/5626566d53de6d0d5cdfaf33/16:9/w_2560%2Cc_limit/56390134_smash-burger.jpg'
        }
      ]
  }),
       
};
</script>
<style scoped>

</style>
