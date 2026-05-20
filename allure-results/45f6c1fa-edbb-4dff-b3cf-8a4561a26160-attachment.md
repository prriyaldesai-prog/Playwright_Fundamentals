# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_Web_Select_Frames_Iframe\iframe_count_multiframe.spec.ts >> Basic single iframe Test - Verify Page Title
- Location: tests\08_Web_Select_Frames_Iframe\iframe_count_multiframe.spec.ts:3:5

# Error details

```
Error: locator.innerText: Test ended.
Call log:
  - waiting for locator('[name = \'main\']').contentFrame().locator('#h2')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Basic single iframe Test - Verify Page Title', async ({ page }) => {
  4  | 
  5  |     await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
  6  | 
  7  |     const frames = page.frameLocator("[name = 'main']");
> 8  |     let displaytext = frames.locator('#h2').innerText();
     |                                             ^ Error: locator.innerText: Test ended.
  9  |     console.log(displaytext);
  10 | });
  11 | 
```