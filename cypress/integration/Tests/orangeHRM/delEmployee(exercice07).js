describe('OrangeHRM', function() {

    beforeEach(function() {
        cy.fixture('orangeHRM/employee').as('employee')
    })

    it('Delete an employee', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        //Login as Admin
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()

        //Search for employee from id
        cy.get('#menu_pim_viewPimModule').click()
        cy.get('#menu_pim_viewEmployeeList').click({force: true})
        cy.get('#empsearch_id').type(this.employee.id)
        cy.get('#searchBtn').click()

        //Delete employee
        cy.get('input[type="checkbox"]').check()
        cy.get('#btnDelete').click({force: true})
        cy.get('#dialogDeleteBtn').click({force: true})

        //Verify text "No Records Found"
        cy.contains('No Records Found')
    })

    after(function() {
        cy.get('#welcome').click()
        cy.contains('Logout').click()
    })

})