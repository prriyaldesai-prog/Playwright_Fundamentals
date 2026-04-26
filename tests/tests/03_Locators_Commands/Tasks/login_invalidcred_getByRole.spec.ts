import { test, expect } from '@playwright/test';

test('Login with invalid credentials using getByRole', async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login");

    let username = page.getByRole("textbox", { name: "email" });
    await username.fill("admin");
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'password' }).fill("pass123");
    await page.waitForTimeout(2000);

    let Btn = page.getByRole('button', { name: 'submit' });
    await Btn.click();
    await page.waitForTimeout(2000);
});

