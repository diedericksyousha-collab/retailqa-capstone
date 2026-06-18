# Test Plan Document

## 1. Introduction
This Test Plan defines the scope, approach, resources, and schedule for testing the application under test (AUT). The objective is to ensure that the system meets functional and non-functional requirements with a focus on API validation, UI behaviour, and data integrity.

---

## 2. Objectives
- Validate that core application features function as expected.
- Ensure API endpoints handle valid and invalid inputs correctly.
- Verify UI behaviour aligns with backend validation rules.
- Identify defects in payment method handling and input validation.
- Ensure data integrity across UI, API, and database layers.
- Provide measurable test coverage for release readiness.

---

## 3. Scope

### In Scope
- User authentication and session handling
- Payment method creation and validation (API + UI)
- Order creation and processing logic
- Input validation (CVV, expiry date, card details)
- Database validation for stored records
- Negative testing (invalid inputs, duplicate data, boundary values)

### Out of Scope
- Third-party payment processing systems
- Production environment testing
- Performance/load testing beyond basic checks (unless specified)
- Infrastructure configuration changes

---

## 4. Test Approach

### Testing Types
- Functional Testing
- API Testing (Postman)
- UI Testing (Cypress)
- Negative Testing
- Data Integrity Testing (SQL validation)
- Regression Testing

### Test Design Techniques
- Equivalence Partitioning
- Boundary Value Analysis
- Decision Tables
- Error Guessing
- State Transition Testing (where applicable)

---

## 5. Test Environment
- QA/Test environment
- Web application hosted locally or test server
- API accessible via Postman
- Database access for validation queries
- Supported browser: Chrome (latest)

---

## 6. Test Data
- Valid and invalid payment card details
- Duplicate card entries
- Boundary values for expiry and CVV fields
- Test user accounts (standard + premium users)
- Pre-created orders (paid/unpaid states)

---

## 7. Entry Criteria
- Application is deployed and stable in QA environment
- API endpoints are accessible
- Test data is prepared and validated
- Requirements or user stories are available
- Test tools (Cypress/Postman) are configured

---

## 8. Exit Criteria
- At least 95% test cases executed
- No open Critical defects
- High severity defects either resolved or accepted with mitigation
- Core functional flows passing (authentication, payment method, order flow)
- Test summary report completed and reviewed

---

## 9. Deliverables
- Test Plan (this document)
- Test Cases (manual + automated)
- API test collections (Postman)
- Defect reports (Jira or equivalent)
- Test Execution Summary Report
- Traceability Matrix

---

## 10. Risks and Mitigation

### Risks
- Invalid payment data being accepted by system
- Inconsistent validation between UI and API
- Duplicate payment methods created under edge cases
- Missing or incomplete test data
- Environment instability affecting test execution

### Mitigation
- Increase negative testing coverage
- Align UI and API validation rules
- Strengthen database-level constraints
- Maintain stable test data sets
- Run regression testing after fixes

---

## 11. Assumptions
- System under test is functionally stable
- Test environment mirrors production behaviour where possible
- APIs remain consistent during testing cycle
- No major scope changes during execution

---

## 12. Test Schedule
- Test Design: Completed prior to execution
- Test Execution: Ongoing during sprint/test cycle
- Defect Retesting: As fixes are deployed
- Regression Testing: After major fixes

---

## 13. Roles & Responsibilities
- QA Engineer: Test design, execution, defect reporting
- Developer: Fix defects and support root cause analysis
- Test Manager: Planning, reporting, and risk management
- BA/Product Owner: Requirement clarification and sign-off

---

## 14. Approval
This Test Plan requires approval from QA Lead/Test Manager before execution begins.