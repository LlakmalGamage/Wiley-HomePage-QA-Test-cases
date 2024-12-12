import { test, expect } from '@playwright/test';

test('Verify "Browse All Titles" button functionality', async ({ page }) => {
    // Step 1: Navigate to the main page
    await page.goto('https://onlinelibrary.wiley.com/'); // Replace with the actual URL of the site

    // Step 2: Locate the "Browse All Titles" button using its title or class
    const browseButton = page.locator('a[title="Browse publications"]'); // Selector based on the title attribute

    // Step 3: Click the button
    await browseButton.click();

    // Step 4: Wait for navigation to the "Browse All Titles" page
    await page.waitForNavigation();

    // Step 5: Verify the URL of the new page (adjust based on the actual navigation behavior)
    const currentUrl = page.url();
    expect(currentUrl).toContain('/action/showPublications'); // Ensure it navigates to the correct endpoint


});
