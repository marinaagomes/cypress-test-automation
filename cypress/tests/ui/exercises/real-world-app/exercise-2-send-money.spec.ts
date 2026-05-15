describe('Send money with sufficient balance', () => {
  const baseUrl = 'http://localhost:3000'
  const password = 's3cret'

  const login = () => {
    cy.readFile('data/database.json').then((database) => {
      const username = database.users[0].username

      cy.visit(`${baseUrl}/signin`)
      cy.get('input[name="username"]').type(username)
      cy.get('input[name="password"]').type(password)
      cy.get('button[type="submit"]').click()
    })
  }

  it('Should send money successfully', () => {
    login()

    cy.get("[data-test='nav-top-new-transaction']").click()
    cy.get("[data-test^='user-list-item']").first().click()
    cy.get("input[placeholder='Amount']").type('50')
    cy.get("input[placeholder='Add a note']").type('Test payment')
    cy.get("[data-test='transaction-create-submit-payment']").click()

    cy.contains('Paid').should('be.visible')
    cy.contains('Test payment').should('be.visible')
  })
})

describe('Send money with insufficient balance', () => {
  const baseUrl = 'http://localhost:3000'
  const password = 's3cret'

  const login = () => {
    cy.readFile('data/database.json').then((database) => {
      const username = database.users[0].username

      cy.visit(`${baseUrl}/signin`)
      cy.get('input[name="username"]').type(username)
      cy.get('input[name="password"]').type(password)
      cy.get('button[type="submit"]').click()
    })
  }

  it('Should display an error message when sending money without sufficient balance', () => {
    login()

    cy.get("[data-test='nav-top-new-transaction']").click()
    cy.get("[data-test^='user-list-item']").first().click()
    cy.get("input[placeholder='Amount']").type('99999999')
    cy.get("input[placeholder='Add a note']").type('Insufficient balance test')
    cy.get("[data-test='transaction-create-submit-payment']").click()

    // Known issue:
    // The expected behavior for this exercise is to block the transaction
    // and display an "Insufficient funds" error message.
    // However, the current application allows the transaction to be completed.
    cy.contains('Insufficient funds').should('be.visible')
  })
})