import stubApi from "./test_helper"

describe('404 error handling spec', () => {
  beforeEach(() => {
    stubApi()
    cy.visit('http://localhost:3000/142341234')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/142341234', {
      statusCode: 404
    })
  })

  it('should display an error message when a non-existent url is searched', () => {
    cy.contains('404')
    cy.contains('Oops, we couldn\'t find this page!')
  })

  it('should allow the user to return to the main page', () => {
    cy.get('button').click()
    .url().should('include', '/')
  })
})


