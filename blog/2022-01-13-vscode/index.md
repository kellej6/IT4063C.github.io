---
slug: vscode-extensions
title: Visual Studio Code Settings and Extensions Sync
authors: [ygilany]
tags: [vscode, uses]
---

In my demo videos, you may notice that my Visual Studio Code IDE, provides with me with a lot of cheaters, helpers, and utilities that makes development a little easier.
In this post, I'm sharing some instructions for how you can setup you VSCode IDE with the same settings and extensions I have here.

To get started:

1. you're going to need to install the Settings [Sync Extension](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) on VSCode.
  - Go to the link and click install. It will open VSCode and open the extension page
  - Click on `install` to download the extension
<img alt="image 1" src={require('./assets/1.png').default} style={{border: `1px solid black`, marginBottom:`2em`}} />

2. Once installed open VSCode Command Palette using:
  - For Windows: `ctrl`+`shift`+`P`
  - For Mac: `cmd`+`shift`+`P`

3. In the command palette, type `Sync: Download Settings`
<img alt="image 2" src={require('./assets/2.png').default} style={{border: `1px solid black`, marginBottom:`2em`}} />

1. On the Following Screen, click on Download Public Gist and type in `416f36fd3c23571ecab1d3f3a5815fea`
<img alt="image 3" src={require('./assets/3.png').default} style={{border: `1px solid black`, marginBottom:`2em`}} />

5. Open the command palette and type `Sync: Download Settings` again and watch the extensions get installed.

6. You may need to close VSCode and open it again for all extensions to take effect.


## Some of my Extensions
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

