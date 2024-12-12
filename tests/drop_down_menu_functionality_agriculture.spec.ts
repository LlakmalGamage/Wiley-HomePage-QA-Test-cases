import { test, expect } from '@playwright/test';
test('Verify dropdown menu expands and retrieves content', async ({ page }) => {
    // Step 1: Navigate to the page
    await page.goto('https://onlinelibrary.wiley.com/'); //  URL
  
    // Step 2: Locate the dropdown element
    const dropdown = page.locator('a.accordion-tabbed__control:has-text("Agriculture, Aquaculture & Food Science")'); // selector 
  
    // Step 3: Click the dropdown to expand it
    await dropdown.click();
  
    // Step 4: Verify the dropdown expands and content is displayed
    const dropdownContent = page.locator('div#b25bbdef-9c40-4084-b6c0-89231e6c42670.accordion-tabbed__content'); // selector for expanded content
    await expect(dropdownContent).toBeVisible(); // Ensure the content is visible
  
    // Step 5: Check for specific text/content inside the dropdown
    const specificContent = dropdownContent.locator('text=Agriculture');
    await expect(specificContent).toBeVisible();
    const specificContent1 = dropdownContent.locator('text=Aquaculture, Fisheries & Fish Science');
    await expect(specificContent1).toBeVisible();
    const specificContent2 = dropdownContent.locator('text=Food Science & Technology');
    await expect(specificContent2).toBeVisible();

    //Step 6: Click the dropdown to shrink it
    await dropdown.click();
  });