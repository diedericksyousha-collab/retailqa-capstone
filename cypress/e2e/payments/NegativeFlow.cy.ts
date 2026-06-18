describe('template spec', () => {

  beforeEach('', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Log In').click()
    cy.get(':nth-child(1) > input').click().type('sarah.johnson@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password123!')
    cy.get('.full-width > .btn').click()

    cy.wait(5000)
  })

it('Reject invalid payment details', () => {
    cy.contains('Furniture').should('be.visible').and('not.be.disabled').click()
    cy.contains('.product-card', 'Ergonomic Standing Desk').should('be.visible').within(() => {
        cy.contains('Add to Cart').should('be.visible').and('not.be.disabled').click()
    })
    cy.get('[aria-label="Open cart"]').click()
    cy.contains('Proceed to Checkout').should('be.visible').and('not.be.disabled').click()
    cy.get('[placeholder="e.g. Johannesburg"]').type('Cape Town')
    cy.get('[placeholder="e.g. 2196"]').type('7782')
    cy.contains('Continue to Payment').should('be.visible').click()
    cy.get('[placeholder="0000 0000 0000 0000"]').type('yiyi yiyiy yiiyiyi')
    cy.get('[placeholder="0000 0000 0000 0000"]').type('098808080808080')
    cy.get('[placeholder="MM / YY"]').type('yuyu')
    cy.get('[placeholder="000"]').type('rrt')
    cy.contains('Place Order').click()
    cy.contains('Invalid Details')
})

it('Cancels adding a new payment method successfully', () => {
    cy.contains('Payment Methods').click()
    cy.contains('Add New Card').click()
    cy.get('[placeholder="e.g. Thabo Nkosi"]').type('Sarah Johnson')
    cy.get('[placeholder="0000 0000 0000 0000"]').type('0909 0909 0909 0909')
    cy.get('[placeholder="MM / YY"]').type('1223')
    cy.get('[placeholder="000"]').type('978')
    cy.contains('Cancel').should('be.visible').and('not.be.disabled').click()
    cy.contains('.btn', 'Add New Card')
})

})