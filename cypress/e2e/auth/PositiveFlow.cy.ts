describe('template spec', () => {

beforeEach('', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(5000)
  })

  it('User can log in, maintain session across pages, and log out successfully.', () => {
    cy.contains('Log In').click()
    cy.get(':nth-child(1) > input').click().type('test.customer@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password123!')
    cy.get('.full-width > .btn').click()
    cy.contains('Home').click()
    cy.contains('Furniture').click()
    cy.contains('Log Out').click()
  })

  it('Password reset works.', () => {
    cy.contains('Log In').click()
    cy.get(':nth-child(1) > input').click().type('test.customer@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password123!')
    cy.get('.full-width > .btn').click()
    cy.contains('Settings').click()
    cy.wait(1000)
    cy.get('.form-group.full-width > input').click().type('Password123!')
    cy.get(':nth-child(2) > input').click().type('Password@123')
    cy.get(':nth-child(3) > input').click().type('Password@123')
    cy.get('button[type="submit"]').should('have.text', 'Update Password').and('be.visible').and('not.be.disabled').click()
    cy.contains('Log Out').click()
    cy.wait(1000)
    cy.contains('Log In').click()
    cy.get(':nth-child(1) > input').click().type('test.customer@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password@123')
    cy.get('.full-width > .btn').click()
    cy.contains('Log Out')
  })

})