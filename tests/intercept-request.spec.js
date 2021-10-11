const {test, expect} = require('@playwright/test');

test('stub test', async({page}) => {
  // Log and continue all network requests
  await page.route('**', route => {
    console.log(route.request().url());
    route.continue();
  });

  // Go to https://playwright.dev/
  await page.goto('https://playwright.dev/');
});
