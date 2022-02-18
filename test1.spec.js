describe('buying the product',()=>{
    it('visit',()=>{
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
    cy.get('area[href*="Id=REPTILES"]').click({force:true});
    cy.contains('a','RP-LI-02').click();
    cy.contains('a','EST-13').click();
    cy.get('a[class="Button"]').click();
    cy.get('input[name="EST-13"]').clear();
    cy.get('input[name="EST-13"]').type('2');
    cy.get('input[value="Update Cart"]').click();
    cy.get('tr').eq(2).should('contain','Sub Total: $37.00');
    cy.contains('a','Proceed to Checkout').click();
    cy.get('input[name="username"]').type('RandomUser');
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type('Pass1');
    cy.get('input[name="signon"]').click();
    cy.get('input[type="checkbox"]').check();
    })
     
})