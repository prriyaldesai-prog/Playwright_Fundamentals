import { test, expect } from '@playwright/test';

test('handle multiple locators', async ({ page }) => {
    await page.goto('');

    const editArray = await page.getByRole('button', { name: 'Edit' }).all();
    console.log(editArray.length);

    for (let editButton of editArray) {
        console.log(await editButton.textContent());

    }
});