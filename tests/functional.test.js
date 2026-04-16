import { test, expect } from '@playwright/test';

test("the opening game", async ({ page }) => {
    await page.goto("/");
    const canvas = page.locator("canvas");
    await expect(canvas).toBeVisible();
})

