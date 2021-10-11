
# Run

npx playwright test --timeout 3000

# Debug timeout issue

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
