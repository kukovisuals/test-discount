/*
    *********************************************
    * iframe pop up
    * Remove comment line 24 if pop up comes up
    *********************************************
*/
const getIframeDocument = () => {
  return cy
  .get('iframe#attentive_creative')
  .its('0.contentDocument').should('exist');
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);
}

const URL = '/collections/seamless-underwear'
describe('Exit iframe', () => {
    it('exit from iframe if any',() => {
        cy.visit(URL);
        // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
        
    });
});

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

const discount = {"Blue Iris Bralette":["$45","$33.75"],"Blue Opal Bralette":["$45","$31.50"],"Keepsake Lilac Bralette":["$45","$31.50"],"Laurel Green Bralette":["$45","$45"],"Poppy Red Bralette":["$45","$27"],"Provincial Blue Bralette":["$45","$31.50"],"Black Cotton Bralette":["$45","$33.75"],"Blue Opal Cotton Bralette":["$45","$31.50"],"Cadet Cotton Bralette":["$45","$13.50"],"Fallen Rock Cotton Bralette":["$45","$31.50"],"Laurel Green Cotton Bralette":["$45","$27"],"Rose Clay Cotton Bralette":["$45","$13.50"],"Strawberry Ice Cotton Bralette":["$45","$13.50"],"Nude Bralette":["$45","$33.75"],"Nude Bralette (Plus)":["$45","$33.75"],"Spotted Panther Bralette":["$48","$36"],"Blue Iris Brief":["$17","$12.75"],"Blue Iris Cheeky":["$17","$12.75"],"Blue Iris Highwaisted":["$18","$13.50"],"Blue Opal Bikini":["$17","$11.90"],"Blue Opal Brief":["$17","$11.90"],"Blue Opal Brief (Full Coverage)":["$17","$11.90"],"Blue Opal Cheeky":["$17","$11.90"],"Blue Opal Highwaisted":["$18","$12.60"],"Blue Opal Highwaisted Thong":["$18","$12.60"],"Blue Opal Seamless Tank":["$17","$11.90"],"Blue Opal Thong":["$17","$11.90"],"Dark Palm Brief":["$19","$14.25"],"Dark Palm Brief (Full Coverage)":["$19","$14.25"],"Dark Palm Highwaisted":["$20","$15"],"Fjord Blue Brief":["$17","$10.20"],"Fjord Blue Brief (Full Coverage)":["$17","$10.20"],"Fjord Blue Highwaisted":["$18","$10.80"],"Fjord Blue Thong":["$17","$10.20"],"Keepsake Lilac Bikini":["$17","$11.90"],"Keepsake Lilac Brief":["$17","$11.90"],"Keepsake Lilac Brief (Full Coverage)":["$17","$11.90"],"Keepsake Lilac Highwaisted":["$18","$12.60"],"Laurel Green Bikini":["$17","$17"],"Laurel Green Brief":["$17","$17"],"Laurel Green Cheeky":["$17","$17"],"Laurel Green Highwaisted":["$18","$18"],"Laurel Green Thong":["$17","$17"],"Lime Punch Bikini":["$17","$10.20"],"Lime Punch Brief":["$17","$10.20"],"Lime Punch Brief (Full Coverage)":["$17","$10.20"],"Lime Punch High Cut":["$17","$10.20"],"Lime Punch Highwaisted":["$18","$10.80"],"Poppy Red Bikini":["$17","$10.20"],"Poppy Red Cheeky":["$17","$10.20"],"Poppy Red Highwaisted":["$18","$10.80"],"Provincial Blue Bikini":["$17","$11.90"],"Provincial Blue Brief":["$17","$11.90"],"Provincial Blue Highwaisted":["$18","$12.60"],"Provincial Blue Thong":["$17","$11.90"],"Sleek Tiger Bikini":["$19","$11.40"],"Sleek Tiger Brief":["$19","$11.40"],"Sleek Tiger Brief (Full Coverage)":["$19","$11.40"],"Sleek Tiger Highwaisted":["$20","$12"],"Sleek Tiger Thong":["$19","$11.40"],"Spotted Panther Brief":["$19","$14.25"],"Spotted Panther Highwaisted":["$20","$15"],"Sunkissed Brief":["$17","$17"],"Sunkissed Brief (Full Coverage)":["$17","$17"],"Sunkissed Highwaisted":["$18","$18"],"Sunkissed Thong":["$17","$17"],"Black Cotton Bikini":["$17","$12.75"],"Black Cotton Brief":["$17","$12.75"],"Black Cotton Thong":["$17","$12.75"],"Blue Opal Cotton Bikini":["$17","$11.90"],"Blue Opal Cotton Brief":["$17","$11.90"],"Cadet Cotton Bikini":["$17","$5.10"],"Cadet Cotton Brief":["$17","$5.10"],"Cadet Cotton Thong":["$17","$5.10"],"Fallen Rock Cotton Bikini":["$17","$11.90"],"Fallen Rock Cotton Brief":["$17","$11.90"],"Fallen Rock Cotton Thong":["$17","$11.90"],"Laurel Green Cotton Bikini":["$17","$10.20"],"Laurel Green Cotton Brief":["$17","$10.20"],"Rose Clay Cotton Bikini":["$17","$5.10"],"Rose Clay Cotton Brief":["$17","$5.10"],"Rose Clay Cotton Thong":["$17","$5.10"],"Strawberry Ice Cotton Bikini":["$17","$5.10"],"Strawberry Ice Cotton Brief":["$17","$5.10"],"Nude Bikini":["$17","$12.75"],"Nude Brief":["$17","$12.75"],"Nude Brief (Full Coverage)":["$17","$12.75"],"Nude Cheeky":["$17","$12.75"],"Nude Highwaisted":["$18","$13.50"],"Nude Highwaisted Thong":["$18","$13.50"],"Nude Thong":["$17","$12.75"]}
const pdpDiscount = ["Black Bralette","Black Brief","Nude Bralette","Nude Bikini","Blue Opal Seamless Tank","Blue Opal Bralette","Blue Iris Bralette","Blue Iris Brief","Ocean Depths Bra Bodysuit","Lime Punch High Cut Highwaisted","Lime Punch Highwaisted","Fjord Blue Thong","Fjord Blue Highwaisted","Laurel Green Cotton Bralette","Keepsake Lilac Bralette","Keepsake Lilac Highwaisted","Keepsake Lilac Bikini","Laurel Green Cotton Brief","Laurel Green Cotton Bikini","Blue Opal Cotton Bralette","Blue Opal Cotton Brief","Blue Opal Cotton Bikini","Black Cotton Bralette","Black Cotton Brief","Black Cotton Bikini","Nude Brief","Nude Highwaisted","Black Thong","Blue Opal Thong","Laurel Green Bralette","Provincial Blue Bralette","Blue Iris Cheeky","Blue Iris Highwaisted","Lime Punch Bikini","Fallen Rock Cotton Brief","Black Cheeky","Laurel Green Highwaisted","Fallen Rock Cotton Bralette","Black Highwaisted","Blue Opal Highwaisted","Fallen Rock Cotton Bikini","Fallen Rock Cotton Thong","Black Bikini","Black Highwaisted Thong","Laurel Green Cheeky","Blue Opal Bikini","Blue Opal Highwaisted Thong","Dark Palm Brief","Sunkissed Thong","Laurel Green Brief","Provincial Blue Brief","Provincial Blue Thong","Nude Thong","Nude Highwaisted Thong","Nude Cheeky"]
const pdpNew = ["Black Bralette","Black Brief","Nude Bralette","Nude Bikini","Ocean Depths Bra Bodysuit","Blue Opal Seamless Tank","Blue Opal Bralette","Blue Opal Thong","Lime Punch High Cut Highwaisted","Lime Punch Highwaisted","Lime Punch Bikini","Blue Iris Bralette","Blue Iris Brief","Fjord Blue Highwaisted","Fjord Blue Thong","Laurel Green Cotton Bralette","Keepsake Lilac Bralette","Keepsake Lilac Highwaisted","Keepsake Lilac Bikini","Laurel Green Cotton Brief","Laurel Green Cotton Bikini","Blue Opal Cotton Bralette","Blue Opal Cotton Brief","Blue Opal Cotton Bikini","Black Cotton Bralette","Black Cotton Brief","Black Cotton Bikini","Nude Brief","Nude Highwaisted","Black Thong","Laurel Green Bralette","Provincial Blue Bralette","Blue Iris Cheeky","Blue Iris Highwaisted","Fallen Rock Cotton Brief","Black Cheeky","Laurel Green Highwaisted","Fallen Rock Cotton Bralette","Black Highwaisted","Blue Opal Highwaisted","Fallen Rock Cotton Bikini","Fallen Rock Cotton Thong","Black Bikini","Black Highwaisted Thong","Laurel Green Cheeky","Blue Opal Bikini","Blue Opal Highwaisted Thong","Dark Palm Brief","Sunkissed Thong","Laurel Green Brief","Provincial Blue Brief","Provincial Blue Thong","Nude Thong","Nude Highwaisted Thong","Nude Cheeky"]

const paginationHeight = 667
const totalHeight = 41; //  *********** max 41

function grabHrefCollection(){

    let arr = []
    // eby-test673114
    // this_sale
    const getHref = document.querySelectorAll('.eby-test673114')
    for(let el of getHref){
        const attr = el.dataset.prodprice
        arr.push(attr)
    }    
    console.log(JSON.stringify(arr))
}
/*
    Option 1: Increase the pagination and look for a all selectors with .this_sale
*/

describe(`Scroll to remove lazyload and grab all sale items`, () => {
    it(`It loops 40 times`, () => {
        expect(pdpDiscount.length).to.eq(pdpNew.length)
        let h = 1;
        while( h < totalHeight){ 
            cy.wait(1000);
            cy.scrollTo(0, paginationHeight * h);
            expect(h, 'to be less than', totalHeight);
            h++;
        }
    })
    it(`:: Get The name of PDPs on Sale :: `, () => {
        let arr = []
        cy.get('.this_sale').each(($el, index,list) => {

                const prodTitle = Cypress.$($el).data('prodtitle')
                arr.push(prodTitle)
                console.clear()
                console.log('%c ---------Copy This Data---------', 'background: #023535; color: #fff')
                console.log('%c' + JSON.stringify(arr),  'background: #023535; color: #fff')
                const strA = String(' /\_/\ ')
                console.log(strA)
                console.log('( o.o ) ')
                console.log(' > ^ <')    
        })
    })

});

for(let i = 0; i < pdpDiscount.length; i++){
// for(let i = 0; i < 4; i++){
    const key = pdpDiscount[i]
    describe(`${i} Price with sale is correct ${key}`, () => {

        it(`Get price: p.eby-test95342 `, () => {
            //eby-price24562
            cy.get(`.this_sale p.eby-test95342`).each( (item, index, items) => {
                cy.wrap(items[i]).then(price => {
                    const sale = Cypress.$(price).text()
                    // const sale = sale.trim();
                    if(discount[key]){
                        expect(sale).to.eq(discount[key][0])
                    } else {
                        expect(sale).to.eq(`${key} Not In Price Sheet`)
                    }
                })
            })
        })

        it(`Get Sale: .holidayPriceWrapper `, () => {

            cy.get(`.this_sale .eby-test673114`).each( (item, index, items) => {
                cy.wrap(items[i]).then(salePrice => {
                    const sale = Cypress.$(salePrice).text()
                    // const sale = sale.trim();
                    if(discount[key]){
                        expect(sale).to.eq(discount[key][1])
                    } else {
                        expect(sale).to.eq(`${key} Not In Price Sheet`)
                    }
                })
            })
        })
})
    }



/*
    Option 2: Scroll down and find .this_sale selector
    collection total height = 26,600
    screenSize = 667
    26600/2600 = 10

const paginationHeight = 667
describe(`Loop 10 times to get all products`, () => {
    it(`It loops 40 times`, () => {
        let h = 1;
        while( h < totalHeight){ 
            cy.wait(1000);
            cy.scrollTo(0, paginationHeight * h);
            expect(h, 'to be less than', totalHeight);
            h++;
        }
    })
    
    
    it(`Get amount of product array from the console`, () => {
        //eby-price24562
        cy.get(`.this_sale`).each( (items, i, list ) => {
                console.log('------------------')
                console.log(list.length)
                console.log('------------------')
                 
        })
    })
    let totalProducts = 53
    let i = 0
    while(i < totalProducts){
        it(`${i}. Get data-prodtitle and check price matches`, () => {
            //eby-price24562

            cy.get(`.this_sale`).each( (items) => {
                    cy.wrap(items[i]).then(text => {
                        const sale = Cypress.$(text).data('prodtitle')
                    console.log('------------------')
                    console.log('['+sale+']')
                    console.log('------------------')
                        // const sale = sale.trim();
                        if(discount[sale]){
                            cy.wrap(text).find('p.price.bfx-price').should('contain',discount[sale][0])
                            cy.wrap(text).find('.eby-holidayDscnt2359').should('contain',discount[sale][1])
                        } else {
                            expect(sale,'to be','In Price Sheet')
                        }
                    })
            })
        })
    }
});

*/

