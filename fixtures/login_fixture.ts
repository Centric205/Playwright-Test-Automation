import { test as base} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import {BASE_URL, USERNAME, PASSWORD} from "../utils/envConfig";

type Fixtures = {
     loggedInPage: import('@playwright/test').Page;
};

export const test = base.extend<Fixtures>({
    loggedInPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToPage(BASE_URL);
        await loginPage.login(USERNAME, PASSWORD);
        await use(page);
    }
});