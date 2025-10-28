---
title: Matter Squared
tags: [Windhawk Themes, Advanced Customization, File Explorer Theme]
summary: >
  Theme for Windows 11 File Explorer Styler based off of the Matter theme.
nav_exclude: true
permalink: /WindhawkThemes/c/FileExplorerStyler/MatterSquared
---


## Matter Squared
Theme for Windows 11 File Explorer Styler based off of the Matter theme.

[![Matter Squared Preview](/assets/images/previews/file-explorer-styler/matter-squared.bmp)](/assets/images/previews/file-explorer-styler/matter-squared.bmp)

### Requirements

- [Windhawk](https://windhawk.net/)
- [Windows 11 File Explorer Styler](https://windhawk.net/mods/windows-11-file-explorer-styler)

### Installation

- Open the Windows 11 File Explorer Styler mod in Windhawk.
- Go to the "Advanced" tab.
- Copy the content below to the text box under "Mod settings" and click "Save".

```json
{
  "explorerFrameContainerHeight": 0,
  "theme": "Matter",
  "controlStyles[0].target": "TabViewItem > Grid#LayoutRoot",
  "controlStyles[0].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[1].target": "Grid#PART_LayoutRoot",
  "controlStyles[2].target": "AutoSuggestBox#FileExplorerSearchBox > Grid#LayoutRoot > TextBox > Grid@CommonStates > Border#BorderElement",
  "controlStyles[2].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[1].styles[0]": "CornerRadius=$CornerRadius",
  "resourceVariables[0].variableKey": "",
  "resourceVariables[0].value": "",
  "styleConstants[0]": "CornerRadius=4"
}
```

---

<a href="/WindhawkThemes" class="btn btn--secondary btn--sm">Back to Windhawk Themes</a>