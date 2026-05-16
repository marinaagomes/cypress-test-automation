# Cypress Heroes - Test Cases

## TC-001 - Display heroes list

**Objective:**  
Verify that the heroes list is displayed on the home page.

**Precondition:**  
The Cypress Heroes application is running.

**Steps:**  
1. Access the home page.
2. Wait for the heroes list to load.
3. Verify that hero cards/images are displayed.

**Expected Result:**  
The home page should display a list of heroes.

---

## TC-002 - Open login form

**Objective:**  
Verify that the login form is displayed when the user clicks the Login button.

**Precondition:**  
The user is on the home page.

**Steps:**  
1. Click the Login button.
2. Verify that the Email field is displayed.
3. Verify that the Password field is displayed.
4. Verify that the Sign in button is displayed.

**Expected Result:**  
The login form should be displayed with email, password, and sign in options.

---

## TC-003 - Invalid login

**Objective:**  
Verify that the system displays an error message when invalid credentials are submitted.

**Precondition:**  
The user is on the login form.

**Steps:**  
1. Click the Login button.
2. Enter an invalid email.
3. Enter an invalid password.
4. Click the Sign in button.

**Expected Result:**  
The system should display an error message informing that the login failed.

---

## TC-004 - Successful login

**Objective:**  
Verify that a user can submit valid login credentials successfully.

**Precondition:**  
The user is on the login form and has valid credentials.

**Steps:**  
1. Click the Login button.
2. Enter a valid email.
3. Enter a valid password.
4. Click the Sign in button.

**Expected Result:**  
The login request should be submitted successfully.