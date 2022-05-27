<template>
    <v-container>
        <h1 class="text-uppercase">Platillos</h1>
        <div class="platillos">
            <v-card v-for="platillo in platillos" :key="platillo.id" class="mx-auto my-12" max-width="374">
                <v-img height="250" :src="platillo.imagen"></v-img>

                <v-card-title>{{ platillo.titulo }}</v-card-title>

                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating :value="platillo.puntaje" color="amber" dense half-increments readonly size="14">
                        </v-rating>

                        <div class="grey--text ms-4">
                            {{ platillo.puntaje }}
                        </div>
                    </v-row>
                    <div class="my-4 text-subtitle-1">
                        ${{ platillo.precio }} • {{ platillo.lugar }}, {{ platillo.tipo }}
                    </div>

                    <div>{{ platillo.descripcion }}</div>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Platillos',
    data: () => ({
        loading: false,
        selection: 1,
        platillos: []
    }),
    created() {
        axios.get(`platillos`)
            .then((res) => {
                this.platillos = res.data
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}
</script>

<style lang="scss" scoped>
.platillos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: top;
    align-content: space-evenly;
    justify-items: center;
    justify-content: space-evenly;
    gap: 20px;
}
</style>
