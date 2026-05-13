import { test, expect } from "@playwright/test";
import { url } from "node:inspector";

const URL = 'https://www.flipkart.com/search';

test.describe('SVG', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });

    test('svg icon price fetch product', async ({ page }) => {

        await page.locator('input[name="q"]').fill('macmini');
        await page.waitForTimeout(3000);
        await page.locator('svg').first().click();
        await page.waitForTimeout(3000);
        await page.getByText('Price -- Low to High').click();
        await page.waitForTimeout(3000);

        let productName = await page.getByText('Apple Mac Mini (MXNF2HN/A) Core i3 (8 GB RAM/Intel UHD ...').innerText();
        console.log(`ProductName : ${productName}`);
        //or by class
        let pn = await page.locator('.pIpigb').first().innerText();
        console.log(`pn : ${pn}`);
        let productPrice = await page.getByText('₹72,990').innerText();
        console.log(`ProductPrice : ${productPrice}`);

    });

});
