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
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    model: 0,
    imagenes: [
      {
        src: '/imagenchidori1.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
  }),
}
</script>
