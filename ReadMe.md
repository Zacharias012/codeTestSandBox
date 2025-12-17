
### How to use:
1. Find the right use case you want to investigate. See the table below.
2. Take the corresponding “src?” file folder name from the table.
3. In the root directory, change the index.html on line 11 to the corresponding “src?” name value.
    For example: The use-case is “src-D-FirstHook,” so enter the following in index.html:
    `<script type="module" src="/src-D-FirstHook/main.jsx"></script>`
4. Run “npm run dev” in the console and connect to the local page.

### Note:
All code examples were taken from the “udemy” coding environment. There, all useState imports were performed with
`import React from ‘react’;” and then used with “React.useState(...)`.
In a real IDE, however, `import { useState } from ‘react’` is performed and then used with `useState()`!

### Table of contents:

| src-?-?                                                        | Topic                                                                      |
|----------------------------------------------------------------|----------------------------------------------------------------------------|
| [src-A-DeconstructionChildren](src-A-DeconstructionChildren)   | Deconstruction and usage of the children prop                              |
| [src-B-FirstOnClick](src-B-FirstOnClick)                       | First simple example of an onClick event                                   |
| [src-C-PassingValueOnClick](src-C-PassingValueOnClick)         | Passing a custom value in an onClick event                                 |
| [src-D-FirstHook](src-D-FirstHook)                             | First use of a hook via useState for re-rendering                          |
| [src-E-UseStateToggle](src-E-UseStateToggle)                   | Use the hook via useState to toggle a boolean                              |
| [src-F-DynamicStyling](src-F-DynamicStyling)                   | Dynamic Styling via useState of a button by toggeling                      |
| [src-G-DisplayItemsArray](src-G-DisplayItemsArray)             | Display dynamic items from an Array, can also used for Objects             |
| [src-H-FragmentsWrapElements](src-H-FragmentsWrapElements)     | Use Fragments to wrap multiple HTML elements into one <div>                |
| [src-I-ChangeComponents](src-I-ChangeComponents)               | Change entire input-windows, depending on whether A or B applies           |
| [src-J-ReusableButtonComponent](src-J-ReusableButtonComponent) | Use one highly reusable, adaptable button component for diffrent use cases |
| [src-K-TwoWayBindings](src-K-TwoWayBindings)                   | Two-Way-Bindings, display the text a user inputs in an text field          |
