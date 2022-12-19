/// <reference types="cypress" />

describe('probando request', () => {
  it('debe de crear un employer', function () {
    cy.request({
      url: 'employees',
      method: 'POST',
      body: {
        first_name: 'Javier 2',
        last_name: 'Eschweiler',
        email: 'javier@platzi.com',
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property('id');

      const id = res.body.id;
      cy.wrap(id).as('id');
    });
  });

  it('bede de validar que se haya creado en la db', function () {
    cy.request('GET', 'employees').then((res) => {
      expect(res.body[res.body.length - 1].first_name).to.eq('Javier 2');
    });
  });

  it('bede de modificar el empleado con un nuevo correo', function () {
    cy.request({
      url: `employees/${this.id}`,
      method: 'PUT',
      body: {
        first_name: 'Javier 2 update',
        last_name: 'Eschweiler update',
        email: 'javierupdate@platzi.com',
      },
    }).then((res) => {
      cy.log(res);
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('id');
    });
  });

  it('debe de borrar el registro', function () {
    cy.request({
      method: 'DELETE',
      url: `employees/${this.id}`,
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
