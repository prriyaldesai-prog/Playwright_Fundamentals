// Login POM test – using the proper LoginPage class
import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { faker } from '@faker-js/faker';

test.describe('Login POM', () => {
    test('Login using positive credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        // You can use static credentials or faker generated ones
        await loginPage.login(
            faker.internet.email(),
            faker.internet.password()
        );
        // Optional short wait for any post‑login animation
        await page.waitForTimeout(2000);
        await expect(page).toHaveTitle(
            'Multiple Element Filter Login — The Testing Academy'
        );
    });
});