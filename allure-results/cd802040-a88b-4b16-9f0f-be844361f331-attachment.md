# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project_11_DataDrivenTesting\Task_DataDrivenTesting1_pagefilldetailsprofile.spec.ts >> DDT >> DDL profile fill
- Location: tests\Projects\Project_11_DataDrivenTesting\Task_DataDrivenTesting1_pagefilldetailsprofile.spec.ts:30:9

# Error details

```
Error: locator.check: Error: strict mode violation: getByText('Selenium Webdriver') resolved to 3 elements:
    1) <label class="control-chip">…</label> aka getByText('Selenium Webdriver', { exact: true })
    2) <li>…</li> aka getByText('Check multiple Automation')
    3) <span class="token-string">'Selenium Webdriver'</span> aka getByText('\'Selenium Webdriver\'')

Call log:
  - waiting for getByText('Selenium Webdriver')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import path from 'path';
  3  | 
  4  | const URL = "https://app.thetestingacademy.com/playwright/tables/practice.html";
  5  | 
  6  | test.describe('DDT', async () => {
  7  | 
  8  |     test.beforeAll('Start Execution', () => {
  9  |         console.log('Scenario Execution started - server started');
  10 | 
  11 |     });
  12 | 
  13 |     test.beforeEach('Navigate to login page', async ({ page }) => {
  14 | 
  15 |         page.goto(URL);
  16 |     });
  17 | 
  18 | 
  19 |     test.afterEach(async ({ page }, testInfo) => {
  20 |         if (testInfo.status !== testInfo.expectedStatus) {
  21 |             await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
  22 |         }
  23 |     });
  24 | 
  25 |     test.afterAll('Execution stop', async () => {
  26 |         console.log('After all - tear down');
  27 | 
  28 |     });
  29 | 
  30 |     test('DDL profile fill', async ({ page }) => {
  31 |         await page.getByTestId("first-name").fill("Priyal");
  32 |         await page.getByRole("textbox", { name: "Last name" }).fill("Desai");
  33 |         await page.getByText("Female", { exact: true }).check();
  34 |         await page.getByTestId("years-experience").selectOption({ index: 7 });
  35 | 
  36 |         const today = new Date();
  37 |         const yyyy = today.getFullYear();
  38 |         const mm = String(today.getMonth() + 1).padStart(2, '0');
  39 |         const dd = String(today.getDate()).padStart(2, '0');
  40 |         const formattedDate = `${yyyy}-${mm}-${dd}`;
  41 |         await page.getByTestId("profile-date").fill(formattedDate);
  42 | 
  43 |         await page.getByText("Automation Tester", { exact: true }).check();
> 44 |         await page.getByText("Selenium Webdriver").check();
     |                                                    ^ Error: locator.check: Error: strict mode violation: getByText('Selenium Webdriver') resolved to 3 elements:
  45 |         await page.getByText("Asia").check();
  46 |         await page.getByText("Africa").check();
  47 |         await page.getByText("Australia").check();
  48 |         await page.getByText("North America").check();
  49 |         await page.getByText("Antarctica").check();
  50 |         await page.getByTestId("upload-image");
  51 | 
  52 |         const filePath = path.join(__dirname, 'testdata1.txt');
  53 |         console.log('File path:', filePath);
  54 |         await page.getByTestId("upload-image").setInputFiles([filePath]);
  55 | 
  56 |         await page.getByTestId("profile-submit").click();
  57 | 
  58 |         await page.waitForTimeout(3000);
  59 |     });
  60 | });
```