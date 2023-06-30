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
    npx cypress run --spec "cypress/e2e/underwear.cy.js
    ************************************
*/

const currentPage = '/collections/sets-bras-and-panties'

describe(`Test prices match on collection and side cart`, () => {
    it(`prices matches`, () => {
        
        for(let index = 0; index <13; index++){

            cy.visit(currentPage);
            cy.wait(500);
            cy.get('.item.ebyProdTile').eq(index)
                .find('.prodTilePriceWrapper .ebyProdTile-vipPriceWrapper p.bfx-price')
                .first()
                .invoke('text')
                .as('productPrice')
            
            cy.get('.item.ebyProdTile').eq(index)
                .find('.prodTilePriceWrapper p.price.bfx-price')
                .first()
                .invoke('text')
                .as('salePrice')
    
            // Go to the product page of item and make sure the price and sale price matches
            cy.get(`.item.ebyProdTile .normal_btn_wrapper a`).eq(index)
            .invoke('attr', 'href')
            .then( function(uri){
    
                console.log(uri, this)
                const productPrice = this.productPrice; // Store the productPrice in a variable
                const salePrice = this.salePrice; // Store the productPrice in a variable
                
                cy.visit(uri);
                cy.get('.mobile-intro .isBundleBraExtra23')
                    .should('have.text', productPrice); // Use the productPrice alias

                cy.get('.nrml-price23').first()
                    .should('have.text', salePrice); // Use the productPrice alias
            });
        }
    })
})