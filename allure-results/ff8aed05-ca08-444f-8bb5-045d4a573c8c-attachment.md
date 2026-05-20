# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\Tasks\TASK_My_Login_Test.spec.ts >> My first Login test
- Location: tests\03_Locators_Commands\Tasks\TASK_My_Login_Test.spec.ts:9:5

# Error details

```
Error: expect.toHaveTitle: Target page, context or browser has been closed
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
  9  | test('My first Login test', async ({ page }) => {
  10 | 
  11 |     await page.goto("https://katalon-demo-cura.herokuapp.com/");
  12 | 
  13 |     let makeAppointmentBtn = page.locator("#btn-make-appointment");
  14 |     await makeAppointmentBtn.click();
  15 | 
> 16 |     await expect(page).toHaveTitle("CURA Healthcare Service");
     |                        ^ Error: expect.toHaveTitle: Target page, context or browser has been closed
  17 | 
  18 |     let username = page.locator("#txt-username");
  19 |     let password = page.locator("#txt-password");
  20 | 
  21 |     await username.fill("John Doe");
  22 |     await password.fill("ThisIsNotAPassword");
  23 | 
  24 |     let loginBtn = page.locator("#btn-login");
  25 |     await loginBtn.click();
  26 | 
  27 |     await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
  28 |     await expect(page.locator("h2")).toHaveText("Make Appointment");
  29 | });
```