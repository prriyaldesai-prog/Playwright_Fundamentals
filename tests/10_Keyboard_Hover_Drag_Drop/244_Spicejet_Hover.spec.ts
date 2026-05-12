import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Keybaord', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');

    await page.getByText('Add-ons', { exact: true }).hover();
    await page.getByText('FlyEarly', { exact: true }).click();


    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');



    await page.getByText('Add-ons', { exact: true }).hover();
    const addons = await page
        .locator('[data-testid="nav-add-ons"] .submenu .submenu-item')
        .allInnerTexts();
    console.log(addons);

    await page.waitForTimeout(5000);


    // await page.goto('https://www.spicejet.com/');
    // //use {exact: true} in hover and use first 
    // await page.getByText('Add-ons', { exact: true }).hover();
    // await page.getByText('SpiceMax', { exact: true }).first().click();
    // //await page.getByText('SpiceAssurance', { exact: true }).click();

    // await page.waitForTimeout(5000);



});
