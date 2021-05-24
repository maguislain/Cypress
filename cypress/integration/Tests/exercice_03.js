describe('Exercice 3', function () {

    beforeEach(function() {
        cy.visit('https://www.demoqa.com/books')
    })

    it('search for author name', function() {
        cy.get('#searchBox').type('Eric Elliot{enter}')

        //Click on the book which title is 'Programming JavaScript Applications'
        cy.contains('Programming').click({force: true})

        //Verify that current URL contains ISBN number 9781491950296
        //cy.url().should('contains', '9781491950296')
        cy.url().should('include', '9781491950296')
        cy.url().should('eq', 'https://www.demoqa.com/books?book=9781491950296')
          
    })

})
