<template>
    <v-container>
        <h1 class="text-center">Agregar platillo</h1>
        <div class="contenedor">
            <div class="platillos">
                <h2>Menú</h2>
                <ul>
                    <li v-for="platillo in platillos" :key="platillo.id">
                        {{ platillo.titulo }}
                    </li>
                </ul>
            </div>
            <form class="formulario">
                <div class="campos">
                    <v-text-field v-model="titulo" :error-messages="tituloErrors" :counter="40"
                        label="Nombre del platillo" required @input="$v.titulo.$touch()" @blur="$v.titulo.$touch()">
                    </v-text-field>

                    <v-text-field v-model="lugar" label="País de procedencia del platillo"></v-text-field>

                    <v-select v-model="tipo" :items="tiposPlatillo" :error-messages="tipoErrors"
                        label="Tipo de platillo" required @change="$v.tipo.$touch()" @blur="$v.tipo.$touch()">
                    </v-select>

                    <v-text-field v-model="descripcion" label="Descripción del platillo"></v-text-field>

                    <v-text-field v-model="precio" label="Precio del platillo"></v-text-field>

                    <v-file-input v-model="imagen" show-size truncate-length="30" prepend-icon="mdi-camera"
                        label="Imagen del platillo"></v-file-input>
                </div>
                <div class="confirmar">
                    <v-checkbox v-model="esCorrecto" :error-messages="esCorrectoErrors" label="¿Datos correctos?"
                        required @change="$v.esCorrecto.$touch()" @blur="$v.esCorrecto.$touch()"></v-checkbox>
                </div>
                <div class="botones">
                    <v-btn class="mr-4" @click="submit">
                        Agregar
                    </v-btn>
                    <v-btn @click="clear">
                        Limpiar
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
        titulo: { required, maxLength: maxLength(40) },
        tipo: { required },
        esCorrecto: {
            checked(val) {
                return val
            },
        },
    },

    data: () => ({
        alertaExitosa: null,
        titulo: "",
        lugar: "",
        tipo: null,
        descripcion: "",
        precio: null,
        puntaje: null,
        esCorrecto: false,
        imagen: null,
        tiposPlatillo: [
            'Pequeñas botanas',
            'Aperitivos',
            'Sopas y ensaladas',
            'Platos principales',
            'Entrada',
            'Postres',
            'Bebidas',
        ],
        platillos: [],
    }),

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
            if (!this.$v.tipo.$dirty) return errors
            !this.$v.tipo.required && errors.push('Elige un tipo de platillo.')
            return errors
        },
        tituloErrors() {
            const errors = []
            if (!this.$v.titulo.$dirty) return errors
            !this.$v.titulo.maxLength && errors.push('¡El nombre del platillo puede contener 20 caracteres!')
            !this.$v.titulo.required && errors.push('El nombre del platillo es requerido.')
            return errors
        },
    },

    methods: {
        submit() {
            this.$v.$touch()
            if (this.esCorrecto) {
                axios.post("platillos", {
                    titulo: this.titulo,
                    tipo: this.tipo,
                    lugar: this.lugar,
                    precio: parseInt(this.precio),
                    descripcion: this.descripcion,
                    imagen: this.imagen,
                    puntaje: this.puntaje
                })
                    .then((res) => {
                        this.clear()
                        console.log(res)
                        this.alertaExitosa = true
                        this.platillos = [...this.platillos, res.data]
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            }
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

<style lang="scss" scoped>
.contenedor {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 80%;
    margin: auto;

    .platillos {
        width: 25%;
        background-color: #A5D6A7;
        padding: 10px 20px;
        ul {
            list-style: none;
            padding: 0;

            li {
                margin-bottom: 5px;
            }
        }
    }
}

.formulario {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    width: 75%;

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