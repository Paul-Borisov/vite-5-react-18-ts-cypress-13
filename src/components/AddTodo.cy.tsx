import AddTodo from "./AddTodo";

describe("<AddTodo />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddTodo setItems={() => {}} />);
  });
});
