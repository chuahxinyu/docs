import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://chuahxinyu.github.io",
  integrations: [
    starlight({
      title: "Xin Yu's Docs",
      social: {
        github: "https://github.com/chuahxinyu/",
      },
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      sidebar: [
        {
          label: "Unimelb Notes",
          items: [
            {
              label: "About",
              link: "/unimelb/about",
            },
            {
              label: "Year 1",
              items: [
                {
                  label: "💻 COMP10001 Foundations of Computing",
                  autogenerate: {
                    directory: "unimelb/comp10001",
                  },
                },
                {
                  label: "💻 COMP10002 Foundations of Algorithms",
                  autogenerate: {
                    directory: "unimelb/comp10002",
                  },
                },
                {
                  label: "MAST10006 Calculus 2",
                  link: "unimelb/mast10006",
                },
              ],
            },
            {
              label: "Year 2",
              items: [],
            },
            {
              label: "Year 3",
              items: [
                {
                  label: "MUSI20174",
                  autogenerate: {
                    directory: "unimelb/musi20174",
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
