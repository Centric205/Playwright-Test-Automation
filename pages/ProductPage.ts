import {ProductPageLocators} from "../locators/productPageLocators";
import {Page} from "@playwright/test";
import {BASE_URL} from "../utils/envConfig";

export class ProductPage{

    constructor(private page: Page) {

    }

    async navigateToProductPage(){
        await this.page.goto(BASE_URL + "inventory.html");
    }

    async addBackpackToCart(){
        await this.page.click(ProductPageLocators.backpack);
    }

    async addBikeToCart(){
        await this.page.click(ProductPageLocators.bikelight);
    }

    async addTshirtToCart(){
        await this.page.click(ProductPageLocators.tshirt);
    }

    async addFleeceJacketToCart(){
        await this.page.click(ProductPageLocators.fleeceJacket);
    }

    async addOnesieToCart(){
        await this.page.click(ProductPageLocators.onesie);
    }

    async addTshirtRedToCart(){
        await this.page.click(ProductPageLocators.tshirtRed);
    }

    async validateAllProductsAreDisplayed(){
        const names = await this.page.locator(ProductPageLocators.productInventory).allTextContents();

        if (names.length === 0)
            throw new Error("No products found");

        console.log("Prodduct names are:", names);
        return names;
    }

}