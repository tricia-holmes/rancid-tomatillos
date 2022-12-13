// This test spec also exists due to .intercept() not having the ability to be overwritten by a second .intercept()

describe('500 error handling spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display an error message when an error is present', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
    cy.get('.errorMessage')
      .contains('Oh no! Something went wrong. Please try later!')
      .get('img')
        .should('have.attr', 'src', '/static/media/sad-pikachu.3cab20930a1dee5ea60d.gif')
  })

})