# Shadow DOM Automation Task

This project demonstrates advanced techniques for interacting with both **Open** and **Closed** Shadow DOM elements using Playwright and TypeScript.

## 📝 Scenarios Covered

### 1. Open Shadow DOM Interaction
- **Automatic Piercing**: Utilizing Playwright's native ability to automatically pierce through open shadow roots using standard CSS locators.
- **Selector Chaining**: Locating specific elements within a shadow host using `.locator()` and `.getByTitle()`.

### 2. Closed Shadow DOM Handling
- **The Challenge**: Closed shadow roots are inaccessible via standard DOM APIs and automation locators.
- **Keyboard Navigation Workaround**:
  - Using `page.keyboard.press('Tab')` to navigate focus into hidden input fields.
  - Using `page.keyboard.type()` to enter data without a direct locator.
- **Mouse Interaction**:
  - Using coordinate-based clicking to gain focus on shadow elements.

### 3. Nested Shadow DOM & Iframes
- Interacting with complex, nested structures including iframes embedded within shadow roots.

## 🚀 How to Run
To execute this specific test:
```bash
npx playwright test tests/Projects/Project_10_shadowDOM/project_10_shadowDOM.spec.ts
```

## 📊 Target Page
- **URL**: [SelectorsHub XPath Practice Page](https://selectorshub.com/xpath-practice-page/)
