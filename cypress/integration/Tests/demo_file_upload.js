describe('Example to demonstrate file upload in cypress', function() {
    before(function() {
        cy.visit('https://demoqa.com/upload-download')
    })

    it('Upload a photography and verify if uploaded', function() {
        const filepath = 'images/myPhotography.jpg'
        cy.get('#uploadFile').attachFile(filepath)
        cy.get('#uploadedFilePath').contains('myPhotography')
    })
})