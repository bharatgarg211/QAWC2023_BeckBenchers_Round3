import { test, expect } from '@playwright/test';

test('Movie Checked', async ({ page }) => {
    await page.goto('https://www.primevideo.com/');
    await page.getByRole('link', { name: 'Home' }).hover();
  await page.getByRole('link', { name: 'Movies' }).click();
  // Get all movie links in the first carousel
const movieLinks = await page.getByTestId("image-link").all();

// Loop through each link and check for response status
for (const link of movieLinks.toString()) {
  await page.goto(link);
   if (await page.waitForResponse((response) =>response.status()!==200)) {
    console.error(`Link ${link} is broken. Status code: ${status}`);
  }}
  });