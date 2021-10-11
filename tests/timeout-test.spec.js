const {test, expect} = require('@playwright/test');

test.use({
  headless: true,
  video: 'retain-on-failure',
  trace: 'retain-on-failure'
});

test('should work', async({page}) => {
  // Go to https://playwright.dev/
  await page.goto('https://playwright.dev/');

  // Click [placehoder="Search"]
  await page.click('[placeholder="Search"]');

  // Fill [placeholder="Search"]
  await page.fill('[placeholder="Search"]', 'evaluate');

  // Click text=Evaluation Argument
  await page.click('text=Evaluation Argument');
  expect(page.url()).toBe('https://playwright.dev/docs/core-concepts#evaluation-argument');

  // Click text=Command line tools
  await page.click('text=Command Line Tool');
  expect(page.url()).toBe('https://playwright.dev/docs/cli');
});
