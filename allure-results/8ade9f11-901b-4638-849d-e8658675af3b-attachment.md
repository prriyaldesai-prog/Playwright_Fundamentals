# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project_11_DataDrivenTesting\Task_ProfileFill_DataDrivenTesting1_pagefill.spec.ts >> DDT >> DDL profile register fill - PriyalDesai
- Location: tests\Projects\Project_11_DataDrivenTesting\Task_ProfileFill_DataDrivenTesting1_pagefill.spec.ts:39:13

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('radiogroup', { name: 'Automation Tester' }).first()

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import path from 'path';
  3  | import { readCSV } from './csvReader_useSame';
  4  | 
  5  | const URL = "https://app.thetestingacademy.com/playwright/tables/practice.html";
  6  | 
  7  | test.describe('DDT', () => {
  8  | 
  9  |     test.beforeAll('Start Execution', () => {
  10 |         console.log('Scenario Execution started - server started');
  11 | 
  12 |     });
  13 | 
  14 |     test.beforeEach('Navigate to login page', async ({ page }) => {
  15 | 
  16 |         page.goto(URL);
  17 |     });
  18 | 
  19 | 
  20 |     test.afterEach(async ({ page }, testInfo) => {
  21 |         if (testInfo.status !== testInfo.expectedStatus) {
  22 |             await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
  23 |         }
  24 |     });
  25 | 
  26 |     test.afterAll('Execution stop', async () => {
  27 |         console.log('After all - tear down');
  28 | 
  29 |     });
  30 | 
  31 | 
  32 | 
  33 |     // code for DDT csv file:
  34 |     const profileData = readCSV(path.join(__dirname, "profile-data.csv"))
  35 |     //const profileData = readCSV('profile-data.csv');
  36 | 
  37 | 
  38 |     for (const data of profileData) {
  39 |         test(`DDL profile register fill - ${data.FirstName + data.LastName}`, async ({ page }) => {
  40 |             await page.getByTestId("first-name").fill(data.FirstName);
  41 |             await page.getByRole("textbox", { name: "Last name" }).fill(data.LastName);
  42 |             await page.getByText(data.Gender, { exact: true }).check();
  43 |             // await page.getByTestId("years-experience").selectOption({ index: 7 });
  44 |             await page.getByTestId("years-experience").selectOption(data.YearsExperience);
  45 | 
  46 |             //date calender code:
  47 |             // const today = new Date();
  48 |             // const yyyy = today.getFullYear();
  49 |             // const mm = String(today.getMonth() + 1).padStart(2, '0');
  50 |             // const dd = String(today.getDate()).padStart(2, '0');
  51 |             // const formattedDate = `${yyyy}-${mm}-${dd}`;
  52 |             // await page.getByTestId("profile-date").fill(formattedDate);
  53 | 
  54 |             //simple calender date code:
  55 |             //Select Date Value
  56 |             await page.getByTestId('profile-date').pressSequentially(data.Date);
  57 | 
  58 | 
> 59 |             await page.getByRole("radiogroup", { name: data.Profession }).first().check();
     |                                                                                   ^ Error: locator.check: Test timeout of 30000ms exceeded.
  60 |             await page.getByRole("generic", { name: data.Tools }).check();
  61 |             await page.getByRole("generic", { name: data.Continents }).check();
  62 |             // await page.getByText("Africa").check();
  63 |             // await page.getByText("Australia").check();
  64 |             // await page.getByText("North America").check();
  65 |             // await page.getByText("Antarctica").check();
  66 |             // await page.getByTestId("upload-image");
  67 | 
  68 |             const filePath = path.join(__dirname, 'testdata1.txt');
  69 |             console.log('File path:', filePath);
  70 |             await page.getByTestId("upload-image").setInputFiles([filePath]);
  71 | 
  72 |             await page.getByTestId("profile-submit").click();
  73 | 
  74 |             await page.waitForTimeout(7000);
  75 | 
  76 | 
  77 | 
  78 | 
  79 | 
  80 |             let verify = page.locator("#submission-output");
  81 |             await expect(verify).toContainText(data.FirstName);
  82 |             await expect(verify).toContainText(data.LastName);
  83 |             await expect(verify).toContainText(data.Gender);
  84 |             await expect(verify).toContainText(data.YearsExperience);
  85 |             await expect(verify).toContainText(data.Date);
  86 |             await expect(verify).toContainText(data.Profession);
  87 |             await expect(verify).toContainText(data.Tools);
  88 |             await expect(verify).toContainText(data.Continents);
  89 |         });
  90 |     }
  91 | });
```