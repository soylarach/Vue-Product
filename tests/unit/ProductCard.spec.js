import { mount } from "@vue/test-utils";
import { createVuetify } from 'vuetify';
import ProductCard from "@/components/ProductCard.vue";

const vuetify = createVuetify();

describe("ProductCard.vue", () => {
  it("renderiza correctamente un producto", () => {
    const product = {
      title: "Laptop Gamer",
      price: 1200,
      category: "electronics"
    };

    const wrapper = mount(ProductCard, {
      props: {
        product
      },
      global: {
        plugins: [vuetify]
      }
    });

    expect(wrapper.html()).toMatch(/Laptop Gamer/);
    expect(wrapper.html()).toMatch(/1200/);
  });
});