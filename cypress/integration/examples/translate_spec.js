/// <reference types="Cypress"/>
context('Translate', () => {
  beforeEach(() => {
    cy.visit('https://translate.google.com')
  })

  it('Translate from English to Spanish', () => {
    cy.selectSourceLanguage('en')
    cy.selectTargetLanguage('es')
    cy.typeTextForTranslation('school')
    cy.checkTranslation('colegio')
  })
  
  it('Translate to Spanish with language automatically detected', () => {
    cy.checkDetectLanguageButtonText('Detect language')
    cy.selectTargetLanguage('es')
    cy.typeTextForTranslation('school')
    cy.checkDetectLanguageButtonText('English - detected')
    cy.checkTranslation('colegio')
  })

  it('Clear text after translation', () => {
    cy.selectTargetLanguage('es')
    cy.typeTextForTranslation('school')
    cy.checkTranslation('colegio')
    cy.clearText()
    cy.checkTranslationIsCleared()
  })
})

