describe('Dashboard - Negative Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.pause()
  })
})

it("Invalid address rejected", () => {
    cy.visit('http://localhost:3000/')

    //Login
    cy.get('.nav-actions > .btn').click()
    cy.fixture('users').then((LoginData) => {
        cy.get('input[type="email"]').type(LoginData.email);
        cy.get('input[type="password"]').type(LoginData.password);
        cy.get('.full-width > .btn').click();
        cy.wait(2000);

    // Invalid/Missing address test
    cy.contains("Shipping Addresses").click()
    cy.contains("Add New Address").click()
    cy.fixture('invalidaddress').then((AddressData) => {
    cy.get(':nth-child(1) > input').type(AddressData.Label)
    cy.get(':nth-child(2) > input').type(AddressData.FullName)
    cy.get(':nth-child(3) > input').type(AddressData.Street)
    cy.get(':nth-child(4) > input').type(AddressData.City)
    cy.get(':nth-child(5) > input').type(AddressData.PostalCode)
    cy.get(':nth-child(6) > input').type(AddressData.Phone)
    cy.wait(2000)
    cy.contains("Save Address").click()


})
})  

it.only("Unauthorized dashboard activities", () => {
     cy.visit('http://localhost:3000/')

    //  Unauthorized purchase
     cy.contains("Shop Now").click()
     cy.get('[href="/products/vertex-monitor"] > [style="padding: 0px 0.25rem;"] > .space-between > .btn').click()
     cy.get('[aria-label="Open cart"]').click()
     cy.contains("Proceed to Checkout").click()
     cy.contains("Delivery Information").should('be.visible')
     cy.fixture('dashboard').then((DeliveryData) => {
    cy.get(':nth-child(2) > .form-grid > :nth-child(1) > input').type(DeliveryData.FullName)
    cy.get(':nth-child(2) > .form-grid > :nth-child(2) > input').type(DeliveryData.PhoneNumber)
    cy.get('.form-group.full-width > input').type(DeliveryData.StreetAddress)
    cy.get(':nth-child(4) > input').type(DeliveryData.City)
    cy.get(':nth-child(5) > input').type(DeliveryData.PostalCode)
    cy.contains("Continue to Payment").click()

    cy.fixture('payments').then((PaymentData) => {
  cy.get('.full-width > input').type(PaymentData.CardNumber)
  cy.get(':nth-child(2) > .form-grid > :nth-child(2) > input').type(PaymentData.ExpiryDate)
  cy.get(':nth-child(3) > input').type(PaymentData.CVV)
  cy.wait(2000)
  cy.contains("Place Order").click()



it.only("Subscription without email", () => {
    cy.visit('http://localhost:3000/')

        cy.get('.nav-actions > .btn').click()
    cy.fixture('users').then((LoginData) => {
        cy.get('input[type="email"]').type(LoginData.email);
        cy.get('input[type="password"]').type(LoginData.password);
        cy.get('.full-width > .btn').click();

        //Subscription without email
        cy.contains("Home").click()
        cy.get('form > .btn').click()

    
    })
})
})
     })
    })
})