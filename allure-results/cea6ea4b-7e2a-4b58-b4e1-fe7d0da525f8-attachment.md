# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\Tasks\TASK_My_Login_withcontext.spec.ts >> My Login test for Katalon website
- Location: tests\03_Locators_Commands\Tasks\TASK_My_Login_withcontext.spec.ts:9:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#txt-password')

```

# Test source

```ts
  1  | // 1. Got to - >https://katalon-demo-cura.herokuapp.com/
  2  | // 2. Click On the make appointment.  
  3  | // 3. Next page, Enter the username and password
  4  | // 4. https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL is now changed to this. 
  5  | // 5. And verify The page contains heading Make Appointment
  6  | 
  7  | import { test, expect } from '@playwright/test';
  8  | 
  9  | test('My Login test for Katalon website', async ({ browser }) => {
  10 |     let context = await browser.newContext();
  11 |     let page = await context.newPage();
  12 | 
  13 |     await page.goto("https://katalon-demo-cura.herokuapp.com/");
  14 | 
  15 |     let makeAppointmentBtn = page.locator("#btn-make-appointment");
  16 |     await makeAppointmentBtn.click();
  17 | 
  18 |     let username = await page.locator("#txt-username");
  19 |     let password = await page.locator("#txt-password");
  20 |     let loginBtn = await page.locator("#btn-login");
  21 | 
  22 |     await username.fill("John Doe");
> 23 |     await password.fill("ThisIsNotAPassword");
     |                    ^ Error: locator.fill: Target page, context or browser has been closed
  24 |     await loginBtn.click();
  25 | 
  26 |     await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
  27 | 
  28 |     let heading = page.locator('.col-sm-12 text-center');
  29 |     await expect(heading).toContainText("Make Appointment");
  30 | 
  31 |     // let heading = page.locator('.col-sm-12.text-center');
  32 |     // await expect(heading).toContainText("Make Appointment");
  33 | 
  34 |     await page.close();
  35 |     await context.close();
  36 | 
  37 | });
```