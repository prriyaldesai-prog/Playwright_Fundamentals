# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\Tasks\TASK_verify_incorrectdomaininEmail.spec.ts >> Verify incorrect domain Error message
- Location: tests\03_Locators_Commands\Tasks\TASK_verify_incorrectdomaininEmail.spec.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Verify incorrect domain Error message', async ({ page }) => {
  4  | 
> 5  |     await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  6  |     //await page.getByRole("textbox", { name: "email" }).fill("prriyaldesai@gmail.com");
  7  |     await page.getByRole("textbox", { name: "email" }).pressSequentially("prriyaldesai@gmail.com", { delay: 200 });
  8  | 
  9  | 
  10 |     //await page.waitForTimeout(2000);
  11 | 
  12 |     //let errorMsg = page.getByRole('alert', { name: "gmail.com doesn't look like a business domain. Please use your business email." });
  13 | 
  14 |     await page.getByRole("checkbox", { name: "I agree to VWO's Privacy Policy & Terms" }).check();
  15 |     await page.waitForTimeout(2000);
  16 | 
  17 |     await page.getByRole("button", { name: "Create a Free Trial Account" }).click();
  18 |     await page.waitForTimeout(2000);
  19 | 
  20 |     let errorMsg = page.getByText("gmail.com doesn't look like a business domain. Please use your business email.")
  21 |     await expect(errorMsg).toHaveText("gmail.com doesn't look like a business domain. Please use your business email.");
  22 | 
  23 | });
```