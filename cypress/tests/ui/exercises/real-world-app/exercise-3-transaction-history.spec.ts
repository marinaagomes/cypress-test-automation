describe('View transaction history successfully', () => {
  const baseUrl = 'http://localhost:3000'
  const password = 's3cret'

  const loginWithExistingUser = () => {
    cy.readFile('data/database.json').then((database) => {
      const username = database.users[0].username

      cy.visit(`${baseUrl}/signin`)
      cy.get('input[name="username"]').type(username)
      cy.get('input[name="password"]').type(password)
      cy.get('button[type="submit"]').click()
    })
  }

  it('Should display the user transaction history correctly', () => {
    loginWithExistingUser()

    cy.get("[data-test='nav-personal-tab']").click()

    cy.get("[data-test^='transaction-item']")
      .should('have.length.greaterThan', 0)
  })
})

describe('View transaction history without previous transactions', () => {
  const baseUrl = 'http://localhost:3000'
  const password = 's3cret'

  const completeOnboarding = () => {
    cy.contains('Get Started with Real World App')
      .should('be.visible')

    cy.get('[data-test="user-onboarding-next"]')
      .should('be.visible')
      .click()

    cy.get('#bankaccount-bankName-input').type('Test Bank')
    cy.get('#bankaccount-routingNumber-input').type('123456789')
    cy.get('#bankaccount-accountNumber-input').type('987654321')

    cy.contains('Save').click()

    cy.contains('Done')
      .should('be.visible')
      .click()
  }

  const registerNewUser = () => {
    const randomUser = `historyUser${Date.now()}`

    cy.visit(`${baseUrl}/signin`)
    cy.get('[data-test="signup"]').click()

    cy.get('#firstName').type('History')
    cy.get('#lastName').type('User')
    cy.get('#username').type(randomUser)
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(password)
    cy.get('button[type="submit"]').click()

    cy.visit(`${baseUrl}/signin`)
    cy.get('input[name="username"]').type(randomUser)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
  }

  it('Should display a message when the user has no previous transactions', () => {
    registerNewUser()
    completeOnboarding()

    cy.get("[data-test='nav-personal-tab']").click()

    cy.contains('No Transactions').should('be.visible')
  })
})