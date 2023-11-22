---
title: How this website was made :P
---

## Technologies

- [Astro](https://astro.build/)
  - > a javascript framework for building web applications with less code and better performance
- [Starlight](https://starlight.astro.build/)
  - > a full-featured documentation theme built on top of the Astro framework

I use markdown (`.md`) and [MDX (`.mdx`)](https://mdxjs.com/docs/) to write the content of the website.

MDX can be extended with React components, which is useful for adding math and other interactive elements, and [plugins](https://docs.astro.build/en/guides/markdown-content/#markdown-plugins).

The table of contents of every page is automatically generated when using starlight and the `#` markdown syntax. But it could have also been done using a plugin ([remark-toc](https://github.com/remarkjs/remark-toc)).

The math, which is written in LaTeX, is also rendered using plugins using [remark-math](https://github.com/remarkjs/remark-math) and [rehype-katex](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex).

## Useful

- Finding and replacing md png paths
  - Used for moving pngs' directories
  - `\((\S+).png\)` -> `![](/src/assets/mast10006/$1.png)`

## Resources
- https://jordemort.dev/blog/remark-all-the-things/
- https://kroki.io/
- https://www.npmjs.com/package/rehype-accessible-emojis