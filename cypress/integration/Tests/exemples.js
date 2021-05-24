
describe('my form', function() {

    it('visits the form', function() {
        cy.visit('users/new')
    })

    it('fills first name', function() {
        cy.get('#first').type('Marie')
    })

    it('fills last name', function() {
        cy.get('#last').type('Durand')
    })

    it('submits the form', function() {
        cy.get('form').submit()
    })
})

describe('my form', function() {
    
    it('submits the form', function() {
        cy.visit('users/new')
        cy.get('#first').type('Marie')
        cy.get('#last').type('Durand')
        cy.get('form').submit()
    })
})

describe('my form', function() {

    beforeEach(function() {
        cy.visit('users/new')
        cy.get('#first').type('Marie')
        cy.get('#last').type('Durand')
    })
    
    it('displays form validation', function() {
        cy.get('#first').clear()
        cy.get('form').submit()
        cy.get('#errors').should('contains', 'First name is required')
    })

    it('submits the form', function() {
        cy.get('form').submit()
    })
})


describe('my form', function() {

    beforeEach(function() {
        cy.visit('users/new')
        cy.get('#first').type('Marie')
    })

    it('has validation attribute', function() {
        cy.get('#first').should('have.attr', 'data-validation', 'required')
    })

    it('has active class', function() {
        cy.get('#first').should('have.class', 'active')
    })

    it('has formatted first name', function() {
        cy.get('#first').should('have.value', 'Marie')
    })
})


describe('my form', function() {

    beforeEach(function() {
        cy.visit('users/new')
    })

    it('validates and formats first name', function() {
        cy.get('#first')
          .type('Marie')
          .should('have.attr', 'data-validation', 'required')
          .should('have.class', 'active')
          .should('have.value', 'Marie')
        })
})


describe('logged in user', function() {

    beforeEach(function() {
        cy.login()
    })

    afterEach(function() {
        cy.logout
    })

    it('test one', ...)
    it('test two', ...)
    it('test three', ...)
})

beforeEach(function() {
    cy.resetDb()
})

cy.visit('http://localhost/8080')
cy.wait(5000)

