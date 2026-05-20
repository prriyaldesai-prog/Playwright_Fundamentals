# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Task_6_Search and select_Table\Task_search_Table_select.spec.ts >> Select 
- Location: tests\Projects\Task_6_Search and select_Table\Task_search_Table_select.spec.ts:3:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('Select from table', async ({ page }) => {
  4 |     page.goto('https://app.thetestingacademy.com/playwright/webtable');
  5 | 
  6 |     await page.locator("tr:has(td:text('Aarav.Sharma'))").click();
> 7 |     await page.waitForTimeout(5000);
    |                ^ Error: page.waitForTimeout: Test ended.
  8 | 
  9 | });
```