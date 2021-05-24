describe('Automation practice form', function() {

    const filepath = 'images/myPhotography.jpg'

    beforeEach(function() {
        cy.fixture('dataEx04').as('student')
    })

    it('fills the student registration form', function() {
        cy.visit('https://demoqa.com/automation-practice-form/')

        //fill the form with fixtures
        cy.get('#firstName').type(this.student.firstName)
        cy.get('#lastName').type(this.student.lastName)
        cy.get('#userEmail').type(this.student.email)
        cy.get('#userNumber').type(this.student.mobile)

        //select gender
        cy.get('input[value="Female"]').click({force: true})

        //select date of birth
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('June')
        cy.get('.react-datepicker__year-select').select('2001')


        //upload a picture
        cy.get('#uploadPicture').attachFile(filepath)

        //submit the form
        cy.get('#submit').click()

        //verify the registered values
        cy.contains(this.student.firstName).contains(this.student.lastName)
        cy.screenshot()        

    })
})