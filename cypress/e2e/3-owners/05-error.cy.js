/// <reference types="cypress" />

describe('probando errores', () => {
  it('debe validar el status code fallido y manejo de eror', function () {
    cy.request({ url: 'https://pokeapi.co/api/v2/345343', failOnStatusCode: false }).then(
      (response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.be.eq('Not Found');
      }
    );
  });

  it('debe validar el status code fallido y manejo de error de rick and morty', function () {
    cy.request({
      url: 'https://rickandmortyapi.com/api/location/reer',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(500);
      expect(response.body).to.have.property('error', 'Hey! you must provide an id');
    });
  });
});
