// import { chromium, Browser, BrowserContext, Page } from 'playwright';

// async function run() {
//     let browser: Browser = await chromium.launch({ headless: false });
//     console.log("Browser Launched", browser);

//     let context: BrowserContext = await browser.newContext();
//     console.log("Context Created", context);

//     let page: Page = await context.newPage();
//     console.log("Page opened");

//     await page.goto("https://example.com");
//     console.log("Navigated to example.com with title", await page.title());

//     //await expect(page).toHaveTitle('Example Domain');
//     await page.close();
//     await context.close();
//     await browser.close();
// }
// run();

// //auto contect playwright has for individual tests:
// import { test, expect } from '@playwright/test';

// test('Login Test', async ({ page }) => {
//     await page.goto("https://www.amazon.in");
//     await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
//     // await page.fill("#username", "admin");
//     // await page.fill("#password", "pass123");
//     // await page.click("#login-btn");

//     // await expect(page).toHaveURL("/dashboard");
// });

// test('search product', async ({ page }) => {
//     await page.goto("https://www.amazon.in");
//     await page.fill("#twotabsearchtextbox", "Mobiles");
//     await page.click("#nav-search-submit-button");
//     await expect(page).toHaveTitle("Amazon.in : Mobiles");
// });



// create manual test context
//use {browser} fixture instead of {page}

import { test, expect } from '@playwright/test';

test('two user roles', async ({ browser }) => {

    //customise context for all context same as mentioned here:
    const iPhone = {
        viewport: { width: 375, height: 667 },
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
    };


    let admincontext = await browser.newContext(iPhone);
    let viewercontext = await browser.newContext(iPhone);

    let adminpage = await admincontext.newPage();
    let viewerpage = await admincontext.newPage();

    await adminpage.goto("https://github.com/prriyaldesai-prog/Playwright_Fundamentals");
    await viewerpage.goto("https://github.com/PramodDutta/LearningPlaywrightFundamentals/tree/main/tests");

    console.log("Admin page: " + adminpage.url());
    console.log("Viewer page: " + viewerpage.url());

    await adminpage.close();
    await viewerpage.close();
    await admincontext.close();
    await viewercontext.close();
});