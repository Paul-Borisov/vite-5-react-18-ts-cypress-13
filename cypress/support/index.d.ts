import { mount } from "cypress/react";

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
