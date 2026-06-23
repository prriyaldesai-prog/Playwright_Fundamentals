import { test, expect } from '@playwright/test';

test('Page automate', async ({ page }) => {
    await page.goto('');

    const headingdata = page.getByRole('heading', { name: 'Playwright Locator Practice App', exact: true });
    console.log(await headingdata.textContent());
    await expect(headingdata).toHaveText('Playwright Locator Practice App');


    await page.getByPlaceholder('Enter username').fill('admin');

    //presssequentially will append to existing and type in sequence
    //await page.getByPlaceholder('Enter username').pressSequentially('1234');
    await page.getByPlaceholder('Enter password').fill('admin123');

    //while using dropdowns use locators:
    await page.locator('#role').selectOption('QA Engineer');

    await page.getByRole('button', { name: 'Login' }).click(); //52ms
    //or
    //await page.locator('//button[@id="loginBtn"]').click(); //62ms


});


//multiple elements - resolved into 3 elements, strict mode violation - use .first(), .nth(),exact: true, etc
//timeout use .toBeVisible,.toBeEnabled, etc
//