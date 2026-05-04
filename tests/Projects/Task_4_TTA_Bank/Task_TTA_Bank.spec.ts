import { test, expect } from '@playwright/test';

test('Signup,Debit & Verify account balance', async ({ page }) => {

    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByText("Sign Up").click();
    await page.waitForTimeout(2000);

    // await page.getByPlaceholder("John Doe").fill("Priyal Desai");
    // await page.getByPlaceholder("you@example.com").fill("prriyaldesai@gmail.com");
    // await page.getByPlaceholder("••••••••").fill("Prriyal1$");

    // await page.getByPlaceholder("John Doe").pressSequentially("Priyal Desai", { delay: 200 });
    // await page.getByPlaceholder("you@example.com").pressSequentially("prriyaldesai@gmail.com", { delay: 200 });
    // await page.getByPlaceholder("••••••••").pressSequentially("Prriyal1$", { delay: 200 });

    await page.getByRole("textbox", { name: 'John Doe' }).pressSequentially("Priyal Desai", { delay: 200 });
    await page.getByRole("textbox", { name: "you@example.com" }).pressSequentially("prriyaldesai@gmail.com", { delay: 200 });
    await page.getByRole("textbox", { name: "••••••••" }).pressSequentially("Prriyal1$", { delay: 200 });


    //await page.waitForTimeout(2000);

    //await page.getByText("Create Account").click();
    await page.getByRole("button", { name: "Create Account" }).click();
    // await page.waitForTimeout(2000);

    await page.getByRole("button", { name: 'Dashboard' }).click();

    let BalanceVerify = page.getByText("Total Balance");
    await expect(BalanceVerify).toContainText("Total Balance");
    let openBalanceVerify = page.locator("xpath=//h3[@class='mt-2 text-3xl font-bold']");
    await expect(openBalanceVerify).toContainText("50,000.00");

    await page.getByRole("button", { name: 'Transfer Funds' }).click();
    await page.waitForTimeout(1000);

    // await page.getByRole("spinbutton", { name: '0.00' }).fill("5000");
    await page.getByPlaceholder("0.00").fill("5000");
    await page.waitForTimeout(1000);

    await page.getByRole("textbox", { name: 'e.g. Rent for October' }).fill("April 2026 Rent");
    await page.waitForTimeout(1000);

    await page.getByRole("button", { name: "Continue" }).click();

    await page.getByRole("button", { name: 'Confirm Transfer' }).click();

    await page.getByRole("button", { name: 'Dashboard' }).click();

    let updatedBalanceVerify = page.getByRole("heading", { name: '$45,000.00' });
    await expect(updatedBalanceVerify).toContainText("45,000.00");

    await page.waitForTimeout(2000);
});