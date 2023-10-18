
describe('Login Page Test', () => {
  it('Login', () => {
    cy.visit('https://accounts.lidl.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fcountry_code%3DDE%26response_type%3Dcode%26client_id%3DGermanyEcommerceClient%26scope%3Dopenid%2520profile%2520Lidl.Authentication%2520offline_access%26state%3DvWhEhr2DeXNqStKnsEuB1VU9UKzOBm7mV3QnhN3GpB8%253D%26redirect_uri%3Dhttps%253A%252F%252Fwww.lidl.de%252Fuser-api%252Fsignin-oidc%26nonce%3DIcBHEwNBvhLAdmvHC1jhrkhGe-oP5Ar2RbpDuefOJdI%26step%3Dlogin%26language%3Dde-DE#step-1');
    cy.wait(25000)
    cy.get('#field_EmailOrPhone').type("yasiriqbal348@gmail.com");
    cy.wait(5000);
    // cy.get('#field_Password').type("Test@12356");
    cy.get('button[id="button_btn_submit_email"]').click();
    cy.get('#checkbox_RememberMe').click();
    cy.get('#field_Password').type("Test@12356");
    cy.get('#button_submit').click();
  });

});