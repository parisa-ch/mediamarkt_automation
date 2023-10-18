
describe('Registeration Page Test', () => {
  it('Registeration', () => {
    cy.visit('https://accounts.lidl.com/account/register?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fcountry_code%3DDE%26response_type%3Dcode%26client_id%3DGermanyEcommerceClient%26scope%3Dopenid%2520profile%2520Lidl.Authentication%2520offline_access%26state%3DnnKAkdEfcNcVAKx_spOrx894KWpzaDCZjuTCH-2uACE%253D%26redirect_uri%3Dhttps%253A%252F%252Fwww.lidl.de%252Fuser-api%252Fsignin-oidc%26nonce%3DAIfC15ujYn447Mi42bwvid1d3t0EA923ppT_2t8_oBw%26step%3Dlogin%26language%3Dde-DE');
    cy.wait(10000)
    cy.get('#field_Email').type("punjabpk001@gmail.com");
    cy.get('#field_ConfirmEmail').type("punjabpk001@gmail.com");
    cy.get('#field_Password').type("Test@12356");
    cy.get('button[class="color_primary size_default mode_block role_next"]').click({ multiple: true });
  });

});