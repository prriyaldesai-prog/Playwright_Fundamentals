# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\226_PressSequentially.spec.ts >> locators are lazy, strict, and auto-wait
- Location: tests\03_Locators_Commands\226_PressSequentially.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://awesomeqa.com/practice.html", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("locators are lazy, strict, and auto-wait", async ({ page }) => {
> 4  |     await page.goto("https://awesomeqa.com/practice.html");
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  5  |     await page.locator('[name="firstname"]').pressSequentially("the testing academy", { delay: 200 });
  6  | 
  7  |     await page.waitForTimeout(5000);
  8  | 
  9  |     await page.goto("https://app.vwo.com/login");
  10 |     await page.goBack();
  11 |     await page.waitForTimeout(5000);
  12 | 
  13 | 
  14 | 
  15 | });
```