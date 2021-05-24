describe('Example to demonstrate file upload', function() {
    const filepath = 'images/myPhotography.jpg'
    const filename = 'myPhotography'
    

    it('upload a picture and verify if uploaded', function() {

        cy.visit('https://demoqa.com/upload-download')

        //cy.get('#uploadFile').attachFile('images/myPhotography.jpg')


        cy.get('#uploadFile').attachFile(filepath)

        cy.get('#uploadedFilePath').contains(filename)
    })
})