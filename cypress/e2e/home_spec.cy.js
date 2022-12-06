describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should display a title of the application', () => {
    cy.contains('Rancid Tomatillos')
  })

  it.skip('should display a banner image.', () => {
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
})