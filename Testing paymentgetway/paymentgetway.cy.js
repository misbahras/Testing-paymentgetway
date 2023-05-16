describe('test suit',()=>{
    it('verify payment method',()=>{
        cy.visit('https://demo.guru99.com/payment-gateway/purchasetoy.php')/// visit website
        cy.url().should('include','payment-gatewa')/// assertio
         cy.get('select').select('2')/// change quantity
         cy.get('.button').click()
    Cypress.Cookies.debug(true,{ verbose: false })
    cy.get('[src="images/visa.png"]')
    cy.get('#card_nmuber').type('4270070443624935')
    cy.get('#month').select('10') /// dropdown button
    cy.get('#year').select('2025')
    cy.get('#cvv_code').type('788')
    cy.get('.button').click()
    cy.get('h2').contains('Payment successfull!')/// assertion check message on next page
    cy.get('.button').click()


    

        
    })
    

})