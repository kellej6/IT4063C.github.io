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

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        docsRouteBasePath: ["syllabus","course-notes","assignments","guides"],
        docsDir: ["content"],
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

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
          editUrl: "https://github.com/IT4063C/IT4063C.github.io/tree/main/",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All Posts"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-L3TFQLL3Z9',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
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
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "others",
        path: "content/other",
        routeBasePath: "/",
        editUrl: "https://github.com/IT4063C/IT4063C.github.io/tree/main/",
        editCurrentVersion: true,
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
      announcementBar: {
        id: 'support_us',
        content:'Welcome to Fall 2022',
        backgroundColor: 'var(--ifm-color-primary)',
        textColor: '#ffffff',
        isCloseable: false,
      },
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
                to: "guides/faq",
                label: "FAQ",
              },
              {
                to: "guides/contribution",
                label: "Contribution Guide",
              },
              {
                to: "guides/code-style",
                label: "Code Style Guide",
              },
              {
                to: "guides/datasets",
                label: "Datasets",
              },
            ],
          },
          {
            to: "/blog",
            label: "🌐 Blog",
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
                label: "Credits",
                to: "/credits",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "MS Teams",
                href: "https://teams.microsoft.com/l/channel/19%3a976a811940c84a6aac3dd4c88a4567bf%40thread.tacv2/%25E2%259D%2593Ask%2520Questions?groupId=aea6a338-ecb8-42d7-94d9-5a4af5419a73&tenantId=f5222e6c-5fc6-48eb-8f03-73db18203b63",
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
              // {
              //   label: "Classwork Repo",
              //   href: "#",
              // },
              {
                label: "GitHub Organization",
                href: "https://github.com/IT4063C/",
              },
              {
                label: "GitHub Student Org",
                href: "https://github.com/IT4063C-Fall22",
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
