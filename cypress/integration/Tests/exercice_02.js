describe('Exercice 2', function () {

    beforeEach(function() {
        cy.visit('http://shop.demoqa.com')
    })

    it('open shop.demoqa.com in browser', function() {
        cy.screenshot()
    })

    it('open shop.demoqa.com in iphone 8', function() {
        cy.viewport('iphone-8')
        cy.screenshot()
        cy.log('open in iphone 8 is ok')
    })

    it('open shop.demoqa.com in samsung s10', function() {
        cy.viewport('')
        cy.screenshot()
    })

})
