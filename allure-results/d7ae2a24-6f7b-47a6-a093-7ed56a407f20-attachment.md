# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_Web_Select_Frames_Iframe\236_Advacne_Select_Frames2.spec.ts >> Basic Web Test - Verify Page Title
- Location: tests\08_Web_Select_Frames_Iframe\236_Advacne_Select_Frames2.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('xpath= //button[@data-testid=\'experience - trigger\']')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Basic Web Test - Verify Page Title', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
  6  | 
  7  |     // await page.locator('//div[@data-testid="dropdown-language"]').click();
  8  | 
  9  |     // await page.getByText("JavaScript").click();
  10 | 
  11 | 
  12 |     // await page.locator("#experience-shell").click();
  13 |     // await page.getByText("Mid-level (4-6 years)", { exact: true }).click();
  14 | 
  15 |     await page.getByRole("button", { name: "Programming language" }).click();;
  16 |     await page.getByRole("option", { name: "TypeScript", exact: true }).click();;
  17 | 
  18 |     await page.waitForTimeout(1000);
  19 | 
  20 |     await page.locator("#framework-trigger").click();
  21 |     await page.getByText("Next.js").click();
  22 |     await page.waitForTimeout(1000);
  23 | 
> 24 |     await page.locator("xpath = //button[@data-testid='experience - trigger']").click();
     |                                                                                 ^ Error: locator.click: Target page, context or browser has been closed
  25 |     await page.getByText("Senior (7+ years)").click();
  26 |     await page.waitForTimeout(2000);
  27 | 
  28 |     // await page.waitForTimeout(5000);
  29 | 
  30 | 
  31 | 
  32 | 
  33 | 
  34 | 
  35 | });
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
```