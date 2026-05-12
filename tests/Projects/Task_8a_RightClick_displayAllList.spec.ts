import { test, expect } from '@playwright/test';

test.describe('RightClick_DisplayList', () => {
    test.beforeEach(async ({ page }) => {
        const url = 'https://app.thetestingacademy.com/playwright/widgets/context-menu';
        await page.goto(url);
    });
    test('Right Click-section1', async ({ page }) => {

        await page.locator('span.context-menu-one').first().click({ button: 'right' });

        await page.waitForTimeout(3000);
        await page.getByText('Edit', { exact: true }).click();

        //right click button list dislpay - take string[]
        console.log("list1 :");
        const list1: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
        console.log(list1);
    });
    test('Right Click-section2', async ({ page }) => {
        await page.getByTestId('ctx-target-2').click({ button: 'right' });
        await page.getByText('Edit', { exact: true }).click();

        console.log("list2 :");
        const list2: string[] = await page.locator('.context-menu-list .context-menu-item').allInnerTexts();
        console.log(list2);
    });
    test('Right Click-section3', async ({ page }) => {
        await page.getByTestId('ctx-target-3').click({ button: 'right' });
        await page.getByText('Edit', { exact: true }).click();

        console.log("list3 :");
        const list3: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
        console.log(list3);
    });

});