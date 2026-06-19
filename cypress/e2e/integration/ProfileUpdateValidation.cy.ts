describe('template spec', () => {

  beforeEach('', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(5000)
  })

  it('Profile Update Validation', () => {
    cy.contains('.btn', 'Log In').should('be.visible').and('not.be.disabled').click()
    cy.get('[type="Email"]').type('test.customer@lewisstores.local')
    cy.get('[type="Password"]').type('Password123!')
    cy.contains('[type="submit"]', 'Log In').should('be.visible').and('not.be.disabled').click()
    
    cy.wait(3000)

    cy.contains('Profile').should('be.visible').and('not.be.disabled').click()
    cy.contains('.card', 'Personal Information').within(() => {
        cy.contains('Personal Information').should('be.visible')
    })
    cy.get('[value="Test Customer One"]').should('be.visible').clear().type('Test Customer')
    cy.get('[value="555-0001"]').should('be.visible').clear().type('762-087')
    cy.contains('[rows="3"]', '123 Main St, City, State 12345').should('be.visible').clear().type('Cape Town')  
    cy.contains('Save Changes').should('be.visible').and('not.be.disabled').click()
})

})