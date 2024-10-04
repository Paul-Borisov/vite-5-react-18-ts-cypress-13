describe("App E2E", () => {
  it("should have a form", () => {
    cy.visit("/");

    cy.get("input").should("have.value", "");
    cy.get("input[type='button']").should("have.value", "Add");
  });
});
