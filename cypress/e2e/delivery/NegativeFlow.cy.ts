describe("Shipment and delivery tracking feature", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });


  it("Login process", () => {
    cy.contains('Log In').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > input').type('sarah.johnson@lewisstores.local')
    cy.get('#root input[type="password"]').type('Password123!');
    cy.get('#root button.btn').click();
    cy.get('#root > div:nth-child(2)').should('contain.text', 'Welcome back, Sarah Johnson');
    cy.pause()


    //Attempting to duplicate order purchasing process 
    cy.get('#root nav a[href="/"]').click();
    cy.contains('Shop Now').click()
    cy.wait(2000)
    cy.get('a[href="/products/mirror-wall"] #addToCart').click();
    cy.wait(2000)
    cy.get('#root a[aria-label="Open cart"] svg').click();
    cy.wait(2000)
    cy.contains('Proceed to Checkout').click()
    cy.get('#root input[placeholder="e.g. Johannesburg"]').type('Cape Town');
    cy.get('#root input[placeholder="e.g. 2196"]').type('7764');
    cy.contains('Continue to Payment').click()

     //Payment details
        //Card Number
        cy.wait(2000)
        cy.get('#root input[placeholder="0000 0000 0000 0000"]').type(
          "1234567896488367",
        );
        //Expiry date
        cy.wait(2000)
        cy.get('#root input[placeholder="MM / YY"]').type("02/30");
        //CVV
        cy.wait(2000)
        cy.get('#root input[placeholder="000"]').type("123");
    
        //Order placement
        cy.wait(2000)
        cy.get("#root button.btn-primary").click().click().click()
        cy.get("#root > div:nth-child(2)").should(
          "contain.text",
          "Order placed successfully! Check your email for confirmation.");
          cy.pause()

      
         it.only('Verify unauthorized tracking with no Log in details', () => {
        cy.contains('Orders').click() 

     })  
  });

     it.only('Verify unauthorized tracking with no Log in details', () => {
      cy.contains('Orders').click()
      cy.wait(2000)
      cy.get('#root a.btn-primary').click(); 
      cy.wait(2000)
      cy.contains('Orders').click() 
  })

    it.only('Invalid Shipment ID handling', () => {
      cy.get(".nav-actions > .btn").click();
      cy.wait(2000)
      cy.get(":nth-child(1) > input").type('sarah.johnson@lewisstores.local');
      cy.get('#root input[type="password"]').type('Password123!');
      cy.wait(2000)
      cy.get("#root button.btn").click();
      cy.get('#root > div:nth-child(2)').should("contain.text", "Welcome back, Sarah Johnson")
      cy.get('#root nav a[href="/orders"]').click();
      
  })

     it.only('Invalid email handling', () => {
      cy.get('#root a[aria-label="User profile"] svg').click();
      cy.get('#root a.btn-primary').click();
      cy.get('#root input[type="email"]').type('sarah.bollocks@lewisstore.local');
      cy.get('#root input[type="password"]').type('Password123!');
      cy.get('#root button.btn').click();
      cy.get('#root > div:nth-child(2)').should('contain.text', "Unable to authenticate. Please check your details.")

     })
})

  
  

