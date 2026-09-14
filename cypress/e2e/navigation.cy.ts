describe('Navigation', () => {
  it('navigates to the Services page from the home menu', () => {
    cy.visit('/home')
    cy.contains('nav a', 'Services').click()
    cy.url().should('include', '/services')
    cy.get('h1').should('be.visible')
  })

  it('navigates to Meet the Horses from the home menu', () => {
    cy.visit('/home')
    cy.contains('nav a', 'Meet the Horses').click()
    cy.url().should('include', '/horses')
    cy.get('h1').should('be.visible')
  })

  it('shows the global navbar on inner pages, with Home returning to the home hub', () => {
    cy.visit('/services')
    cy.contains('nav a', 'Home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/home')
  })

  it('does not expose Our Story from the global navbar', () => {
    cy.visit('/services')
    cy.get('nav').first().within(() => {
      cy.contains('a', 'Our Story').should('not.exist')
    })
  })
})
