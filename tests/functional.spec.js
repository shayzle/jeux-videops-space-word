import { test, expect } from 'playwright/test';


test("the opening game", async ({ page }) => {
    await page.clock.install();
    await page.goto("http://localhost:3000/");

    const canvas = page.locator("canvas");
    await expect(canvas).toBeVisible();
})


test("the play and quit button", async ({ page }) => {
    await page.clock.install();
    await page.goto("http://localhost:3000/");

    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
    await expect(page.locator('#jogar-btn')).toBeVisible();
    await expect(page.locator('#midia-btn')).toBeVisible();
})


test("starting/playing the game", async ({ page }) => {
    await page.clock.install();
    await page.goto("http://localhost:3000/");

    await page.locator('#jogar-btn').click();
    
    const cronometer = page.locator('.cronometer');
    await expect(cronometer).toBeVisible();

    const lifebar = page.locator('.lifebar');
    await expect(lifebar).toBeVisible();
    await expect(lifebar).not.toBeEmpty();

    const text = page.locator('.text');
    await expect(text).toBeVisible();
    await expect(text).not.toBeEmpty();
});