  Cypress.Commands.add("selectSourceLanguage", (language) => {
    return cy.get(`.sl-wrap #sugg-item-${language}`).click();
  });

  Cypress.Commands.add("selectTargetLanguage", (language) => {
    cy.get(`.tl-wrap [id=sugg-item-${language}`).click();
  });

  Cypress.Commands.add("typeTextForTranslation", (text) => {
    cy.get('#source').type(`${text}`);
  });

  Cypress.Commands.add("clearText", () => {
    cy.get('.clear-wrap').click();
  });

  Cypress.Commands.add("checkTranslation", (translation) => {
    cy.get('.tlid-translation.translation').should('have.text', `${translation}`);
  });

  Cypress.Commands.add("checkDetectLanguageButtonText", (text) => {
    cy.get('[value=auto]').should('have.text', `${text}`);
  });

  Cypress.Commands.add("checkTranslationIsCleared", () => {
    cy.get('.empty-placeholder.placeholder').should('be.visible');
  });
