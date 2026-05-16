# QA Automation Portfolio | Cypress

This repository contains practical QA automation exercises developed as part of my software testing studies, using real demo applications to practice automation, test design, bug reporting, and quality analysis.

My goal with this repository is to build hands-on experience as a Quality Assurance Engineer while strengthening both technical and analytical QA skills.

---

## Tech Stack

- Cypress
- TypeScript
- JavaScript
- Git & GitHub
- UI Test Automation
- Test Case Design
- Bug Reporting
- Quality Improvement Analysis

---

## Projects

## Real World App (RWA)

Practical Cypress exercises based on the official Cypress Real World App.

Original project:
https://github.com/cypress-io/cypress-realworld-app

### Completed Exercises

- Login and Registration
- Send Money
- Transaction History

### Location

```txt
cypress/tests/ui/exercises/real-world-app/
```

### Files

```txt
exercise-1-login-registration.spec.ts
exercise-2-send-money.spec.ts
exercise-3-transaction-history.spec.ts
```

---

## Cypress Heroes

QA exercises based on the Cypress Heroes demo application.

Original project:
https://github.com/cypress-io/cypress-heroes

### Deliverables

- UI automation tests
- Test cases
- Bug report
- Improvement suggestions

### Location

```txt
cypress-heroes/client/cypress/e2e/
```

### Files

```txt
exercise-cypress-heroes.cy.ts
test-cases.md
bug-report.md
improvements.md
```

---

## Skills Practiced

Through these exercises, I practiced:

- Writing end-to-end UI automation tests
- Positive and negative scenario validation
- Login/authentication flow testing
- Functional validation
- Error handling validation
- Test case documentation
- Bug reporting
- Product improvement analysis
- Repository organization for QA portfolio presentation

---

## Running the Projects

### Real World App

From repository root:

```bash
yarn
yarn dev
yarn cypress:open
```

---

### Cypress Heroes

From Cypress Heroes folder:

```bash
cd cypress-heroes
npm install
npm run setup
npm run dev
```

In another terminal:

```bash
cd cypress-heroes/client
npx cypress open
```
