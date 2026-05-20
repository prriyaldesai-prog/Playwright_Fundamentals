# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\223_Xpath.spec.ts >> locators are lazy, strict, and auto-wait
- Location: tests\03_Locators_Commands\223_Xpath.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#js-login-btn')
    - locator resolved to <button type="submit" id="js-login-btn" data-qa="sibequkica" onclick="login.login(event)" class="btn btn--primary btn--inverted W(100%) Mb(24px) Mb(0):lc">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("locators are lazy, strict, and auto-wait", async ({ page }) => {
  4  |     await page.goto("https://app.vwo.com/#login");
  5  | 
  6  | 
  7  | 
  8  |     // <input 
  9  |     // type="email" 
  10 |     // class="text-input W(100%)" 
  11 |     // name="username" 
  12 |     // vwo-html-translate-attr="placeholder" 
  13 |     // vwo-html-translate-placeholder="login:enterEmailID" 
  14 |     // id="login-username" 
  15 |     // data-qa="hocewoqisi" 
  16 |     // placeholder="Enter email ID"
  17 |     // >
  18 | 
  19 |     // Rule 2 - Css Seecltor 
  20 |     // id -> #
  21 |     // class -> .
  22 | 
  23 |     // Create locators — nothing happens yet (lazy)
  24 |     // let usernameField = page.locator("#login-username");
  25 | 
  26 |     let usernameField = page.locator("xpath=//input[@data-qa='hocewoqisi']")
  27 | 
  28 | 
  29 | 
  30 |     let passwordField = page.locator("#login-password");
  31 |     let loginButton = page.locator("#js-login-btn");
  32 | 
  33 |     // NOW Playwright finds the element and acts (auto-wait)
  34 | 
  35 |     await usernameField.fill("admin");
  36 |     await passwordField.fill("pass123");
> 37 |     await loginButton.click();
     |                       ^ Error: locator.click: Target page, context or browser has been closed
  38 | 
  39 |     console.log("All actions completed ✅");
  40 | 
  41 |     let error_message = page.locator('#js-notification-box-msg');
  42 |     // error_message.getByText()
  43 |     await expect(error_message).toContainText("Your email, password, IP address or location did not match");
  44 | 
  45 | 
  46 | 
  47 | 
  48 | });
```