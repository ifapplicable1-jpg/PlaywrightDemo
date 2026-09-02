//@ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page.getByRole('link', { name: 'Amazon.in' })).toBeVisible();
  await expect(page.getByLabel('Amazon.in', { exact: true })).toContainText('.in');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('shoes');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('link', { name: 'Apply the filter Campus to' }).click();
  await page.locator('#a-autoid-12-announce').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
});