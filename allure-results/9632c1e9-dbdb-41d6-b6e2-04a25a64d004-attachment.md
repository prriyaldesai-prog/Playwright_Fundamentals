# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_Web_Select_Frames_Iframe\236_Advacne_Select_Frames2.spec.ts >> Basic Web Test - Verify Page Title
- Location: tests\08_Web_Select_Frames_Iframe\236_Advacne_Select_Frames2.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('data-testid=\'dropdown-save\'')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary "Practice navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "T The Testing Academy" [ref=e5] [cursor=pointer]:
        - /url: ../index.html
        - generic [ref=e6]: T
        - strong [ref=e8]: The Testing Academy
      - button "Toggle sidebar" [ref=e9] [cursor=pointer]:
        - img [ref=e10]
    - generic [ref=e13]:
      - img [ref=e14]
      - searchbox / [ref=e17]
      - generic [ref=e18]: /
    - navigation [ref=e19]:
      - generic [ref=e20]:
        - paragraph [ref=e21]:
          - img [ref=e22]
          - generic [ref=e24]: Get started
        - list [ref=e25]:
          - listitem [ref=e26]:
            - link "Overview" [ref=e27] [cursor=pointer]:
              - /url: ../index.html
              - img [ref=e29]
              - generic [ref=e32]: Overview
      - generic [ref=e33]:
        - paragraph [ref=e34]:
          - img [ref=e35]
          - generic [ref=e37]: Selectors & Locators
        - list [ref=e38]:
          - listitem [ref=e39]:
            - link "Multiple Element Filter" [ref=e40] [cursor=pointer]:
              - /url: ../multiple_element_filter.html
              - img [ref=e42]
              - generic [ref=e45]: Multiple Element Filter
          - listitem [ref=e46]:
            - link "Web Table Directory" [ref=e47] [cursor=pointer]:
              - /url: ../webtable.html
              - img [ref=e49]
              - generic [ref=e54]: Web Table Directory
      - generic [ref=e55]:
        - paragraph [ref=e56]:
          - img [ref=e57]
          - generic [ref=e60]: Tables & Forms
        - list [ref=e61]:
          - listitem [ref=e62]:
            - link "QA Profile Form" [ref=e63] [cursor=pointer]:
              - /url: ./practice.html
              - img [ref=e65]
              - generic [ref=e68]: QA Profile Form
          - listitem [ref=e69]:
            - link "Companies Table" [ref=e70] [cursor=pointer]:
              - /url: ./webtable.html
              - img [ref=e72]
              - generic [ref=e75]: Companies Table
          - listitem [ref=e76]:
            - link "Tall Buildings Table" [ref=e77] [cursor=pointer]:
              - /url: ./webtable1.html
              - img [ref=e79]
              - generic [ref=e81]: Tall Buildings Table
          - listitem [ref=e82]:
            - link "Custom Dropdowns" [ref=e83] [cursor=pointer]:
              - /url: ./dropdowns.html
              - img [ref=e85]
              - generic [ref=e88]: Custom Dropdowns
          - listitem [ref=e89]:
            - link "Select Box Variants" [ref=e90] [cursor=pointer]:
              - /url: ./select-boxes.html
              - img [ref=e92]
              - generic [ref=e95]: Select Box Variants
          - listitem [ref=e96]:
            - link "Sortable Admin Table" [ref=e97] [cursor=pointer]:
              - /url: ./sortable.html
              - generic [ref=e99]: Sortable Admin Table
      - generic [ref=e100]:
        - paragraph [ref=e101]:
          - img [ref=e102]
          - generic [ref=e107]: Frames
        - list [ref=e108]:
          - listitem [ref=e109]:
            - link "Frames overview" [ref=e110] [cursor=pointer]:
              - /url: ../frames/index.html
              - img [ref=e112]
              - generic [ref=e114]: Frames overview
          - listitem [ref=e115]:
            - link "Multi-frame frameset" [ref=e116] [cursor=pointer]:
              - /url: ../frames/multi-frames.html
              - img [ref=e118]
              - generic [ref=e123]: Multi-frame frameset
          - listitem [ref=e124]:
            - link "Nested iframes" [ref=e125] [cursor=pointer]:
              - /url: ../frames/nested-iframes.html
              - img [ref=e127]
              - generic [ref=e131]: Nested iframes
      - generic [ref=e132]:
        - paragraph [ref=e133]:
          - img [ref=e134]
          - generic [ref=e137]: Widgets
        - list [ref=e138]:
          - listitem [ref=e139]:
            - link "SVG locators" [ref=e140] [cursor=pointer]:
              - /url: ../widgets/svg.html
              - generic [ref=e142]: SVG locators
          - listitem [ref=e143]:
            - link "Shadow DOM" [ref=e144] [cursor=pointer]:
              - /url: ../widgets/shadow-dom.html
              - generic [ref=e146]: Shadow DOM
          - listitem [ref=e147]:
            - link "Calendar / date picker" [ref=e148] [cursor=pointer]:
              - /url: ../widgets/calendar.html
              - generic [ref=e150]: Calendar / date picker
          - listitem [ref=e151]:
            - link "Drag & drop Kanban" [ref=e152] [cursor=pointer]:
              - /url: ../widgets/dnd.html
              - generic [ref=e154]: Drag & drop Kanban
          - listitem [ref=e155]:
            - link "Toasts & notifications" [ref=e156] [cursor=pointer]:
              - /url: ../widgets/toasts.html
              - generic [ref=e158]: Toasts & notifications
          - listitem [ref=e159]:
            - link "Native dialogs" [ref=e160] [cursor=pointer]:
              - /url: ../widgets/dialogs.html
              - generic [ref=e162]: Native dialogs
      - generic [ref=e163]:
        - paragraph [ref=e164]:
          - img [ref=e165]
          - generic [ref=e168]: Network
        - list [ref=e169]:
          - listitem [ref=e170]:
            - link "Network interception" [ref=e171] [cursor=pointer]:
              - /url: ../network/intercept.html
              - generic [ref=e173]: Network interception
      - generic [ref=e174]:
        - paragraph [ref=e175]:
          - img [ref=e176]
          - generic [ref=e178]: Coming next
        - list [ref=e179]:
          - listitem [ref=e180]:
            - link "Windows & Tabs Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Windows & Tabs
              - generic: Soon
          - listitem [ref=e181]:
            - link "Upload & Download Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Upload & Download
              - generic: Soon
    - generic [ref=e182]:
      - generic [ref=e183]: © The Testing Academy · 2026
      - button "Toggle dark mode" [ref=e184] [cursor=pointer]:
        - img [ref=e185]
  - generic [ref=e187]:
    - banner [ref=e188]:
      - button "Open sidebar" [ref=e189] [cursor=pointer]:
        - img [ref=e190]
      - generic [ref=e192]:
        - link "Practice" [ref=e193] [cursor=pointer]:
          - /url: ../index.html
        - img [ref=e194]
        - generic [ref=e196]: Tables & Forms
        - img [ref=e197]
        - strong [ref=e199]: Custom Dropdowns
      - generic [ref=e200]:
        - generic [ref=e201] [cursor=pointer]:
          - checkbox "Locator markers" [checked] [ref=e202]
          - generic [ref=e203]: Locator markers
        - generic [ref=e204]: 3 dropdowns
        - button "Toggle dark mode" [ref=e205] [cursor=pointer]:
          - img [ref=e206]
          - img [ref=e208]
    - main [ref=e211]:
      - region "Custom dropdown practice" [ref=e212]:
        - generic [ref=e213]: Form practice · Custom dropdowns
        - heading "Custom dropdown practice" [level=1] [ref=e215]:
          - text: Custom
          - emphasis [ref=e216]: dropdown
          - text: practice
        - paragraph [ref=e217]:
          - text: Three custom-built dropdowns — not native
          - code [ref=e218]: <select>
          - text: elements. Each opens on click of a
          - code [ref=e219]: .select-trigger
          - text: ", shows options in a floating panel, and writes the chosen value back into the trigger. Build a reusable Playwright helper that handles all three before peeking at the solution."
      - region "Custom dropdowns workspace" [ref=e220]:
        - generic [ref=e221]:
          - generic [ref=e222]:
            - generic [ref=e223]: Programming language
            - button "Programming language" [ref=e225] [cursor=pointer]:
              - generic [ref=e226]: TypeScript
              - img [ref=e227]
            - generic [ref=e229]:
              - generic [ref=e230]:
                - generic [ref=e231]: id
                - text: =lang-trigger
              - generic [ref=e232]:
                - generic [ref=e233]: data-testid
                - text: =dropdown-language · lang-trigger
              - generic [ref=e234]:
                - generic [ref=e235]: class
                - text: =select-trigger
              - generic [ref=e236]:
                - generic [ref=e237]: option
                - text: role=option · data-value=Java/Python/…
          - generic [ref=e238]:
            - generic [ref=e239]: Web framework
            - button "Web framework" [ref=e241] [cursor=pointer]:
              - generic [ref=e242]: Next.js
              - img [ref=e243]
            - generic [ref=e245]:
              - generic [ref=e246]:
                - generic [ref=e247]: id
                - text: =framework-trigger
              - generic [ref=e248]:
                - generic [ref=e249]: data-testid
                - text: =dropdown-framework · framework-trigger
          - generic [ref=e250]:
            - generic [ref=e251]: Experience level
            - button "Experience level" [ref=e253] [cursor=pointer]:
              - generic [ref=e254]: Senior (7+ years)
              - img [ref=e255]
            - generic [ref=e257]:
              - generic [ref=e258]:
                - generic [ref=e259]: id
                - text: =experience-trigger
              - generic [ref=e260]:
                - generic [ref=e261]: data-testid
                - text: =dropdown-experience · experience-trigger
          - generic [ref=e262]:
            - button "Save selection" [ref=e263] [cursor=pointer]
            - button "Reset" [ref=e264] [cursor=pointer]
          - generic [ref=e265]: No selection yet — pick from the three dropdowns above.
        - complementary [ref=e266]:
          - generic [ref=e267]:
            - heading "What students should practise" [level=3] [ref=e268]
            - list [ref=e269]:
              - listitem [ref=e270]:
                - text: Click the
                - code [ref=e271]: .select-trigger
                - text: matching a placeholder, then click an
                - code [ref=e272]: option
                - text: by visible text.
              - listitem [ref=e273]:
                - text: "Write a reusable helper:"
                - code [ref=e274]: selectValue(page, label, value)
                - text: .
              - listitem [ref=e275]: Assert the trigger's visible text equals the chosen value after selection.
              - listitem [ref=e276]:
                - text: Confirm only one option is marked
                - code [ref=e277]: .is-selected
                - text: per dropdown.
          - group [ref=e278]:
            - generic "Playwright solution Helper-based pattern — reusable across all three dropdowns. Show solution" [ref=e279] [cursor=pointer]:
              - img [ref=e281]
              - generic [ref=e283]:
                - strong [ref=e284]: Playwright solution
                - generic [ref=e285]: Helper-based pattern — reusable across all three dropdowns.
              - generic [ref=e286]: Show solution
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Basic Web Test - Verify Page Title', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
  6  | 
  7  |     // await page.locator('//div[@data-testid="dropdown-language"]').click();
  8  | 
  9  |     // await page.getByText("JavaScript").click();
  10 | 
  11 | 
  12 |     // await page.locator("#experience-shell").click();
  13 |     // await page.getByText("Mid-level (4-6 years)", { exact: true }).click();
  14 | 
  15 |     await page.getByRole("button", { name: "Programming language" }).click();;
  16 |     await page.getByRole("option", { name: "TypeScript", exact: true }).click();;
  17 | 
  18 |     await page.waitForTimeout(1000);
  19 | 
  20 |     await page.locator("#framework-trigger").click();
  21 |     await page.getByText("Next.js").click();
  22 |     await page.waitForTimeout(1000);
  23 | 
  24 |     await page.locator('#experience-trigger').click();
  25 |     await page.getByText("Senior (7+ years)").click();
  26 |     await page.waitForTimeout(2000);
  27 | 
  28 |     // await page.waitForTimeout(5000);
  29 | 
> 30 |     await page.locator("data-testid='dropdown-save'").click();
     |                                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  31 |     await page.getByText("Save selection").click();
  32 |     await page.waitForTimeout(2000);
  33 | 
  34 | 
  35 | });
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
```