import {test,expect} from '@playwright/test'

test('varify"advanced search" button functionality', async ({page}) => {


    await page.goto('https://onlinelibrary.wiley.com/');
    const advancedSearchButton=page.locator('div a.advanced-search-link');
    await expect(advancedSearchButton).toBeVisible();
    await advancedSearchButton.click();
    await page.waitForNavigation();
    const currentUrl=page.url();
    expect(currentUrl).toContain('/search/advanced');
})