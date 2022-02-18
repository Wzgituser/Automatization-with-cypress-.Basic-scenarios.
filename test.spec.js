
describe('register of the user account',()=>{
    it('visit',() => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.contains('a','Sign In').click();
        cy.contains('a','Register Now!').click();
        cy.get('input[name="username"]').type('RandomUser');
        cy.get('input[name="password"]').type('Pass1');
        cy.get('input[name="repeatedPassword"]').type('Pass1');
        cy.get('input[name="account.firstName"]').type('Jon');
        cy.get('input[name="account.lastName"]').type('Doe');
        cy.get('input[name="account.email"]').type('fake@email.com');
        cy.get('input[name="account.phone"]').type('123456789');
        cy.get('input[name="account.address1"]').type('unknow st');
        cy.get('input[name="account.address2"]').type('apt3g');
        cy.get('input[name="account.city"]').type("Random");
        cy.get('input[name="account.state"]').type('State');
        cy.get('input[name="account.zip"]').type('11222');
        cy.get('input[name="account.country"]').type('Fakecountry');
        cy.get('select[name="account.languagePreference"]').select('english');
        cy.get('select[name="account.favouriteCategoryId"]').select('FISH');
        cy.get('input[name="account.listOption"]').check('true');
        cy.get('input[name="account.bannerOption"]').check('true');
        
    })
})

