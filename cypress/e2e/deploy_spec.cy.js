import stubApi from "./test_helper";

describe("deploy path testing", () => {
  beforeEach(() => {
    stubApi();
    cy.visit("http://localhost:3000/rancid-tomatillos");
  });
  it("should redirect to home when visiting the deploy link", () => {
    cy.url().should("be.equal", "http://localhost:3000/");
  });
});
