describe('Intro page', () => {
  beforeEach(() => {
    cy.visit('/intro')
  })

  it('shows the banner heading and an Enter Site link to the home page', () => {
    cy.get('h1').should('be.visible').and('contain.text', 'The Wicked Woods')
    cy.contains('a', 'Enter Site')
      .should('be.visible')
      .and('have.attr', 'href', '/')
  })

  it('hides the global nav links while keeping the logo visible', () => {
    cy.get('a[href="/"] img').should('exist')
    // The opacity-0 class lives on the link's wrapping div, not the <a> itself.
    cy.contains('a', 'Services').parent().should('have.css', 'opacity', '0')
  })

  it('navigates to the home page when Enter Site is clicked', () => {
    cy.contains('a', 'Enter Site').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    cy.contains('nav a', 'Our Story').should('be.visible')
  })
})
