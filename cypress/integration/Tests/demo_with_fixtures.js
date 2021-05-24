describe('Demo automation with fixtures', function() {

    beforeEach(function() {
        cy.fixture('userLoginDetails').as('user')
    })

    it('Sign in', function() {
        cy.visit('https://shop.demoqa.com/my-account/')
        cy.get('#reg_username').type(this.user.username)
        cy.get('#reg_email').type(this.user.email)
        cy.get('#reg_password').type(this.user.password)
        cy.get('.woocommerce-Button').click()
    })
})