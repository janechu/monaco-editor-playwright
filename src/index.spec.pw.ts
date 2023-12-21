import { expect, test } from "@playwright/test";

test.describe("monaco editor", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });
    test("should be ready", async ({ page }) => {
        await page.waitForSelector(".monaco-editor");
        const monacoEditor = await page.locator(".monaco-editor");

        await expect(await monacoEditor.count()).toEqual(1);
    });
});