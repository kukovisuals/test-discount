import {discount} from './data';
import {priceObject} from './price';
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
const paginationHeight = 667
const totalHeight = 41; //  *********** max 41

function grabHrefCollection(){

    let arr = []
    // eby-test673114
    // this_sale
    const getHref = document.querySelectorAll('.this_sale')
    for(let el of getHref){
        const attr = el.dataset.prodprice
        arr.push(attr)
    }    
    console.log(JSON.stringify(arr))
}
const url = '/collections/seamless-underwear/products.json?limit=200';

let pdpName = []
let skus = []
let MAIN = {}
describe(`Grab all the pdp SKU and Array of pdps`, () => {
    it(`Grabs data from ${url}`, () =>{
        cy.request({
            method: 'GET',
            url: url,
            followRedirect: false,
            headers: {
                'accept': 'application/json'
            }
        })
        .then((response) => {
            // Parse JSON the body.
            let newData = response.body.products;
            
            MAIN = newData;

            console.log(newData)
            for(let pdp of newData){
                if(pdp.tags.includes('#Sale')){
                    skus.push(pdp.id)
                    pdpName.push(pdp.title)
                }
            }
        });
    })    
});




/*
    Option 1: Increase the pagination and look for a all selectors with .this_sale
*/
// describe(`Scroll to remove lazyload and grab all sale items`, () => {
    
//     it(`:: Get The name of PDPs on Sale :: `, () => {
//         // console.clear()
//         console.log('%c ---------Copy This Data---------', 'background: #023535; color: #fff')
//         console.log('-------------------------------------')
//         console.log('%c' + JSON.stringify(skus),'background: #023535; color: #fff')
//         console.log('%c' + JSON.stringify(pdpName),'background: #023535; color: #fff')
//         console.log('-------------------------------------')
//         console.log(' /\_/\ ')
//         console.log('( o.o ) ')
//         console.log(' > ^ <')    
//     })
//     it(`It loops 40 times`, () => {
//         // expect(pdpDiscount.length).to.eq(pdpNew.length)
//         let h = 1;
//         while( h < totalHeight){ 
//             cy.wait(1000);
//             cy.scrollTo(0, paginationHeight * h);
//             // expect(h, 'to be less than', totalHeight);
//             h++;
//         }
//     })

// });

describe(`Get more raw data to compare`, () => {

    it(`:: Get the price :: `, () => {
        // cy.get('.productQuickAdd .quickAddBtnInnerWrapper span.text')
        // .each(($el) => {
        //     const txt = $el.text()
        //     cy.wrap($el).should('have.text', 'Add To Cart')
        //     console.log(txt);
        // });
    })
    
    it(`:: get data the discount :: `, () => {
        console.log('main')
        console.log(MAIN)
        let i = 0;
        for(const pdp of MAIN){
            cy.visit(`/products/${pdp.handle}`);
            if(i===0)
                break
        }
    })
});




















// for(let i = 0; i < pdpDiscount.length; i++){
// for(let i = 0; i < 4; i++){
//     const key = pdpNew[i]
//     describe(`${i} Price with sale is correct ${key}`, () => {
// 
//         it(`Get price: p.eby-test95342 `, () => {
//             //eby-price24562
//             cy.get(`.this_sale p.eby-test95342`).each( (item, index, items) => {
//                 cy.wrap(items[i]).then(price => {
//                     const sale = Cypress.$(price).text()
//                     // const sale = sale.trim();
//                     if(discount[key]){
//                         expect(sale).to.eq(discount[key][0])
//                     } else {
//                         expect(sale).to.eq(`${key} Not In Price Sheet`)
//                     }
//                 })
//             })
//         })
// 
//         it(`Get Sale: .holidayPriceWrapper `, () => {
// 
//             cy.get(`.this_sale .eby-test673114`).each( (item, index, items) => {
//                 cy.wrap(items[i]).then(salePrice => {
//                     const sale = Cypress.$(salePrice).text()
//                     // const sale = sale.trim();
//                     if(discount[key]){
//                         expect(sale).to.eq(discount[key][1])
//                     } else {
//                         expect(sale).to.eq(`${key} Not In Price Sheet`)
//                     }
//                 })
//             })
//         })
// })
//     }



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

