# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\222_Automation.vwo.com.spec.ts >> locators are lazy, strict, and auto-wait
- Location: tests\03_Locators_Commands\222_Automation.vwo.com.spec.ts:3:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#login-username')

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("locators are lazy, strict, and auto-wait", async ({ page }) => {
  4  |     await page.goto("https://app.vwo.com/#login");
  5  | 
  6  |     // <input 
  7  |     // type="email" 
  8  |     // class="text-input W(100%)" 
  9  |     // name="username" 
  10 |     // vwo-html-translate-attr="placeholder" 
  11 |     // vwo-html-translate-placeholder="login:enterEmailID" 
  12 |     // id="login-username" 
  13 |     // data-qa="hocewoqisi" 
  14 |     // placeholder="Enter email ID"
  15 |     // >
  16 | 
  17 |     // Rule 2 - Css Seecltor 
  18 |     // id -> #
  19 |     // class -> .
  20 | 
  21 |     // Create locators — nothing happens yet (lazy)
  22 |     let usernameField = page.locator("#login-username");
  23 |     let passwordField = page.locator("#login-password");
  24 |     let loginButton = page.locator("#js-login-btn");
  25 | 
  26 |     // NOW Playwright finds the element and acts (auto-wait)
  27 | 
> 28 |     await usernameField.fill("admin");
     |                         ^ Error: locator.fill: Target page, context or browser has been closed
  29 |     await passwordField.fill("pass123");
  30 |     await loginButton.click();
  31 | 
  32 |     console.log("All actions completed ✅");
  33 | 
  34 |     let error_message = page.locator('#js-notification-box-msg');
  35 |     // error_message.getByText()
  36 |     await expect(error_message).toContainText("Your email, password, IP address or location did not match");
  37 | 
  38 | 
  39 | 
  40 | 
  41 | });
```