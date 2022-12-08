describe('home page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie_data.json' })
  })
  it.skip('should display a title of the application', () => {
    cy.contains('Rancid Tomatillos')
  })

  it.skip('should display a banner image.', () => {
    cy.get('.bannerImages')
      .find('img')
        .should('have.class', 'banner')
        .should('have.attr', 'src')
  })

  it.skip('should display a collection of movies.', () => {
    cy.get('.bannerImages').get('div')
      .find('img[id="694919"]')
        .should('have.class', 'movieThumbnail')
        .should('have.attr', 'src', "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
    cy.get('.bannerImages').get('div')
      .find('img[id="579583"]')
        .should('have.class', 'movieThumbnail')
        .should('have.attr', 'src', "https://image.tmdb.org/t/p/original//zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg")
    cy.get('.bannerImages').get('div')
      .find('img[id="425001"]')
        .should('have.class', 'movieThumbnail')
        .should('have.attr', 'src', "https://image.tmdb.org/t/p/original//yUFbPtWeDbVR3zmqshOaL5lScyo.jpg")
  })

  it.skip('should route to the movie id url when clicked', () => {
    cy.get('.bannerImages').get('div')
      .get('img[id="539885"]').click()
      .url().should('include', '/539885')
  })

  it.skip('should show additional details about movie when clicked', () => {
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