
### How to use:
1. Find the right use case you want to investigate. See the table below.
2. Take the corresponding “src?” file folder name from the table.
3. In the root directory, change the index.html on line 11 to the corresponding “src?” name value.
    For example: The use-case is “srcE,” so enter the following in index.html:
    `<script type="module" src="/srcE/main.jsx"></script>`
4. Run “npm run dev” in the console and connect to the local page.

### Note:
All code examples were taken from the “udemy” coding environment. There, all useState imports were performed with
`import React from ‘react’;” and then used with “React.useState(...)`.
In a real IDE, however, `import { useState } from ‘react’` is performed and then used with `useState()`!

### Table of contents:

| src? | Topic                                                            |
|------|------------------------------------------------------------------|
| srcA | Deconstruction and usage of the children prop                    |
| srcB | First simple example of an onClick event                         |
| srcC | Passing a custom value in an onClick event                       |
| srcD | First use of a hook via useState for re-rendering                |
| srcE | Use the hook via useState to toogle a boolean                    |
| srcF | Dynamic Styling via useState of a button by toggeling            |
| srcG | Display dynamic items from an Array, can also used for Objects   |
| srcH |                                                                  |
| srcI | Change entire input-windows, depending on whether A or B applies |
| srcJ |                                                                  |
| srcK |                                                                  |
