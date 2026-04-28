import { test, expect } from '@playwright/test';

test('Verify incorrect domain Error message', async ({ page }) => {

    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
    //await page.getByRole("textbox", { name: "email" }).fill("prriyaldesai@gmail.com");
    await page.getByRole("textbox", { name: "email" }).pressSequentially("prriyaldesai@gmail.com", { delay: 200 });


    //await page.waitForTimeout(2000);

    //let errorMsg = page.getByRole('alert', { name: "gmail.com doesn't look like a business domain. Please use your business email." });

    let errorMsg = page.getByText("gmail.com doesn't look like a business domain. Please use your business email.")
    await expect(errorMsg).toHaveText("gmail.com doesn't look like a business domain. Please use your business email.");



});