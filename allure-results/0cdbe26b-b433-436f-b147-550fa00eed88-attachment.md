# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\224_GetRole.spec.ts >> locators are lazy, strict, and auto-wait
- Location: tests\03_Locators_Commands\224_GetRole.spec.ts:3:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://katalon-demo-cura.herokuapp.com/", waiting until "load"

```

# Test source

```ts
  1 | import { test, expect } from "@playwright/test";
  2 | 
  3 | test("locators are lazy, strict, and auto-wait", async ({ page }) => {
> 4 |     await page.goto("https://katalon-demo-cura.herokuapp.com/");
    |                ^ Error: page.goto: Test ended.
  5 | 
  6 |     await page.getByRole("link", { name: 'Make Appointment', disabled: false }).click();
  7 | 
  8 | 
  9 | });
```