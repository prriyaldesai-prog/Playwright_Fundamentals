import { test, expect } from '@playwright/test';

test('Basic single iframe Test - Verify Page Title', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    const mainframe = page.frameLocator("#frame-one");
    await page.waitForTimeout(5000);
    await mainframe.locator("#RESULT_TextField-1").fill("Honda City");
    await page.waitForTimeout(3000);

    await mainframe.locator("#RESULT_TextField-2").fill("PriyalDesai");
    await page.waitForTimeout(2000);

    await mainframe.locator("#RESULT_TextField-3").fill("GJ-18-GJ-12345");
    await page.waitForTimeout(2000);

    await mainframe.locator("#RESULT_RadioButton-1").selectOption("Sedan");
    await page.waitForTimeout(2000);

    await mainframe.locator("#RESULT_TextField-4").fill("2026");
    await page.waitForTimeout(2000);

    await mainframe.locator("#RESULT_TextArea-1").fill("Honda City is a sunroof car and very nice to drive in city and highway");
    await page.waitForTimeout(2000);

    await mainframe.getByText("Submit registration").click();
    await page.waitForTimeout(5000);

    const registrationResult = mainframe.locator("#vehicle-output");

    await expect(registrationResult).toContainText(`{
    "vehicleName": "Honda City",
    "ownerName": "PriyalDesai",
    "regNumber": "GJ-18-GJ-12345",
    "vehicleType": "Sedan",
    "year": "2026",
    "notes": "Honda City is a sunroof car and very nice to drive in city and highway"
}`);

});