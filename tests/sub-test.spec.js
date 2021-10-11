const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://httpbin.org/
  await page.goto('https://httpbin.org/');

  // Log and continue all network requests
  await page.route('**/ip', route => {
    console.log(route.request().url());
    route.fulfill({path: 'tests/data/mock_data.json'});
  });

  // Go to https://httpbin.org/ip
  await page.goto('https://httpbin.org/ip');
  await page.screenshot({path: 'tests/screenshots/ip.png'});
});