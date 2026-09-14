describe('Home hub page', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('shows a hero heading', () => {
    cy.get('h1').should('be.visible').and('contain.text', 'The Wicked Woods')
  })

  it('shows the business name on the page', () => {
    cy.contains(/wicked woods/i).should('be.visible')
  })

  it('does not render the global site navbar', () => {
    // The top Navbar is intentionally hidden on the home hub page.
    cy.get('body').then(($body) => {
      const navs = $body.find('nav')
      // Only the home page's own vertical link menu should be present.
      expect(navs.length).to.eq(1)
    })
  })

  it('lists all site sections as links, in order, including Our Story', () => {
    const expected = [
      'Services',
      'Contact',
      'Learning Opportunities',
      'The Facility',
      'Meet the Horses',
      'Our Story',
      'Gallery',
    ]

    cy.get('nav a').then(($links) => {
      const labels = [...$links].map((el) => el.textContent?.trim())
      expect(labels).to.deep.equal(expected)
    })
  })

  it('navigates to Our Story from the home menu', () => {
    cy.contains('nav a', 'Our Story').click()
    cy.url().should('include', '/our-story')
    cy.contains('The Wicked Woods Story').should('be.visible')
  })

  it('has a subtle Replay Intro link pointing back to the site root', () => {
    cy.contains('a', 'Replay Intro')
      .should('be.visible')
      .and('have.attr', 'href', '/')
  })
})
