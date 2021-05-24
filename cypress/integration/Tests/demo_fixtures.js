describe('Demo automation with fixtures', function() {

    it('Register', function() {

        cy.visit('https://shop.demoqa.com/my-account')

        cy.fixture('userLogin').then(function(user) {
            cy.get('#reg_username').type(user.username)
            cy.get('#reg_email').type(user.email)
            cy.get('#reg_password').type(user.password)
        })

        cy.get('.woocommerce-Button').click()
    })

    it('Log in', function() {

        cy.fixture('userLogin').then(function(user) {
            cy.get('#password').type(user.password)
            cy.get(':nth-child(3) > .woocommerce-button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').contains(user.username)
            

        })

    })
})