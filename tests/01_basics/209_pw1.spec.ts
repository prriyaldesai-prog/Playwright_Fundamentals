import { test, expect } from '@playwright/test';

test('Verify the title of the app.vwo.com', async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - VWO");
});

// import { test, expect } from 'playwright/test';

// test('Verify the title for https://playwright.dev', async ({ page }) => {

//     await page.goto("https://playwright.dev");
//     await expect(page).toHaveTitle(/Playwright/);

// });

