describe('Site cypress.io', function () {

    beforeEach(function() {
        cy.visit('https://cypress.io/')
    })

    it('open in browser', function() {
        cy.screenshot()
    })

    it('open in iphone 8', function() {
        cy.viewport('iphone-8')
        cy.screenshot()
    })

    it('open in samsung s10', function() {
        cy.viewport('samsung-s10')
        cy.screenshot()
    })

})
