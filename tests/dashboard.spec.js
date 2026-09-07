import { test, expect } from '@playwright/test';

test('dashboard loads map and primary views', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/TSL National Resilience Twin/);
  await expect(page.locator('.state')).toHaveCount(37);
  await expect(page.locator('#inspector-title')).toHaveText('Nigeria');
  await page.locator('.state').first().click();
  await expect(page.locator('#inspector-title')).not.toHaveText('Nigeria');
  await page.getByRole('button',{name:'Mission threads'}).click();
  await expect(page.locator('.mission-card')).toHaveCount(6);
  await page.locator('.mission-card').first().click();
  await expect(page.locator('#mission-detail')).toHaveClass(/open/);
});

test('offer tabs, graph, sources and theme are interactive', async ({ page }) => {
  await page.goto('/#offerings');
  await expect(page.locator('.offer-item')).toHaveCount(6);
  await page.getByRole('tab',{name:/Technology solutions/}).click();
  await expect(page.locator('.offer-item')).toHaveCount(8);
  await page.getByRole('button',{name:'Knowledge graph'}).click();
  await expect(page.locator('.node')).toHaveCount(12);
  await page.locator('.node').nth(2).click();
  await expect(page.locator('#graph-inspector')).toContainText('KONGSBERG');
  await page.getByRole('button',{name:'Sources'}).click();
  await expect(page.locator('.source-card')).toHaveCount(12);
  await page.locator('#source-search').fill('Exail');
  await expect(page.locator('.source-card')).toHaveCount(2);
  const before=await page.locator('html').getAttribute('data-theme');
  await page.locator('#theme').click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme',before);
});

test('mobile layout exposes bottom navigation without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({width:390,height:844});
  await page.goto('/');
  await expect(page.locator('.mobile-bottom')).toBeVisible();
  const widths=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth}));
  expect(widths.scroll).toBeLessThanOrEqual(widths.client+1);
  await page.locator('.mobile-bottom [data-view="missions"]').click();
  await expect(page.locator('#view-missions')).toHaveClass(/active/);
});
