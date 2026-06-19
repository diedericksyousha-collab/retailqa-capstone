describe('template spec', () => {

  beforeEach('', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(5000)
  })

  it('Negative Order Validation', () => {
    cy.contains('.btn', 'Log In').should('be.visible').and('not.be.disabled').click()
    cy.get('[type="Email"]').type('test.customer@lewisstores.local')
    cy.get('[type="Password"]').type('Password123!')
    cy.contains('[type="submit"]', 'Log In').should('be.visible').and('not.be.disabled').click()
    
    cy.wait(3000)

    cy.contains('Furniture').should('be.visible').and('not.be.disabled').click()
    cy.contains('.product-card', 'Vertex 4K Monitor').should('be.visible').within(() => {
      cy.contains('[type="button"]', 'Add to Cart').should('be.visible').then($btn => {
            Cypress._.times(999, () => {
                cy.wrap($btn, { log: false}).click({ force: true})
            })
        })
    })

    cy.get('[aria-label="Open cart"]').should('be.visible').and('not.be.disabled').click()
    cy.contains('Proceed to Checkout').should('be.visible').and('not.be.disabled').click()
    
    cy.get('[placeholder="e.g. Johannesburg"]').type('Cape Town')
    cy.get('[placeholder="e.g. 2196"]').type('7780')

    cy.contains('Continue to Payment').should('be.visible').and('not.be.disabled').click()
    cy.contains('Place Order').should('be.visible').and('not.be.disabled').click()

  })

})