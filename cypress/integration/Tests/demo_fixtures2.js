describe('Demo automation with fixtures', function() {

    beforeEach(function() {
        cy.fixture('userLogin').as('user')
    })

    it('Register', function() {
        cy.visit('https://shop.demoqa.com/my-account')
        cy.get('#reg_username').type(this.user.username)
        cy.get('#reg_email').type(this.user.email)
        cy.get('#reg_password').type(this.user.password)
        cy.get('.woocommerce-Button').click()
    })

    it('Log in', function() {
        cy.get('#username').clear().type(this.user.username)
        cy.get('#password').type(this.user.password)
        cy.get(':nth-child(3) > .woocommerce-button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').contains(this.user.username)

    })
})