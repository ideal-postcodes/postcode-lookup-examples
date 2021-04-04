describe("Basic use case", () => {
  it("renders postcode lookup", () => {
    cy.visit("./index.html");
    cy.get(".idpc-input").should("be.visible");
  });
});
