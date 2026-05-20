# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project_11_DataDrivenTesting\Task_DataDrivenTesting1_pagefilldetailsprofile.spec.ts >> DDT >> DDL profile fill
- Location: tests\Projects\Project_11_DataDrivenTesting\Task_DataDrivenTesting1_pagefilldetailsprofile.spec.ts:29:9

# Error details

```
Error: locator.check: Error: strict mode violation: getByText('Female') resolved to 2 elements:
    1) <label class="control-chip">…</label> aka getByText('Female', { exact: true })
    2) <span class="tta-mark-chip is-test">…</span> aka getByText('data-testid=gender-male /')

Call log:
  - waiting for getByText('Female')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const URL = "https://app.thetestingacademy.com/playwright/tables/practice.html";
  4  | 
  5  | test.describe('DDT', async () => {
  6  | 
  7  |     test.beforeAll('Start Execution', () => {
  8  |         console.log('Scenario Execution started - server started');
  9  | 
  10 |     });
  11 | 
  12 |     test.beforeEach('Navigate to login page', async ({ page }) => {
  13 | 
  14 |         page.goto(URL);
  15 |     });
  16 | 
  17 | 
  18 |     test.afterEach(async ({ page }, testInfo) => {
  19 |         if (testInfo.status !== testInfo.expectedStatus) {
  20 |             await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
  21 |         }
  22 |     });
  23 | 
  24 |     test.afterAll('Execution stop', async () => {
  25 |         console.log('After all - tear down');
  26 | 
  27 |     });
  28 | 
  29 |     test('DDL profile fill', async ({ page }) => {
  30 |         await page.getByTestId("first-name").fill("Priyal");
  31 |         await page.getByRole("textbox", { name: "Last name" }).fill("Desai");
> 32 |         await page.getByText("Female").check();
     |                                        ^ Error: locator.check: Error: strict mode violation: getByText('Female') resolved to 2 elements:
  33 |         await page.getByTestId("years-experience").selectOption({ index: 7 });
  34 |         await page.waitForTimeout(3000);
  35 |     });
  36 | });
```