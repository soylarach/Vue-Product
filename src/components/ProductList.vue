<template>
  <div>
    <v-select
      v-model="selectedCategory"
      :items="categories"
      label="Filtrar por categoría"
      clearable
      class="ma-4"
    ></v-select>

    <div v-if="loading" class="text-center ma-4">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>

    <v-container fluid>
      <v-row>
        <v-col
          v-for="p in filteredProducts(selectedCategory)"
          :key="p.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <ProductCard :product="p" />
        </v-col>
      </v-row>
    </v-container>

    <v-alert v-if="error" type="error" class="ma-4">
      {{ error }}
    </v-alert>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: { ProductCard },
  data() {
    return {
      selectedCategory: ""
    };
  },
  computed: {
    ...mapState("products", ["error", "loading"]),
    ...mapGetters("products", ["categories", "filteredProducts"])
  },
  methods: {
    ...mapActions("products", ["fetchProducts"])
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>
