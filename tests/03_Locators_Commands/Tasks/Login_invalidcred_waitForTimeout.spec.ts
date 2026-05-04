import { test, expect } from '@playwright/test';

test('Login with invalid credentials', async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login");

    let username = page.locator("#login-username");
    await username.fill("admin");
    await page.waitForTimeout(2000);

    let password = page.locator("#login-password");
    await password.fill("pass123");
    await page.waitForTimeout(2000);

    let Btn = page.locator("#js-login-btn");
    await Btn.click();
    await page.waitForTimeout(2000);

    let errorMsg = page.locator("#js-notification-box-msg");
    await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");

});