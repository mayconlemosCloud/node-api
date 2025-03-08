/// <reference types="cypress" />

describe('User API', () => {
  it('should create a new user', () => {
    cy.request('POST', '/users', {
      name: 'Jane Doe',
      email: 'jane@example.com'
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq('Jane Doe');
    });
  });

  it('should retrieve a list of users', () => {
    cy.request('/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('should update a user', () => {
    cy.request('PUT', '/users/1', {
      name: 'Jane Smith',
      email: 'jane.smith@example.com'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Jane Smith');
    });
  });

  it('should delete a user', () => {
    cy.request('DELETE', '/users/1').then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
