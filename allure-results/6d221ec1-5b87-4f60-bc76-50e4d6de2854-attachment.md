# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_Web_Select_Frames_Iframe\practice_trial_iframe.spec.ts >> Basic single iframe Test - Verify Page Title
- Location: tests\08_Web_Select_Frames_Iframe\practice_trial_iframe.spec.ts:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByText('{\n  "vehicleName": "",\n  "ownerName": "",\n  "regNumber": "",\n  "vehicleType": "Sedan",\n  "year": "",\n  "notes": ""\n}')
Expected: "{
    \"vehicleName\": \"Honda City\",
    \"ownerName\": \"PriyalDesai\",
    \"regNumber\": \"GJ-18-GJ-12345\",
    \"vehicleType\": \"Sedan\",
    \"year\": \"2026\",
    \"notes\": \"Honda City is a sunroof car and very nice to drive in city and highway\"
}"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByText('{\n  "vehicleName": "",\n  "ownerName": "",\n  "regNumber": "",\n  "vehicleType": "Sedan",\n  "year": "",\n  "notes": ""\n}')

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
              - /url: ../tables/practice.html
              - img [ref=e65]
              - generic [ref=e68]: QA Profile Form
          - listitem [ref=e69]:
            - link "Companies Table" [ref=e70] [cursor=pointer]:
              - /url: ../tables/webtable.html
              - img [ref=e72]
              - generic [ref=e75]: Companies Table
          - listitem [ref=e76]:
            - link "Tall Buildings Table" [ref=e77] [cursor=pointer]:
              - /url: ../tables/webtable1.html
              - img [ref=e79]
              - generic [ref=e81]: Tall Buildings Table
          - listitem [ref=e82]:
            - link "Custom Dropdowns" [ref=e83] [cursor=pointer]:
              - /url: ../tables/dropdowns.html
              - img [ref=e85]
              - generic [ref=e88]: Custom Dropdowns
          - listitem [ref=e89]:
            - link "Select Box Variants" [ref=e90] [cursor=pointer]:
              - /url: ../tables/select-boxes.html
              - img [ref=e92]
              - generic [ref=e95]: Select Box Variants
          - listitem [ref=e96]:
            - link "Sortable Admin Table" [ref=e97] [cursor=pointer]:
              - /url: ../tables/sortable.html
              - generic [ref=e99]: Sortable Admin Table
          - listitem [ref=e100]:
            - link "Cricket Scorecard" [ref=e101] [cursor=pointer]:
              - /url: ../tables/scorecard.html
              - generic [ref=e103]: Cricket Scorecard
      - generic [ref=e104]:
        - paragraph [ref=e105]:
          - img [ref=e106]
          - generic [ref=e111]: Frames
        - list [ref=e112]:
          - listitem [ref=e113]:
            - link "Frames overview" [ref=e114] [cursor=pointer]:
              - /url: ./index.html
              - img [ref=e116]
              - generic [ref=e118]: Frames overview
          - listitem [ref=e119]:
            - link "Multi-frame frameset" [ref=e120] [cursor=pointer]:
              - /url: ./multi-frames.html
              - img [ref=e122]
              - generic [ref=e127]: Multi-frame frameset
          - listitem [ref=e128]:
            - link "Nested iframes" [ref=e129] [cursor=pointer]:
              - /url: ./nested-iframes.html
              - img [ref=e131]
              - generic [ref=e135]: Nested iframes
          - listitem [ref=e136]:
            - link "Courses frameset" [ref=e137] [cursor=pointer]:
              - /url: ./courses-frameset.html
              - generic [ref=e139]: Courses frameset
      - generic [ref=e140]:
        - paragraph [ref=e141]:
          - img [ref=e142]
          - generic [ref=e145]: Widgets
        - list [ref=e146]:
          - listitem [ref=e147]:
            - link "SVG locators" [ref=e148] [cursor=pointer]:
              - /url: ../widgets/svg.html
              - generic [ref=e150]: SVG locators
          - listitem [ref=e151]:
            - link "Shadow DOM" [ref=e152] [cursor=pointer]:
              - /url: ../widgets/shadow-dom.html
              - generic [ref=e154]: Shadow DOM
          - listitem [ref=e155]:
            - link "Calendar / date picker" [ref=e156] [cursor=pointer]:
              - /url: ../widgets/calendar.html
              - generic [ref=e158]: Calendar / date picker
          - listitem [ref=e159]:
            - link "Drag & drop Kanban" [ref=e160] [cursor=pointer]:
              - /url: ../widgets/dnd.html
              - generic [ref=e162]: Drag & drop Kanban
          - listitem [ref=e163]:
            - link "Toasts & notifications" [ref=e164] [cursor=pointer]:
              - /url: ../widgets/toasts.html
              - generic [ref=e166]: Toasts & notifications
          - listitem [ref=e167]:
            - link "Native dialogs" [ref=e168] [cursor=pointer]:
              - /url: ../widgets/dialogs.html
              - generic [ref=e170]: Native dialogs
          - listitem [ref=e171]:
            - link "Hover menus" [ref=e172] [cursor=pointer]:
              - /url: ../widgets/hover-menu.html
              - generic [ref=e174]: Hover menus
          - listitem [ref=e175]:
            - link "Right-click menu" [ref=e176] [cursor=pointer]:
              - /url: ../widgets/context-menu.html
              - generic [ref=e178]: Right-click menu
          - listitem [ref=e179]:
            - link "Keyboard navigation" [ref=e180] [cursor=pointer]:
              - /url: ../widgets/keyboard-form.html
              - generic [ref=e182]: Keyboard navigation
      - generic [ref=e183]:
        - paragraph [ref=e184]:
          - img [ref=e185]
          - generic [ref=e188]: Network
        - list [ref=e189]:
          - listitem [ref=e190]:
            - link "Network interception" [ref=e191] [cursor=pointer]:
              - /url: ../network/intercept.html
              - generic [ref=e193]: Network interception
      - generic [ref=e194]:
        - paragraph [ref=e195]:
          - img [ref=e196]
          - generic [ref=e198]: Coming next
        - list [ref=e199]:
          - listitem [ref=e200]:
            - link "Windows & Tabs Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Windows & Tabs
              - generic: Soon
          - listitem [ref=e201]:
            - link "Upload & Download Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Upload & Download
              - generic: Soon
    - generic [ref=e202]:
      - generic [ref=e203]: © The Testing Academy · 2026
      - button "Toggle dark mode" [ref=e204] [cursor=pointer]:
        - img [ref=e205]
  - generic [ref=e207]:
    - banner [ref=e208]:
      - button "Open sidebar" [ref=e209] [cursor=pointer]:
        - img [ref=e210]
      - generic [ref=e212]:
        - link "Practice" [ref=e213] [cursor=pointer]:
          - /url: ../index.html
        - img [ref=e214]
        - strong [ref=e216]: Frame Handling
      - generic [ref=e217]:
        - generic [ref=e218] [cursor=pointer]:
          - checkbox "Locator markers" [checked] [ref=e219]
          - generic [ref=e220]: Locator markers
        - generic [ref=e221]: iframe + frameset
        - button "Toggle dark mode" [ref=e222] [cursor=pointer]:
          - img [ref=e223]
          - img [ref=e225]
    - main [ref=e228]:
      - region "Frame handling practice" [ref=e229]:
        - generic [ref=e230]: Frame practice · iframe + frameset
        - heading "Frame handling practice" [level=1] [ref=e232]:
          - text: Frame
          - emphasis [ref=e233]: handling
          - text: practice
        - paragraph [ref=e234]:
          - text: Two scenarios — a modern
          - code [ref=e235]: <iframe>
          - text: hosting a registration form, and a classic
          - code [ref=e236]: <frameset>
          - text: page with three named frames. Practise
          - code [ref=e237]: page.frameLocator()
          - text: ","
          - code [ref=e238]: page.frames()
          - text: ", and counting/iterating"
          - code [ref=e239]: frame
          - text: elements.
      - region "Frame handling workspace" [ref=e240]:
        - generic [ref=e241]:
          - article [ref=e242]:
            - heading "Vehicle registration · iframe practice" [level=3] [ref=e243]
            - heading "① Single iframe — fill the embedded form" [level=2] [ref=e244]
            - paragraph [ref=e245]:
              - text: The form below is loaded inside an
              - code [ref=e246]: iframe[id*='frame-one']
              - text: . Practise
              - code [ref=e247]: page.frameLocator(...)
              - text: to reach
              - code [ref=e248]: "#RESULT_TextField-1"
              - text: and the rest.
            - iframe [active] [ref=e250]:
              - generic [ref=f1e2]:
                - generic [ref=f1e3]: Inside iframe
                - heading "Vehicle registration" [level=1] [ref=f1e4]
                - paragraph [ref=f1e5]:
                  - text: This form lives inside an iframe. Reach it from the parent page using
                  - code [ref=f1e6]: page.frameLocator(...)
                  - text: .
                - generic [ref=f1e7]:
                  - generic [ref=f1e8]:
                    - generic [ref=f1e9]: Vehicle name
                    - textbox "Vehicle name" [ref=f1e10]:
                      - /placeholder: e.g. Test Automation
                      - text: Honda City
                  - generic [ref=f1e11]:
                    - generic [ref=f1e12]:
                      - generic [ref=f1e13]: Owner name
                      - textbox "Owner name" [ref=f1e14]:
                        - /placeholder: Aarav Sharma
                        - text: PriyalDesai
                    - generic [ref=f1e15]:
                      - generic [ref=f1e16]: Registration number
                      - textbox "Registration number" [ref=f1e17]:
                        - /placeholder: MH-12-AB-1234
                        - text: GJ-18-GJ-12345
                  - generic [ref=f1e18]:
                    - generic [ref=f1e19]:
                      - generic [ref=f1e20]: Vehicle type
                      - combobox "Vehicle type" [ref=f1e21]:
                        - option "Select type"
                        - option "Hatchback"
                        - option "Sedan" [selected]
                        - option "SUV"
                        - option "Electric"
                        - option "Two-wheeler"
                    - generic [ref=f1e22]:
                      - generic [ref=f1e23]: Year
                      - spinbutton "Year" [ref=f1e24]: "2026"
                  - generic [ref=f1e25]:
                    - generic [ref=f1e26]: Notes
                    - textbox "Notes" [ref=f1e27]:
                      - /placeholder: Any notes about the registration
                      - text: Honda City is a sunroof car and very nice to drive in city and highway
                  - generic [ref=f1e28]:
                    - button "Submit registration" [ref=f1e29] [cursor=pointer]
                    - button "Reset" [ref=f1e30] [cursor=pointer]
                  - generic [ref=f1e31]: "{ \"vehicleName\": \"Honda City\", \"ownerName\": \"PriyalDesai\", \"regNumber\": \"GJ-18-GJ-12345\", \"vehicleType\": \"Sedan\", \"year\": \"2026\", \"notes\": \"Honda City is a sunroof car and very nice to drive in city and highway\" }"
            - generic [ref=e251]:
              - generic [ref=e252]:
                - generic [ref=e253]: id
                - text: =frame-one
              - generic [ref=e254]:
                - generic [ref=e255]: name
                - text: =vehicle-form
              - generic [ref=e256]:
                - generic [ref=e257]: data-testid
                - text: =iframe-form-card
              - generic [ref=e258]:
                - generic [ref=e259]: title-host
                - text: =h3.details__form-preview-title
            - paragraph [ref=e260]:
              - text: "Selector matrix:"
              - strong [ref=e261]: iframe[id*='frame-one']
              - text: ·
              - strong [ref=e262]: iframe[name='vehicle-form']
              - text: ·
              - strong [ref=e263]: iframe[title*='Vehicle']
          - article [ref=e264]:
            - heading "② Multi-frame frameset — named frames" [level=2] [ref=e265]
            - paragraph [ref=e266]:
              - text: A separate page renders three classic
              - code [ref=e267]: <frame>
              - text: elements (
              - code [ref=e268]: main
              - text: ","
              - code [ref=e269]: side
              - text: ","
              - code [ref=e270]: footer
              - text: ). Open it in a new tab to use
              - code [ref=e271]: page.locator('//frame').all()
              - text: and count
              - code [ref=e272]: page.frames()
              - text: .
            - link "Open multi-frames frameset 3 frames named main / side / footer · best opened in a new tab" [ref=e273] [cursor=pointer]:
              - /url: ./multi-frames.html
              - img [ref=e275]
              - generic [ref=e277]:
                - strong [ref=e278]: Open multi-frames frameset
                - generic [ref=e279]: 3 frames named main / side / footer · best opened in a new tab
            - generic [ref=e280]:
              - generic [ref=e282]: frame[name='main']
              - generic [ref=e284]: frame[name='side']
              - generic [ref=e286]: frame[name='footer']
        - complementary [ref=e287]:
          - generic [ref=e288]:
            - heading "What students should practise" [level=3] [ref=e289]
            - list [ref=e290]:
              - listitem [ref=e291]:
                - text: Reach
                - code [ref=e292]: "#RESULT_TextField-1"
                - text: via
                - code [ref=e293]: page.frameLocator("iframe[id*='frame-one']")
                - text: and fill it.
              - listitem [ref=e294]:
                - text: Read the outer-page heading
                - code [ref=e295]: h3.details__form-preview-title
                - text: and assert the page title.
              - listitem [ref=e296]:
                - text: On the frameset page, use
                - code [ref=e297]: frameLocator("[name='main']")
                - text: and read its h2.
              - listitem [ref=e298]:
                - text: Count frames via
                - code [ref=e299]: page.locator('//frame').all()
                - text: and
                - code [ref=e300]: page.frames().length
                - text: .
              - listitem [ref=e301]: Iterate frames and log each frame's name and src.
          - group [ref=e302]:
            - generic "Playwright solution Both scenarios — iframe form fill and frameset enumeration. Show solution" [ref=e303] [cursor=pointer]:
              - img [ref=e305]
              - generic [ref=e307]:
                - strong [ref=e308]: Playwright solution
                - generic [ref=e309]: Both scenarios — iframe form fill and frameset enumeration.
              - generic [ref=e310]: Show solution
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Basic single iframe Test - Verify Page Title', async ({ page }) => {
  4  | 
  5  |     await page.goto("https://app.thetestingacademy.com/playwright/frames/");
  6  |     const mainframe = page.frameLocator("#frame-one");
  7  |     await page.waitForTimeout(5000);
  8  |     await mainframe.locator("#RESULT_TextField-1").fill("Honda City");
  9  |     await page.waitForTimeout(3000);
  10 | 
  11 |     await mainframe.locator("#RESULT_TextField-2").fill("PriyalDesai");
  12 |     await page.waitForTimeout(2000);
  13 | 
  14 |     await mainframe.locator("#RESULT_TextField-3").fill("GJ-18-GJ-12345");
  15 |     await page.waitForTimeout(2000);
  16 | 
  17 |     await mainframe.locator("#RESULT_RadioButton-1").selectOption("Sedan");
  18 |     await page.waitForTimeout(2000);
  19 | 
  20 |     await mainframe.locator("#RESULT_TextField-4").fill("2026");
  21 |     await page.waitForTimeout(2000);
  22 | 
  23 |     await mainframe.locator("#RESULT_TextArea-1").fill("Honda City is a sunroof car and very nice to drive in city and highway");
  24 |     await page.waitForTimeout(2000);
  25 | 
  26 |     await mainframe.getByText("Submit registration").click();
  27 |     await page.waitForTimeout(5000);
  28 | 
  29 |     let registrationResult = page.getByText(`{
  30 |   "vehicleName": "",
  31 |   "ownerName": "",
  32 |   "regNumber": "",
  33 |   "vehicleType": "Sedan",
  34 |   "year": "",
  35 |   "notes": ""
  36 | }`);
  37 | 
> 38 |     await expect(registrationResult).toHaveText(`{
     |                                      ^ Error: expect(locator).toHaveText(expected) failed
  39 |     "vehicleName": "Honda City",
  40 |     "ownerName": "PriyalDesai",
  41 |     "regNumber": "GJ-18-GJ-12345",
  42 |     "vehicleType": "Sedan",
  43 |     "year": "2026",
  44 |     "notes": "Honda City is a sunroof car and very nice to drive in city and highway"
  45 | }`);
  46 | 
  47 | });
```