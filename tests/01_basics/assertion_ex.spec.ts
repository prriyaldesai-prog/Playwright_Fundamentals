import { test, expect } from '@playwright/test';

test('Verify the title and image', async ({ page }) => {

    await page.goto("https://www.amazon.in/");
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    const img = page.locator('#nav-logo-img');
    await expect(img).toBeVisible();

})