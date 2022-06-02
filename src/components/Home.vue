<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-carousel v-model="model">
          <v-carousel-item
            v-for="(imagen, i) in imagenes"
            :key="i"
            :src="imagen.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-center">Misión</h2>
        <p>
          La misión principal del Restaurante es proporcionar un buen servicio a
          nuestros comensales, dándoles una experiencia inigualable en cada
          bocado que le den a su platillo deseado, de esa forma haciéndolos
          pasar un momento inigualable con su plato degustado y ellos a la hora
          de salir a comer nos elijan por nuestra excelencia en comida y
          servicio a nuestros clientes.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-center">Vision</h2>
        <p>
          Ser un establecimiento el cual sea elegido por nuestros clientes por
          la calidad y servicio que se le da en él, reconocido por nuestro
          trabajo a nivel Nacional, trasladando experiencias diferentes en cada
          platillo con una gran calidad y limpieza dando hospitalidad a los
          comensales. Los huéspedes de LeChaterre serán atendidos en un ambiente
          familiar y por gente fuera de lo común.
        </p>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col>
        <h2 class="text-center">Valores</h2>
        <ul>
          <li>
            PASIÓN: Nos entregamos en todo lo que hacemos. Servimos con pasión.
          </li>
          <li>
            EQUIPO: Colaboramos, sumamos esfuerzos, multiplicamos logros.
            Trabajamos en equipo.
          </li>
          <li>
            CONFIANZA: Cultivamos cada relación con integridad. Construimos
            confianza.
          </li>
          <li>
            CALIDAD: Ofrecemos diariamente servicios y productos de calidad
            superior. Entregamos calidad.
          </li>
          <li>
            EFECTIVIDAD: Ejecutamos con precisión y excelencia. Operamos con
            efectividad.
          </li>
          <li>
            RENTABILIDAD: Obtenemos resultados para seguir creciendo y
            emprendiendo. Buscamos la rentabilidad.
          </li>
          <li>
            EMPATÍA: Vemos siempre al otro como persona, nunca como instrumento.
            Valoramos a la persona.
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col class="text-center">
        <v-btn
          elevation="12"
          x-large
          to="/platillos"
          class="green darken-1--text white--text"
        >
          Nuestros platillos
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    model: 0,
    imagenes: [
      {
        src: "imagenchidori2.jpg",
      },
      {
        src: "imagenchidori3.jpg",
      },
      {
        src: "imagenchidori4.jpg",
      },
    ],
  }),
};
</script>
