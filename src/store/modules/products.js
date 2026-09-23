import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    items: [],
    error: null,
    loading: false
  }),
  mutations: {
    setItems(state, products) {
      state.items = products;
    },
    setError(state, error) {
      state.error = error;
    },
    setLoading(state, status) {
      state.loading = status;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("setLoading", true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        commit("setItems", res.data);
        commit("setError", null);
      } catch (err) {
        commit("setError", "Error al cargar productos");
      } finally {
        commit("setLoading", false);
      }
    }
  },
  getters: {
    categories: (state) => {
      const cats = state.items.map((p) => p.category);
      return [...new Set(cats)];
    },
    filteredProducts: (state) => {
      return (category) => {
        if (!category) return state.items;
        return state.items.filter((p) => p.category === category);
      };
    }
  }
};
