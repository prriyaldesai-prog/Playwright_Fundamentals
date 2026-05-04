// 1. Got to - >https://katalon-demo-cura.herokuapp.com/
// 2. Click On the make appointment.  
// 3. Next page, Enter the username and password
// 4. https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL is now changed to this. 
// 5. And verify The page contains heading Make Appointment

import { test, expect } from '@playwright/test';

test('My Login test for Katalon website', async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    let makeAppointmentBtn = page.locator("#btn-make-appointment");
    await makeAppointmentBtn.click();

    let username = await page.locator("#txt-username");
    let password = await page.locator("#txt-password");
    let loginBtn = await page.locator("#btn-login");

    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await loginBtn.click();

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

    let heading = page.locator('.col-sm-12 text-center');
    await expect(heading).toContainText("Make Appointment");

    // let heading = page.locator('.col-sm-12.text-center');
    // await expect(heading).toContainText("Make Appointment");

    await page.close();
    await context.close();

});