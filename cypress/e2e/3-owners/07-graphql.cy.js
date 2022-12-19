/// <reference types="cypress"/>
describe('probando graphql', () => {
  it('debe de hacer una consulta con graphql', function () {
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
          url
          name
          image
        }
      }
    }`;

    const gqlVariables = {
      limit: 20,
      offset: 0,
    };

    cy.request({
      method: 'POST',
      url: 'https://graphql-pokeapi.graphcdn.app/',
      body: {
        query: gqlQuery,
        variables: gqlVariables,
      },
    }).then((res) => {
      cy.log(res);
      expect(res.body.data.pokemons.results[0].name).to.equal('bulbasaur');
    });
  });
});
