# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project_11_DataDrivenTesting\Task_ProfileFill_DataDrivenTesting1_pagefill.spec.ts >> DDT >> DDL profile register fill - HardikDesai
- Location: tests\Projects\Project_11_DataDrivenTesting\Task_ProfileFill_DataDrivenTesting1_pagefill.spec.ts:57:13

# Error details

```
Error: locator.fill: Error: Malformed value
Call log:
  - waiting for getByTestId('profile-date')
    - locator resolved to <input name="date" type="date" id="profile-date" data-testid="profile-date"/>
    - fill("2026-31-05")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import path from 'path';
  3   | import { readCSV } from './csvReader_useSame';
  4   | 
  5   | const URL = "https://app.thetestingacademy.com/playwright/tables/practice.html";
  6   | 
  7   | // Helper to normalize various CSV date formats (DD/MM/YYYY, DD-MM-YYYY, DDMMYYYY) to YYYY-MM-DD
  8   | function formatToISO(dateStr: string): string {
  9   |     if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
  10  |         return dateStr;
  11  |     }
  12  |     const matchSlashOrDash = dateStr.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);
  13  |     if (matchSlashOrDash) {
  14  |         const [, day, month, year] = matchSlashOrDash;
  15  |         return `${year}-${month}-${day}`;
  16  |     }
  17  |     const matchDigits = dateStr.match(/^(\d{2})(\d{2})(\d{4})$/);
  18  |     if (matchDigits) {
  19  |         const [, day, month, year] = matchDigits;
  20  |         return `${year}-${month}-${day}`;
  21  |     }
  22  |     return dateStr;
  23  | }
  24  | 
  25  | test.describe('DDT', () => {
  26  | 
  27  |     test.beforeAll('Start Execution', () => {
  28  |         console.log('Scenario Execution started - server started');
  29  | 
  30  |     });
  31  | 
  32  |     test.beforeEach('Navigate to login page', async ({ page }) => {
  33  | 
  34  |         page.goto(URL);
  35  |     });
  36  | 
  37  | 
  38  |     test.afterEach(async ({ page }, testInfo) => {
  39  |         if (testInfo.status !== testInfo.expectedStatus) {
  40  |             await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
  41  |         }
  42  |     });
  43  | 
  44  |     test.afterAll('Execution stop', async () => {
  45  |         console.log('After all - tear down');
  46  | 
  47  |     });
  48  | 
  49  | 
  50  | 
  51  |     // code for DDT csv file:
  52  |     const profileData = readCSV(path.join(__dirname, "profile-data.csv"))
  53  |     //const profileData = readCSV('profile-data.csv');
  54  | 
  55  | 
  56  |     for (const data of profileData) {
  57  |         test(`DDL profile register fill - ${data.FirstName + data.LastName}`, async ({ page }) => {
  58  |             await page.getByTestId("first-name").fill(data.FirstName);
  59  |             await page.getByRole("textbox", { name: "Last name" }).fill(data.LastName);
  60  |             await page.getByText(data.Gender).first().check();
  61  |             // await page.getByTestId("years-experience").selectOption({ index: 7 });
  62  |             await page.getByTestId("years-experience").selectOption(data.YearsExperience);
  63  | 
  64  |             //1          //date calender code:
  65  |             // const today = new Date();
  66  |             // const yyyy = today.getFullYear();
  67  |             // const mm = String(today.getMonth() + 1).padStart(2, '0');
  68  |             // const dd = String(today.getDate()).padStart(2, '0');
  69  |             // const formattedDate = `${yyyy}-${mm}-${dd}`;
  70  |             // await page.getByTestId("profile-date").fill(formattedDate);
  71  | 
  72  |             //2       //simple calender date code:
  73  |             //Select Date Value
  74  | 
  75  |             // await page.getByTestId('profile-date').pressSequentially(data.Date);
  76  |             // await page.getByTestId('profile-date').fill(data.Date);
  77  | 
  78  |             //3 //working code
  79  |             const isoDate = formatToISO(data.Date);
> 80  |             await page.getByTestId('profile-date').fill(isoDate);
      |                                                    ^ Error: locator.fill: Error: Malformed value
  81  | 
  82  | 
  83  |             await page.getByRole("radiogroup", { name: data.Profession }).first().check();
  84  |             await page.getByRole("generic", { name: data.Tools }).check();
  85  |             await page.getByRole("generic", { name: data.Continents }).check();
  86  |             // await page.getByText("Africa").check();
  87  |             // await page.getByText("Australia").check();
  88  |             // await page.getByText("North America").check();
  89  |             // await page.getByText("Antarctica").check();
  90  |             // await page.getByTestId("upload-image");
  91  | 
  92  |             const filePath = path.join(__dirname, 'testdata1.txt');
  93  |             console.log('File path:', filePath);
  94  |             await page.getByTestId("upload-image").setInputFiles([filePath]);
  95  | 
  96  |             await page.getByTestId("profile-submit").click();
  97  | 
  98  |             await page.waitForTimeout(7000);
  99  | 
  100 | 
  101 | 
  102 | 
  103 | 
  104 |             let verify = page.locator("#submission-output");
  105 |             await expect(verify).toContainText(data.FirstName);
  106 |             await expect(verify).toContainText(data.LastName);
  107 |             await expect(verify).toContainText(data.Gender);
  108 |             await expect(verify).toContainText(data.YearsExperience);
  109 |             await expect(verify).toContainText(isoDate);
  110 |             await expect(verify).toContainText(data.Profession);
  111 |             await expect(verify).toContainText(data.Tools);
  112 |             await expect(verify).toContainText(data.Continents);
  113 |         });
  114 |     }
  115 | });
```