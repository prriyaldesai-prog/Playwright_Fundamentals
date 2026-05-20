# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Task_6_Search_and_select_Table\task_6_search_check_table.spec.ts >> search check table >> Search and check from the table
- Location: tests\Projects\Task_6_Search_and_select_Table\task_6_search_check_table.spec.ts:4:9

# Error details

```
Error: locator.check: Error: Not a checkbox or radio button
Call log:
  - waiting for locator('tr:has(td:text(\'Kabir.Khan\'))').locator('td').first()
    - locator resolved to <td>…</td>

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary "Practice navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "T The Testing Academy" [ref=e5] [cursor=pointer]:
        - /url: ./index.html
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
              - /url: ./index.html
              - img [ref=e29]
              - generic [ref=e32]: Overview
      - generic [ref=e33]:
        - paragraph [ref=e34]:
          - img [ref=e35]
          - generic [ref=e37]: Selectors & Locators
        - list [ref=e38]:
          - listitem [ref=e39]:
            - link "Multiple Element Filter" [ref=e40] [cursor=pointer]:
              - /url: ./multiple_element_filter.html
              - img [ref=e42]
              - generic [ref=e45]: Multiple Element Filter
          - listitem [ref=e46]:
            - link "Web Table Directory" [ref=e47] [cursor=pointer]:
              - /url: ./webtable.html
              - img [ref=e49]
              - generic [ref=e54]: Web Table Directory
      - generic [ref=e55]:
        - paragraph [ref=e56]:
          - img [ref=e57]
          - generic [ref=e60]: Tables & Forms
        - list [ref=e61]:
          - listitem [ref=e62]:
            - link "QA Profile Form" [ref=e63] [cursor=pointer]:
              - /url: ./tables/practice.html
              - img [ref=e65]
              - generic [ref=e68]: QA Profile Form
          - listitem [ref=e69]:
            - link "Companies Table" [ref=e70] [cursor=pointer]:
              - /url: ./tables/webtable.html
              - img [ref=e72]
              - generic [ref=e75]: Companies Table
          - listitem [ref=e76]:
            - link "Tall Buildings Table" [ref=e77] [cursor=pointer]:
              - /url: ./tables/webtable1.html
              - img [ref=e79]
              - generic [ref=e81]: Tall Buildings Table
          - listitem [ref=e82]:
            - link "Custom Dropdowns" [ref=e83] [cursor=pointer]:
              - /url: ./tables/dropdowns.html
              - img [ref=e85]
              - generic [ref=e88]: Custom Dropdowns
          - listitem [ref=e89]:
            - link "Select Box Variants" [ref=e90] [cursor=pointer]:
              - /url: ./tables/select-boxes.html
              - img [ref=e92]
              - generic [ref=e95]: Select Box Variants
          - listitem [ref=e96]:
            - link "Sortable Admin Table" [ref=e97] [cursor=pointer]:
              - /url: ./tables/sortable.html
              - generic [ref=e99]: Sortable Admin Table
      - generic [ref=e100]:
        - paragraph [ref=e101]:
          - img [ref=e102]
          - generic [ref=e107]: Frames
        - list [ref=e108]:
          - listitem [ref=e109]:
            - link "Frames overview" [ref=e110] [cursor=pointer]:
              - /url: ./frames/index.html
              - img [ref=e112]
              - generic [ref=e114]: Frames overview
          - listitem [ref=e115]:
            - link "Multi-frame frameset" [ref=e116] [cursor=pointer]:
              - /url: ./frames/multi-frames.html
              - img [ref=e118]
              - generic [ref=e123]: Multi-frame frameset
          - listitem [ref=e124]:
            - link "Nested iframes" [ref=e125] [cursor=pointer]:
              - /url: ./frames/nested-iframes.html
              - img [ref=e127]
              - generic [ref=e131]: Nested iframes
      - generic [ref=e132]:
        - paragraph [ref=e133]:
          - img [ref=e134]
          - generic [ref=e137]: Widgets
        - list [ref=e138]:
          - listitem [ref=e139]:
            - link "SVG locators" [ref=e140] [cursor=pointer]:
              - /url: ./widgets/svg.html
              - generic [ref=e142]: SVG locators
          - listitem [ref=e143]:
            - link "Shadow DOM" [ref=e144] [cursor=pointer]:
              - /url: ./widgets/shadow-dom.html
              - generic [ref=e146]: Shadow DOM
          - listitem [ref=e147]:
            - link "Calendar / date picker" [ref=e148] [cursor=pointer]:
              - /url: ./widgets/calendar.html
              - generic [ref=e150]: Calendar / date picker
          - listitem [ref=e151]:
            - link "Drag & drop Kanban" [ref=e152] [cursor=pointer]:
              - /url: ./widgets/dnd.html
              - generic [ref=e154]: Drag & drop Kanban
          - listitem [ref=e155]:
            - link "Toasts & notifications" [ref=e156] [cursor=pointer]:
              - /url: ./widgets/toasts.html
              - generic [ref=e158]: Toasts & notifications
          - listitem [ref=e159]:
            - link "Native dialogs" [ref=e160] [cursor=pointer]:
              - /url: ./widgets/dialogs.html
              - generic [ref=e162]: Native dialogs
      - generic [ref=e163]:
        - paragraph [ref=e164]:
          - img [ref=e165]
          - generic [ref=e168]: Network
        - list [ref=e169]:
          - listitem [ref=e170]:
            - link "Network interception" [ref=e171] [cursor=pointer]:
              - /url: ./network/intercept.html
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
          - /url: ./index.html
        - img [ref=e194]
        - strong [ref=e196]: Web Table Directory
      - generic [ref=e197]:
        - generic [ref=e198]: 10 rows
        - button "Toggle dark mode" [ref=e199] [cursor=pointer]:
          - img [ref=e200]
          - img [ref=e202]
    - main [ref=e205]:
      - region "CloudOps India Employee Directory" [ref=e206]:
        - generic [ref=e207]: Locator practice · Web table
        - heading "CloudOps India Employee Directory" [level=1] [ref=e209]:
          - text: CloudOps India
          - emphasis [ref=e210]: Employee Directory
        - paragraph [ref=e211]:
          - text: A realistic employee table built for practising XPath sibling traversal, CSS
          - code [ref=e212]: :has()
          - text: ", checkbox selection, and extracting row data. The data is intentionally Indianised so the names feel familiar."
        - generic [ref=e213]:
          - generic [ref=e214]:
            - strong [ref=e215]: "10"
            - generic [ref=e216]: Employee rows
          - generic [ref=e217]:
            - strong [ref=e218]: "7"
            - generic [ref=e219]: Visible columns
          - generic [ref=e220]:
            - strong [ref=e221]: "3"
            - generic [ref=e222]: Selector patterns
          - generic [ref=e223]:
            - strong [ref=e224]: "0"
            - generic [ref=e225]: External APIs
      - region "Web table practice workspace" [ref=e226]:
        - generic [ref=e227]:
          - generic [ref=e228]:
            - generic [ref=e229]:
              - heading "CloudOps India Employee Directory" [level=2] [ref=e230]
              - paragraph [ref=e231]: Use this table to practise locating rows, checkboxes, and sibling columns.
            - generic [ref=e232]: Practice page
          - generic "Table tools" [ref=e233]:
            - searchbox "Search employee table" [active] [ref=e234]: Kabir.Khan
            - button "Select Cloud QA" [ref=e235] [cursor=pointer]
            - button "Clear" [ref=e236] [cursor=pointer]
          - table "Employee Management System table" [ref=e238]:
            - rowgroup [ref=e239]:
              - row "Select Username Employee Name User Role City Project Status" [ref=e240]:
                - columnheader "Select" [ref=e241]
                - columnheader "Username" [ref=e242]
                - columnheader "Employee Name" [ref=e243]
                - columnheader "User Role" [ref=e244]
                - columnheader "City" [ref=e245]
                - columnheader "Project" [ref=e246]
                - columnheader "Status" [ref=e247]
            - rowgroup [ref=e248]:
              - row "Select Kabir.Khan Kabir.Khan KK Kabir Khan EMP-1005 Security Tester Hyderabad Udaan Risk Active" [ref=e249]:
                - cell "Select Kabir.Khan" [ref=e250]:
                  - checkbox "Select Kabir.Khan" [ref=e251] [cursor=pointer]
                - cell "Kabir.Khan" [ref=e252]
                - cell "KK Kabir Khan EMP-1005" [ref=e253]:
                  - generic [ref=e254]:
                    - generic [ref=e255]: KK
                    - generic [ref=e256]:
                      - strong [ref=e257]: Kabir Khan
                      - generic [ref=e258]: EMP-1005
                - cell "Security Tester" [ref=e259]
                - cell "Hyderabad" [ref=e260]
                - cell "Udaan Risk" [ref=e261]
                - cell "Active" [ref=e262]:
                  - generic [ref=e263]: Active
          - generic [ref=e264]:
            - generic [ref=e265]:
              - generic [ref=e266]: 1 visible rows
              - generic [ref=e267]: 0 selected
            - generic [ref=e268]: Selected usernames will appear here.
        - complementary "Lesson and solution" [ref=e269]:
          - generic [ref=e270]:
            - heading "What students should practise" [level=2] [ref=e271]
            - paragraph [ref=e272]: The page is the problem. Try these on your own first — the solution stays hidden until you reveal it.
            - list [ref=e273]:
              - listitem [ref=e274]: Click the checkbox beside a username using XPath preceding-sibling.
              - listitem [ref=e275]:
                - text: Find a complete row using CSS
                - code [ref=e276]: tr:has(td:text(...))
                - text: .
              - listitem [ref=e277]: Read all the data after a username using following-sibling columns.
              - listitem [ref=e278]: Filter rows by team, city, role, or status without relying on hardcoded row numbers.
          - group [ref=e279]:
            - generic "Playwright solution Try the practice first — reveal the snippet only when you need a hint. Show solution" [ref=e280] [cursor=pointer]:
              - img [ref=e282]
              - generic [ref=e284]:
                - strong [ref=e285]: Playwright solution
                - generic [ref=e286]: Try the practice first — reveal the snippet only when you need a hint.
              - generic [ref=e287]: Show solution
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('search check table', () => {
  4  |     test("Search and check from the table", async ({ page }) => {
  5  | 
  6  |         await page.goto("https://app.thetestingacademy.com/playwright/webtable");
  7  |         await page.locator("#employee-search").fill("Kabir.Khan");
  8  |         await page.waitForTimeout(2000);
  9  |         await page.locator("tr:has(td:text('Kabir.Khan'))")
  10 |             .locator("td")
  11 |             .nth(0)
> 12 |             .check();
     |              ^ Error: locator.check: Error: Not a checkbox or radio button
  13 |         await page.waitForTimeout(2000);
  14 | 
  15 | 
  16 |     });
  17 | });
```