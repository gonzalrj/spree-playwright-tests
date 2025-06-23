# 🛍️ Spree Commerce E2E Playwright Test Suite

This project contains an end-to-end (E2E) UI test automation framework for the [Spree Commerce Demo Store](https://demo.spreecommerce.org), using **Playwright with TypeScript** and Page Object Model (POM) design.

## ✅ Features
- Covers complete shopping workflow: Sign Up, Login, Product Browse, Cart, Checkout
- Page Object Model for reusability and clean code
- CI integration using GitHub Actions
- Cross-browser testing (Chromium, Firefox, WebKit)

## 🧱 Project Structure
```
├── .github/workflows/tests.yml       # CI config
├── playwright.config.ts              # Playwright settings
├── tests/
│   └── spree.test.ts                 # Main test script
├── pages/
│   ├── HomePage.ts
│   ├── AuthPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── utils/
│   └── testData.ts                   # Dynamic test data
└── README.md
```

## 🚀 How to Run
```bash
npm install
npx playwright install
npx playwright test
```

## 📦 GitHub CI
CI automatically runs tests on push or pull request to `main` branch.

## 🔍 Reporting
View failed test reports with:
```bash
npx playwright show-report
```