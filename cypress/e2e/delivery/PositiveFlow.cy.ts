describe("Shipment and delivery tracking feature", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.wait(5000)
  });
  it("Login process", () => {
    cy.get(".nav-actions > .btn").click();
    cy.get(":nth-child(1) > input").type('sarah.johnson@lewisstores.local');
    cy.get('#root input[type="password"]').type('Password123!');
    cy.get("#root button.btn").click();
    cy.get('#root > div:nth-child(2)').should("contain.text", "Welcome back, Sarah Johnson")
    
    //Purchasing process
    cy.get('#root nav a[href="/orders"]').click();
    cy.get('#root nav a[href="/"]').click();
    cy.get('#root div.row a.btn-primary').click();
    cy.get('a[href="/products/luca-modular"] #addToCart').click();
    cy.get('[aria-label="Open cart"]').click()
    cy.get('#root a.btn-block').click();
    cy.get(':nth-child(4) > input').type('Cape Town')
    cy.get(':nth-child(5) > input').type('7764')
    cy.get('#root button.btn-primary').click();
    
        //Payment details
        //Card Number
        cy.get('#root input[placeholder="0000 0000 0000 0000"]').type(
          "1234567896488367",
        );
        //Expiry date
        cy.get('#root input[placeholder="MM / YY"]').type("02/30");
        //CVV
        cy.get('#root input[placeholder="000"]').type("123");
    
        //Order placement
        cy.wait(2000)
        cy.get("#root button.btn-primary").click();
        cy.get("#root > div:nth-child(2)").should(
          "contain.text",
          "Order placed successfully! Check your email for confirmation.",
        );
        
        cy.wait(2000)
        cy.get("#root td:nth-child(1)")
          .first()
          .invoke("text")
          .then((orderId) => {
            cy.log("Captured Order ID: " + orderId);
    
            // validate it's not empty
            expect(orderId.trim()).to.not.equal("");
            
            //View order and POD
            cy.get('#root tr:nth-child(2) button.btn').click();
      
      });

  });
});





