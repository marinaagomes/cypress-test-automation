# Bug Report

## Bug ID
BUG-001

## Title
Invalid login displays unclear error message

## Description
When a user attempts to log in with invalid credentials, the application displays the message **"Unknown error"** instead of a clear and helpful authentication error message.

## Environment
- Application: Cypress Heroes
- Browser: Chrome
- Test Type: Manual / Automated
- Environment: Localhost

## Preconditions
The application is running and accessible.

## Steps to Reproduce
1. Open the Cypress Heroes application.
2. Click the Login button.
3. Enter an invalid email address.
4. Enter an invalid password.
5. Click Sign in.

## Actual Result
The application displays:

Unknown error

## Expected Result
The application should display a clear message such as:

Invalid email or password

## Severity
Medium

## Priority
Medium

## Notes
This impacts user experience because the error message does not clearly explain what went wrong.