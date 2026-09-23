<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>Vue Product Showcase</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <ProductList />
    </v-main>

    <v-footer color="secondary" dark app>
      <span class="mx-auto">© 2026 - Proyecto Vue SPA</span>
    </v-footer>
  </v-app>
</template>

<script>
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  components: { ProductList }
};
</script>
