# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

#### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./public/assets/preview.jpg)


### Links

- Code URL: [here](https://github.com/Lfrancos/fm-sp-portafolio)
- Live Site URL: [here](https://fm-sp-portafolio.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework


### What I learned

This was a really interesting challenge, when I saw that I had to create gallery slider I got intimidated, since I had never done one. But It was really exiting to see that I was able to solve the problem with out any external help. Still I think that the logic that I came up with is far from being something for production.

I'm also getting a little bit more familiar with the way the images work in Nextjs. I feel that they are not that intuitive but now I know that using:
>```
> "layout: "responsive"
> ```
With this layout responsive the width and height are just a reference for the aspect ratio of the image. That way you can add an image container on top of the Image and control it really easily.


### Continued development

I need to keep practicing my layout skills so that I don't have to think so much about it but I'm feeling really comfortable with what I'm doing.

Something that I really need to pay more attention and I should not waste any more time is to practice more in [codewars](https://www.codewars.com/). I was doing it and stopped because I wanted to have a better base of react. I think that even though there are a lot of things that I still don't know and there are a lot of things that I should improve, I need to pay more attention to my problem solving skills. That is the real important thing to learn in software development.


I need to pay more attention to accessibility. This is something that I have not pay to much attention but I understand how important it is : )

I was able to make the gallery work using the keyboard and the mouse, but I'm not sure how to see if it is working with a trackpad I need to keep investigating to se how that works.

Testing the website I realized that for accessibility I used the "selected" attribute in css so that you could see what you had selected with the keyboard. But realized that it also affected the styles when using the mouse. I need to figure out how to fix that.///

### Useful resources

For this exercise in particular I didn't use any resources. But the resources that have helped me get a lot of knowledge and be able to solve something like this are:

- [Code with Mosh](https://codewithmosh.com/) - I have taken a lot of courses in here. I highly recommend:

  - Mastering react
  - The Ultimate JavaScript part 1
  - The Ultimate JavaScript part 2

- [Web dev simplified](https://courses.webdevsimplified.com/) - I took javascript simplified and it helped me a ton to understand the basics of web development.

- [Next.js: El framework de React para producción](https://www.udemy.com/course/nextjs-fh/learn/lecture/30687624) - This tutorial is in spanish but it is really good for learning and understanding how powerful Next JS is.
## Author

- Website - [@lorenzo.francos](https://www.lorenzofrancos.com)
- Instagram - [@lorenzo.francos](https://www.instagram.com/lorenzo.francos/?hl=en)
- Github - [@Lfrancos](https://github.com/Lfrancos)
- Frontend Mentor - [@Lfrancos](https://www.frontendmentor.io/profile/Lfrancos)





---
---




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
