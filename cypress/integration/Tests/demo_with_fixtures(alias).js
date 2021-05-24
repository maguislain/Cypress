describe('Demo automation with fixtures', function() {

    let userDetails

    beforeEach(function() {
        cy.fixture('userLoginDetails').then(function(user) {
            userDetails = user
        })
    })

    it('Sign in', function() {
        cy.visit('https://shop.demoqa.com/my-account/')
        cy.get('#reg_username').type(userDetails.username)
        cy.get('#reg_email').type(userDetails.email)
        cy.get('#reg_password').type(userDetails.password)
        cy.get('.woocommerce-Button').click()
    })
})