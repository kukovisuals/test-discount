/*
    ***********************************
    *  :: Paste Array in pdps ::
    *  Change values here
     _._     _,-'""`-._
    (,-.`._,'(       |\`-/|
        `-.-' \ )-`( , o o)
              `-    \`_`"'-
    open cypress -> npx cypress open
    report ---> npx cypress run --reporter mochawesome
    ************************************
*/

const currentPage = '/collections/bralette-bundle-packs'

describe(`Test on Last Call` ,() => {
    it(`The price should be the same on the product page`,() => {
        
        for(let index = 0; index < 13; index++){
        
            cy.visit(currentPage);

            // Array of products grab price
            cy.get('.ebyProdTile-vipPriceWrapper p.bfx-price').eq(index)
                .invoke('text')
                .as('productPrice')

            // Array of products grab sale price
            cy.get('.prodTilePriceWrapper p.price.bfx-price').eq(index)
                .invoke('text')
                .as('productSalePrice')

        
            // Go to the product page of item and make sure the price and sale price matches
            cy.get(`h3.proName a`).eq(index)
                .invoke('attr', 'href')
                .then( function(uri){

                    console.log(uri, this)
                    const productPrice = this.productPrice; // Store the productPrice in a variable
                    const productSalePrice = this.productSalePrice; // Store the productPrice in a variable
                    
                    cy.visit(uri);
                    cy.get('.mobile-intro span.isBundleBraExtra23')
                        .should('have.text', productPrice); // Use the productPrice alias

                    cy.get('#eby-price-observer .nrml-price23 ')
                        .should('have.text', productSalePrice); // Use the productPrice alias
                });
        }
          
    })
});