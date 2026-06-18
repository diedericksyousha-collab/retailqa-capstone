# Defect Log

## Project: Payment Methods / Order System QA
## Environment: QA / Test Environment
## Tooling: Cypress, Postman, SQL
## Date: [Insert Date]
## QA Engineer: [Your Name]

---

## Defect Summary Table

| ID | Title | Severity | Priority | Status | Module | Type |
|----|------|----------|----------|--------|--------|------|
| D-001 | Invalid payment data accepted and stored | High | High | Open | Payment Method API | Functional |
| D-002 | Invalid card brand/bank accepted | High | High | Open | Payment Method API | Validation |
| D-003 | Expiry date allows invalid value (0) | High | High | Open | Payment Method API | Validation |
| D-004 | CVV accepts non-numeric input | High | High | Open | UI / API Validation | Input Validation |
| D-005 | Duplicate payment method created under same card details | High | High | Open | Payment Method API | Data Integrity |
| D-006 | Missing validation error messages for invalid input | Medium | Medium | Open | UI / API | UX / Validation |
| D-007 | Inconsistent validation between UI and API layers | Medium | Medium | Open | System Integration | Consistency |

---

## Defect Details

---

### D-001: Invalid payment data accepted and stored
- **Severity:** High
- **Priority:** High
- **Status:** Open
- **Module:** Payment Method API

**Description:**
System accepts invalid payment details (letters in numeric fields, invalid formats) and stores them without proper validation.

**Steps to Reproduce:**
1. Navigate to payment method API or UI
2. Enter invalid card number / expiry / CVV
3. Submit request
4. Observe response and stored data

**Expected Result:**
System should reject invalid payment details and return validation error.

**Actual Result:**
Invalid data is accepted and stored.

---

### D-002: Invalid card brand/bank accepted
- **Severity:** High
- **Priority:** High
- **Status:** Open
- **Module:** Payment Method API

**Description:**
System allows unsupported or invalid card brands/banks to be submitted.

**Expected Result:**
Only supported card brands should be accepted.

**Actual Result:**
Invalid brands are accepted.

---

### D-003: Expiry date allows invalid value (0)
- **Severity:** High
- **Priority:** High
- **Status:** Open
- **Module:** Payment Method API

**Description:**
Expiry date field accepts invalid values such as 0.

**Expected Result:**
Expiry date must follow valid month/year format.

**Actual Result:**
Invalid expiry values are accepted.

---

### D-004: CVV accepts non-numeric input
- **Severity:** High
- **Priority:** High
- **Status:** Open
- **Module:** UI / API Validation

**Description:**
CVV field accepts letters and invalid formats.

**Expected Result:**
CVV should only accept numeric values with valid length.

**Actual Result:**
Non-numeric values are accepted.

---

### D-005: Duplicate payment method created
- **Severity:** High
- **Priority:** High
- **Status:** Open
- **Module:** Payment Method API

**Description:**
System allows duplicate payment methods to be created using identical card details.

**Expected Result:**
System should prevent duplicates based on userId + card fingerprint (last4 + brand).

**Actual Result:**
Duplicate payment methods are stored.

---

### D-006: Missing validation error messages
- **Severity:** Medium
- **Priority:** Medium
- **Status:** Open
- **Module:** UI / API

**Description:**
Invalid inputs do not always return clear or consistent error messages.

**Expected Result:**
Clear validation messages should be returned for all invalid inputs.

**Actual Result:**
Some invalid inputs fail silently or return generic errors.

---

### D-007: UI and API validation mismatch
- **Severity:** Medium
- **Priority:** Medium
- **Status:** Open
- **Module:** System Integration

**Description:**
UI allows inputs that API rejects or vice versa, showing inconsistent validation rules.

**Expected Result:**
UI and API validation rules should be aligned.

**Actual Result:**
Validation behaviour differs between layers.

---

## Overall Risk Summary

- **Critical Functional Risk:** Payment validation failure
- **Data Integrity Risk:** Duplicate and invalid payment records
- **System Reliability Risk:** Inconsistent validation across layers

---

## Recommendation

- Enforce strict backend validation rules
- Align UI validation with API schema
- Add database-level constraints for payment uniqueness
- Implement proper error messaging system
- Add automated regression tests for payment validation