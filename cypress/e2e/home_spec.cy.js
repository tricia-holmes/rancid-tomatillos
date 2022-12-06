describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should display a title of the application', () => {
    cy.contains('Rancid Tomatillos')
  })

  it('should display a banner image.', () => {
    cy.get('.bannerImages')
      .find('img')
        .should('have.class', 'banner')
        .should('have.attr', 'src')
  })

  it('should display a collection of movies.', () => {
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

  it('should show additional details about movie when clicked', () => {
    cy.get('.bannerImages').get('div')
      .get('img[id="539885"]').click()
    // add content tests after router implementation

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