# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\227_Cookie.spec.ts >> locators are lazy, strict, and auto-wait
- Location: tests\03_Locators_Commands\227_Cookie.spec.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://app.vwo.com/#login", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("locators are lazy, strict, and auto-wait", async ({ page, context }) => {
  4  |     await page.goto("https://awesomeqa.com/practice.html");
  5  |     await page.locator('[name="firstname"]').pressSequentially("the testing academy", { delay: 200 });
  6  | 
> 7  |     await page.goto("https://app.vwo.com/#login");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  8  |     // Read ALL cookies
  9  |     let cookies = await context.cookies();
  10 | 
  11 |     await context.addCookies([
  12 |         {
  13 |             name: "vwo",
  14 |             value: "eyJ1c2VySWQiOiIxNzExNTQzIiwiYWNjb3VudElkIjoiMTIyNzAwNyIsInRva2VuIjoiME9qdGNmNGJtNGhsV2R4UGFyVzQwdXJpeEpYMXdDdlUzd3VWb1dESGZoZWw3UmxSZ1pIbjVjZ2I0VldkelNQRTYyYi1wLThrVktOSzJTeWl4UVRMNVEiLCJ2YWxpZGl0eSI6IjcyMDAiLCJ2ZXJzaW9uIjoxLCJoYXNoIjoiYTI0MWI3ZDZkN2FhZjk0MDQxMDZmYzE3MzA1MGE4OTRiNzRlM2ZkZCJ9",
  15 |             domain: "app.vwo.com",
  16 |             path: "/"
  17 |         },
  18 |         {
  19 |             name: "user_role",
  20 |             value: "admin",
  21 |             domain: "app.com",
  22 |             path: "/"
  23 |         }
  24 |     ]);
  25 | 
  26 |     // await context.clearCookies();
  27 | 
  28 |     console.log("Total cookies:", cookies.length);
  29 | 
  30 |     cookies.forEach(function (cookie) {
  31 |         console.log("  " + cookie.name + " = " + cookie.value);
  32 |     });
  33 | 
  34 | 
  35 |     await page.waitForTimeout(5000);
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | 
  42 | 
  43 | });
```