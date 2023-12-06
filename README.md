# Knowledge Base Profile

Knowledge Base Profile is a Visual Studio Code profile (settings, extensions and their configurations) for knowledge management.

In this profile, editor and plugins are configured to increase productivity of organizing, adding, transformting, and searching information.

The core concepts of this profile are:

- the knowledge base is organised as articles in a folder hierarchy
- each article is a Markdown file
- articles are linked to each other using markdown links

The Visual Studio Code configuration concepts:

- the Markdown settings are configured to be compatible with other knowledge management tools
- UI is configured to be minimalistic and distraction-free
- extensions for visualising and searching the knowledge base are installed

## Installation

1. Download the profile to a file, e.g. `Knowledge Base.code-profile`
2. Import the profile in your local Visual Studio Code

## Updates

Once imported, profile does not update automatically. You either re-import the profile or update the settings manually.

## Extensions

The following extensions are installed:

- [Excalidraw](#excalidraw)
- [GitHub Copilot](#github-copilot)
- [GitHub Copilot Chat](#github-copilot-chat)
- [Markdown Full Text Search](#markdown-full-text-search)
- [Markdown Preview Mermaid Support](#markdown-preview-mermaid-support)
- [markdownlint](#markdownlint)
- [Rainbow CSV](#rainbow-csv)
- [Live Preview](#live-preview)
- [vscode-pdf](#vscode-pdf)

### Excalidraw

[Marketplace](<https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor>)

Excalidraw is a whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.

### GitHub Copilot

[Marketplace](<https://marketplace.visualstudio.com/items?itemName=GitHub.copilot>)

GitHub Copilot is an AI pair programmer that helps you write code faster and with less work.

### GitHub Copilot Chat

[Marketplace](<https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat>)

Allows you to chat with GitHub Copilot.

### Markdown Full Text Search

[Marketplace](<https://marketplace.visualstudio.com/items?itemName=AlexandriteSoftware.markdown-search>)

Allows you to search for text in Markdown files.

### Markdown Preview Mermaid Support

[Marketplace](<https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid>)

Adds Mermaid diagram and flowchart support to VS Code's builtin markdown preview.

### markdownlint

[Marketplace](<https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>)

Markdown linting and style checking.

### Rainbow CSV

[Marketplace](<https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv>)

Highlight columns in CSV and TSV files.

### Live Preview

[Marketplace](<https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server>)

Launch a development local Server with live reload feature for static & dynamic pages.

### vscode-pdf

[Marketplace](<https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf>)

Enables viewing PDF files.

## Settings

The following settings are configured:

```json
{
  "breadcrumbs.enabled": false,
  "diffEditor.ignoreTrimWhitespace": true,
  "editor.fontLigatures": true,
  "editor.inlineSuggest.enabled": true,
  "editor.glyphMargin": false,
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "none",
  "editor.tabSize": 2,
  "explorer.decorations.badges": false,
  "explorer.decorations.colors": false,
  "files.autoSave": "afterDelay",
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "scminput": false
  },
  "markdown.updateLinksOnFileMove.enabled": "prompt",
  "markdown.validate.enabled": true,
  "security.workspace.trust.untrustedFiles": "open",
  "window.commandCenter": true,
  "workbench.editor.empty.hint": "hidden",
  "workbench.editor.untitled.hint": "hidden",
  "workbench.colorTheme": "Default Light Modern",
  "workbench.startupEditor": "none"
}
```
