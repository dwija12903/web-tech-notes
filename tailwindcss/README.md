# 🌬️ Tailwind CSS Notes

## Base Styles
- Tailwind has three layers of CSS: **@base**, **@components**, and **@utilities**.
- **@base** uses a default style for elements like body, anchor tags, and box-sizing.
- **@components** contains medium-sized styling, often for containers.
- **@utilities** is where the magic happens, with Tailwind's real utility classes.

### 🛡️ Preflight
- **Preflight** resets and clears out the default browser styles for consistency. It goes beyond simple normalization:
  - Removes all margins
  - Unstyles headings and lists
  - Sets images to `display: block` and vertically aligns them
  - Makes all images block-level elements
- To **turn off Preflight**, you can add `corePlugins: { preflight: false }` in your `tailwind.config.js`.

## Container
- Tailwind's `container` class helps make layouts **responsive** and snap to breakpoints like `sm`, `md`, `lg`, `xl`.
- It doesn't handle padding or centering by default, but you can add classes like:
  ```html
  <div class="container mx-auto items-center">
  ```

## Variants
Tailwind variants allow you to apply styles under certain conditions.

1. **Media Query Variants** 📱
   - These work based on window size (e.g., small, medium, large).
   - Example: `sm:text-md md:text-lg` changes the text size depending on the screen width.
  
2. **State Variants** 🖱️
   - States like `hover`, `focus`, `active`, `disabled`, etc.
   - Example: `hover:bg-blue-500`

3. **Other Variants** 🌟
   - Example: `first`, `last`, `odd`, `even`, `dark`, `visited`, `focus`, `checked`.

## Modifying Variants
You can modify the screen sizes using:
```js
module.exports = {
  theme: {
    screens: {
      'small': '640px',
      'md': '768px',
    }
  }
}
```

## Extracting Classes
To reuse styles, you can use the `@layer` directive with the `@components` layer to define component classes.

## Adding Fonts
Tailwind comes with three default font families: `font-sans`, `font-serif`, and `font-mono`. You can configure fonts in `tailwind.config.js` under the `theme` section using `fontFamily`.

- **Font Sizes**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, up to `text-8xl`.
- **Font Weights**: `font-thin`, `font-extralight`, `font-semibold`, `font-bold`, etc.
- **Font Styles**: `italic` or `not-italic`.

## Text Utilities
- **Text Colors**: `text-color-number` (number between 500–900, lower = lighter, higher = darker).
- **Text Opacity**: `text-opacity-amt` (amount is a percentage, e.g., 0, 10, 20, up to 100).
- **Text Alignment**: `text-left`, `text-right`, `text-center`, `text-justify`.
- **Text Decorations**: `underline`, `line-through`, `no-underline`.
- **Text Transformations**: `uppercase`, `lowercase`, `capitalize`.
- **Text Overflow**: `truncate`, `overflow-ellipsis`, `overflow-clip`.
- **Line Height**: `leading-tight`, `leading-normal`, `leading-loose`.
- **Letter Spacing**: `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`.

## Borders & Rings
### Borders
- **Border Width**: `border-(side)-(amt)` (e.g., `border-t-4` for a 4px top border).
- **Border Opacity**: `border-opacity-amt` (amount as a percentage).
- **Border Colors**: `border-color-number` (similar to text colors).
- **Border Radius**: `rounded-(side)-(amt)` (e.g., `rounded-t-lg` for a large top border-radius).
- **Border Styles**: `border-solid`, `border-dashed`, `border-dotted`, etc.

### Rings
- Rings are similar to borders but apply **outside the element**. They use box shadows.
- **Ring Width**: `ring-amt` (e.g., `ring-2` for a 2px ring).
- **Ring Colors**: `ring-color-number` and `ring-offset-color-number`.

## Divide Utilities
To set borders between elements:
1. **Width**: `divide-x-amt`, `divide-y-amt` (e.g., `divide-y-2` for 2px vertical border).
2. **Color**: `divide-color-amt`.
3. **Opacity**: `divide-opacity-amt`.
4. **Styles**: `divide-solid`, `divide-dashed`, etc.

## Background Utilities
- **Background Colors**: `bg-color-number`.
- **Background Opacity**: `bg-opacity-amt`.
- **Background Size**: `bg-auto`, `bg-cover`, `bg-contain`.
- **Background Position**: `bg-top`, `bg-center`, `bg-bottom`.
- **Gradients**: `bg-gradient-to-(direction)` (e.g., `bg-gradient-to-r` for a right gradient).

## Box Shadow
- **Shadows**: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-none`, etc.

## Width, Height, Padding, and Margin
- **Width**: `w-auto`, `w-full`, `w-screen`, `max-w-xs`, etc.
- **Height**: `h-auto`, `h-full`, `h-screen`.
- **Padding**: `p-amt` (e.g., `p-4` for padding on all sides). `px-amt`, `py-amt` for horizontal and vertical padding.
- **Margin**: `m-amt` for margin. Can also use negative margins, e.g., `-m-4`.

## Display & Position
- **Block**: `block` (takes up the whole width).
- **Inline-Block**: `inline-block` (respects width and height but arranges inline).
- **Flex**: `flex`, `flex-row`, `flex-col`.
- **Table**: `table`, `table-cell`, etc.

## Flexbox
- **Flex Directions**: `flex-row`, `flex-col`, `flex-row-reverse`, `flex-col-reverse`.
- **Flex Growth**: `flex-1`, `flex-auto`, `flex-initial`, `flex-none`.

---

#### Tailwind CSS Cheatsheet [Link](https://nerdcave.com/tailwind-cheat-sheet)
