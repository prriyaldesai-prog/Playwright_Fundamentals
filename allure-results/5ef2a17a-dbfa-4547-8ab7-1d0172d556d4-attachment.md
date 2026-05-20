# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\219_Commands.spec.ts >> goto with different waitUntil options
- Location: tests\03_Locators_Commands\219_Commands.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://app.com/page1
Call log:
  - navigating to "https://app.com/page1", waiting until "commit"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This page isn’t working" [level=1] [ref=e7]
    - paragraph [ref=e8]: If the problem continues, contact the site owner.
    - generic [ref=e9]: HTTP ERROR 406
  - button "Reload" [ref=e12] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("goto with different waitUntil options", async ({ page }) => {
  4  | 
> 5  |     await page.goto("https://app.com/page1", { waitUntil: "commit" });
     |                ^ Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://app.com/page1
  6  |     console.log("commit: server responded");
  7  | 
  8  |     // Wait for HTML to be parsed
  9  |     await page.goto("https://app.com/page2", { waitUntil: "domcontentloaded" });
  10 |     console.log("domcontentloaded: HTML parsed");
  11 | 
  12 |     // DEFAULT — wait for everything (images, CSS, scripts)
  13 |     await page.goto("https://app.com/page3", { waitUntil: "load" });
  14 |     console.log("load: all resources loaded");
  15 | 
  16 |     // SLOWEST — wait for all network activity to stop
  17 |     await page.goto("https://app.com/page4", { waitUntil: "networkidle" });
  18 |     console.log("networkidle: no requests for 500ms");
  19 | 
  20 | });
```