describe('Demo automation with fixtures', function() {

    it('Sign in', function() {
    
        cy.visit('https://shop.demoqa.com/my-account/')

        cy.fixture('userLoginDetails').then(function(user) {
            cy.get('#reg_username').type(user.username)
            cy.get('#reg_email').type(user.email)
            cy.get('#reg_password').type(user.password) 
        })

        cy.get('.woocommerce-Button').click()
        
    })

}) 