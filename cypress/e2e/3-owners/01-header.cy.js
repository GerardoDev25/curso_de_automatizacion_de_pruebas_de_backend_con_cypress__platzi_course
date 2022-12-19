/// <reference types="cypress" />

describe('probando headers', () => {
  it('validando el header y el content type', function () {
    cy.request('employees')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });
});
