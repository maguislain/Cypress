describe('Submit a form', function() {

    it('fills out and submit a form and verify data', function() {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('June')
        cy.get('.react-datepicker__year-select').select('1973')
    })
})