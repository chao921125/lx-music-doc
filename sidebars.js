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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  // desktopSidebar: [{type: 'autogenerated', dirName: 'desktop'}],
  // mobileSidebar: [{type: 'autogenerated', dirName: 'mobile'}],
  desktopSidebar: [
    {
      type: 'category',
      label: '桌面版文档',
      link: { type: 'doc', id: 'desktop/index'},
      items: [
        {
          type: 'category',
          label: '常见问题',
          link: { type: 'doc', id: 'desktop/faq'},
          items: [
            { type: 'autogenerated', dirName: 'desktop/faq' }
          ],
        },
        {
          type: 'doc',
          id: 'desktop/scheme-url', // document ID
          label: 'Scheme URL支持', // sidebar label
        },
        {
          type: 'doc',
          id: 'desktop/run-params', // document ID
          label: '启动参数', // sidebar label
        },
        {
          type: 'doc',
          id: 'desktop/datapath', // document ID
          label: '数据存储路径', // sidebar label
        },
        {
          type: 'doc',
          id: 'desktop/custom-source', // document ID
          label: '自定义源脚本编写说明', // sidebar label
        },
        {
          type: 'doc',
          id: 'desktop/use-source-code', // document ID
          label: '源码使用方法', // sidebar label
        },
        {
          type: 'doc',
          id: 'desktop/license', // document ID
          label: '许可协议', // sidebar label
        },
      ],
    },
  ],
  mobileSidebar: [
    {
      type: 'category',
      label: '移动版文档',
      link: { type: 'doc', id: 'mobile/index'},
      items: [
        {
          type: 'category',
          label: '常见问题',
          link: { type: 'doc', id: 'mobile/faq'},
          items: [
            { type: 'autogenerated', dirName: 'mobile/faq' }
          ],
        },
        {
          type: 'doc',
          id: 'mobile/statusbar-lyric', // document ID
          label: '状态栏歌词', // sidebar label
        },
        {
          type: 'doc',
          id: 'mobile/datapath', // document ID
          label: '数据存储路径', // sidebar label
        },
        {
          type: 'doc',
          id: 'mobile/custom-source', // document ID
          label: '自定义源脚本编写说明', // sidebar label
        },
        {
          type: 'doc',
          id: 'mobile/use-source-code', // document ID
          label: '源码使用方法', // sidebar label
        },
        {
          type: 'doc',
          id: 'mobile/license', // document ID
          label: '许可协议', // sidebar label
        },
      ],
    },
  ],
};

module.exports = sidebars;
