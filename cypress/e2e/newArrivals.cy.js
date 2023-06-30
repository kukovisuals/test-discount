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

const currentPage = '/collections/new-arrivals'

describe(`Test prices match on collection and side cart`, () => {
    it(`prices matches`, () => {
        
        for(let index = 17; index <30; index++){

            cy.visit(currentPage);
            cy.wait(500);
            cy.get('.tileFilterable.this_sale').eq(index)
                .find('.quick_btn.noFiltermodeAddToCart .prodTilePriceWrapper p.price.bfx-price')
                .first()
                .invoke('text')
                .as('productPrice')
            
            cy.get('.tileFilterable.this_sale').eq(index)
                .find('.quick_btn.noFiltermodeAddToCart .prodTilePriceWrapper .holidayPriceWrapper.saleHighlight')
                .first()
                .invoke('text')
                .as('salePrice')
    
            // Go to the product page of item and make sure the price and sale price matches
            cy.get(`.tileFilterable.this_sale a.proFeaturedImage`).eq(index)
            .invoke('attr', 'href')
            .then( function(uri){
    
                console.log(uri, this)
                const productPrice = this.productPrice; // Store the productPrice in a variable
                const salePrice = this.salePrice; // Store the productPrice in a variable
                
                cy.visit(uri);
                cy.get('.mobile-intro .nrml-price23')
                    .should('have.text', productPrice); // Use the productPrice alias

                cy.get('#eby-dealSale-23')
                    .should('have.text', salePrice); // Use the productPrice alias
            });
        }
    })
})