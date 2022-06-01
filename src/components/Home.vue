<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-carousel v-model="model">
          <v-carousel-item v-for="(imagen, i) in imagenes" :key="i" :src="imagen.src"
            reverse-transition="fade-transition" transition="fade-transition">
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    model: 0,
    imagenes: [
      {
        src: 'https://pixabay.com/get/g8a47f6e59aa9c1c15ad9b084d70c8643dc1ba26b3f3196bafb5c6a8c0773c13256a7e858880eb1cdded63b13e81a18382f8833ccb6ea5667c9ebf42669ce5e41_1280.jpg',
      },
      {
        src: 'https://pixabay.com/get/g64d4e51acbe5067c2d715ce3ef73b79d9be724cbc75692bb32d581a10270b45ba95d60be0464f34089c9a87ec6b52d6c2e4f53421ec8024d2592d9d930c7dd66_1280.jpg',
      },
      {
        src: 'https://pixabay.com/get/g87ec35ef452ff6a784f55cb41a60faab0c902ae4236e3a943d1e3bf033cc4ead28f8306d5de967bcb730cee49d0bd46b93aaede75088c6fca977b69db49272e3_1280.jpg',
      },
    ],
  }),
}
</script>
