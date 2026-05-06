import { test, expect } from '@playwright/test';

test.describe("Test set of different components - group the test cases togather", () => {
    test('QA Profile Test', async ({ page }) => {
        page.goto("https://app.thetestingacademy.com/playwright/tables/practice");

        await page.getByRole('textbox', { name: 'First name' }).fill("Priyal");
        await page.getByTestId('last-name').fill('Desai');
        await page.getByRole('radio', { name: 'Female' }).check();
        await page.waitForTimeout(3000);
        // await page.getByRole('combobox', { name: 'Years of experience' }).click();
        // let list = await page.locator('div.field > select > option');
        // let listCount = await list.count();
        // console.log(listCount);
        // let selectedValue = list.last().selectText();
        //await page.locator('#years-experience').selectOption("7");
        await page.locator('#years-experience').selectOption({ label: '7' });
        await page.getByRole('radio', { name: 'Automation Tester' }).check();
        await page.getByRole('checkbox', { name: 'UFT' }).check();
        await page.getByRole('checkbox', { name: 'Selenium Webdriver' }).check();
        await page.getByRole('checkbox', { name: 'Asia' }).check();
        await page.getByRole('checkbox', { name: 'South America' }).check();
        await page.getByRole('checkbox', { name: 'North America' }).check();
        await page.getByRole('tab', { name: 'Switch Commands' }).click();

    });
});