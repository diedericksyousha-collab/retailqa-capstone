## Purpose

The GitHub Actions pipeline is used to automatically validate the QA automation framework whenever code is pushed or a pull request is opened.

## Current Pipeline Scope

The current pipeline checks:

1. Repository checkout
2. Node.js setup
3. Dependency installation
4. Cypress installation verification
5. TypeScript validation
6. Required project structure

## Why Full UI/API/Database Tests Are Not Enabled Yet

The frontend, API, and SQL Server database currently run locally on a Windows machine.

The database uses Windows Authentication and does not require a SQL password.

GitHub-hosted runners cannot access services running on the tester's local machine. In GitHub Actions, localhost refers to the GitHub runner, not the local Windows machine.

Because of this, the current workflow does not yet run:

- full Cypress UI tests
- full Newman API tests
- live database validation

## Current Local Test Flow

Full test execution is currently performed locally in this order:

1. Confirm local SQL Server database is running
2. Start the .NET API
3. Start the frontend
4. Run Cypress UI tests
5. Run Postman/Newman API tests
6. Run SQL validation queries
7. Save reports and evidence

## Future CI/CD Options

To enable full automated test execution in CI, one of the following would be needed:

| Option | Description |
|---|---|
| Self-hosted runner | Run GitHub Actions on the local Windows machine so it can access localhost services |
| Hosted test environment | Deploy the frontend, API, and database to an accessible test environment |
| Containerised app setup | Start the frontend, API, and database inside GitHub Actions if app changes are allowed |

## Current CI Status

The current pipeline is intentionally limited to framework validation because the application configuration must not be changed.