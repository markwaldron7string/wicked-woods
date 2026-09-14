describe('Our Story page', () => {
  beforeEach(() => {
    cy.visit('/our-story')
  })

  it('shows the full story content immediately, with no intro gate', () => {
    cy.contains('h2', 'The Wicked Woods Story').should('be.visible')
    cy.contains('Enter Site').should('not.exist')
  })

  it('shows the global navbar right away', () => {
    cy.contains('nav a', 'Home').should('be.visible')
  })
})
