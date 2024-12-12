import { test, expect } from '@playwright/test';

test('Verify search functionality returns relevant results', async ({ page }) => {
  // Step 1: Navigate to the homepage
  await page.goto('https://onlinelibrary.wiley.com/'); 

  const searchBar = page.locator('input[placeholder="Search publications, articles, keywords, etc."]');
  await searchBar.fill('health'); //  keyword for search

  // Step 3: Locate and click the magnifying glass icon
  const searchIcon = page.locator('button[title="Search"], button[aria-label="Search"]'); // locating the button
  await searchIcon.click();

  // ***  there is a cloudflare botdetector after you click on search ****

  // await page.waitForSelector('.search-result doSearch'); 
  //  // Step 5: Extract the text content of all highlighted results
  //  const results = await page.locator('div.item__body h2.meta__title.meta__title__margin').allTextContents(); // fetch all the text
  //  console.log(results);
 
  //  // Step 5: Validate results
  //  expect(results.length).toBeGreaterThan(0); // Ensure at least one result is found
  //  expect(results.some(result => result.toLowerCase().includes('health'))).toBeTruthy(); // Ensure relevance
});
