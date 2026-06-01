describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('navigates to the Services page', () => {
    cy.contains('nav a', 'Services').click()
    cy.url().should('include', '/services')
    cy.get('h1').should('be.visible')
  })

  it('navigates to Meet the Horses', () => {
    cy.contains('nav a', 'Meet the Horses').click()
    cy.url().should('include', '/horses')   // adjust if your route differs
    cy.get('h1').should('be.visible')
  })

  it('returns home from the Home link', () => {
    cy.contains('nav a', 'Services').click()
    cy.contains('nav a', 'Home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})