<template>
  <v-card class="ma-3" max-width="300">
    <v-img :src="product.image" height="200px" cover></v-img>
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-subtitle>Precio: ${{ product.price }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" variant="outlined">⭐ Favorito</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>
