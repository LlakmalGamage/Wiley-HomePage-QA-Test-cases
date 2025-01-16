import {test,expect} from '@playwright/test'


test('varify"browse all tiles"button functionality', async ({page})=>{

 await page.goto('https://onlinelibrary.wiley.com/');

 const browseButton1= page.locator('div a[title="Browse books"]');
    await expect(browseButton1).toBeVisible();
    await browseButton1.click();
    await page.waitForNavigation();
    const currentUrl=page.url();
    expect(currentUrl).toContain('/action/showPublications?PubType=book');


})