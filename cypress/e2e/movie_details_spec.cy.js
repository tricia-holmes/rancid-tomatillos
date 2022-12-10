describe('Individual movie page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie_data.json' })
  })
  it('should route to the movie id url when clicked', () => {
    cy.get('.bannerImages').get('div')
      .get('img[id="539885"]').click()
      .url().should('include', '/539885')
  })

  it('should show additional details about movie when clicked', () => {
    cy.get('.bannerImages').get('div')
      .get('img[id="413518"]').click()
      .get('.movieDetailsContent')
        .find('div')
        .should('have.class', 'movieDetailsInfo')
        .contains('Average Rating:')
        .contains('Release Date:')
  })

  it('should route back to the home page when back is clicked', () => {
    cy.get('.bannerImages').get('div')
      .get('img[id="726739"]').click()
      .url().should('include', '/726739')
      .get('button').click()
      .url().should('include', '/')
  })
})