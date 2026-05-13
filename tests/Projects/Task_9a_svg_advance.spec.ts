import { test, expect } from '@playwright/test';

test('Advance SVG Project', async ({ page }) => {
    // Navigate to the SVG project page
    await page.goto('https://simplemaps.com/svg/country/in');

    //display all states
    const states = await page.locator('pre > code > span').allInnerTexts();
    for (const state of states) {
        console.log(`State Name : ${state}`);

    }

    //display all classnames
    const states1 = await page.locator('pre > code > span').all();
    for (const state of states1) {
        const s1 = await state.getAttribute('class');
        console.log(`Class Name : ${s1}`);

    }

    //click on UP state
    await page.getByText('"INUP"').click();
    await page.waitForTimeout(3000);

    // // Example: How to correctly get an attribute by class name
    // const svgPaths = await page.locator('svg path').all();
    // for (const path of svgPaths) {
    //     // You must specify the attribute name inside the brackets
    //     const name = await path.getAttribute('name'); 
    //     if (name) {
    //         console.log(`Map State: ${name}`);
    //     }
    // }
});