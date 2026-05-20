import { test, expect } from '@playwright/test';
import path from 'path';
import { readCSV } from './csvReader_useSame';

const URL = "https://app.thetestingacademy.com/playwright/tables/practice.html";

// Helper to normalize various CSV date formats (DD/MM/YYYY, DD-MM-YYYY, DDMMYYYY) to YYYY-MM-DD
function formatToISO(dateStr: string): string {
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
        return dateStr;
    }
    const matchSlashOrDash = dateStr.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);
    if (matchSlashOrDash) {
        const [, day, month, year] = matchSlashOrDash;
        return `${year}-${month}-${day}`;
    }
    const matchDigits = dateStr.match(/^(\d{2})(\d{2})(\d{4})$/);
    if (matchDigits) {
        const [, day, month, year] = matchDigits;
        return `${year}-${month}-${day}`;
    }
    return dateStr;
}

test.describe('DDT', () => {

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



    // code for DDT csv file:
    const profileData = readCSV(path.join(__dirname, "profile-data.csv"))
    //const profileData = readCSV('profile-data.csv');


    for (const data of profileData) {
        test(`DDL profile register fill - ${data.FirstName + data.LastName}`, async ({ page }) => {
            await page.getByTestId("first-name").fill(data.FirstName);
            await page.getByRole("textbox", { name: "Last name" }).fill(data.LastName);
            await page.getByText(data.Gender).first().check();
            // await page.getByTestId("years-experience").selectOption({ index: 7 });
            await page.getByTestId("years-experience").selectOption(data.YearsExperience);

            //1          //date calender code:
            // const today = new Date();
            // const yyyy = today.getFullYear();
            // const mm = String(today.getMonth() + 1).padStart(2, '0');
            // const dd = String(today.getDate()).padStart(2, '0');
            // const formattedDate = `${yyyy}-${mm}-${dd}`;
            // await page.getByTestId("profile-date").fill(formattedDate);

            //2       //simple calender date code:
            //Select Date Value

            // await page.getByTestId('profile-date').pressSequentially(data.Date);
            // await page.getByTestId('profile-date').fill(data.Date);

            //3 //working code
            const isoDate = formatToISO(data.Date);
            await page.getByTestId('profile-date').fill(isoDate);


            await page.getByText(data.Profession, { exact: true }).check();
            await page.getByText(data.Tools).first().check();
            await page.getByText(data.Continents).first().check();
            // await page.getByText("Africa").check();
            // await page.getByText("Australia").check();
            // await page.getByText("North America").check();
            // await page.getByText("Antarctica").check();
            // await page.getByTestId("upload-image");

            const filePath = path.join(__dirname, 'testdata1.txt');
            console.log('File path:', filePath);
            await page.getByTestId("upload-image").setInputFiles([filePath]);

            await page.getByTestId("profile-submit").click();

            await page.waitForTimeout(7000);





            let verify = page.locator("#submission-output");
            await expect(verify).toContainText(data.FirstName);
            await expect(verify).toContainText(data.LastName);
            await expect(verify).toContainText(data.Gender);
            await expect(verify).toContainText(data.YearsExperience);
            await expect(verify).toContainText(isoDate);
            await expect(verify).toContainText(data.Profession);
            await expect(verify).toContainText(data.Tools);
            await expect(verify).toContainText(data.Continents);
        });
    }
});