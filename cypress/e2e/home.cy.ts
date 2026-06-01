describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows a hero heading', () => {
    cy.get('h1').should('be.visible')
  })

  it('shows the business name on the page', () => {
    cy.contains(/wicked woods/i).should('be.visible')
  })
})