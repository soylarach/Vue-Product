describe("Filtrado de productos", () => {
  it("reduce la lista al aplicar filtro", () => {
    cy.visit("/");

    // Cuenta productos antes del filtro
    cy.get(".card").its("length").then((initialCount) => {
      // Aplica filtro
      cy.get("select").select("electronics");

      // Verifica que ahora hay menos o igual productos
      cy.get(".card").its("length").should("be.lte", initialCount);
    });
  });
});
