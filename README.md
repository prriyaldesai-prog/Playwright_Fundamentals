# Playwright Fundamentals 🎭

A comprehensive repository for learning and practicing Playwright automation with TypeScript. This project covers core to advanced automation scenarios including complex UI interactions, frame handling, and modern web element manipulation.

## 🚀 Key Modules & Tasks

### 1. Advanced UI Interactions
- **Hover Menus**: Automated navigation and selection from complex hover-triggered menus (e.g., SpiceJet Add-ons, Wi-Fi selections).
- **Context Menus (Right-Click)**: Handling right-click actions and capturing dynamically generated list items.
- **Drag and Drop**: Implementing stable drag-and-drop workflows and Kanban board automation.

### 2. Frame & Iframe Handling
- **Nested Iframes**: Developed robust locators for navigating frames inside other frames.
- **Multi-Frame Counting**: Logic to detect and count all `<iframe>` elements on a page.

### 3. Web Table Automation
- **Search & Verify**: Implementation of search logic within dynamic tables with XPath and stable assertions.

### 4. SVG Element Handling
- **Dynamic Icons**: Interacting with SVG-based search icons and verifying product data on modern e-commerce sites like Flipkart.

### 5. Keyboard & Event Handling
- **Keyboard Shortcuts**: Automating key presses (Enter, Escape, etc.) for form submission and menu navigation.

## 🛠️ Tech Stack
- **Framework**: Playwright
- **Language**: TypeScript
- **Reporter**: Custom TTA Reporter & Allure

## 🧪 How to Run Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test:
```bash
npx playwright test tests/Projects/Task_9_svg.spec.ts
```

Show HTML Report:
```bash
npx playwright show-report
```

---
*Created and maintained during Playwright Fundamentals training.*
