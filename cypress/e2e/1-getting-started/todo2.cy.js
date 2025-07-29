/// <reference types="cypress" />

describe('Wikipedia test', () => {
  it('should open the Wikipedia homepage', () => {
    cy.visit('https://www.wikipedia.org')
  })
})


