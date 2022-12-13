import stubApi from "./test_helper"

describe('home page testing', () => {
  beforeEach(() => {
    stubApi()
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
      .find('img[id="505642"]')
        .should('have.class', 'movieThumbnail')
        .should('have.attr', 'src', "https://image.tmdb.org/t/p/original//ps2oKfhY6DL3alynlSqY97gHSsg.jpg")
    cy.get('.bannerImages').get('div')
      .find('img[id="632856"]')
        .should('have.class', 'movieThumbnail')
        .should('have.attr', 'src', "https://image.tmdb.org/t/p/original//h3zAzTMs5EP3cKusOxFNGSFE1WI.jpg")
    cy.get('.bannerImages').get('div')
      .find('img[id="877269"]')
        .should('have.class', 'movieThumbnail')
        .should('have.attr', 'src', "https://image.tmdb.org/t/p/original//4H7dRko04LGUaDLHiVwSh4gv61S.jpg")
  })

  it('should be able to search a title', () => {
    cy.get('.navigation')
      .find('input')
        .type('black panther')
    cy.get('.bannerImages')
      .find('img[id="505642"]')
        .should('have.class', 'movieThumbnail')
        .should('have.attr', 'src', "https://image.tmdb.org/t/p/original//ps2oKfhY6DL3alynlSqY97gHSsg.jpg")
    cy.get('.bannerImages')
      .find('img[id="877269"]')
      .should('not.exist')
  })

  it('should be able to search a genre', () => {
    cy.get('.navigation')
      .find('input')
        .type('animation')
    cy.get('.bannerImages')
      .find('img[id="566466"]')
        .should('have.class', 'movieThumbnail')
    cy.get('.bannerImages')
      .find('img[id="900667"]')
        .should('have.class', 'movieThumbnail')
    cy.get('.bannerImages')
      .find('img[id="505642"]')
        .should('not.exist')
  })

  it('should display no results if a search matches no criteria', () => {
    cy.get('.navigation')
      .find('input')
        .type('bonk')
    cy.get('.bannerImages')
      .find('.movieThumbnail')
      .should('not.exist')
  })
})