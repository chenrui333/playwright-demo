const {test, expect} = require('@playwright/test');

test.use({
  ignoreHTTPSErrors: true
});

test('stub test', async({page}) => {
  // Log and continue all network requests
  await page.route('**', route => {
    console.log(route.request().url());
    route.continue();
  });

  await page.goto('https://httpbin.org/');
});
