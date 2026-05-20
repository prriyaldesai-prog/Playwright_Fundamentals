# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\220_GotoCommands.spec.ts >> navigate with custom referer
- Location: tests\03_Locators_Commands\220_GotoCommands.spec.ts:15:5

# Error details

```
Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://app.com/landing
Call log:
  - navigating to "https://app.com/landing", waiting until "load"

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
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("simple goto — uses load by default", async ({ page }) => {
  4  |     // No waitUntil specified — defaults to "load"
  5  |     await page.goto("https://example.com");
  6  | 
  7  |     let title = await page.title();
  8  |     console.log("Title:", title);
  9  | 
  10 |     await expect(page).toHaveURL("https://example.com/");
  11 |     console.log("URL verified ✅");
  12 | });
  13 | 
  14 | 
  15 | test("navigate with custom referer", async ({ page }) => {
  16 |     // Tell the server "user came from Google"
> 17 |     await page.goto("https://app.com/landing", {
     |                ^ Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://app.com/landing
  18 |         referer: "https://google.com/search?q=testing+academy"
  19 |     });
  20 | 
  21 |     console.log("Page loaded with Google as referer");
  22 |     console.log("URL:", page.url());
  23 | });
```