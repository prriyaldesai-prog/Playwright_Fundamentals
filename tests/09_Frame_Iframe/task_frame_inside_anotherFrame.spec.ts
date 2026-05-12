import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('Basic single iframe Test - Verify Page Title', async ({ page }) => {

    await page.goto("https://selectorshub.com/iframe-scenario/");

    const frameCount: Locator[] = await page.locator('//iframe').all();
    console.log("Total number of frames: ", frameCount.length);

    for (const frameAttribute of frameCount) {
        //find name and src for all frames
        console.log(await frameAttribute.getAttribute('name') + ': ' + await frameAttribute.getAttribute('src'));
    }
    await page.waitForTimeout(2000);
    let frame1: FrameLocator = page.frameLocator("#pact1").first();
    await frame1.locator('#inp_val').fill("Akshay Kumar");
    await page.waitForTimeout(5000);

    let frame2: FrameLocator = frame1.frameLocator("#pact2").first();
    await frame2.locator('#jex').fill("Hardik Desai");
    await page.waitForTimeout(5000);


    let frame3: FrameLocator = frame2.frameLocator("#pact3");
    frame3.locator("#glaf").fill("Japan");
    await page.waitForTimeout(5000);

    const headerText = await page.getByText("Free Tools").innerText();
    console.log("Header text: ", headerText);
    await page.waitForTimeout(5000);

});
