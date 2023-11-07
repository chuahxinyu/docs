import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://chuahxinyu.github.io",
  base: "/unimelb-notes",
  integrations: [
    starlight({
      title: "🎓 Unimelb Notes",
      social: {
        github: "https://github.com/chuahxinyu/unimelb-notes",
      },
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      sidebar: [
        {
          label: "🎓 Unimelb Notes",
          items: [
            {
              label: "Year 1",
              collapsed: true,
              items: [
                {
                  label: "💻 COMP10001 Foundations of Computing",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/comp10001",
                  },
                },
                {
                  label: "🧮 MAST10006 Calculus 2",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/mast10006",
                  },
                },
                {
                  label: "🔬 PHYC10009 Foundations of Physics",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/phyc10009",
                  },
                },
                {
                  label: "💻 COMP10002 Foundations of Algorithms",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/comp10002",
                  },
                },
                {
                  label: "🧮 MAST10007 Linear Algebra",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/mast10007",
                  },
                },
                {
                  label: "🗄️ INFO20003 Database Systems",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/info20003",
                  },
                },
                {
                  label: "🎮 CCDP10003 Video Games: Remaking Reality",
                  collapsed: true,
                  autogenerate: {
                    directory: "year1/ccdp10003",
                  },
                },
              ],
            },
            {
              label: "Year 2",
              collapsed: true,
              items: [
                {
                  label: "💻 COMP20007 Design of Algorithms",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/comp20007",
                  },
                },
                {
                  label: "💻 COMP20008 Elements of Data Processing",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/comp20008",
                  },
                },
                {
                  label: "SWEN20003 Object Oriented Software Development",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/swen20003",
                  },
                },
                {
                  label: "EDUC10057 Wellbeing, Motivation and Performance",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/educ10057",
                  },
                },
                {
                  label: "INFO30006 Information Security and Privacy",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/info30006",
                  },
                },
                {
                  label: "COMP30020 Declarative Programming",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/comp30020",
                  },
                },
                {
                  label: "COMP30026 Models of Computation",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/comp30026",
                  },
                },
                {
                  label: "COMP30019 Graphics and Interaction",
                  collapsed: true,
                  autogenerate: {
                    directory: "year2/comp30019",
                  },
                },
              ],
            },
            {
              label: "Year 3",
              items: [
                {
                  label: "MUSI20174",
                  autogenerate: {
                    directory: "musi20174",
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
