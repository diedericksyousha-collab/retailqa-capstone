describe('template spec', () => {

  beforeEach('', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(5000)
  })

  it('', () => {
    cy.contains('.btn', 'Log In').should('be.visible').and('not.be.disabled').click()
    cy.get('[type="Email"]').type('test.customer@lewisstores.local')
    cy.get('[type="Password"]').type('Password123!')
    cy.contains('[type="submit"]', 'Log In').should('be.visible').and('not.be.disabled').click()
    
    cy.wait(3000)

    cy.contains('Payment Methods').should('be.visible').and('not.be.disabled').click()
    cy.contains('[type="button"]', '+ Add New Card').should('be.visible').and('not.be.disabled').click()
    cy.get('[placeholder="e.g. Thabo Nkosi"]').should('be.visible').type('test cus')
    cy.get('[placeholder="0000 0000 0000 0000"]').should('be.visible').type('1234567890123456')
    cy.get('[placeholder="MM / YY"]').should('be.visible').type('1229')
    cy.get('[placeholder="000"]').should('be.visible').type('123')

    cy.contains('Save Card').should('be.visible').and('not.be.disabled').click()

    cy.contains('.card', 'Mastercard ending in 3456')
})

})