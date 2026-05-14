import { test, expect, Locator } from '@playwright/test';

const URL = 'https://selectorshub.com/xpath-practice-page/'; // replace with target page

test.describe('Shadow handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {


        const card1 = page.locator("[data-id='6fef204']");
        await card1.getByTitle('user name field').fill('QAtest');

        // Fix: Use page for pizza (it is not inside card1 on SelectorsHub)
        await page.locator('#pizza').fill('BakeYourOwnHealthyPizza');
        await page.waitForTimeout(2000);

        //closed shadow dom - directly cannot be automated

        // const card2 = page.locator('#concepts');
        // await card2.locator('#training').fill('Exploring');

        //Handle with keyboard,mouse for closed shadow dom
        await page.keyboard.press('Tab');
        await page.keyboard.type('Concept Test - Hidden shadow Dom');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('PSW@123456')

        await page.getByText('Click to practice iframe inside shadow dom scenario').click();

        // const text = await page.evaluate(() => document.querySelector(‘my-element’).shadowRoot.querySelector(‘input’).value);

        await page.waitForTimeout(2000);




    });
});

























// //practice
// import { test, expect, Locator } from '@playwright/test';

// const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom'; // replace with target page

// test.describe('Shadow handling', () => {

//     test.beforeEach(async ({ page }) => {
//         await page.goto(URL);
//     });

//     test('locate Shadow DOM and assert visible', async ({ page }) => {


//         const card = page.getByTestId('card-account-card');
//         await card.getByTestId('card-account-email').fill('QAtest@gmail.com');
//         await card.getByTestId('card-account-password').fill('VDesai');
//         await card.getByTestId('card-account-submit').click();
//         let verify = page.getByTestId('card-account-status');
//         await expect(verify).toContainText('QAtest@gmail.com');

//         const cart = page.getByTestId('counter-cart');
//         await cart.getByTestId('counter-cart-dec').click();
//         await cart.getByTestId('counter-cart-inc').click();
//         let verifycart = page.getByText('3');
//         await expect(verifycart).toContainText('3');






//         await page.waitForTimeout(2000);



//     });

// });