describe('Cookies', () => {
  
  before(() => {
    cy.session('set-cookie', () => {
      cy.visit('/');
      cy.setCookie('Name', 'Dave');
    });
  });
//ensures the test runs in a clean browser state on your page.
  beforeEach(() => {
    //Cypress clears all browser state between each test by default — including cookies, localStorage, and the page itself, thats why we have to visit the page again
    cy.visit('/');
  });

  it('should have the cookie set', () => {
    cy.getCookie('Name').should('have.property', 'value', 'Dave');
  });

  it('should clear the cookie', () => {
    cy.clearCookie('Name');
    cy.getCookie('Name').should('be.null');
  });
});
