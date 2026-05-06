# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Task_5_QA_ProfileFormPractice\Task_QAProfileForm.spec.ts >> QA Profile Test
- Location: tests\Projects\Task_5_QA_ProfileFormPractice\Task_QAProfileForm.spec.ts:3:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('QA Profile Test', async ({ page }) => {
  4  |     page.goto("https://app.thetestingacademy.com/playwright/tables/practice");
  5  | 
  6  |     await page.getByRole('textbox', { name: 'First name' }).fill("Priyal");
> 7  |     page.waitForTimeout(3000);
     |          ^ Error: page.waitForTimeout: Test ended.
  8  |     await page.getByTestId('last-name').fill('Desai');
  9  |     page.waitForTimeout(3000);
  10 |     await page.getByRole('radio', { name: 'Female' }).check();
  11 |     page.waitForTimeout(3000);
  12 | 
  13 | });
```