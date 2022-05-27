<template>
  <v-app>
    <v-app-bar color="green darken-1" dark app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>LeChaterre</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="green darken-1--text white--text">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/platillos">
            <v-list-item-icon>
              <v-icon>mdi-silverware-fork-knife</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Platillos</v-list-item-title>
          </v-list-item>

          <v-list-item to="/administrador">
            <v-list-item-icon>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Administrar platillos</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
        <v-footer absolute padless>
          <v-col class="text-center light-green lighten-2" cols="12">
            {{ new Date().getFullYear() }} — <strong>LeChaterre</strong>
          </v-col>
        </v-footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: 0,
  }),
};
</script>
