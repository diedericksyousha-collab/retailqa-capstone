describe('template spec', () => {

  beforeEach('', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Log In').click()
    cy.get(':nth-child(1) > input').click().type('sarah.johnson@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password123!')
    cy.get('.full-width > .btn').click()

    cy.wait(5000)
  })

  it('Process valid payment', () => {
    cy.contains('Order History').should('be.visible').click()

        let startingOrderCount: number

        const getTotalOrdersCount = (): Cypress.Chainable<number> => {
            return cy.contains('.card', 'Total Orders')
            .should('be.visible')
            .then(($card) => {
                const cardText = $card[0].innerText

                const lines = cardText
                .split('\n')
                .map((line) => line.trim())
                .filter((line) => line.length > 0)

                const totalOrdersIndex = lines.findIndex((line) =>
                line.toLowerCase().includes('total orders')
                )

                if (totalOrdersIndex === -1) {
                throw new Error(`Could not find Total Orders in card text: ${cardText}`)
                }

                const countLine = lines
                .slice(totalOrdersIndex + 1)
                .find((line) => /^\d+$/.test(line))

                if (!countLine) {
                throw new Error(`Could not find Total Orders count in card text: ${cardText}`)
                }

                return Number(countLine)
            })
        }

        getTotalOrdersCount().then((count: number) => {
            startingOrderCount = count
        })

    cy.contains('Furniture').should('be.visible').and('not.be.disabled').click()
    cy.contains('.product-card', 'Ergonomic Standing Desk').should('be.visible').within(() => {
        cy.contains('Add to Cart').should('be.visible').and('not.be.disabled').click()
    })
    cy.get('[aria-label="Open cart"]').click()
    cy.contains('Proceed to Checkout').should('be.visible').and('not.be.disabled').click()
    cy.get('[placeholder="e.g. Johannesburg"]').type('Cape Town')
    cy.get('[placeholder="e.g. 2196"]').type('7782')
    cy.contains('Continue to Payment').should('be.visible').click()
    cy.contains('Place Order').should('be.visible').click()
    
    getTotalOrdersCount().then((endingOrderCount: number) => {
            expect(endingOrderCount).to.eq(startingOrderCount + 1)
        })
    })

    it.only('Delete Payment Method', () => {
        cy.contains('Payment Methods').should('be.visible').click()
        cy.contains('.card', 'Mastercard ending in 8765').should('be.visible').within(() => {
            cy.contains('Remove').click()
        })
        cy.contains('Card removed.')
    })
})