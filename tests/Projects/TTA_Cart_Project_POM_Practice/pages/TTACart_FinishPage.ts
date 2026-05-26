import { Page, Locator } from "@playwright/test";

export class TTACart_FinishPageclass {

    readonly page: Page;
    readonly finishButton: Locator;
    //readonly backToProducts: Locator;


    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.getByTestId("finish").or(page.getByRole("button", { name: "Finish" })).or(page.locator("#finish-btn"));

    }

    async goto() {
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/checkout-step-two");
    }

    async finishOrder() {
        await this.finishButton.click();
    }

}