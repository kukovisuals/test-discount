// eby-holidayflg5345
// eby-holidayDscnt2359
// eby-saleText2421
const discount = {"Blue Iris Bralette":["$45","$33"],"Blue Opal Bralette":["$45","$31"],"Keepsake Lilac Bralette":["$45","$31"],"Laurel Green Bralette":["$45","$45"],"Poppy Red Bralette":["$45","$27"],"Provincial Blue Bralette":["$45","$31"],"Black Cotton Bralette":["$45","$33"],"Blue Opal Cotton Bralette":["$45","$31"],"Cadet Cotton Bralette":["$45","$13"],"Fallen Rock Cotton Bralette":["$45","$31"],"Laurel Green Cotton Bralette":["$45","$27"],"Rose Clay Cotton Bralette":["$45","$13"],"Strawberry Ice Cotton Bralette":["$45","$13"],"Nude Bralette":["$45","$33"],"Nude Bralette (Plus)":["$45","$33"],"Spotted Panther Bralette":["$48","$36"],"Blue Iris Brief":["$17","$12"],"Blue Iris Cheeky":["$17","$12"],"Blue Iris Highwaisted":["$18","$13"],"Blue Opal Bikini":["$17","$11"],"Blue Opal Brief":["$17","$11"],"Blue Opal Brief (Full Coverage)":["$17","$11"],"Blue Opal Cheeky":["$17","$11"],"Blue Opal Highwaisted":["$18","$12"],"Blue Opal Highwaisted Thong":["$18","$12"],"Blue Opal Seamless Tank":["$17","$11"],"Blue Opal Thong":["$17","$11"],"Dark Palm Brief":["$19","$14"],"Dark Palm Brief (Full Coverage)":["$19","$14"],"Dark Palm Highwaisted":["$20","$15"],"Fjord Blue Brief":["$17","$10"],"Fjord Blue Brief (Full Coverage)":["$17","$10"],"Fjord Blue Highwaisted":["$18","$10"],"Fjord Blue Thong":["$17","$10"],"Keepsake Lilac Bikini":["$17","$11"],"Keepsake Lilac Brief":["$17","$11"],"Keepsake Lilac Brief (Full Coverage)":["$17","$11"],"Keepsake Lilac Highwaisted":["$18","$12"],"Laurel Green Bikini":["$17","$17"],"Laurel Green Brief":["$17","$17"],"Laurel Green Cheeky":["$17","$17"],"Laurel Green Highwaisted":["$18","$18"],"Laurel Green Thong":["$17","$17"],"Lime Punch Bikini":["$17","$10"],"Lime Punch Brief":["$17","$10"],"Lime Punch Brief (Full Coverage)":["$17","$10"],"Lime Punch High Cut":["$17","$10"],"Lime Punch Highwaisted":["$18","$10"],"Poppy Red Bikini":["$17","$10"],"Poppy Red Cheeky":["$17","$10"],"Poppy Red Highwaisted":["$18","$10"],"Provincial Blue Bikini":["$17","$11"],"Provincial Blue Brief":["$17","$11"],"Provincial Blue Highwaisted":["$18","$12"],"Provincial Blue Thong":["$17","$11"],"Sleek Tiger Bikini":["$19","$11"],"Sleek Tiger Brief":["$19","$11"],"Sleek Tiger Brief (Full Coverage)":["$19","$11"],"Sleek Tiger Highwaisted":["$20","$12"],"Sleek Tiger Thong":["$19","$11"],"Spotted Panther Brief":["$19","$14"],"Spotted Panther Highwaisted":["$20","$15"],"Sunkissed Brief":["$17","$17"],"Sunkissed Brief (Full Coverage)":["$17","$17"],"Sunkissed Highwaisted":["$18","$18"],"Sunkissed Thong":["$17","$17"],"Black Cotton Bikini":["$17","$12"],"Black Cotton Brief":["$17","$12"],"Black Cotton Thong":["$17","$12"],"Blue Opal Cotton Bikini":["$17","$11"],"Blue Opal Cotton Brief":["$17","$11"],"Cadet Cotton Bikini":["$17","$5"],"Cadet Cotton Brief":["$17","$5"],"Cadet Cotton Thong":["$17","$5"],"Fallen Rock Cotton Bikini":["$17","$11"],"Fallen Rock Cotton Brief":["$17","$11"],"Fallen Rock Cotton Thong":["$17","$11"],"Laurel Green Cotton Bikini":["$17","$10"],"Laurel Green Cotton Brief":["$17","$10"],"Rose Clay Cotton Bikini":["$17","$5"],"Rose Clay Cotton Brief":["$17","$5"],"Rose Clay Cotton Thong":["$17","$5"],"Strawberry Ice Cotton Bikini":["$17","$5"],"Strawberry Ice Cotton Brief":["$17","$5"],"Nude Bikini":["$17","$12"],"Nude Brief":["$17","$12"],"Nude Brief (Full Coverage)":["$17","$12"],"Nude Cheeky":["$17","$12"],"Nude Highwaisted":["$18","$13"],"Nude Highwaisted Thong":["$18","$13"],"Nude Thong":["$17","$12"]}
const pdpDiscount = ["Nude Bralette","Nude Bikini","Black Bralette","Black Brief","Blue Opal Bralette","Blue Iris Bralette","Blue Iris Brief","Lime Punch High Cut Highwaisted","Lime Punch Highwaisted","Fjord Blue Thong","Fjord Blue Highwaisted","Laurel Green Cotton Bralette","Keepsake Lilac Bralette","Keepsake Lilac Highwaisted","Keepsake Lilac Bikini","Laurel Green Cotton Brief","Laurel Green Cotton Bikini","Blue Opal Cotton Bralette","Blue Opal Cotton Brief","Blue Opal Cotton Bikini","Black Cotton Bralette","Black Cotton Brief","Black Cotton Bikini","Nude Brief","Nude Highwaisted","Black Thong","Blue Opal Thong","Laurel Green Bralette","Provincial Blue Bralette","Blue Iris Cheeky","Blue Iris Highwaisted","Lime Punch Bikini","Fallen Rock Cotton Brief","Black Cheeky","Laurel Green Highwaisted","Fallen Rock Cotton Bralette","Black Highwaisted","Blue Opal Highwaisted","Fallen Rock Cotton Bikini","Fallen Rock Cotton Thong","Black Bikini","Black Highwaisted Thong","Laurel Green Cheeky","Blue Opal Bikini","Blue Opal Highwaisted Thong","Dark Palm Brief","Sunkissed Thong","Laurel Green Brief","Provincial Blue Brief","Provincial Blue Thong","Nude Thong","Nude Highwaisted Thong","Nude Cheeky"]

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



describe(`Discounts`, () => {
    it(`pdp  opens size`, () => {
        // get the items as an array
        // cy.get('#filtered-prod-listing > .item.ebyProdTile.epcWrapper.tileFilterable').each( (el, i) => {
        //     const pdp = Cypress.$(el).attr('data-prodsku')
        //     pdps.push(pdp)
        // });
        cy.get(`.this_sale`).then( items => {
        	cy.wrap(items[0]).find('.eby-holidayflg5345').then(text => {
				const sale = text.text()
				expect(sale).to.eq('Sale')
        	})
        })
    });
    for(let i = 0; i < pdpDiscount.length; i++){

	    it(`${i} Get data-prodtitle of ${pdpDiscount[i]}`, () => {
	    	//eby-price24562
	        cy.get(`.this_sale`).then( items => {
	        	cy.wrap(items[i]).then(text => {
					const sale = Cypress.$(text).data('prodtitle')
					const saleT = sale.trim()

					cy.wrap(text).find('p.price.bfx-price').should('contain',discount[saleT][0])
					cy.wrap(text).find('.eby-holidayDscnt2359').should('contain',discount[saleT][1])
	        	})
	        })
	    })
	}
});