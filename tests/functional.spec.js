import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//     await page.goto('https://playwright.dev/');

//     await expect(page).toHaveTitle(/Playwright/);
// });


test("the opening game", async ({ page }) => {
    await page.goto("/");
    const canvas = page.locator("canvas");
    await expect(canvas).toBeVisible();
    await expect(button).toHaveURL();
})

