/// <reference types= "cypress" />
import TodoContainer from "./TodoContainer";

describe("<TodoContainer />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TodoContainer />);

    cy.get("input").should("have.value", "");
    cy.get("input[type='button']").should("have.value", "Add");
  });
});
