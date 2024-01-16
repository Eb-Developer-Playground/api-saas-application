export const apiCatalogueDummyData = [
    {
        id:1,
        name: 'Account Balance API',
        icon: 'assets/images/icons/wallet.png',
        category: 'Account Services',
        description: 'Retrieve the current balance of a customer\'s account.',
        usageGuide: 'Explains how to retrieve account balances and handle various currency types.',
        features: ['Check Account Balance'],
        pricingPlan: 'Basic',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/4d52a52040a28522499fa8f5a617a051/raw/5eecc568f8a21b1615e65982e5588eab8d5175a4/docs.account-balance.swagger.json',
        endpoint: 'https://api.example.com/account-balance',
        version: '1.0'
    },
    {
        id:2,
        name: 'Transaction History API',
        icon: 'assets/images/icons/report.png',
        category: 'Account Services',
        description: 'Retrieve the transaction history for a customer\'s account.',
        usageGuide: 'Guide for fetching transaction history and handling pagination.',
        features: ['View Transaction History', 'Filter Transactions'],
        pricingPlan: 'Basic',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/07bb41f2464772c13e0c3bd93a5cb8fd/raw/02836cb00ed98ed1d5e08b8b08abb864f0575c79/docs.transaction-history.swagger.json',
        endpoint: 'https://api.example.com/transaction',
        version: '1.0'
    },
    {
        id:3,
        name: 'Payment Processing API',
        icon: 'assets/images/icons/cash-flow.png',
        category: 'Payment Services',
        description: 'Initiate payments between different accounts and process transactions.',
        usageGuide: 'Detailed guide for initiating payments and handling various transaction statuses.',
        features: ['Initiate Payments', 'Process Transactions'],
        pricingPlan: 'Premium',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/086307cfccd2dc2e3be7fa5fd6f34e0b/raw/2773326655a532d39aedd8d5a685903c12731c11/docs.payment-processing.json',
        endpoint: 'https://api.example.com/payment-processing',
        version: '1.0'
    },
    {
        id:4,
        name: 'Card Management API',
        icon: 'assets/images/icons/service.png',
        category: 'Card Services',
        description: 'Manage customer debit/credit cards, block or activate cards, and retrieve card details.',
        usageGuide: 'Instructions for card-related operations and handling lost or stolen cards.',
        features: ['Block/Activate Cards', 'Retrieve Card Details'],
        pricingPlan: 'Advanced',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/48ad1a14c322b773cf1811ffccfadfad/raw/ebfd16409f7589931a8c74867362ccadd06e707e/docs.card-management.swagger.json',
        endpoint: 'https://api.example.com/card-management',
        version: '1.0'
    },
    {
        id:5,
        name: 'Loan Application API',
        icon: 'assets/images/icons/loan.png',
        category: 'Loan Services',
        description: 'Submit and process loan applications for customers.',
        usageGuide: 'Step-by-step process for submitting loan applications and status tracking.',
        features: ['Submit Loan Application', 'Check Application Status'],
        pricingPlan: 'Premium',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/072c2fab71ad85165beb67d8a1953872/raw/6a2215ac628121d526aa824f57c31563233730ae/docs.loan-management.json',
        endpoint: 'https://api.example.com/loan-application',
        version: '1.0'
    },
    {
        id:6,
        name: 'Customer Authentication API',
        icon: 'assets/images/icons/authentication.png',
        category: 'Security Services',
        description: 'Authenticate customers securely using multi-factor authentication methods.',
        usageGuide: 'Implementation guide for customer authentication and handling authentication errors.',
        features: ['Biometric Authentication', 'One-Time Password'],
        pricingPlan: 'Advanced',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/3573718ab03cbda0186eb6c435b6831f/raw/7ce7b5aba9507ba8c1299727e7462fc203707759/docs.customer-authentication.swagger.json',
        endpoint: 'https://api.example.com/customer-authentication',
        version: '1.0'
    },
    {
        id:7,
        name: 'KYC Verification API',
        icon: 'assets/images/icons/kyc.png',
        category: 'Compliance Services',
        description: 'Perform Know Your Customer (KYC) verifications for customers.',
        usageGuide: 'Instructions for collecting customer data and verifying identity documents.',
        features: ['Identity Verification', 'Document Upload'],
        pricingPlan: 'Premium',
        swaggerJSonFile: 'https://gist.githubusercontent.com/pmutua/6c88902c01673f116aa829224f755b5b/raw/4a6498320963602af761959c6173e858a85c8e4e/kyc-verification.swagger.json',
        endpoint: 'https://api.example.com/kyc-verification',
        version: '1.0'
    },
    {
        id:8,
        name: 'Credit Score API',
        icon: 'assets/images/icons/business-credit-score.png',
        category: 'Credit Scoring Services',
        description: 'Retrieve a customer\'s credit score and credit history.',
        usageGuide: 'Guide for accessing credit score data and interpreting credit reports.',
        features: ['Check Credit Score', 'View Credit History'],
        pricingPlan: 'Advanced',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/00154929bc703ee8a56f5b59bbf19ed5/raw/945299fbe8581c8a5904959a27d9252946864b1c/docs.credit-score.swagger.json',
        endpoint: 'https://api.example.com/credit-score',
        version: '1.0'
    },
    {
        id:9,
        name: 'Foreign Exchange Rates API',
        icon: 'assets/images/icons/currency.png',
        category: 'Currency Services',
        description: 'Retrieve real-time foreign exchange rates for different currencies.',
        usageGuide: 'Instructions for currency conversion and handling currency rate fluctuations.',
        features: ['Retrieve Exchange Rates', 'Currency Conversion'],
        pricingPlan: 'Basic',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/58e49f6b1f0326c90e773deed1a48345/raw/d9ef990734d12a8d5a7fdecfa1f138676ef0e6b2/docs.foreign-exchange.swagger.json',
        endpoint: 'https://api.example.com/forex-exchange-rates',
        version: '1.0'
    },
    {
        id:10,
        name: 'ATM Locator API',
        icon: 'assets/images/icons/atm.png',
        category: 'Location Services',
        description: 'Locate nearby ATMs and their operating status for customers.',
        usageGuide: 'Guide for finding nearby ATMs and getting directions.',
        features: ['Find Nearby ATMs', 'Check ATM Status'],
        pricingPlan: 'Basic',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/e54f370403c3e6de5fcd9ef2ae3b996f/raw/22ab384e53fc8b4094796253568ee4adf8cf8ee7/docs.atm-locator.swagger.json',
        endpoint: 'https://api.example.com/atm-locator',
        version: '1.0'
    },
    {
        id:11,
        name: 'Fraud Detection API',
        icon: 'assets/images/icons/fraud.png',
        category: 'Security Services',
        description: 'Detect and prevent fraudulent activities in banking transactions.',
        usageGuide: 'Implementation guide for fraud detection algorithms and anomaly detection.',
        features: ['Transaction Monitoring', 'Suspicious Activity Detection'],
        pricingPlan: 'Advanced',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/aa8a11ecc449f233e9bbe469ccce2d1b/raw/51db0e752cda8b66a172e896351a1ece82918814/docs.fraud-detection.swagger.json',
        endpoint: 'https://api.example.com/fraud-detection',
        version: '1.0'
    },
    {
        id:12,
        name: 'Budgeting and Savings API',
        icon: 'assets/images/icons/save-time.png',
        category: 'Financial Planning Services',
        description: 'Assist customers in budgeting, goal setting, and saving strategies.',
        usageGuide: 'Instructions for setting budgets, tracking expenses, and achieving financial goals.',
        features: ['Budget Planning', 'Goal Tracking'],
        pricingPlan: 'Premium',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/ec547343e71de8ca14e1ed420064527e/raw/29f44adad52a0a9dc243f7468ca2aec30ba3c1fd/docs.budgeting-savings.swagger.json',
        endpoint: 'https://api.example.com/budgeting-savings',
        version: '1.0'
    },
    {
        id:13,
        name: 'Mortgage Calculator API',
        icon: 'assets/images/icons/finance.png',
        category: 'Loan Services',
        description: 'Calculate mortgage payments and provide mortgage-related information.',
        usageGuide: 'How to use the mortgage calculator and interpret payment breakdowns.',
        features: ['Calculate Monthly Payments', 'Amortization Schedule'],
        pricingPlan: 'Basic',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/1a7ad1aa0054c2de8ad5396a0ea57162/raw/134337cd3416ae7564de48f7f0a35fb9f6f417a9/docs.morgage-calculator.swagger.json',
        endpoint: 'https://api.example.com/mortgage-calculator',
        version: '1.0'
    },
    {
        id:14,
        name: 'Investment Portfolio API',
        icon: 'assets/images/icons/pie-chart.png',
        category: 'Investment Services',
        description: 'Manage and track customer investment portfolios and their performance.',
        usageGuide: 'Guide for managing investment portfolios and analyzing investment trends.',
        features: ['Portfolio Management', 'Performance Analytics'],
        pricingPlan: 'Premium',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/50687eaf8717a6dd8c7aa360c2f5a3f2/raw/2adf9799bba32ebfd68d0bd43073249285f8602b/docs.investment-portfollio.swagger.json',
        endpoint: 'https://api.example.com/investment-portfolio',
        version: '1.0'
    },
    {
        id:15,
        name: 'Bill Payment API',
        icon: 'assets/images/icons/bill.png',
        category: 'Payment Services',
        description: 'Facilitate bill payments for various services and utilities.',
        usageGuide: 'How to set up bill payments, schedule payments, and manage billers.',
        features: ['Pay Utility Bills', 'Scheduled Payments'],
        pricingPlan: 'Basic',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/591d2b2615a192fd6273479a351d29e9/raw/89c1e4fa722df1cd04d12e9e55b14c0918d4fa9f/docs.bill-payment-api.swagger.json',
        endpoint: 'https://api.example.com/bill-payment',
        version: '1.0'
    },
    {
        id:16,
        name: 'Branch Locator API',
        icon: 'assets/images/icons/branch.png',
        category: 'Location Services',
        description: 'Locate nearby bank branches and their operating hours.',
        usageGuide: 'Find nearby branches, view services offered, and get directions.',
        features: ['Find Nearby Branches', 'Operating Hours'],
        pricingPlan: 'Basic',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/c44827ec92f238ec537d5f2428eca9a7/raw/bcd3834075a3b3b2a25634a8d79b235ef6e97fce/docs.branch-locator.swagger.json',
        endpoint: 'https://api.example.com/branch-locator',
        version: '1.0'
    },
    {
        id:17,
        name: 'Credit Card Rewards API',
        icon: 'assets/images/icons/card-reward.png',
        category: 'Card Services',
        description: 'Manage credit card rewards programs and redeem points.',
        usageGuide: 'How to earn and redeem reward points, and available rewards catalog.',
        features: ['Points Redemption', 'Reward Catalog'],
        pricingPlan: 'Premium',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/55a30f345ea01f91c952c0f42d9b99f7/raw/ed20d7d852afe393a7304f3cf4579a6d40df238c/credit-card-reward.swagger.json',
        endpoint: 'https://api.example.com/credit-card-rewards',
        version: '1.0'
    },
    {
        id:18,
        name: 'Chatbot Assistance API',
        icon: 'assets/images/icons/chatbot.png',
        category: 'Customer Support Services',
        description: 'Provide customer support and assistance using chatbots.',
        usageGuide: 'Integrate chatbots for customer queries, troubleshooting, and FAQs.',
        features: ['Automated Assistance', 'FAQ Support'],
        pricingPlan: 'Basic',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/0eb6c6c1b10decd1e8e8ea9251eb6f2a/raw/caa12571b77e07f5bc999b86e8c5f93b73410a37/docs.chat-bot-assistance-api.swagger.json',
        endpoint: 'https://api.example.com/chatbot5',
        version: '1.0'
    },
    {
        id:19,
        name: 'Loan Eligibility API',
        icon: 'assets/images/icons/loan-applicant.png',
        category: 'Loan Services',
        description: 'Check customer eligibility for different loan products.',
        usageGuide: 'Determine eligibility criteria and verify loan application requirements.',
        features: ['Check Eligibility', 'Loan Application Requirements'],
        pricingPlan: 'Basic',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/82490ceec6e895d56872203ffc82b5d4/raw/51fc915c716e883e542d6b3f61bac08d85bb2cca/docs.loan-eligibility-api.swagger.json',
        endpoint: 'https://api.example.com/loan-facility',
        version: '1.0'
    },
    {
        id:20,
        name: 'Currency Conversion API',
        icon: 'assets/images/icons/currency-conversion.png',
        category: 'Currency Services',
        description: 'Convert between different currencies at real-time rates.',
        usageGuide: 'Instructions for currency conversion and handling exchange rates.',
        features: ['Real-time Conversion', 'Multi-currency Support'],
        pricingPlan: 'Basic',
        swaggerJsonFile: 'https://gist.githubusercontent.com/pmutua/399fe8fe82613eb3a7e4c1aabf080d83/raw/ea56d139e5a2e256b941840a387cc4f5b47891ad/docs.currency-conversion.swagger.json',
        endpoint: 'https://api.example.com/currency-conversion',
        version: '1.0'
    }
];