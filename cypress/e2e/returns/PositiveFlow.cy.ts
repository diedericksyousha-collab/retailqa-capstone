describe("Returns & Refunds Processing", () => {

  it("Login process", () => {
// |Visit Webpage
    cy.visit("http://localhost:3000/");

    cy.get(".nav-actions > .btn").click();

    cy.get('input[type="email"]').type("michael.chen@lewisstores.local");
    cy.get('input[type="password"]').type("Password123!");
    cy.get(".full-width > .btn").click();
    cy.wait(2000);

    //Returns Process and payment method verification
    cy.contains('QA Lab').click()
    cy.contains('Create Return Request').should('be.visible')
    cy.get(':nth-child(1) > select').select('ORD-003-20260510') 
    cy.get('.form-grid > :nth-child(2) > input').type('R23 000')
    cy.get(':nth-child(1) > .form-grid > .form-group.full-width > textarea').type('Returning due to product defect')
    cy.contains('Submit Return').click()
    cy.get('[style="position: fixed; bottom: 2rem; right: 2rem; background: var(--primary); color: rgb(255, 255, 255); padding: 1rem 1.5rem; border-radius: 4px; box-shadow: rgba(0, 31, 92, 0.25) 0px 8px 24px; z-index: 9999; animation: 0.3s ease-out 0s 1 normal forwards running slideIn; font-weight: 500; display: flex; align-items: center; gap: 0.75rem; max-width: 360px;"]')
    .should('contain', 'Return request submitted')
    cy.contains('Payment Methods').click() 
    cy.get(':nth-child(1) > [style="flex-grow: 1;"] > [style="font-weight: 600; color: var(--on-surface); margin-bottom: 0.15rem;"]').should('contain', 'Visa ending in 4242')
   
  });
});
