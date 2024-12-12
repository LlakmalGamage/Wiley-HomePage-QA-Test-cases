import { test, expect } from '@playwright/test';
test('Verify dropdown menu expands and retrieves content', async ({ page }) => {
    // Step 1: Navigate to the page
    await page.goto('https://onlinelibrary.wiley.com/'); //  URL
  
    // Step 2: Locate the dropdown element
    const dropdown = page.locator('a.accordion-tabbed__control:has-text("Art & Applied")'); //  selector 
  
    // Step 3: Click the dropdown to expand it
    await dropdown.click();
  
    // Step 4: Verify the dropdown expands and content is displayed
    const dropdownContent = page.locator('div#b25bbdef-9c40-4084-b6c0-89231e6c42672.accordion-tabbed__content'); //  selector for expanded content
    await expect(dropdownContent).toBeVisible(); // Ensure the content is visible
  
    // Step 5: Check for specific text/content inside the dropdown
    const specificContent = dropdownContent.locator('text=Art & Photography');
    await expect(specificContent).toBeVisible();
    const specificContent1 = dropdownContent.locator('text=Clothing & Fashion');
    await expect(specificContent1).toBeVisible();
    const specificContent2 = dropdownContent.locator('text=Design & Graphic Design');
    await expect(specificContent2).toBeVisible();
    const specificContent3 = dropdownContent.locator('text=Museum & Heritage Studies');
    await expect(specificContent3).toBeVisible();
    const specificContent4 = dropdownContent.locator('text=Performing Arts & Music');
    await expect(specificContent4).toBeVisible();
    //Step 6: Click the dropdown to shrink it
    await dropdown.click();
  });