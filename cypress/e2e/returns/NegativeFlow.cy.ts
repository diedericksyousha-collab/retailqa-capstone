describe('Returns - Negative Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(2000);
  });

  it('Pending return request', () => {
    cy.get('.nav-actions > .btn').click();
    cy.fixture('returns').then((LoginData) => {
        cy.get('input[type="email"]').type(LoginData.email);
        cy.get('input[type="password"]').type(LoginData.password);
        cy.get('.full-width > .btn').click();
        cy.wait(2000);

        cy.contains('QA Lab').click()
        cy.contains('Create Return Request').should('be.visible')
        cy.get(':nth-child(1) > select').select('LWS-22662 - Processing')
        cy.get('.form-grid > :nth-child(2) > input').type('R15 999')
        cy.get(':nth-child(1) > .form-grid > .form-group.full-width > textarea').type('Returning due to product defect')
        cy.contains('Submit Return').click()
        cy.pause()


    })
  })

  it.only('Duplicate return request', () => {
    cy.get('.nav-actions > .btn').click()
    cy.fixture('returns').then((LoginData) => {
        cy.get('input[type="email"]').type(LoginData.email);
        cy.get('input[type="password"]').type(LoginData.password);
        cy.get('.full-width > .btn').click();
        cy.wait(2000);

        //duplicate return request attempt
        cy.contains('QA Lab').click()
    cy.contains('Create Return Request').should('be.visible')
    cy.get(':nth-child(1) > select').select('ORD-003-20260510') 
    cy.get('.form-grid > :nth-child(2) > input').type('R23 000')
    cy.get(':nth-child(1) > .form-grid > .form-group.full-width > textarea').type('Returning due to product defect')
    cy.contains('Submit Return').click().click().click()
    cy.get('[style="position: fixed; bottom: 2rem; right: 2rem; background: var(--primary); color: rgb(255, 255, 255); padding: 1rem 1.5rem; border-radius: 4px; box-shadow: rgba(0, 31, 92, 0.25) 0px 8px 24px; z-index: 9999; animation: 0.3s ease-out 0s 1 normal forwards running slideIn; font-weight: 500; display: flex; align-items: center; gap: 0.75rem; max-width: 360px;"]')
    
})


    it.only('Return request with invalid price for selected product', () => {
        cy.get('.nav-actions > .btn').click()
        cy.fixture('returns').then((LoginData) => {
        cy.get('input[type="email"]').type(LoginData.email);
        cy.get('input[type="password"]').type(LoginData.password);
        cy.get('.full-width > .btn').click();
        cy.wait(2000);
        cy.contains('QA Lab').click()
    cy.contains('Create Return Request').should('be.visible')
    cy.get(':nth-child(1) > select').select('ORD-003-20260510') 
    cy.get('.form-grid > :nth-child(2) > input').type('R100 000')
    cy.get(':nth-child(1) > .form-grid > .form-group.full-width > textarea').type('Returning due to product defect')
    cy.wait(10000)
    cy.contains('Submit Return').click()
})
})
})
})




