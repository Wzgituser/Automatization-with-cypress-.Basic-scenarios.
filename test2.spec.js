describe('automation practice', () => {
    it('visit automationpractice.com', () => {
        cy.visit('http://automationpractice.com/');
        cy.contains('a','Sign in').click();
        cy.get('input[name="email_create"]').type("wwww@wp.pl");
        cy.get('button[id="SubmitCreate"]').click();
        cy.get('input[type="radio"]').check("1"); 
        cy.get('input[id="customer_firstname"]').type('Adam');
        cy.get('input[name="customer_lastname"]').type('Niewiem');
        cy.get('input[type="password"]').type("abcde");
        cy.get('select[name="days"]').select("1");
        cy.get('select[name="months"]').select("January");
        cy.get('select[name="years"]').select("2000");
        cy.get('input[name="newsletter"]').check("1");
        cy.get('input[name="optin"]').check("1");
        cy.get('input[name="firstname"]').type("Adam");
        cy.get('input[name="lastname"]').type("Niewiem");
        cy.get('input[name="address1"]').type("unknownroad,11222,Company.llc");
        cy.get('input[name="address2"]').type("3G,1,13/2,3");
        cy.get('input[name="city"]').type("New York");
        cy.get('select[name="id_state"]').select("New York");
        cy.get('textarea[name="other"]').type("Some text for example.");
        cy.get('input[name="phone"]').type("123456789");
        cy.get('input[name="phone_mobile"]').type("1-347-123-33-44");
        cy.get('input[name="alias"]').type("John Doe");
        cy.get('button[id="submitAccount"]').click();
        
    })
  
})