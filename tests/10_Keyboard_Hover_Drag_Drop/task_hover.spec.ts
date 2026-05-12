import { test, expect } from '@playwright/test';
import { parse } from 'node:path';
import { json } from 'node:stream/consumers';

test('Keybaord', async ({ page }) => {

    //clear cookies first
    await page.context().clearCookies();
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    await page.locator('[data-testid="nav-add-ons"]', { exact: true }).hover();
    await page.getByRole('menuitem', { name: '📶 Wi-Fi' }).click();

    await page.waitForTimeout(3000);

    let verifyJSON = page.locator('#output');
    let textContent = await verifyJSON.textContent() || '{}';
    let output = JSON.parse(textContent);

    // Verify the property inside the parsed JSON object
    expect(output.clicked).toContain("Wi-Fi");

    await page.waitForTimeout(5000);

});