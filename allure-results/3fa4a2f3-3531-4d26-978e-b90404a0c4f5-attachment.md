# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project_11_DataDrivenTesting\Task_ProfileFill_DataDrivenTesting1_pagefill.spec.ts >> DDT >> DDL profile register fill - PriyalDesai
- Location: tests\Projects\Project_11_DataDrivenTesting\Task_ProfileFill_DataDrivenTesting1_pagefill.spec.ts:39:13

# Error details

```
Error: locator.fill: Error: Malformed value
Call log:
  - waiting for getByTestId('profile-date')
    - locator resolved to <input name="date" type="date" id="profile-date" data-testid="profile-date"/>
    - fill("2026-20-05")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

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
  56 |             // await page.getByTestId('profile-date').pressSequentially(data.Date);
> 57 |             await page.getByTestId('profile-date').fill(data.Date);
     |                                                    ^ Error: locator.fill: Error: Malformed value
  58 | 
  59 | 
  60 |             await page.getByRole("radiogroup", { name: data.Profession }).first().check();
  61 |             await page.getByRole("generic", { name: data.Tools }).check();
  62 |             await page.getByRole("generic", { name: data.Continents }).check();
  63 |             // await page.getByText("Africa").check();
  64 |             // await page.getByText("Australia").check();
  65 |             // await page.getByText("North America").check();
  66 |             // await page.getByText("Antarctica").check();
  67 |             // await page.getByTestId("upload-image");
  68 | 
  69 |             const filePath = path.join(__dirname, 'testdata1.txt');
  70 |             console.log('File path:', filePath);
  71 |             await page.getByTestId("upload-image").setInputFiles([filePath]);
  72 | 
  73 |             await page.getByTestId("profile-submit").click();
  74 | 
  75 |             await page.waitForTimeout(7000);
  76 | 
  77 | 
  78 | 
  79 | 
  80 | 
  81 |             let verify = page.locator("#submission-output");
  82 |             await expect(verify).toContainText(data.FirstName);
  83 |             await expect(verify).toContainText(data.LastName);
  84 |             await expect(verify).toContainText(data.Gender);
  85 |             await expect(verify).toContainText(data.YearsExperience);
  86 |             await expect(verify).toContainText(data.Date);
  87 |             await expect(verify).toContainText(data.Profession);
  88 |             await expect(verify).toContainText(data.Tools);
  89 |             await expect(verify).toContainText(data.Continents);
  90 |         });
  91 |     }
  92 | });
```