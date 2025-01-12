
# Installing Tailwind CSS with Vite

---

## Step 1: Install Tailwind CSS

1. Install Tailwind CSS and its peer dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```
2. Initialize the Tailwind CSS configuration file:
   ```bash
   npx tailwindcss init -p
   ```

---

## Step 3: Configure Tailwind CSS

1. Open the `tailwind.config.js` file and configure the `content` property to point to your project files:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

---

## Step 4: Add Tailwind Directives to Your CSS

1. Create a new CSS file (e.g., `src/index.css`) and add the following Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. Update the `vite.config.js` file to include the new CSS file (if needed).
