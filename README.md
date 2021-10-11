# playwright-demo <!-- omit in toc -->

- [Run](#run)
  - [Run each test](#run-each-test)
  - [Codegen tests](#codegen-tests)
  - [Emulate device and timezone](#emulate-device-and-timezone)
- [Debug test](#debug-test)
- [Test examples](#test-examples)
- [Credit](#credit)

# Run

```bash
$ npm install
$ npx playwright test tests/timeout-test.spec.js --timeout 3000
```

## Run each test

```bash
$ npx playwright test tests/intercept-request.spec.js
$ npx playwright test tests/timeout-test.spec.js
```

## Codegen tests

```bash
$ npx playwright codegen https://playwright.dev
$ npx playwright codegen --ignore-https-errors https://playwright.dev
```

## Emulate device and timezone

```bash
# Emulate iPhone 11.
$ npx playwright-cli --device="iPhone 11" open wikipedia.org

# Emulate timezone, language & location
# Once page opens, click the "my location" button to see geolocation in action
$ npx playwright-cli --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" open maps.google.com
```

# Debug test

With specifying `PWDEBUG=1`, it would pop up the debugging window so that we can put breakpoint for testing.

```bash
$ PWDEBUG=1 npx playwrite test tests/timeout-test.spec.js
```

# Test examples

```
$ npx playwright test --timeout 3000

Running 1 test using 1 worker

  ✘  test.spec.js:3:1 › should work (3s)


  1) test.spec.js:3:1 › should work ================================================================

    Timeout of 3000ms exceeded.

    Pending operations:
      - page.click at test.spec.js:14:14

    page.click: Target closed
    =========================== logs ===========================
    waiting for selector "text=Evaluation Arguments"
    ============================================================

      12 |
      13 |   // Click text=Evaluation Argument
    > 14 |   await page.click('text=Evaluation Arguments');
         |              ^
      15 |   expect(page.url()).toBe('https://playwright.dev/docs/core-concepts#evaluation-argument');
      16 |
      17 |   // Click text=Command line tools

        at /Users/ruichen/open-source/playwrite-demo/test.spec.js:14:14
        at WorkerRunner._runTestWithBeforeHooks (/Users/ruichen/open-source/playwrite-demo/node_modules/@playwright/test/lib/test/workerRunner.js:450:7)


  1 failed
    test.spec.js:3:1 › should work =================================================================
```


# Credit

[Debugging Timeouts in Playwright Test v1.12.3](https://www.youtube.com/watch?v=JRuMGb3JE5k)
[Test-Automation Playwright Tool Now Records and Replays Interaction Scripts, Captures Test Videos](https://www.infoq.com/news/2020/10/playwright-records-scripts-tests/)
