//upload example1
// import { test, expect } from "@playwright/test";


// const URL = 'https://awesomeqa.com/practice.html';

// test.describe('File Upload 1', () => {
//     test.beforeEach(async ({ page }) => {
//         await page.goto(URL);

//     });

//     test('File upload 1', async ({ page }) => {

//         await page.waitForTimeout(3000);
//         // Fix: Use forward slashes or double backslashes for Windows paths
//         await page.locator('#photo').setInputFiles(['tests/Projects/Task_Upload_File/dummyfile.jpg']);
//         await page.waitForTimeout(3000);
//     });
// });




//upload example2
// import { test, expect } from "@playwright/test";

// const URL = 'https://the-internet.herokuapp.com/upload';

// test.describe('File Upload 2', () => {
//     test.beforeEach(async ({ page }) => {
//         await page.goto(URL);

//     });

//     test('File upload 2', async ({ page }) => {

//         await page.waitForTimeout(3000);
// use setInputFile method to upload file
//         await page.locator('#file-upload').setInputFiles(['tests/Projects/Task_Upload_File/dummyfile.jpg']);
//         await page.locator('#file-submit').click();
//         await page.waitForTimeout(3000);

//         const verify = page.locator('#uploaded-files');
//         await expect(verify).toHaveText('dummyfile.jpg');

//         await page.waitForTimeout(3000);
//     });
// });





