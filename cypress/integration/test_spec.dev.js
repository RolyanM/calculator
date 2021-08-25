"use strict";

describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true);
  });
});
describe('The Main Page', function () {
  it('The page loads successfully', function () {
    cy.visit("http://127.0.0.1:5501/index.html");
  });
});
describe('Basic Operator Tests', function () {
  it('Should check 7 + 2 = 9', function () {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get(".seven").click();
    cy.get(".plus").click();
    cy.get(".two").click();
    cy.get(".equals").click();
    cy.get(".calc__output").contains('div', 9);
  });
});
describe('Basic Operator Tests', function () {
  it('Should check 7 * 7 = 49', function () {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get(".seven").click();
    cy.get(".multiply").click();
    cy.get(".seven").click();
    cy.get(".equals").click();
    cy.get(".calc__output").contains('div', 49);
  });
});
describe('Basic Operator Tests', function () {
  it('Should check 7 * 7 = 49', function () {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get(".seven").click();
    cy.get(".multiply").click();
    cy.get(".seven").click();
    cy.get(".equals").click();
    cy.get(".calc__output").contains('div', 49);
  });
});
describe('Basic Operator Tests', function () {
  it('Should check 7 - 7 = 0', function () {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get(".seven").click();
    cy.get(".minus").click();
    cy.get(".seven").click();
    cy.get(".equals").click();
    cy.get(".calc__output").contains('div', 0);
  });
});
describe('Basic Operator Tests', function () {
  it('Should check 7 / 7 = 1', function () {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get(".seven").click();
    cy.get(".divide").click();
    cy.get(".seven").click();
    cy.get(".equals").click();
    cy.get(".calc__output").contains('div', 1);
  });
});
describe('Basic Operator Tests', function () {
  it('Should check 7 * 7 * 7 + 10 = 353', function () {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get(".seven").click();
    cy.get(".multiply").click();
    cy.get(".seven").click();
    cy.get(".equals").click();
    cy.get(".multiply").click();
    cy.get(".seven").click();
    cy.get(".equals").click();
    cy.get(".plus").click();
    cy.get(".one").click();
    cy.get(".zero").click();
    cy.get(".equals").click();
    cy.get(".calc__output").contains('div', 353);
  });
});