import {test} from "../fixtures/login_fixture";
import {ProductPage} from "../pages/ProductPage";
import {expect} from "@playwright/test";


test("Add products to cart", async ({loggedInPage}) =>{
    const productPage = new ProductPage(loggedInPage);
    await productPage.navigateToProductPage();
    await productPage.addBackpackToCart();
    await productPage.addBikeToCart();
    await productPage.addTshirtToCart();
    await productPage.addFleeceJacketToCart();
    await productPage.addOnesieToCart();
    await productPage.addTshirtRedToCart();
    expect(await loggedInPage.locator(".shopping_cart_badge").textContent()).toEqual("6");
});
test("Validate the number", async ({ loggedInPage }) => {
    const productPage = new ProductPage(loggedInPage);
    await productPage.navigateToProductPage();
    const productNames = await productPage.validateAllProductsAreDisplayed();

    expect(productNames.length).toEqual(6);
});
