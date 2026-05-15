describe('Cypress Heroes Exercise', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display the heroes list on the home page', () => {
    cy.contains('The Smoker').should('be.visible')
    cy.contains('Warp Speed').should('be.visible')
    cy.contains('Cyonic').should('be.visible')
  })

  it('Should display the login form when clicking Login', () => {
    cy.contains('Login').click()

    cy.contains('Email').should('be.visible')
    cy.contains('Password').should('be.visible')
    cy.contains('Sign in').should('be.visible')
  })

  it('Should display an error message with invalid credentials', () => {
    cy.contains('Login').click()

    cy.get('input[name="email"]').type('wrong@test.com')
    cy.get('input[name="password"]').type('wrongpassword')
    cy.contains('Sign in').click()

    cy.contains('Invalid email or password').should('be.visible')
  })

  it('Should allow login with valid credentials', () => {
    cy.contains('Login').click()

    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('test123')
    cy.contains('Sign in').click()

    cy.contains('Login').should('not.exist')
  })
})