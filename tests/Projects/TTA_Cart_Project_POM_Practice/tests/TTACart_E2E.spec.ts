import { test, expect } from '@playwright/test';
import { TTACartLoginPage } from '../pages/TTACart_LoginPage';
import { TTACart_InventoryPage } from '../pages/TTACart_InventoryPage';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { TTACart_CheckoutInfoPageclass } from '../pages/TTACart_CheckoutInfoPage';
import { TTACart_FinishPageclass } from '../pages/TTACart_FinishPage';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

function getRequiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}
const ttacartUsername = getRequiredEnv('TTACART_USERNAME');
const ttacartPassword = getRequiredEnv('TTACART_PASSWORD');

test.describe('TTA Cart Login Validation', () => {
    test('Login with valid credns', async ({ page }) => {
        const TTACartLogin = new TTACartLoginPage(page);
        await TTACartLogin.goto();
        await TTACartLogin.Login(ttacartUsername, ttacartPassword);
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/inventory');
        const ttaCartInventory = new TTACart_InventoryPage(page);
        await ttaCartInventory.addToCart();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/cart');
        await ttaCartInventory.checkoutPage();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-one');
        const ttaCart_CheckoutInfoPage = new TTACart_CheckoutInfoPageclass(page);
        await ttaCart_CheckoutInfoPage.checkoutInfo();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-two');
        const ttaCart_FinishPage1 = new TTACart_FinishPageclass(page);
        await ttaCart_FinishPage1.finishOrder();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-complete');
        await expect(page).toHaveTitle("TTACart - Checkout: Complete!");
    });

});