describe('Cypress Heroes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/heroes')
  })

  it('Should display heroes list', () => {
    cy.intercept('GET', 'http://localhost:3001/heroes').as('getHeroes')

    cy.reload()
    cy.wait('@getHeroes')

    cy.get('body').should('not.contain.text', 'No heroes')
    cy.get('img').should('have.length.greaterThan', 0)
  })

  it('Should open login form', () => {
    cy.contains('Login').click()

    cy.contains('Email').should('be.visible')
    cy.contains('Password').should('be.visible')
    cy.contains('Sign in').should('be.visible')
  })

  it('Should show error for invalid login', () => {
    cy.contains('Login').click()

    cy.get('input[name="email"]').type('wrong@test.com')
    cy.get('input[name="password"]').type('wrongpassword')
    cy.contains('Sign in').click()

    cy.contains('Unknown error').should('be.visible')
  })

  it('Should submit valid login credentials', () => {
    cy.intercept('POST', 'http://localhost:3001/auth').as('loginRequest')

    cy.contains('Login').click()

    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('test123')
    cy.contains('Sign in').click()

    cy.wait('@loginRequest')
  })
})