# Playwright Test Automation Project

This project contains automated tests using Playwright for web application testing.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Centric205/Playwright-Test-Automation.git
    cd Playwright-Test-Automation
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

## Project Structure

-   `tests/`: Contains the test spec files.
-   `pages/`: Page Object Model (POM) files for interacting with web pages.
-   `locators/`: Centralized locators used across different page objects.
-   `utils/`: Utility functions and environment configurations.
-   `playwright.config.ts`: Playwright test runner configuration.
-   `playwright-report/`: Directory where test reports are generated.
-   `test-results/`: Directory where test artifacts (e.g., screenshots, videos) are stored.

## Configuration

Environment variables and base URLs can be configured in `utils/envConfig.ts` and `playwright.config.ts`.

## Running Tests

To run all tests:

```bash
npx playwright test
```

To run tests in a specific file:

```bash
npx playwright test tests/loginTest.spec.ts
```

To run tests with a specific browser (e.g., Chromium):

```bash
npx playwright test --project=chromium
```

To run tests in UI mode:

```bash
npx playwright test --ui
```

## Test Reports

After running tests, you can view the HTML report:

```bash
npx playwright show-report
```