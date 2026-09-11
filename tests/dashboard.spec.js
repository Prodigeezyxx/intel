import { test, expect } from '@playwright/test';

test.describe("TSL National Resilience Twin", () => {
  test.beforeEach(async ({ page }) => {
    page.on("console", msg => { if (msg.type() === "error") console.log("PAGE ERROR:", msg.text()) });
    page.on("pageerror", err => console.log("PAGE EXCEPTION:", err.message));
  });

  test("dashboard loads map and primary views", { timeout: 90000 }, async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page).toHaveTitle(/TSL National Resilience Twin/);
    await expect(page.locator(".state")).toHaveCount(37, { timeout: 15000 });
    await expect(page.locator("#inspector-title")).toHaveText("Nigeria");

    await page.locator(".state").first().click();
    await expect(page.locator("#inspector-title")).not.toHaveText("Nigeria");

    // Mission threads view
    await page.getByRole("button", { name: "Mission threads" }).click();
    await expect(page.locator(".mission-card")).toHaveCount(6);
    await page.locator(".mission-card").first().click();
    await expect(page.locator("#mission-detail")).toHaveClass(/open/);
    // Solution cards should appear inside the mission detail
    await expect(page.locator("#mission-detail .solution-card")).toHaveCount(6, { timeout: 15000 });

    // Solutions catalogue view: inspect a full card
    await page.locator('[aria-label="Primary navigation"]').getByRole('button', { name: 'Solutions catalogue' }).click();
    await page.locator('[data-solution="sol-01"]').first().click();
    await expect(page.locator(".solution-detail h2")).toContainText("hotlines");
    await expect(page.locator(".solution-detail")).toContainText("Problem this solves");
    await expect(page.locator(".solution-detail")).toContainText("Measurable value");
  });

  test("solutions catalogue filters by complexity", { timeout: 60000 }, async ({ page }) => {
    await page.goto("/#solutions", { waitUntil: "networkidle" });
    await expect(page.locator(".solution-card")).toHaveCount(22, { timeout: 15000 });
    await page.getByRole("button", { name: "Complexity 1" }).click();
    await expect(page.locator(".solution-card")).toHaveCount(2);
    await page.getByRole("button", { name: "Complexity 5" }).click();
    await expect(page.locator(".solution-card")).toHaveCount(6);
    await page.getByRole("button", { name: "All complexity" }).click();
    await expect(page.locator(".solution-card")).toHaveCount(22);
  });

  test("offer tabs, graph, sources and theme are interactive", { timeout: 90000 }, async ({ page }) => {
    await page.goto("/#offerings", { waitUntil: "networkidle" });
    await expect(page.locator(".offer-item")).toHaveCount(2);
    await page.getByRole("tab", { name: /Foundational data/ }).click();
    await expect(page.locator(".offer-item")).toHaveCount(4);
    await page.getByRole("tab", { name: /Pilot services/ }).click();
    await expect(page.locator(".offer-item")).toHaveCount(4);
    await page.getByRole("tab", { name: /Sovereign platforms/ }).click();
    await expect(page.locator(".offer-item")).toHaveCount(6);
    await page.getByRole("tab", { name: /National-scale coordination/ }).click();
    await expect(page.locator(".offer-item")).toHaveCount(6);

    await page.getByRole("button", { name: "Knowledge graph" }).click();
    await expect(page.locator(".node")).toHaveCount(34, { timeout: 15000 });
    await page.locator(".node").nth(4).click();
    await expect(page.locator("#graph-inspector")).toContainText("TSL + Partners");

    await page.getByRole("button", { name: "Sources" }).click();
    await expect(page.locator(".source-card")).toHaveCount(17);
    await page.locator("#source-search").fill("TSL + Partners");
    await expect(page.locator(".source-card")).toHaveCount(3);

    const before = await page.locator("html").getAttribute("data-theme");
    await page.locator("#theme").click();
    await expect(page.locator("html")).not.toHaveAttribute("data-theme", before);
  });

  test("mobile layout exposes bottom navigation without overflow", { timeout: 60000 }, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.locator(".mobile-bottom")).toBeVisible();
    const widths = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      client: document.documentElement.clientWidth
    }));
    expect(widths.scroll).toBeLessThanOrEqual(widths.client + 1);
    await page.locator('.mobile-bottom [data-view="solutions"]').click();
    await expect(page.locator("#view-solutions")).toHaveClass(/active/);
  });

  test("executive brief opens, copies, and closes cleanly", { timeout: 60000 }, async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.locator("#brief").click();
    await expect(page.locator("#brief-dialog")).toBeVisible();
    await expect(page.locator("#brief-text")).toContainText("PROPOSITION");
    await page.locator("#copy-brief").click();
    await page.waitForTimeout(500);  // clipboard may fail in headless; just verify dialog still open
    await expect(page.locator("#brief-dialog")).toBeVisible();
    await page.locator("#close-brief").click();
    await expect(page.locator("#brief-dialog")).not.toBeVisible();
  });
});
