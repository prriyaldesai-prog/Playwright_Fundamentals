import { Page, Locator } from '@playwright/test';

export class TTACart_InventoryPage {

    readonly page: Page;
    readonly addToCart1: Locator;
    readonly addToCart2: Locator;
    readonly shoppingCart: Locator;

    readonly checkout: Locator;

    constructor(page: Page) {
        this.page = page;
        // Target "Add to cart" button within the specific product article
        this.addToCart1 = page.locator('article').filter({ hasText: 'T-Shirt (Red)' }).getByRole('button', { name: 'Add to cart' });
        this.addToCart2 = page.locator('article').filter({ hasText: 'Fleece Jacket' }).getByRole('button', { name: 'Add to cart' });
        // Shopping cart is a link, not an SVG
        this.shoppingCart = page.getByRole('link', { name: 'Shopping cart' });

        //checkout
        this.checkout = page.getByRole("link", { name: "Checkout" }).or(page.getByTestId("checkout")).or(page.getByText("Checkout"));

    }
    async goto() {
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/inventory");
    }
    async addToCart() {
        await this.addToCart1.click();
        await this.addToCart2.click();
        await this.shoppingCart.click();
    }
    async checkoutPage() {
        await this.checkout.click();

    }
}

