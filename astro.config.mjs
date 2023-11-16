import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://chuahxinyu.github.io",
  base: "/unimelb-notes",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeExternalLinks],
  },
  integrations: [
    starlight({
      title: "🎓 Xin Yu's NoteZzz",
      social: {
        github: "https://github.com/chuahxinyu/unimelb-notes",
      },
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
        "./src/katex.css",
      ],
      sidebar: [
        {
          label: "📚 Unimelb Notes",
          badge: {
            text: "ARCHIVE",
            variant: "danger",
          },
          items: [
            {
              label: "About",
              link: "/",
            },
            {
              label: "Uni Tips",
              link: "/tips",
            },
            {
              label: "Year 1",
              items: [
                {
                  label: "💻 COMP10001",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/comp10001",
                  },
                  badge: {
                    text: "core",
                    variant: "note",
                  },
                },
                {
                  label: "🧮 MAST10006",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/mast10006",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },
                {
                  label: "🔬 PHYC10009",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/phyc10009",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },
                {
                  label: "💰 FNCE10002",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/fnce10002",
                  },
                  badge: {
                    text: "breadth",
                    variant: "tip",
                  },
                },
                {
                  label: "💻 COMP10002",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/comp10002",
                  },
                  badge: {
                    text: "core",
                    variant: "note",
                  },
                },
                {
                  label: "🗄️ INFO20003",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/info20003",
                  },
                  badge: {
                    text: "core",
                    variant: "note",
                  },
                },
                {
                  label: "🧮 MAST10007",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/mast10007",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },

                {
                  label: "🎮 CCDP10003",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/ccdp10003",
                  },
                  badge: {
                    text: "breadth",
                    variant: "tip",
                  },
                },
              ],
            },
            {
              label: "Year 2",
              items: [
                {
                  label: "💻 COMP20007",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/comp20007",
                  },
                  badge: {
                    text: "core",
                    variant: "note",
                  },
                },
                {
                  label: "💻 SWEN20003",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/swen20003",
                  },
                  badge: {
                    text: "core",
                    variant: "note",
                  },
                },
                {
                  label: "🧮 COMP20008",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/comp20008",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },
                {
                  label: "🍃 EDUC10057",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/educ10057",
                  },
                  badge: {
                    text: "breadth",
                    variant: "tip",
                  },
                },
                {
                  label: "💻 COMP30026",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/comp30026",
                  },
                  badge: {
                    text: "core",
                    variant: "note",
                  },
                },
                {
                  label: "🛡️ INFO30006",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/info30006",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },
                {
                  label: "🧮 COMP30020",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/comp30020",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },
                {
                  label: "👾 COMP30019",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/comp30019",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },
              ],
            },
            {
              label: "Year 3",
              items: [
                {
                  label: "💻 COMP30023",
                  collapsed: true,
                  autogenerate: {
                    directory: "year3/comp30023",
                  },
                  badge: {
                    text: "core",
                    variant: "note",
                  },
                },
                {
                  label: "💻 SWEN30026",
                  collapsed: true,
                  autogenerate: {
                    directory: "year3/swen30026",
                  },
                  badge: {
                    text: "core",
                    variant: "note",
                  },
                },
                {
                  label: "🤖 COMP30024",
                  collapsed: true,
                  autogenerate: {
                    directory: "year3/comp30024",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },
                {
                  label: "🧮 COMP30027",
                  collapsed: true,
                  autogenerate: {
                    directory: "year3/comp30027",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },
                {
                  label: "💻 COMP30022",
                  collapsed: true,
                  autogenerate: {
                    directory: "year3/comp30022",
                  },
                  badge: {
                    text: "core",
                    variant: "note",
                  },
                },
                {
                  label: "🧮 MAST20018",
                  collapsed: true,
                  autogenerate: {
                    directory: "year3/mast20018",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },
                {
                  label: "🔬 SCIE20001",
                  collapsed: true,
                  autogenerate: {
                    directory: "year3/scie20001",
                  },
                  badge: {
                    text: "elec",
                    variant: "success",
                  },
                },
                {
                  label: "🎶 MUSI20174",
                  collapsed: true,
                  autogenerate: {
                    directory: "year3/musi20174",
                  },
                  badge: {
                    text: "breadth",
                    variant: "tip",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "📝 TCFS Notes",
          badge: {
            text: "ARCHIVE",
            variant: "danger",
          },
          items: [
            {
              label: "About",
              link: "/tcfs",
            },
            {
              label: "English For Academic Purposes",
              collapsed: true,
              autogenerate: {
                directory: "tcfs/eap",
              },
            },
            {
              label: "Environment, Development and Design",
              collapsed: true,
              autogenerate: {
                directory: "tcfs/edd",
              },
            },
            {
              label: "History of Ideas",
              collapsed: true,
              autogenerate: {
                directory: "tcfs/hoi",
              },
            },
            {
              label: "Literature",
              collapsed: true,
              autogenerate: {
                directory: "tcfs/lit",
              },
            },
            {
              label: "Mathematics 1",
              collapsed: true,
              autogenerate: {
                directory: "tcfs/m1",
              },
            },
            {
              label: "Mathematics 2",
              collapsed: true,
              autogenerate: {
                directory: "tcfs/m2",
              },
            },
          ],
        },
        {
          label: "🎱 Other",
          collapsed: false,
          autogenerate: {
            directory: "other",
          },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
    react(),
  ],
});
