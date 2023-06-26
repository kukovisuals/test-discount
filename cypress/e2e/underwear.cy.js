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

const currentPage = '/collections/seamless-underwear'

describe(`Test on Last Call` ,() => {
    it(`The price should be the same on the product page`,() => {
        
        for(let index = 28; index < 40; index++){
        
            cy.visit(currentPage);

            // Array of products grab price
            cy.get('.noFiltermodeAddToCart .price.bfx-price').eq(index)
                .invoke('text')
                .as('productPrice')

            // Array of products grab sale price
            cy.get('.noFiltermodeAddToCart .ebyProdTile-vipPriceWrapper .bfx-price').eq(index)
                .invoke('text')
                .as('productSalePrice')

        
            // Go to the product page of item and make sure the price and sale price matches
            cy.get(`.proFeaturedImage`).eq(index)
                .invoke('attr', 'href')
                .then( function(uri){

                    console.log(uri, this)
                    const productPrice = this.productPrice; // Store the productPrice in a variable
                    const productSalePrice = this.productSalePrice; // Store the productPrice in a variable
                    
                    cy.visit(uri);
                    cy.get('.mobile-intro .nrml-price23')
                        .should('have.text', productPrice); // Use the productPrice alias

                    cy.get('#eby-subVipMobile-price')
                        .should('have.text', productSalePrice); // Use the productPrice alias
                });
        }
          
    })
})
// describe(`Get more raw data to compare`, () => {
//     beforeEach(() => {
//         cy.visit(URL);
//     });

//     it(`:: Test that all spans have a string and we have 3 spans total :: `, () => {

//         cy.get('.col-pro-details h3').each(($h3, index) => {
//             cy.wrap($h3).children('span')
//                 .should('have.length', 3)
//                 .each(($span) => {
//                     const textLength = $span.text().trim().length;
//                     expect(textLength).to.be.greaterThan(3);
//                 });
//         });

//         // cy.get('.col-pro-details h3 span').eq(3)
//         //     .then(($span) => {
//         //         const textLength = $span.text().trim().length;
//         //         expect(textLength).to.be.greaterThan(3);
//         //     });
//     });

//     it(`:: It should Include Add to Cart :: `, () => {
//         cy.get('.noFiltermodeAddToCart .quickAddBtnInnerWrapper span')
//             .each(($el) => {
//                 cy.wrap($el).should('have.text', 'Add To Cart');
//             });
//         // cy.get('.noFiltermodeAddToCart .quickAddBtnInnerWrapper span').eq(3)
//         //     .invoke('text')
//         //     .should('eq', 'Add To Cart');
//     });

//     it(`:: It should have a price $34 or $23.34 with a rgb(127, 133, 163) color :: `, () => {
//         cy.get('.noFiltermodeAddToCart p.price.bfx-price')
//             .each(($el) => {
//                 cy.wrap($el)
//                     .and('have.css', 'text-decoration', 'line-through solid rgb(127, 133, 163)') // Check the text decoration
//                     .invoke('text')
//                     .should('match', /\$\d+(\.\d{1,2})?/) // Check the text
//             });
//         // cy.get('.noFiltermodeAddToCart p.price.bfx-price').eq(3)
//         //     .and('have.css', 'text-decoration', 'line-through solid rgb(127, 133, 163)')  // Check the text decoration
//         //     .invoke('text')
//         //     .should('match', /\$\d+(\.\d{1,2})?/) // Check the text
//     });

//     it(`:: It should have a price $34 or $23.34 with a rgb(208, 2, 27) color :: `, () => {
//         cy.get('.noFiltermodeAddToCart .holidayPriceWrapper.standard.saleHighlight.bfx-price')
//             .each(($el) => {
//                 cy.wrap($el)
//                     .and('have.css', 'color', 'rgb(208, 2, 27)') // Check the color
//                     .invoke('text')
//                     .should('match', /\$\d+(\.\d{1,2})?/) // Check the text
//                     .and('have.css', 'color', 'rgb(208, 2, 27)'); // Check the color
//             });
//         // cy.get('.noFiltermodeAddToCart .holidayPriceWrapper.standard.saleHighlight.bfx-price').eq(3)
//         //     .and('have.css', 'color', 'rgb(208, 2, 27)') // Check the color
//         //     .invoke('text')
//         //     .should('match', /\$\d+(\.\d{1,2})?/) // Check the text

//     });
// });