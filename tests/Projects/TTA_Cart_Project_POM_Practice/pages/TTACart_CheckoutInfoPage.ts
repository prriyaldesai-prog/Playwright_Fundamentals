import { Page, Locator } from '@playwright/test';

export class TTACart_CheckoutInfoPageclass {

    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.firstName = page.getByTestId("firstName").or(page.getByRole("textbox", { name: "First Name" })).or(page.locator("#first-name"));
        this.lastName = page.getByRole("textbox", { name: "Last Name" }).or(page.getByTestId("lastName")).or(page.locator("#last-name"));
        this.zipCode = page.getByRole("textbox", { name: "Zip/Postal Code" }).or(page.getByTestId("postalCode")).or(page.locator("#postal-code"))
        this.checkoutButton = page.getByRole("button", { name: "Continue" }).or(page.getByTestId("continue")).or(page.locator("#continue-btn"));

    }
    async goto() {
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/checkout-step-one");
    }
    async checkoutInfo() {
        await this.firstName.fill("Priyal");
        await this.lastName.fill("Desai");
        await this.zipCode.fill("382421");
        await this.checkoutButton.click()
    }
}

