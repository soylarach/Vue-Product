import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import { createVuetify } from 'vuetify';
import ProductList from "@/components/ProductList.vue";

const vuetify = createVuetify();

describe("ProductList.vue", () => {
  it("muestra mensaje de error si falla la API", () => {
    const store = createStore({
      modules: {
        products: {
          namespaced: true,
          state: () => ({
            items: [],
            error: "Error al cargar productos",
            loading: false
          }),
          getters: {
            filteredProducts: (state) => () => state.items,
            categories: () => []
          }
        }
      }
    });

    const wrapper = mount(ProductList, {
      global: {
        plugins: [store, vuetify]
      }
    });

    expect(wrapper.html()).toMatch(/Error al cargar productos/);
  });
});