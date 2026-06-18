describe('Dashboard - Positive Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(2000);
  })
})

it("Orders displays with pagination", () => {
    
    // Login
    cy.visit('http://localhost:3000/');
    cy.get('.nav-actions > .btn').click();
    cy.fixture('users').then((LoginData) => {
        cy.get('input[type="email"]').type(LoginData.email);
        cy.get('input[type="password"]').type(LoginData.password);
        cy.get('.full-width > .btn').click();
        cy.wait(2000);

        //Creating multiple orders to test pagination
        cy.get('nav > [href="/"]').click()
        cy.contains('Shop Now').click()
        cy.get('[href="/products/vertex-monitor"] > [style="padding: 0px 0.25rem;"] > .space-between > .btn').click()
        cy.get('[aria-label="Open cart"]').click()
        cy.contains("Proceed to Checkout").click()
        cy.fixture('delivery').then((DeliveryData) => {
        cy.get(':nth-child(4) > input').type(DeliveryData.City)
        cy.get(':nth-child(5) > input').type(DeliveryData.PostalCode)
        cy.contains('Continue to Payment').click()
        cy.fixture('payments').then((PaymentData) => {
        cy.get(':nth-child(1) > input').type(PaymentData.CardNumber)
        cy.get(':nth-child(2) > input').type(PaymentData.ExpiryDate)
        cy.get(':nth-child(3) > input').type(PaymentData.CVV)
        cy.contains('Place Order').click()
        //Repeat the above steps to create multiple orders or re-run tests to create the same order multiple times
        cy.wait(5000)
        cy.get(':nth-child(27) > :nth-child(1)').scrollIntoView().invoke('css', 'border', '3px solid red')
    })

it.only("Filtering date range, status and price range", () => {
    //Login
        cy.visit('http://localhost:3000/');
        cy.get('.nav-actions > .btn').click();
        cy.fixture('users').then((LoginData) => {
        cy.get('input[type="email"]').type(LoginData.email);
        cy.get('input[type="password"]').type(LoginData.password);
        cy.get('.full-width > .btn').click();
        cy.wait(2000)
        cy.get('nav > [href="/"]').click()  
        cy.contains('Shop Now').click()
        cy.wait(2000)
        cy.get('select').select('Price: Low to High')
        cy.wait(2000)
        cy.get('select').select('Price: High to Low')
        cy.wait(2000)
        cy.get('select').select('Most Popular')


    

it.only("Managing addresses and profile updates", () => {
//     //Profile update
        cy.visit('http://localhost:3000/');
        cy.get('.nav-actions > .btn').click();
        cy.fixture('users').then((LoginData) => {
        cy.get('input[type="email"]').type(LoginData.email);
        cy.get('input[type="password"]').type(LoginData.password);
        cy.get('.full-width > .btn').click();
        cy.wait(2000)
        cy.contains("Personal Information").click().should('be.visible')
        cy.wait(5000)
        cy.contains("Save Changes").click()
        cy.get('[style="position: fixed; bottom: 2rem; right: 2rem; background: var(--primary); color: rgb(255, 255, 255); padding: 1rem 1.5rem; border-radius: 4px; box-shadow: rgba(0, 31, 92, 0.25) 0px 8px 24px; z-index: 9999; animation: 0.3s ease-out 0s 1 normal forwards running slideIn; font-weight: 500; display: flex; align-items: center; gap: 0.75rem; max-width: 360px;"]').should('contain.text', 'Profile updated successfully')

    //Address management
    cy.contains("Shipping Addresses").click()
    cy.contains("Add New Address").click()
    cy.fixture('address').then((AddressData) => {
    cy.get(':nth-child(1) > input').type(AddressData.Label)
    cy.get(':nth-child(2) > input').type(AddressData.FullName)
    cy.get(':nth-child(3) > input').type(AddressData.Street)
    cy.get(':nth-child(4) > input').type(AddressData.City)
    cy.get(':nth-child(5) > input').type(AddressData.PostalCode)
    cy.get(':nth-child(6) > input').type(AddressData.Phone)
    cy.contains('Save Address').click()
    cy.get('[style="position: fixed; bottom: 2rem; right: 2rem; background: var(--primary); color: rgb(255, 255, 255); padding: 1rem 1.5rem; border-radius: 4px; box-shadow: rgba(0, 31, 92, 0.25) 0px 8px 24px; z-index: 9999; animation: 0.3s ease-out 0s 1 normal forwards running slideIn; font-weight: 500; display: flex; align-items: center; gap: 0.75rem; max-width: 360px;"]').should('contain.text', 'New shipping address saved')
    cy.wait(5000)
    cy.get(':nth-child(3) > [style="display: flex; justify-content: space-between; align-items: flex-start;"] > [style="display: flex; gap: 0.5rem; flex-shrink: 0;"] > [style="padding: 0.35rem 0.85rem; font-size: 0.82rem;"]').click()

})

})
})
})
})
        })
    })
})
