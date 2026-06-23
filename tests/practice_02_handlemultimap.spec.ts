//multiple elements - resolved into 3 elements, strict mode violation - use .first(), .nth(),exact: true, etc

import { test, expect } from '@playwright/test';

test('handle multiple locators', async ({ page }) => {
    await page.goto('');

    //.first(), .last(), nth(),etc
    //1
    //await page.getByRole('button', { name: 'Edit' }).first().click();
    // await page.getByRole('button', { name: 'Edit' }).last().click();
    //await page.getByRole('button', { name: 'Edit' }).nth(1).click();

    //if incorrect element search - find till (default)30 sec, later gives timeout exception/error: timeout
    //await page.getByRole('button', { name: 'Edit' }).nth(5).click();

    //filters - find entire row and then find the element inside that row:
    //2
    //await page.getByRole('row', { name: 'Jatin' }).getByRole('button', { name: 'Edit' }).click();

    //or
    //3
    await page.locator('tr').filter({ hasText: 'Mike' }).getByRole('button', { name: 'Edit' }).click();

});