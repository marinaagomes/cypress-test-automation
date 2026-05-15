describe('Real World App Tests', () => {
  const baseUrl = 'http://localhost:3000'
  const password = 's3cret'

  const login = (username: string, password: string) => {
    cy.visit(`${baseUrl}/signin`)
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
  }

  it('Login - Success', () => {
    cy.readFile('data/database.json').then((database) => {
      const username = database.users[0].username

      cy.intercept('POST', 'http://localhost:3001/login').as('loginRequest')

      login(username, password)

      cy.wait('@loginRequest').then((interception) => {
        cy.log(`Status: ${interception.response?.statusCode}`)
        cy.log(JSON.stringify(interception.response?.body))
      })
    })
  })

  it('Login - Fail', () => {
    login('invalidUser', 'wrongPassword')

    cy.get('.MuiAlert-message')
      .should('contain.text', 'Username or password is invalid')
  })

  it('Register - Success', () => {
    const randomUser = `testUser${Date.now()}`

    cy.visit(`${baseUrl}/signin`)
    cy.get('[data-test="signup"]').click()

    cy.get('#firstName').type('Test')
    cy.get('#lastName').type('User')
    cy.get('#username').type(randomUser)
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(password)
    cy.get('button[type="submit"]').click()

    cy.get('body').should('not.contain', 'First Name is required')
    cy.get('body').should('not.contain', 'Last Name is required')
    cy.get('body').should('not.contain', 'Username is required')
    cy.get('body').should('not.contain', 'Enter your password')
    cy.get('body').should('not.contain', 'Confirm your password')
  })

  it('Register - Fail', () => {
    cy.visit(`${baseUrl}/signin`)
    cy.get('[data-test="signup"]').click()

    cy.get('#firstName').click().blur()
    cy.get('#lastName').click().blur()
    cy.get('#username').click().blur()
    cy.get('#password').click().blur()
    cy.get('#confirmPassword').click().blur()

    cy.get('.MuiFormHelperText-root')
      .should('have.length.greaterThan', 0)

    cy.get('button[type="submit"]').should('be.disabled')
  })
})