<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-carousel v-model="model">
          <v-carousel-item v-for="(color, i) in colors" :key="color">
            <v-sheet :color="color" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">
                  Imagen {{ i + 1 }}
                </div>
              </v-row>
            </v-sheet>
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
    colors: [
      'green darken-1',
      'green darken-2',
      'green darken-3',
      'green darken-4',
      'green darken-5',
    ],
  }),
}
</script>
