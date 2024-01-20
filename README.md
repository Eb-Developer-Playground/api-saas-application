# API SaaS App Documentation


## Overview

This project represents an API SaaS (Software as a Service) application.

## Technology Stack

- **Angular CLI**: This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 16.2.11.

## Continuous Integration/Continuous Deployment (CI/CD)

### GitHub Actions

I utilize GitHub Actions for seamless CI/CD. The badges above represent the status of the main workflows:

- **Tests (using jest):** [![Angular Tests](https://github.com/Eb-Developer-Playground/api-saas-application/actions/workflows/angular-tests.yml/badge.svg)](https://github.com/Eb-Developer-Playground/api-saas-application/actions/workflows/angular-tests.yml)

- **Build and Deploy:** [![Build and Deploy Documentation to GH Pages](https://github.com/Eb-Developer-Playground/api-saas-application/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/Eb-Developer-Playground/api-saas-application/actions/workflows/deploy-gh-pages.yml)
- **Cloudflare Pages Deployment:** [![Build and Deploy to Cloudflare Hosting](https://github.com/Eb-Developer-Playground/api-saas-application/actions/workflows/cloud-flare-pages-deployment.yml/badge.svg)](https://github.com/Eb-Developer-Playground/api-saas-application/actions/workflows/cloud-flare-pages-deployment.yml)

### Documentation Link

- **GitHub Pages:** [Link to GitHub Pages](https://eb-developer-playground.github.io/api-saas-application/)

### Demo Link

- **Web link:** [Demo Link](https://app-4pf.pages.dev/fr/)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Localization Tasks

ng extract-i18n --output-path src/locale

**build app with locales**

ng build --localize 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



# Mock documentation swagger files 

   1. https://gist.githubusercontent.com/pmutua/4d52a52040a28522499fa8f5a617a051/raw/5eecc568f8a21b1615e65982e5588eab8d5175a4/docs.account-balance.swagger.json
   2. https://gist.githubusercontent.com/pmutua/07bb41f2464772c13e0c3bd93a5cb8fd/raw/02836cb00ed98ed1d5e08b8b08abb864f0575c79/docs.transaction-history.swagger.json
   3. https://gist.githubusercontent.com/pmutua/086307cfccd2dc2e3be7fa5fd6f34e0b/raw/2773326655a532d39aedd8d5a685903c12731c11/docs.payment-processing.json
   4. https://gist.githubusercontent.com/pmutua/48ad1a14c322b773cf1811ffccfadfad/raw/ebfd16409f7589931a8c74867362ccadd06e707e/docs.card-management.swagger.json
   5. https://gist.githubusercontent.com/pmutua/072c2fab71ad85165beb67d8a1953872/raw/6a2215ac628121d526aa824f57c31563233730ae/docs.loan-management.json
   6. https://gist.githubusercontent.com/pmutua/3573718ab03cbda0186eb6c435b6831f/raw/7ce7b5aba9507ba8c1299727e7462fc203707759/docs.customer-authentication.swagger.json
   7. https://gist.githubusercontent.com/pmutua/6c88902c01673f116aa829224f755b5b/raw/4a6498320963602af761959c6173e858a85c8e4e/kyc-verification.swagger.json
   8. https://gist.githubusercontent.com/pmutua/00154929bc703ee8a56f5b59bbf19ed5/raw/945299fbe8581c8a5904959a27d9252946864b1c/docs.credit-score.swagger.json
   9. https://gist.githubusercontent.com/pmutua/58e49f6b1f0326c90e773deed1a48345/raw/d9ef990734d12a8d5a7fdecfa1f138676ef0e6b2/docs.foreign-exchange.swagger.json
   10. https://gist.githubusercontent.com/pmutua/e54f370403c3e6de5fcd9ef2ae3b996f/raw/22ab384e53fc8b4094796253568ee4adf8cf8ee7/docs.atm-locator.swagger.json
   11. https://gist.githubusercontent.com/pmutua/aa8a11ecc449f233e9bbe469ccce2d1b/raw/51db0e752cda8b66a172e896351a1ece82918814/docs.fraud-detection.swagger.json
   12. https://gist.githubusercontent.com/pmutua/ec547343e71de8ca14e1ed420064527e/raw/29f44adad52a0a9dc243f7468ca2aec30ba3c1fd/docs.budgeting-savings.swagger.json 
   13. https://gist.githubusercontent.com/pmutua/1a7ad1aa0054c2de8ad5396a0ea57162/raw/134337cd3416ae7564de48f7f0a35fb9f6f417a9/docs.morgage-calculator.swagger.json
   14. https://gist.githubusercontent.com/pmutua/50687eaf8717a6dd8c7aa360c2f5a3f2/raw/2adf9799bba32ebfd68d0bd43073249285f8602b/docs.investment-portfollio.swagger.json
   15. https://gist.githubusercontent.com/pmutua/591d2b2615a192fd6273479a351d29e9/raw/89c1e4fa722df1cd04d12e9e55b14c0918d4fa9f/docs.bill-payment-api.swagger.json
   16. https://gist.githubusercontent.com/pmutua/c44827ec92f238ec537d5f2428eca9a7/raw/bcd3834075a3b3b2a25634a8d79b235ef6e97fce/docs.branch-locator.swagger.json
   17. https://gist.githubusercontent.com/pmutua/55a30f345ea01f91c952c0f42d9b99f7/raw/ed20d7d852afe393a7304f3cf4579a6d40df238c/credit-card-reward.swagger.json
   18. https://gist.githubusercontent.com/pmutua/0eb6c6c1b10decd1e8e8ea9251eb6f2a/raw/caa12571b77e07f5bc999b86e8c5f93b73410a37/docs.chat-bot-assistance-api.swagger.json
   19. https://gist.githubusercontent.com/pmutua/82490ceec6e895d56872203ffc82b5d4/raw/51fc915c716e883e542d6b3f61bac08d85bb2cca/docs.loan-eligibility-api.swagger.json
   20. https://gist.githubusercontent.com/pmutua/399fe8fe82613eb3a7e4c1aabf080d83/raw/ea56d139e5a2e256b941840a387cc4f5b47891ad/docs.currency-conversion.swagger.json


