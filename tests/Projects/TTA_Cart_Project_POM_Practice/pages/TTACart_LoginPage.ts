import { Page, Locator } from '@playwright/test';

export class TTACartLoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly buttonClick: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole("textbox", { name: "Username" });
        this.passwordInput = page.getByRole("textbox", { name: "Password" });
        this.buttonClick = page.getByRole("button", { name: "Login" });
    }
    async goto() {
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");

    }
    async Login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.buttonClick.click();
    }
}

