// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IT4063C - Data Technologies Analytics",
  tagline: "Yahya Gilany",
  url: "https://it4063C.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/1643996.png",
  // For GitHub Pages
  organizationName: "IT4063C", // Usually your GitHub org/user name.
  projectName: "IT4063C.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  customFields: {
    classType: `online`,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve(
            "./docs/ta/sidebarsTA.js"
          ),
          path: "docs/ta",
          routeBasePath: "ta",
          editUrl: "https://github.com/IT4063C/IT4063C.github.io/tree/main/",
          remarkPlugins: [require("mdx-mermaid")],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/IT4063C/IT4063C.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    "@docusaurus/theme-live-codeblock",
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "instructor",
        path: "content/instructor",
        routeBasePath: "instructor",
        editUrl: "https://github.com/IT4063C/IT4063C.github.io/tree/main/",
        editCurrentVersion: true,
        sidebarPath: require.resolve(
          "./content/instructor/sidebarsInstructor.js"
        ),
        remarkPlugins: [require("mdx-mermaid")],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "course-notes",
        path: "content/course-notes",
        routeBasePath: "course-notes",
        editUrl: "https://github.com/IT4063C/IT4063C.github.io/tree/main/",
        editCurrentVersion: true,
        sidebarPath: require.resolve(
          "./content/course-notes/sidebarsCourseNotes.js"
        ),
        remarkPlugins: [require("mdx-mermaid")],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "labs",
        path: "content/assignments",
        routeBasePath: "assignments",
        editUrl: "https://github.com/IT4063C/IT4063C.github.io/tree/main/",
        editCurrentVersion: true,
        sidebarPath: require.resolve(
          "./content/assignments/sidebarsCoursework.js"
        ),
        remarkPlugins: [require("mdx-mermaid")],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "syllabus",
        path: "content/syllabus",
        routeBasePath: "syllabus",
        editUrl: "https://github.com/IT4063C/IT4063C.github.io/tree/main/",
        editCurrentVersion: true,
        sidebarPath: require.resolve("./content/syllabus/sidebarsSyllabus.js"),
        remarkPlugins: [require("mdx-mermaid")],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "guides",
        path: "content/guides",
        routeBasePath: "guides",
        editUrl: "https://github.com/IT4063C/IT4063C.github.io/tree/main/",
        editCurrentVersion: true,
        sidebarPath: require.resolve("./content/guides/sidebarsGuides.js"),
        remarkPlugins: [require("mdx-mermaid")],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],

  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#880000',
      //   textColor: '#ffffff',
      //   isCloseable: false,
      // },
      // algolia: {
      //   appId: 'FWEZXU580G',
      //   apiKey: '0dc5cdf1f080b8c8be89878e5598fc45',
      //   indexName: 'course-site',
      // },
      image: "img/nbdoc_diagram.png",
      navbar: {
        title: "IT4063C",
        logo: {
          alt: "My Site Logo",
          src: "img/python-analytics.png",
        },
        items: [
          {
            to: "/syllabus/info",
            label: "📚 Syllabus",
          },
          {
            to: "/course-notes",
            label: "📝 Course Notes",
          },
          {
            to: "/assignments",
            label: "💯 Assignments",
          },
          {
            label: "🧭 Guides",
            items: [
              {
                to: "guides/code-style",
                label: "Code Style Guide",
              },
              {
                to: "guides/datasets",
                label: "Datasets",
              },
              {
                to: "guides/contribution",
                label: "Contribution Guide (extra credit)",
              },
              {
                to: "guides/misc",
                label: "misc",
              },
            ],
          },
          {
            to: "/blog",
            label: "🌐 Blog",
          },
          {
            to: "/instructor",
            label: "👨‍🏫",
          },
          {
            href: "https://ygilany-solution-access.herokuapp.com",
            label: "Solutions Access",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Site map",
            items: [
              {
                label: "Syllabus",
                to: "/syllabus/info",
              },
              {
                label: "Assignments",
                to: "/assignments",
              },
              {
                label: "Contributing",
                to: "/guides/contribution",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "MS Teams",
                href: "https://teams.microsoft.com/l/channel/19%3a30e5da231a654578a9f04859d49dc410%40thread.tacv2/%25F0%259F%2586%2598%2520Help%2520-%2520Ask%2520Questions?groupId=24ca8848-d758-42dc-9a5f-85467f5ded68&tenantId=f5222e6c-5fc6-48eb-8f03-73db18203b63",
              },
              {
                label: "⏰ Scheduler",
                href: "https://outlook.office365.com/owa/calendar/OfficeHours@mailuc.onmicrosoft.com/bookings/s/EjGKKRXxgE6Ppb4z3AH9lg2",
              },
              {
                label: "✉️ Email",
                href: "mailto:yahya.gilany@uc.edu",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Solutions Access",
                href: "https://ygilany-solution-access.herokuapp.com",
              },
              {
                label: "Classwork Repo",
                href: "#",
              },
              {
                label: "GitHub Organization",
                href: "https://github.com/IT4063C/",
              },
              {
                label: "GitHub Assignment",
                href: "https://github.com/IT4063C-Students",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yahya Gilany.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
