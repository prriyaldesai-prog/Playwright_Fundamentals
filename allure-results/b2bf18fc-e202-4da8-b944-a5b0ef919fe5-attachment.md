# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Task_6_Search_and_select_Table\Task_search_Table_select.spec.ts >> Select from table
- Location: tests\Projects\Task_6_Search_and_select_Table\Task_search_Table_select.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at https://app.thetestingacademy.com/playwright/webtable
Call log:
  - navigating to "https://app.thetestingacademy.com/playwright/webtable", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "Your connection was interrupted" [level=1] [ref=e7]
    - paragraph [ref=e8]: A network change was detected.
    - generic [ref=e9]: ERR_NETWORK_CHANGED
  - button "Reload" [ref=e12] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Select from table', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://app.thetestingacademy.com/playwright/webtable');
     |                ^ Error: page.goto: net::ERR_NETWORK_CHANGED at https://app.thetestingacademy.com/playwright/webtable
  6  | 
  7  |     await page.locator("#clear-selection").click();
  8  |     await page.locator("#employee-search").fill("kabir");
  9  |     await page.locator("//td[text()='Kabir.Khan']/preceding-sibling::td/input[@type='checkbox']").check();
  10 | 
  11 | 
  12 |     await page.waitForTimeout(4000);
  13 | 
  14 | 
  15 | });
```