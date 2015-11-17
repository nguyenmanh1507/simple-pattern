# Pattern Requirements

This document will describe the structure of each pattern and its behaviour under various screen sizes.

---

## The Grid System

**Description**

- 12 columns
- Responsive, fluid
- Columns will be wrapped in a container .row
- Each Columns will have class of .col-$
- Also create a .container class that wraps all content and centers it on the page. The container must be fluid in width.

**Responsive Behaviour**

- In smaller screen sizes (``<``1024px) the columns will have their gutter width halved
- In mobile sizes (``<``768px) all columns will get a 100% width

## Typography

**Elements**

- Heading
- Paragraphs
- Bold, em, strike, link
- Code blocks
- Lists
- Blockquote

## Buttons

**Description**

- 2 styles: default, primary
- 3 sizes: small, default and large
- Styles for all HTML elements: '``<a>``, ``<button>``, ``<input type="button">``, ``<input type="submit">``'

## Form Elements

**Elements**

- Inputs
- Radio and checkboxes (custom controls)
- Pre-made forms: sign-in, sign-up, contact

## Icons

**Description**

- Will use FontAwesome
- Styles for bordered icons
- Styles for square, rounded or circle border
- 3 different sizes: default, large, huge

## Feedback

**Description**

- 4 message boxes: information, success, error, warning

## Navigation

**Elements and characteristics**

- Navbar
- Contains logo on the left side and menu on the right side
- The menu will be powered by Superfish jQuery plugin

**Responsive Behaviour**

- At page load, the main menu will be cloned via jQuery into a responsive menu
- In mobile sizes (< 768px) the main menu will be hidden, the logo moved to the center and the responsive menu will be displayed below the logo

## Animations

**Descriptions**

- Will use the animate.css library be Dan Eden

## Tabs and Accordions

**Description**

- Custom controls

## Carousels

**Description**

- Will use the Cycle2 jQuery plugin

