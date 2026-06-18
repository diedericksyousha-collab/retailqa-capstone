# Test Strategy Document

## 1. Introduction
This Test Strategy defines the overall approach to testing the application under test (AUT). It outlines the testing levels, techniques, tools, and quality standards used to ensure the system meets functional and non-functional expectations.

---

## 2. Testing Objectives
- Ensure the system functions correctly across UI, API, and database layers
- Validate input handling and business rules (especially payment-related validation)
- Detect defects early through structured testing techniques
- Ensure data integrity and consistency across system layers
- Provide confidence for release readiness through measurable coverage

---

## 3. Scope of Testing

### In Scope
- API testing (payment methods, orders, users)
- UI testing (Cypress automation)
- Database validation (SQL queries)
- Negative testing (invalid inputs, edge cases)
- Regression testing
- Data validation and integrity checks

### Out of Scope
- Production environment testing
- Infrastructure/network configuration changes
- Third-party payment gateway internal logic
- Full performance/load testing (unless explicitly required)

---

## 4. Test Levels

### 4.1 Unit Testing
- Performed by developers
- Focus: individual functions and components

### 4.2 Integration Testing
- Focus: API ↔ database ↔ service interaction
- Validate data flow between modules

### 4.3 System Testing
- End-to-end validation of business flows
- Covers UI + API + DB consistency

### 4.4 Acceptance Testing
- Validates business requirements (FR-001 to FR-003)
- Ensures system readiness for release

---

## 5. Test Types

- Functional Testing
- API Testing (Postman)
- UI Testing (Cypress)
- Regression Testing
- Negative Testing
- Data Integrity Testing
- Exploratory Testing

---

## 6. Test Design Techniques

- Equivalence Partitioning
- Boundary Value Analysis
- Decision Tables
- State Transition Testing
- Error Guessing

---

## 7. Tools & Frameworks

- Cypress (UI automation)
- Postman (API testing)
- SQL Server / Database queries (data validation)
- GitHub (version control)
- CI/CD pipeline (optional execution integration)

---

## 8. Test Environment Strategy

- Dedicated QA/Test environment
- Stable API endpoints
- Controlled test database
- Browser testing (Chrome primary)
- Isolated test data per execution cycle

---

## 9. Test Data Strategy

- Valid user accounts (standard + premium)
- Valid and invalid payment methods
- Boundary data (expiry dates, CVV limits)
- Duplicate data scenarios
- Pre-seeded orders (paid/unpaid states)

---

## 10. Defect Management Approach

- Defects logged in Jira or equivalent system
- Severity classification:
  - Critical: system crash / financial impact
  - High: major functional failure (e.g. invalid payment accepted)
  - Medium: incorrect validation or UI issue
  - Low: cosmetic issues

- Defect lifecycle:
  New → Assigned → Fixed → Retested → Closed / Reopened

---

## 11. Risk-Based Testing Approach

Testing priority is based on risk:

- High Risk:
  - Payment validation logic
  - Duplicate payment method handling
  - Data integrity in database

- Medium Risk:
  - UI validation messages
  - Order status transitions

- Low Risk:
  - UI styling issues
  - Non-critical informational messages

---

## 12. Entry Criteria
- Application deployed to QA environment
- API endpoints are available and stable
- Test data is prepared
- Requirements are clearly defined (FR-001 to FR-003)

---

## 13. Exit Criteria
- 95%+ test cases executed
- No unresolved Critical defects
- High severity defects either fixed or accepted with mitigation
- Core business flows working (user, payment method, order handling)
- Test summary report completed

---

## 14. Deliverables
- Test Strategy (this document)
- Test Plan
- Test Cases
- API collections (Postman)
- Automation scripts (Cypress)
- Defect reports
- Traceability Matrix
- Test Summary Report

---

## 15. Roles & Responsibilities

- QA Engineer: test design, execution, automation
- Developer: defect fixing and unit testing
- Test Manager: strategy, planning, reporting
- Product Owner: requirement validation and sign-off

---

## 16. Approval
This Test Strategy must be approved before test execution begins and serves as the baseline for all QA activities.