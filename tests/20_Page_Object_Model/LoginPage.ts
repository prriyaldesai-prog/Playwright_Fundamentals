// import { Page, Locator, expect } from '@playwright/test';

// export class LoginPage {

//     // Page Locators
//     readonly page: Page;
//     readonly emailInput: Locator;
//     readonly passwordInput: Locator;
//     readonly loginButton: Locator;

//     constructor(page: Page) {
//         this.page = page;
//         this.emailInput = page.getByRole("textbox", { name: "Email Address" });
//         this.passwordInput = page.getByRole('textbox', { name: 'Password' });
//         this.loginButton = page
//             .getByRole('button', { name: 'Login to Practice Account' })
//             .or(page.getByTestId('login-button'))
//             .or(page.getByText('Login to Practice Account'));

//     }


//     // Page Actions

//     async goto() {
//         await this.page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
//     }

//     async login(username: string, password: string) {
//         await this.emailInput.fill(username);
//         await this.passwordInput.fill(password);
//         await this.loginButton.click();
//     }

// }

//practice above page:
import { Page, expect, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly buttonClick: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole("textbox", { name: "Email Address" });
        this.passwordInput = page.getByRole("textbox", { name: "Password" });
        this.buttonClick = page.getByTestId("login-button");
    }

    async goto() {
        await this.page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    }

    async login(email: string, password: string) {
        await this.usernameInput.fill(email);
        await this.passwordInput.fill(password);
        await this.buttonClick.click();
    }
}