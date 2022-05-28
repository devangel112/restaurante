<template>
    <v-container>
        <h1 class="text-center">Eliminar platillo</h1>
        <div class="lista-platillos" id="lista-platillos">
            <paginate name="platillos" :list="platillos" :per="3" tag="div" class="platillos">
                <v-card v-for="platillo in paginated('platillos')" :key="platillo.id" class="my-12" max-width="374">
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

                        <v-divider></v-divider>

                        <v-card-actions align-self="end">
                            <v-btn color="green darken-1" text @click="eliminarPlatillo(platillo.id)">
                                Eliminar
                            </v-btn>
                        </v-card-actions>
                    </v-card-text>
                </v-card>
            </paginate>
            <paginate-links for="platillos" :show-step-links="true" :step-links="{
                next: '>',
                prev: '<'
            }"></paginate-links>
        </div>
        <v-snackbar v-model="snackbar.visible" :timeout="snackbar.tiempoFuera" :color="snackbar.color">
            {{ snackbar.texto }}

            <template v-slot:action="{ attrs }">
                <v-btn color="white" text v-bind="attrs" @click="snackbar.visible = false">
                    Cerrar
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            platillos: [],
            paginate: ['platillos'],
            snackbar: {
                visible: false,
                texto: "",
                color: "",
                tiempoFuera: null
            }
        }
    },
    created() {
        axios.get('platillos')
            .then((res) => {
                this.platillos = res.data
            })
            .catch((err) => {
                console.error(err.message)
            })

    },
    methods: {
        eliminarPlatillo(idPlatillo) {
            axios.delete(`platillos/${idPlatillo}`)
                .then((res) => {
                    this.snackbar.visible = true
                    this.snackbar.tiempoFuera = 3000
                    this.snackbar.color = "success"
                    this.snackbar.texto = "¡Eliminado satisfactoriamente!"
                }).catch((err) => {
                    console.log(err.message)
                })
            this.platillos = this.platillos.filter(platillo => platillo.id !== idPlatillo)
        }
    },
}
</script>

<style lang="scss">
.lista-platillos {
    display: grid;
    grid-template-rows: repeat(2, auto);
    align-items: center;
    align-content: space-evenly;
    margin-bottom: 50px;

    .platillos {
        display: grid;
        grid-template-columns: repeat(3, auto);
        align-content: space-evenly;
        gap: 20px;
    }

    ul.paginate-links.platillos {
        display: flex;
        list-style: none;
        padding-left: 0;

        a {
            padding: 0 12px;
        }

        li {
            border-radius: 5px;
            gap: 10px;
            margin-right: 5px;

            a {
                color: #2E7D32;
            }
        }

        li.active {
            background-color: #43A047;

            a {
                color: #fff;
            }
        }
    }
}
</style>