// 1. Got to - >https://katalon-demo-cura.herokuapp.com/
// 2. Click On the make appointment.  
// 3. Next page, Enter the username and password
// 4. https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL is now changed to this. 
// 5. And verify The page contains heading Make Appointment

import { test, expect } from '@playwright/test';

test('My first Login test', async ({ page }) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    let makeAppointmentBtn = page.locator("#btn-make-appointment");
    await makeAppointmentBtn.click();

    await expect(page).toHaveTitle("CURA Healthcare Service");

    let username = page.locator("#txt-username");
    let password = page.locator("#txt-password");

    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");

    let loginBtn = page.locator("#btn-login");
    await loginBtn.click();

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    await expect(page.locator("h2")).toHaveText("Make Appointment");
});