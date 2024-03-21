const baseUrl = `${Cypress.env("apiUrl")}/api`

describe('Fit Hub Test - Automation API', () => {
  it('GET - List User', () => {
    const page=2

    cy.request({
      method: 'GET',
      url: `${baseUrl}/users?page=${page}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.page).equal(page);
    });
  });

  it('POST - Create Single User', () => {
    const body = {
      "name": "morpheus",
      "job": "leader"
    }
    
    cy.request({
      method: 'POST',
      url: `${baseUrl}/users`,
      body: body
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).equal(body.name);
      expect(response.body.job).equal(body.job);
    });
  });

  it('PUT - Update Single User', () => {
    const body = {
      "name": "morpheus",
      "job": "tester"
    }
    
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/users/2`,
      body: body
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).equal(body.name);
      expect(response.body.job).equal(body.job);
    });
  });

  it('DELETE - Single User', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/users/2`
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});