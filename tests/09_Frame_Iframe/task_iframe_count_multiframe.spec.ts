import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Basic single iframe Test - Verify Page Title', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    const frames: FrameLocator = page.frameLocator("[name = 'main']");
    let displaytext = await frames.locator('h2').innerText();
    console.log(displaytext);

    const frameCount: Locator[] = await page.locator('//frame').all();
    console.log('Total number of frames:', frameCount.length);

    for (const frameAttribute of frameCount) {
        //find name and src for all frames
        console.log(await frameAttribute.getAttribute('name') + ': ' + await frameAttribute.getAttribute('src'));
    }


    let sideFrame = await page.frameLocator("[name='side']");
    await sideFrame.getByTestId('side-link-registration').click();

    await page.waitForTimeout(5000);

    let footerFrame = await page.frameLocator("[name='footer']");
    let footerText = await footerFrame.getByTestId('footer-build').innerText();
    console.log(footerText);
    await page.waitForTimeout(5000);
});
