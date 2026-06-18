describe('template spec', () => {

  beforeEach('', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Log In').click()
    cy.get(':nth-child(1) > input').click().type('sarah.johnson@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password123!')
    cy.get('.full-width > .btn').click()

    cy.wait(5000)
  })

  it('User can successfully create and edit unpaid order', () => {
    cy.contains('Furniture').should('be.visible').click()
    cy.get('[href="/products/vertex-monitor"] > [style="padding: 0px 0.25rem;"] > .space-between > .btn').should('be.visible').click()
    cy.get('[aria-label="Open cart"]').should('be.visible').click()
    cy.contains('R 15 999')
    cy.wait(2000)
    cy.get('[style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;"] > div > :nth-child(3)').click()
    cy.contains('R 31 998')
    cy.wait(2000)
    cy.contains('Proceed to Checkout').should('be.visible').click()
    cy.get(':nth-child(4) > input').should('be.visible').type('Cape Town')
    cy.get(':nth-child(5) > input').should('be.visible').type('7780')
    cy.contains('Continue to Payment').should('be.visible').click()
    cy.get('.full-width > input').should('be.visible').type('2222222222222222')
    cy.get(':nth-child(2) > input').should('be.visible').type('08/27')
    cy.get(':nth-child(3) > input').should('be.visible').type('123')
    cy.contains('Place Order').should('be.visible').click()
  })

  it('View Order details', () => {
    cy.contains('Order History').should('be.visible').click()
    cy.contains('View').should('be.visible').click()
    cy.contains('Order Information').should('be.visible')
  })

  it('Customer can successfully remove an item from their order', () => {
    cy.contains('Furniture').should('be.visible').click()
    cy.get('[href="/products/vertex-monitor"] > [style="padding: 0px 0.25rem;"] > .space-between > .btn').should('be.visible').click()
    cy.get('[aria-label="Open cart"]').should('be.visible').click()
    cy.contains('Remove').should('be.visible').click()
    cy.contains('Your cart is empty').should('be.visible')
    cy.contains('Browse Products').should('be.visible')
  })

  it('View Order details', () => {
    cy.contains('Order History').should('be.visible').click()
    cy.contains('Total Orders').should('be.visible')
    cy.contains('Active Deliveries').should('be.visible')
    cy.contains('Latest Order').should('be.visible')
    cy.contains('Order ID').should('be.visible')
    cy.contains('Date').should('be.visible')
    cy.contains('Items').should('be.visible')
    cy.contains('Status').should('be.visible')
    cy.contains('Total').should('be.visible')
  })
})