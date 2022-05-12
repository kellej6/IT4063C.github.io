/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  coursework: [
    'index',
    {
      type: `category`,
      label: `Labs`,
      collapsed: false,
      link: {
        type: `generated-index`
      },
      items:[
        `labs/hello-world/index`,
        `labs/my-story/index`,
      ]
    },
    {
      type: `category`,
      label: `Assignments`,
      collapsed: false,
      link: {
        type: `generated-index`
      },
      items:[
        `assignments/my-story/index`,
      ]
    }
  ]
};

module.exports = sidebars;
