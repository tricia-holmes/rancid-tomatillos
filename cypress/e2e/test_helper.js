export default function stubApi() {
  cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    fixture: "movie_details_data.json",
  });
  cy.intercept(
    "GET",
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642",
    { fixture: "movie_details_505642.json" }
  );
  cy.intercept(
    "GET",
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies/830784",
    { fixture: "movie_details_830784.json" }
  );
  cy.intercept(
    "GET",
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies/820067",
    { fixture: "movie_details_820067.json" }
  );
  cy.intercept(
    "GET",
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies/632856",
    { fixture: "movie_details_632856.json" }
  );
  cy.intercept(
    "GET",
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies/877269",
    { fixture: "movie_details_877269.json" }
  );
  cy.intercept(
    "GET",
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies/900667",
    { fixture: "movie_details_900667.json" }
  );
  cy.intercept(
    "GET",
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies/566466",
    { fixture: "movie_details_566466.json" }
  );
}
