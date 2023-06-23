import {
    discount
} from './data';
import {
    priceObject
} from './price';
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

const URL = '/collections/last-call-seamless-underwear'
describe('Exit iframe', () => {
    it('exit from iframe if any', () => {
        cy.visit(URL);
        // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();

    });
});


const paginationHeight = 667
const totalHeight = 30; //  *********** max 41

function grabHrefCollection() {

    let arr = []
    // eby-test673114
    // this_sale
    const getHref = document.querySelectorAll('.this_sale')
    for (let el of getHref) {
        const attr = el.dataset.prodprice
        arr.push(attr)
    }
    console.log(JSON.stringify(arr))
}
const url = '/collections/last-call-seamless-underwear/products.json?limit=200';

let pdpName = []
let skus = []
describe(`Grab all the pdp SKU and Array of pdps`, () => {
    it(`Grabs data from ${url}`, () => {
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
                console.log(newData)
                for (let pdp of newData) {
                    if (pdp.tags.includes('#Sale')) {
                        skus.push(pdp.id)
                        pdpName.push(pdp.title)
                    }
                }
            });
    })
});

describe(`Scroll to remove lazyload and grab all sale items`, () => {

    it(`:: Get The name of PDPs on Sale :: `, () => {
        // console.clear()
        console.log('%c ---------Copy This Data---------', 'background: #023535; color: #fff')
        console.log('-------------------------------------')
        console.log('%c' + JSON.stringify(skus), 'background: #023535; color: #fff')
        console.log('%c' + JSON.stringify(pdpName), 'background: #023535; color: #fff')
        console.log('-------------------------------------')
        console.log(' /\_/\ ')
        console.log('( o.o ) ')
        console.log(' > ^ <')
    })
    it(`It loops 40 times`, () => {
        // expect(pdpDiscount.length).to.eq(pdpNew.length)
        let h = 1;
        while (h < totalHeight) {
            cy.wait(500);
            cy.scrollTo(0, paginationHeight * h);
            // expect(h, 'to be less than', totalHeight);
            h++;
        }
    })

});

describe(`Get more raw data to compare`, () => {

    it(`:: Test that all spans have a string and we have 3 spans total :: `, () => {

        cy.get('.col-pro-details h3').each(($h3, index) => {
            cy.wrap($h3).children('span')
                .should('have.length', 3)
                .each(($span) => {
                    const textLength = $span.text().trim().length;
                    expect(textLength).to.be.greaterThan(3);
                });
        });

        // cy.get('.col-pro-details h3 span').eq(3)
        //     .then(($span) => {
        //         const textLength = $span.text().trim().length;
        //         expect(textLength).to.be.greaterThan(3);
        //     });
    });

    it(`:: It should Include Add to Cart :: `, () => {
        cy.get('.noFiltermodeAddToCart .quickAddBtnInnerWrapper span')
            .each(($el) => {
                cy.wrap($el).should('have.text', 'Add To Cart');
            });
        // cy.get('.noFiltermodeAddToCart .quickAddBtnInnerWrapper span').eq(3)
        //     .invoke('text')
        //     .should('eq', 'Add To Cart');
    });

    it(`:: It should have a price $34 or $23.34 with a rgb(127, 133, 163) color :: `, () => {
        cy.get('.noFiltermodeAddToCart p.price.bfx-price')
            .each(($el) => {
                cy.wrap($el)
                    .and('have.css', 'text-decoration', 'line-through solid rgb(127, 133, 163)') // Check the text decoration
                    .invoke('text')
                    .should('match', /\$\d+(\.\d{1,2})?/) // Check the text
            });
        // cy.get('.noFiltermodeAddToCart p.price.bfx-price').eq(3)
        //     .and('have.css', 'text-decoration', 'line-through solid rgb(127, 133, 163)')  // Check the text decoration
        //     .invoke('text')
        //     .should('match', /\$\d+(\.\d{1,2})?/) // Check the text
    });

    it(`:: It should have a price $34 or $23.34 with a rgb(208, 2, 27) color :: `, () => {
        cy.get('.noFiltermodeAddToCart .holidayPriceWrapper.standard.saleHighlight.bfx-price')
            .each(($el) => {
                cy.wrap($el)
                    .and('have.css', 'color', 'rgb(208, 2, 27)') // Check the color
                    .invoke('text')
                    .should('match', /\$\d+(\.\d{1,2})?/) // Check the text
                    .and('have.css', 'color', 'rgb(208, 2, 27)'); // Check the color
            });
        // cy.get('.noFiltermodeAddToCart .holidayPriceWrapper.standard.saleHighlight.bfx-price').eq(3)
        //     .and('have.css', 'color', 'rgb(208, 2, 27)') // Check the color
        //     .invoke('text')
        //     .should('match', /\$\d+(\.\d{1,2})?/) // Check the text

    });
});