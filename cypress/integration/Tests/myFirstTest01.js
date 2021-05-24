describe('Site cypress.io', function () {

    it('open in browser', function() {
        cy.visit('https://www.cypress.io/')
        cy.screenshot()
    })

    it('open in iphone 8', function() {
        cy.visit('https://www.cypress.io/')
        cy.viewport('iphone-8')
        cy.screenshot()
    })

    it('open in samsung s10', function() {
        cy.visit('https://www.cypress.io/')
        cy.viewport('samsung-s10')
        cy.screenshot()
    })

})
