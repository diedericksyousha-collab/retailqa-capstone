describe('template spec', () => {

  beforeEach('', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(5000)
  })

  it('User login with invalid email and password fails.', () => {
    cy.contains('Log In').click()
    cy.get(':nth-child(1) > input').click().type('test.customer@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password1')
    cy.get('.full-width > .btn').click()
    cy.get(':nth-child(1) > input').click().clear()
    cy.get(':nth-child(2) > input').click().clear()
    cy.get(':nth-child(1) > input').click().type('test.custom@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password123!')
    cy.get('.full-width > .btn').click()

  })

  it('Account lockout after 5 failed attempts.', () => {
    cy.contains('Log In').click()
    cy.get(':nth-child(1) > input').click().type('test.customeer@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password1w')
    cy.get('.full-width > .btn').click()

    cy.get(':nth-child(1) > input').click().clear()
    cy.get(':nth-child(2) > input').click().clear()
    cy.get(':nth-child(1) > input').click().type('test.custom@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password123!')
    cy.get('.full-width > .btn').click()

    cy.get(':nth-child(1) > input').click().clear()
    cy.get(':nth-child(2) > input').click().clear()
    cy.get(':nth-child(1) > input').click().type('test.customer@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password1')
    cy.get('.full-width > .btn').click()

    cy.get(':nth-child(1) > input').click().clear()
    cy.get(':nth-child(2) > input').click().clear()
    cy.get(':nth-child(1) > input').click().type('test.custom@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password')
    cy.get('.full-width > .btn').click()

    cy.get(':nth-child(1) > input').click().clear()
    cy.get(':nth-child(2) > input').click().clear()
    cy.get(':nth-child(1) > input').click().type('test.customeree@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password1d')
    cy.get('.full-width > .btn').click()

    cy.get(':nth-child(1) > input').click().clear()
    cy.get(':nth-child(2) > input').click().clear()
    cy.get(':nth-child(1) > input').click().type('test.csustomeree@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password1d')
    cy.get('.full-width > .btn').click()

    cy.contains('Too Many Attempts')
  })

})