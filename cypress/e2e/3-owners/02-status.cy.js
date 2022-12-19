/// <reference types="cypress" />

describe('probando status', () => {
  it('debe de nalidar el status code exitoso', function () {
    cy.request('employees').its('status').should('eq', 200);
  });

  it('debe de nalidar el status code no encontrado', function () {
    cy.request({ url: 'employees/4', failOnStatusCode: false }).its('status').should('eq', 404);
  });
});
