import { test, expect } from '@playwright/test';

test.describe('search check table', () => {
    test("Search and check from the table", async ({ page }) => {

        await page.goto("https://app.thetestingacademy.com/playwright/webtable");
        await page.locator("#employee-search").fill("Kabir.Khan");
        await page.waitForTimeout(2000);
        await page.locator("tr:has(td:text('Kabir.Khan'))")
            .locator("td")
            .nth(0)
            .click();
        await page.waitForTimeout(2000);

        let verify = page.locator("xpath=//div[text()='Kabir.Khan']");
        await expect(verify).toHaveText("Kabir.Khan");

    });
});