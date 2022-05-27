<template>
    <v-container height="100vh">
        <div class="acciones">
            <div v-for="accion in acciones" :key="accion.id">
                <router-link :to="accion.url" class="tarjeta">
                    <div class="icono">
                        <v-icon x-large>
                            mdi-{{ accion.icono }}
                        </v-icon>
                    </div>
                    <div class="descripcion">
                        <span class="titulo">{{ accion.titulo }}</span>
                        <span class="texto">{{ accion.texto }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </v-container>

</template>

<script>
export default {
    data() {
        return {
            acciones: [
                {
                    id: 1,
                    titulo: "Agregar platillo",
                    texto: "Agrega un nuevo platillo a la lista de platillos",
                    url: "/platillos/agregar",
                    icono: "plus-circle"
                },
                {
                    id: 2,
                    titulo: "Modificar platillo",
                    texto: "Modifica un platillo existente de la lista de platillos",
                    url: "/platillos/modificar",
                    icono: "pencil"
                },
                {
                    id: 3,
                    titulo: "Eliminar platillo",
                    texto: "Elimina un platillo de la lista de platillos",
                    url: "/platillos/eliminar",
                    icono: "delete"
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.acciones {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: space-evenly;
    align-items: center;
    justify-content: space-evenly;
    justify-items: center;
    max-width: 1000px;
    gap: 40px;
    margin: auto;
    transition: all 0.5s ease-in;


    :hover {
        transform: scale(1.05);
        transition: all 0.5s ease-in;
    }

    .tarjeta {
        display: flex;
        align-content: space-evenly;
        align-items: center;
        justify-content: space-evenly;
        justify-items: center;
        width: 400px;
        height: 150px;
        box-shadow: 2px 2px 5px #707070;
        padding: 5px 10px;
        text-decoration: none;

        :hover {
            transform: scale(1);
            transition: all 0.5s ease-in;
        }

        .icono {
            width: 30%;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            align-content: space-evenly;
            align-items: center;
            justify-content: space-evenly;
            justify-items: center;
        }

        .descripcion {
            width: 70%;
            display: flex;
            flex-direction: column;

            .titulo {
                font-size: 1.5rem;
                font-weight: bold;
                color: #747474;
            }

            .texto {
                font-size: 1.2rem;
                color: #b4b4b4;
            }
        }
    }
}
</style>