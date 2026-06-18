describe('template spec', () => {

    beforeEach('', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Log In').click()
    cy.get(':nth-child(1) > input').click().type('sarah.johnson@lewisstores.local')
    cy.get(':nth-child(2) > input').click().type('Password123!')
    cy.get('.full-width > .btn').click()

    cy.wait(5000)
    })

    it.only('User cannot add more items to order than stock available.', () => {
        cy.contains('Furniture').should('be.visible').click()
        cy.get('[href="/products/vertex-monitor"]').should('be.visible').click()
        cy.get('.stack-md > :nth-child(3) > div > :nth-child(1)').should('be.visible').click()
        cy.contains(':nth-child(3) > div > span', '1').should('be.visible')
        cy.get('.stack-md > :nth-child(3) > div > :nth-child(3)').should('be.visible').then($btn => {
            Cypress._.times(999, () => {
                cy.wrap($btn, { log: false}).click({ force: true})
            })
        })
        cy.contains('Add to Cart').click()
        cy.get('[aria-label="Open cart"]').should('be.visible').click()
        cy.contains('Proceed to Checkout').should('be.visible').click()
        cy.get(':nth-child(4) > input').should('be.visible').type('Cape Town')
        cy.get(':nth-child(5) > input').should('be.visible').type('7780')
        cy.contains('Continue to Payment').should('be.visible').click()
        cy.get('.full-width > input').should('be.visible').type('2222222222222222')
        cy.get(':nth-child(2) > input').should('be.visible').type('08/27')
        cy.get(':nth-child(3) > input').should('be.visible').type('123')
        cy.contains('Place Order').should('be.visible').click()
    })

    it('User cannot apply an invalid coupon code to an order.', () => {
        cy.contains('Furniture').should('be.visible').and('not.be.disabled').click()
        cy.contains('.product-card', 'Luca Modular Sofa').scrollIntoView().should('be.visible').and('not.be.disabled').click()
        cy.contains('.btn-block', 'Add to Cart').scrollIntoView().should('be.visible').and('not.be.disabled').click()
        cy.get('[aria-label="Open cart"]').should('be.visible').and('not.be.disabled').click()
        cy.get('input[placeholder="Enter code"]').should('be.visible').and('not.be.disabled').type('98786222')
        cy.contains('Apply').scrollIntoView().should('be.visible').and('not.be.disabled').click()
        cy.contains('Invalid promo code.').should('be.visible')
    })

    it('Duplicate order is not created when user clicks submit more than once.', () => {
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

        cy.contains('Furniture').should('be.visible').click()

        cy.get('[href="/products/vertex-monitor"] > [style="padding: 0px 0.25rem;"] > .space-between > .btn')
            .should('be.visible')
            .click()

        cy.get('[aria-label="Open cart"]')
            .should('be.visible')
            .click()

        cy.contains('R 15 999')
            .should('be.visible')

        cy.get('[style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;"] > div > :nth-child(3)')
            .should('be.visible')
            .click()

        cy.contains('R 31 998')
            .should('be.visible')

        cy.contains('Proceed to Checkout')
            .should('be.visible')
            .click()

        cy.get(':nth-child(4) > input')
            .should('be.visible')
            .type('Cape Town')

        cy.get(':nth-child(5) > input')
            .should('be.visible')
            .type('7780')

        cy.contains('Continue to Payment')
            .should('be.visible')
            .click()

        cy.get('.full-width > input')
            .should('be.visible')
            .type('2222222222222222')

        cy.get(':nth-child(2) > input')
            .should('be.visible')
            .type('08/27')

        cy.get(':nth-child(3) > input')
            .should('be.visible')
            .type('123')

        cy.contains('Place Order')
            .should('be.visible')
            .dblclick()

        cy.url()
            .should('include', '/orders')

        getTotalOrdersCount().then((endingOrderCount: number) => {
            expect(endingOrderCount).to.eq(startingOrderCount + 1)
        })
        })

    it('Block checkout with empty cart', () => {
        cy.get('[aria-label="Open cart"]').should('be.visible').click()
        cy.contains('Shopping Cart').should('be.visible')
        cy.contains('Your cart is empty.').should('be.visible')
        cy.contains('Start adding items to your cart').should('be.visible')
        cy.contains('.btn-primary', 'Browse Products').should('be.visible').click()
        cy.contains('.product-card', 'CloudRest Memory Foam Mattress').scrollIntoView().should('be.visible').within(() => {
            cy.contains('Add to Cart').should('be.visible').and('not.be.disabled').click()
        })
        cy.get('[aria-label="Open cart"]').should('be.visible').and('not.be.disabled').click()
        cy.contains('Remove').should('be.visible').and('not.be.disabled').click()
        cy.contains('Shopping Cart').should('be.visible')
        cy.contains('Your cart is empty.').should('be.visible')
        cy.contains('Start adding items to your cart').should('be.visible')

    })

})