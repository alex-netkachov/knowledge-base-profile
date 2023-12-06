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

- Excalidraw
- GitHub Copilot
- Markdown Full Text Search
- Markdown Preview Mermaid Support
- markdownlint
- Rainbow CSV
- Live Preview
- vscode-pdf

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
