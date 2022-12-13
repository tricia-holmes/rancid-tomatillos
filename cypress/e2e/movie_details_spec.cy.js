describe('Individual movie page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should route to the movie id url when clicked', () => {
    cy.get('.bannerImages').get('div')
      .get('img[id="830784"]').click()
      .url().should('include', '/830784')
  })

  it('should show additional details about movie when clicked', () => {
    cy.get('.bannerImages').get('div')
      .get('img[id="820067"]').click()
    cy.contains('THE QUINTESSENTIAL QUINTUPLETS MOVIE')
      .get('h3')
      .contains('When five lovely young girls who hate studying hire part-time tutor Futaro, he guides not only their education but also their hearts. Time spent has brought them all closer, with feelings growing within the girls and Futaro. As they finish their third year of high school and their last school festival approaches, they set their sights on what’s next. Is there a future with one of them and Futaro?')
      .get('img')
        .should('have.attr', 'alt')
  })

  it('should route back to the home page when back is clicked', () => {
    cy.get('.bannerImages').get('div')
      .get('img[id="505642"]').click()
      .url().should('include', '/505642')
      .get('button').click()
      .url().should('include', '/')
  })

  it('should not have display a tag line if a movie does not have one', () => {
    cy.get('.bannerImages').get('div')
      .get('img[id="676701"]').click()
    cy.get('tagline').should('not.exist')
  })
})