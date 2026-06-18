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

    cy.contains('QA Lab').should('be.visible').and('not.be.disabled').click()
    cy.contains('.card', 'Create Return Request').within(() => {
        cy.get('select[required]').first().select('ORD-001-20260512')
    })
    cy.contains('.form-group', 'Requested Amount').within(() => {
        cy.get('[min="1"]').type('32699')
    })
    cy.contains('.form-group', 'Reason').within(() => {
        cy.get('[rows="3"]').type('Item Broken Upon Arrival')
    })

    cy.contains('Submit Return').should('be.visible').and('not.be.disabled').click()
    cy.contains('.card', 'Return Requests').within(() => {
        cy.contains('ORD-001-20260512').should('be.visible')
    })
})

})