describe('RDV Check', () => {
  it('Verify getting no rdv', async () => {
    cy.visit('https://www.herault.gouv.fr/booking/create/15253/0');
    cy.get('#condition').click();
    cy.get('.Bbutton:nth-child(1)').click();
    cy.url().should('contains', 'https://www.herault.gouv.fr/booking/create/15253/2');
    cy.contains(`Il n'existe plus de plage horaire libre pour votre demande de rendez-vous. Veuillez recommencer ultérieurement.`).should('be.visible');
  });
});