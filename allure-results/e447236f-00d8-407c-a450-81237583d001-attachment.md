# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\221_Reffer_Command.spec.ts >> set referer for entire context
- Location: tests\03_Locators_Commands\221_Reffer_Command.spec.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://app.vwo.com/#login", waiting until "load"

```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | 
  3  | test("set referer for entire context", async ({ browser }) => {
  4  |     let context = await browser.newContext({
  5  |         extraHTTPHeaders: {
  6  |             "Referer": "https://thetestingacademy.com"
  7  |         }
  8  |     });
  9  | 
  10 |     let page = await context.newPage();
> 11 |     await page.goto("https://app.vwo.com/#login");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  12 |     console.log("Page 1 — partner referer included");
  13 | 
  14 |     await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
  15 |     console.log("Page 2 — partner referer included");
  16 | 
  17 | 
  18 | 
  19 | 
  20 | });
  21 | 
```