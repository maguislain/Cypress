describe('site toolsQA Shop', function() {

    it('add shirts on cart', function() {
        //Given J'accède à la page http://shop.demoqa.com/my-account/
        cy.visit('http://shop.demoqa.com/my-account/')

        //And Je m'enregistre avec le nom d'utilisateur "user02",
        //l'adresse mail "user02.test@gmail.com"
        //et le mot de passe "user02testPW"
        cy.get('#reg_username').type('user02')
        cy.get('#reg_email').type('user02.test@gmail.com')
        cy.get('#reg_password').type('user02testPW')
        cy.get('.woocommerce-Button').click()

        //When Je recherche "shirt"
        cy.get('.noo-search').click()
        cy.get('.form-control').type('shirt{enter}')
        
        //And Je sélectionne les produits avec les spécifications suivantes
        //blue denim 34 black
        cy.get('.post-1430 > .noo-product-inner > h3 > a').click()
        cy.get('#pa_color').select('black')
        cy.get('#pa_size').select('34')
        //And je clique sur "Add to cart"
        cy.get('.single_add_to_cart_button').click()

        //And Je sélectionne un autre produit
        //playboy 40 grey
        cy.get('.noo-search').click()
        cy.get('.form-control').type('shirt{enter}')
        cy.get('.post-1491 > .noo-product-inner > h3 > a').click()
        cy.get('#pa_color').select('grey')
        cy.get('#pa_size').select('40')
        //And je clique sur "Add to cart"
        cy.get('.single_add_to_cart_button').click()       

        //Then La page du panier contient "blue denim" et "playboy"
        cy.get('.woocommerce-message > .button').click()
        cy.get('.woocommerce > form').should('contain', 'blue denim')
        cy.get('.woocommerce > form').should('contain', 'playboy')       

    })
})

