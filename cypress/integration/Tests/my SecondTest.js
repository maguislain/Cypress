describe('Actions on elements', function() {

    it('finds the element "type"', function() {
        cy.visit('https://example.cypress.io/')
        cy.contains('type').click()

        // Should be on a new URL which includes "/commands/actions"
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('#email1').type('test@email.com')
          .should('have.value', 'test@email.com')

    })

})