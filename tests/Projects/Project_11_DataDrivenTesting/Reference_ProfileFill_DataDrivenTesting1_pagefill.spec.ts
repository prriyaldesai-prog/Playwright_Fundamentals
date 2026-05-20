import { test, expect } from '@playwright/test';
import path from 'path';

const URL = "https://app.thetestingacademy.com/playwright/tables/practice.html";

test.describe('DDT', async () => {

    test.beforeAll('Start Execution', () => {
        console.log('Scenario Execution started - server started');

    });

    test.beforeEach('Navigate to login page', async ({ page }) => {

        page.goto(URL);
    });


    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status !== testInfo.expectedStatus) {
            await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
        }
    });

    test.afterAll('Execution stop', async () => {
        console.log('After all - tear down');

    });

    test('DDL profile fill', async ({ page }) => {
        await page.getByTestId("first-name").fill("Priyal");
        await page.getByRole("textbox", { name: "Last name" }).fill("Desai");
        await page.getByText("Female", { exact: true }).check();
        await page.getByTestId("years-experience").selectOption({ index: 7 });

        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;
        await page.getByTestId("profile-date").fill(formattedDate);

        await page.getByText("Automation Tester", { exact: true }).check();
        await page.getByText("Selenium Webdriver").first().check();
        await page.getByText("Asia").check();
        await page.getByText("Africa").check();
        await page.getByText("Australia").check();
        await page.getByText("North America").check();
        await page.getByText("Antarctica").check();
        await page.getByTestId("upload-image");

        const filePath = path.join(__dirname, 'testdata1.txt');
        console.log('File path:', filePath);
        await page.getByTestId("upload-image").setInputFiles([filePath]);

        await page.getByTestId("profile-submit").click();

        await page.waitForTimeout(7000);

        let verify = page.locator("#submission-output");
        await expect(verify).toContainText(`{
  "firstName": "Priyal",
            "lastName": "Desai",
            "gender": "Female",
            "yearsExperience": "7",
            "date": "2026-05-20",
            "profession": "Automation Tester",
            "tools": "Selenium Webdriver",
            "continents": [
            "Asia",
            "Africa",
            "Australia",
            "North America",
            "Antarctica"
        ],
            "upload": {}
}`);
    });
});

//Reference can also be checked another way: https://github.com/UpenderReddyThudi/LearningPlaywrightFundamentals/blob/main/tests/Projects/Project10_DDT_QAProfileForm_CSV.spec.ts
