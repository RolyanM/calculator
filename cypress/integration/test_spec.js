describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('The Main Page', () => {
  it('The page loads successfully', () => {
   cy.visit("http://127.0.0.1:5501/index.html")
  })
})

describe('Basic Operator Tests', () => {
  it('Should check 7 + 2 = 9', () => {
   cy.visit("http://127.0.0.1:5501/index.html")
    cy.get(".seven").click();
    cy.get(".plus").click();
    cy.get(".two").click();
    cy.get(".equals").click();


    cy.get(".calc__output").contains('div', 9)
  })
})

describe('Basic Operator Tests', () => {
  it('Should check 7 * 7 = 49', () => {
   cy.visit("http://127.0.0.1:5501/index.html")
    cy.get(".seven").click();
    cy.get(".multiply").click();
    cy.get(".seven").click();
    cy.get(".equals").click();


    cy.get(".calc__output").contains('div', 49)
  })
})

describe('Basic Operator Tests', () => {
  it('Should check 7 * 7 = 49', () => {
   cy.visit("http://127.0.0.1:5501/index.html")
    cy.get(".seven").click();
    cy.get(".multiply").click();
    cy.get(".seven").click();
    cy.get(".equals").click();


    cy.get(".calc__output").contains('div', 49)
  })
})

describe('Basic Operator Tests', () => {
  it('Should check 7 - 7 = 0', () => {
   cy.visit("http://127.0.0.1:5501/index.html")
    cy.get(".seven").click();
    cy.get(".minus").click();
    cy.get(".seven").click();
    cy.get(".equals").click();


    cy.get(".calc__output").contains('div', 0)
  })
})

describe('Basic Operator Tests', () => {
  it('Should check 7 / 7 = 1', () => {
   cy.visit("http://127.0.0.1:5501/index.html")
    cy.get(".seven").click();
    cy.get(".divide").click();
    cy.get(".seven").click();
    cy.get(".equals").click();


    cy.get(".calc__output").contains('div', 1)
  })
})

describe('Basic Operator Tests', () => {
  it('Should check 7 * 7 * 7 + 10 = 353', () => {
   cy.visit("http://127.0.0.1:5501/index.html")
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


    cy.get(".calc__output").contains('div', 353)
  })
})