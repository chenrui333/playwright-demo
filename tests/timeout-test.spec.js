const {test, expect} = require('@playwright/test');

test.use({
  headless: true,
  video: 'retain-on-failure',
  trace: 'retain-on-failure'
});

test('should work', async({page}) => {
  // Go to https://playwright.dev/
  await page.goto('https://playwright.dev/');

  // Click text=Search⌘K
  await page.locator('text=Search⌘K').click();

  // Fill [placeholder="Search docs"]
  await page.locator('[placeholder="Search docs"]').fill('command line tools');

  // Click div[role="button"]:has-text("CancelGuidesCommand line toolsUsage​Command line toolsInstall browsers​Command l")
  await page.locator('div[role="button"]:has-text("CancelGuidesCommand line toolsUsage​Command line toolsInstall browsers​Command l")').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/cli#generate-code');
});
