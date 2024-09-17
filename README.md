# REACT: CLIENT
`<h1>Hello</h1>` -> Babel
`React.createElement("h1", "Hello")` -> React Library
`document.createElemenent("h1", "Hello");` -> Vanilla JS

# RSC: SERVER - NEXTJS
`<h1>Hello</h1>` -> `React.createElement("h1", "Hello")` -> `document.createElemenent("h1", "Hello");`
Next.js in the **server**

---

next.config.js -> package.json for Next.js

**React Routing**
src/
    components/
        404.jsx
        NavBar.jsx
    SignUp.jsx
    App.jsx
    index.js

*React Router*: index.js -> link /sign-up to SignUp.tsx

**Next.js Routing**
src/
    app/
        sign-up/
            page.tsx
            ?layout.tsx
        blog/
            [slug].tsx
        page.tsx
        layout.tsx
    server/
        api/
            index.js
    styles/
        global.css

**App Router and Page Router**
app/ page/

# TypeScript
* is a superset of JavaScript

```js
var x = 10;
var y = 20;
x = "hello";

x + y // Error
```

```ts
var x: number = 10;
var y: number = 20;
x = "hello"; // Error

x + y
```
