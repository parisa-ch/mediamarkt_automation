describe('Checkout Page Test', () => {

  it('Checkout', () => {
    // Visiting the login page
    cy.visit('https://accounts.lidl.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fcountry_code%3DDE%26response_type%3Dcode%26client_id%3DGermanyEcommerceClient%26scope%3Dopenid%2520profile%2520Lidl.Authentication%2520offline_access%26state%3DvWhEhr2DeXNqStKnsEuB1VU9UKzOBm7mV3QnhN3GpB8%253D%26redirect_uri%3Dhttps%253A%252F%252Fwww.lidl.de%252Fuser-api%252Fsignin-oidc%26nonce%3DIcBHEwNBvhLAdmvHC1jhrkhGe-oP5Ar2RbpDuefOJdI%26step%3Dlogin%26language%3Dde-DE#step-1');

    // Allow the page to load
    cy.wait(5000);

    // Interact with login form
    cy.get('#field_EmailOrPhone').type("yasiriqbal348@gmail.com");
    cy.get('button[id="button_btn_submit_email"]').click();
    cy.get('#checkbox_RememberMe').click();
    cy.get('#field_Password').type("Test@12356");
    cy.get('#button_submit').click();
    cy.wait(5000);
    // Switch to the main page and interact
    cy.origin('https://www.lidl.de', () => {
      // Accept cookies
      cy.get('button[id="onetrust-accept-btn-handler"]', { timeout: 15000 }).should('be.visible').click();
      cy.wait(5000);
      // Click on the first category
      cy.get('div[class="ACategoryOverviewSlider__Item"]').first().click();
      cy.wait(5000);
      cy.get('li[id="product_0"]').click();
      cy.wait(5000);
      cy.get('button[id="addToCart" ]').click({force: true});
      cy.wait(5000);
      cy.get('.pca-overlay__container > .otc-cart-flyout__buttons > .otc-cart-flyout__button--to-checkout').click();
      cy.wait(5000);
      cy.get('input[id="guest-account-email-wrapper-input"]').type("test123@gmail.com")
      cy.get('input[id="guest-account-confirm-email-wrapper-input"]').type("test123@gmail.com")
      cy.get('button[id="guest-account-submit"]').click();
    });
  });

});
