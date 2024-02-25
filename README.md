# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for each of the website's pages depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://space-tourism-website-rust.vercel.app/](https://space-tourism-website-rust.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com) - For styles

### What I learned

I learn to use react router for the first time.

```jsx
<Routes>
  <Route path="/">
    <Route index element={<Home />}></Route>
    <Route path="destination" element={<Destination />}></Route>
    <Route path="crew" element={<Crew />}></Route>
    <Route path="technology" element={<Technology />}></Route>
  </Route>
  <Route path="index.html" element={<Home />}></Route>
  <Route path="*" element={<NotFound />}></Route>
</Routes>
```

### Continued development

- [] Replace React with Next.js
- [] Improve accessibility

<!-- ### Useful resources -->

## Author

- Website - [Basit Korai](https://basitkorai.vercel.app)
- Frontend Mentor - [@basit-flash](https://www.frontendmentor.io/profile/basit-flash)
