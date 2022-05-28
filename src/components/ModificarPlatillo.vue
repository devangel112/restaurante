<template>
    <v-container>
        <h1 class="text-center">Modificar platillo</h1>
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
                            <v-btn color="green darken-1" text @click="seleccionarPlatillo(platillo)">
                                Editar
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
        <div class="contenedor">
            <form class="formulario" id="formulario">
                <div class="campos">
                    <v-text-field v-model="platilloSeleccionado.titulo" :error-messages="tituloErrors" :counter="40"
                        label="Nombre del platillo" required @input="$v.platilloSeleccionado.titulo.$touch()"
                        @blur="$v.platilloSeleccionado.titulo.$touch()">
                    </v-text-field>

                    <v-text-field v-model="platilloSeleccionado.lugar" label="País de procedencia del platillo">
                    </v-text-field>

                    <v-select v-model="platilloSeleccionado.tipo" :items="tiposPlatillo" :error-messages="tipoErrors"
                        label="Tipo de platillo" required @change="$v.platilloSeleccionado.tipo.$touch()"
                        @blur="$v.platilloSeleccionado.tipo.$touch()">
                    </v-select>

                    <v-textarea clearable clear-icon="mdi-close-circle" label="Descripción del platillo"
                        v-model="platilloSeleccionado.descripcion">
                    </v-textarea>

                    <v-text-field v-model="platilloSeleccionado.precio" label="Precio del platillo"></v-text-field>

                    <v-file-input v-model="imagen" show-size truncate-length="30" prepend-icon="mdi-camera"
                        label="Imagen del platillo"></v-file-input>
                </div>
                <div class="confirmar">
                    <v-checkbox v-model="esCorrecto" :error-messages="esCorrectoErrors" label="¿Datos correctos?"
                        required @change="$v.esCorrecto.$touch()" @blur="$v.esCorrecto.$touch()"></v-checkbox>
                </div>
                <div class="botones">
                    <v-btn class="mr-4" @click="editarPlatillo(platilloSeleccionado)">
                        Modificar
                    </v-btn>
                    <v-btn @click="cancelar">
                        Cancelar
                    </v-btn>
                </div>
            </form>
        </div>
    </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
    mixins: [validationMixin],

    validations: {
        platilloSeleccionado: {
            titulo: { required, maxLength: maxLength(40) },
            tipo: { required },
        },
        esCorrecto: {
            checked(val) {
                return val
            },
        },
    },

    data() {
        return {
            platilloSeleccionado: {
                id: 0,
                titulo: "",
                lugar: "",
                tipo: "",
                descripcion: "",
                precio: 0,
                puntaje: 0,
                imagen: "",
            },
            platillos: [],
            paginate: ['platillos'],
            tiposPlatillo: [
                'Pequeñas botanas',
                'Aperitivos',
                'Sopas y ensaladas',
                'Platos principales',
                'Entrada',
                'Postres',
                'Bebidas',
            ],
            esCorrecto: false,
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
    computed: {
        esCorrectoErrors() {
            const errors = []
            if (!this.$v.esCorrecto.$dirty) return errors
            !this.$v.esCorrecto.checked && errors.push('¡Debes marcar que los datos están correcto para continuar!')
            return errors
        },
        tipoErrors() {
            const errors = []
            if (!this.$v.platilloSeleccionado.tipo.$dirty) return errors
            !this.$v.platilloSeleccionado.tipo.required && errors.push('Elige un tipo de platillo.')
            return errors
        },
        tituloErrors() {
            const errors = []
            if (!this.$v.platilloSeleccionado.titulo.$dirty) return errors
            !this.$v.platilloSeleccionado.titulo.maxLength && errors.push('¡El nombre del platillo puede contener 20 caracteres!')
            !this.$v.platilloSeleccionado.titulo.required && errors.push('El nombre del platillo es requerido.')
            return errors
        },
    },
    methods: {
        obtenerPlatillos() {
            axios.get('platillos')
                .then((res) => {
                    this.platillos = res.data
                })
                .catch((err) => {
                    console.error(err.message)
                })
        },
        seleccionarPlatillo(platillo) {
            this.platilloSeleccionado = platillo
            const listaPlatillos = document.getElementById("lista-platillos")
            const formulario = document.getElementById("formulario")
            listaPlatillos.style.display = "none";
            formulario.style.display = "grid";
        },
        editarPlatillo(platillo) {
            this.$v.$touch()
            if (this.esCorrecto) {
                axios.patch(`platillos/${platillo.id}`, platillo)
                    .then((res) => {
                        this.clear()
                        this.obtenerPlatillos()
                        this.cancelar()
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            }
        },
        cancelar() {
            const listaPlatillos = document.getElementById("lista-platillos")
            const formulario = document.getElementById("formulario")
            listaPlatillos.style.display = "grid";
            formulario.style.display = "none";
        },
        clear() {
            this.$v.$reset()
            this.titulo = ''
            this.tipo = null
            this.esCorrecto = false
            this.lugar = ""
            this.descripcion = ""
            this.precio = null
            this.puntaje = null
            this.imagen = null
            this.esCorrecto = false
        },
    },
}
</script>

<style lang="scss">
.lista-platillos {
    display: grid;
    grid-template-rows: repeat(3, auto);
    align-items: center;
    align-content: space-evenly;
    margin-bottom: 50px;

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

    .titulos {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        align-content: space-evenly;

        span {
            font-size: 1.2rem;
            font-weight: bold;
        }
    }

    .platillos {
        display: grid;
        grid-template-columns: repeat(3, auto);
        align-items: top;
        align-content: space-evenly;
    }

    .acciones {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        align-content: space-evenly;
        justify-items: center;
        justify-content: space-evenly;
    }
}

.formulario {
    display: none;
    grid-template-rows: repeat(3, auto);

    .campos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-content: space-evenly;
        align-items: center;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px;
    }
}
</style>