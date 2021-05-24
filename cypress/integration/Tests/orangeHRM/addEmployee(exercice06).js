describe('OrangeHRM', function() {

    beforeEach(function() {
        cy.fixture('orangeHRM/employee').as('employee')
    })

    it('Add an employee', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        //Login as Admin
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()

        //Add employee information
        cy.get('#menu_pim_viewPimModule').click()
        cy.get('#menu_pim_addEmployee').click({force: true})
        cy.get('#firstName').type(this.employee.firstName)
        cy.get('#middleName').type(this.employee.middleName)
        cy.get('#lastName').type(this.employee.lastName)
        cy.get('#employeeId').clear().type(this.employee.id)
        cy.get('#photofile').attachFile('images/myPhotography.jpg')

        //Add employee details
        cy.get('#chkLogin').check()
        cy.get('#user_name').type(this.employee.userName)
        cy.get('#user_password').type(this.employee.password)
        cy.get('#re_password').type(this.employee.confirmPassword)     
        
        //Verify status is "Enabled"
        cy.get('#status').contains('Enabled')

        //Save
        cy.get('#btnSave').click()

    })

    after(function() {
        cy.get('#welcome').click()
        cy.contains('Logout').click()
        //cy.get("#welcome-menu a[href='/index.php/aut/logout']").click({force: true})
    })

})