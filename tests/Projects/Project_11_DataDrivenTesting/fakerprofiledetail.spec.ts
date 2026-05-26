import { test, expect } from '@playwright/test';
import path from 'path';
import { faker } from '@faker-js/faker';

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

test.describe('Faker profile fill', () => {
    test.beforeAll('Start Execution', () => {
        console.log('Scenario Execution started - server started');
    });

    test.beforeEach('Navigate to page', async ({ page }) => {
        await page.goto(URL);
    });

    test('Fill profile with faker generated data', async ({ page }) => {
        // Generate fake user profile data
        const data = {
            FirstName: faker.person.firstName(),
            LastName: faker.person.lastName(),
            Gender: faker.helpers.arrayElement(['Male', 'Female']),
            YearsExperience: (Math.floor(Math.random() * 10) + 1).toString(),
            // Faker date between 1990 and 2025, formatted as DD-MM-YYYY to test the formatter
            Date: faker.date.between({ from: '1990-01-01', to: new Date() }).toISOString().split('T')[0], // ISO YYYY-MM-DD
            Profession: faker.helpers.arrayElement(['Automation Tester', 'Manual Tester', 'Developer']),
            Tools: faker.helpers.arrayElement(['Selenium Webdriver', 'UFT', 'Protractor']),
            Continents: faker.helpers.arrayElement(['Asia', 'Europe', 'North America', 'South America', 'Australia', 'Africa'])
        };
        const isoDate = data.Date;
        await page.getByTestId('first-name').fill(data.FirstName);
        await page.getByLabel('Last name').fill(data.LastName);
        await page.getByText(data.Gender).first().check();
        
await page.getByTestId('years-experience').waitFor({ state: 'visible' });
await page.getByTestId('years-experience').selectOption({ label: data.YearsExperience });
        await page.getByText(data.Profession, { exact: true }).first().check();
        await page.getByText(data.Tools).first().check();
        await page.getByText(data.Continents).first().check();
        await page.getByTestId('profile-date').waitFor({ state: 'visible' });
        await page.getByTestId('profile-date').fill(isoDate);
        const filePath = path.join(__dirname, 'testdata1.txt');
        await page.getByTestId('upload-image').waitFor({ state: 'visible' });
        await page.getByTestId('upload-image').setInputFiles([filePath]);

        await page.getByTestId("profile-submit").click();
        await page.waitForTimeout(7000);

        const verify = page.locator("#submission-output");
        await expect(verify).toContainText(data.FirstName);
        await expect(verify).toContainText(data.LastName);
        await expect(verify).toContainText(data.Gender);
        await expect(verify).toContainText(data.YearsExperience);
        await expect(verify).toContainText(isoDate);
        await expect(verify).toContainText(data.Profession);
        await expect(verify).toContainText(data.Tools);
        await expect(verify).toContainText(data.Continents);
    });
});
