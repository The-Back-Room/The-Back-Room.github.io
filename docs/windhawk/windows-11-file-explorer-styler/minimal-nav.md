---
title: Minimal Nav
description: Nav bar edit of the Minimal Explorer11 theme
parent: Windows 11 File Explorer Styler
grand_parent: WindHawk
permalink: /windhawk/windows-11-file-explorer-styler/minimal-nav
---

![Preview][Preview]

### Installation

- Copy the code below into `WindHawk >> Windows 11 File Explorer Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`

```json
{
  "controlStyles[0].target": "FileExplorerExtensions.CommandBarControl",
  "controlStyles[0].styles[0]": "Visibility=Collapsed",
  "controlStyles[1].target": "FileExplorerExtensions.NavigationBarControl",
  "controlStyles[1].styles[0]": "Grid.RowSpan=2",
  "controlStyles[1].styles[1]": "Margin=0,0,0,1",
  "controlStyles[2].target": "Grid#PART_LayoutRoot > Grid#NormalModeGrid",
  "controlStyles[2].styles[0]": "BorderThickness=0,0,0,1",
  "controlStyles[2].styles[1]": "BorderBrush=#A0A0A0",
  "controlStyles[3].target": "TabViewItem",
  "controlStyles[3].styles[0]": "Margin=0,0,3,0",
  "controlStyles[4].target": "TabViewItem > Grid#LayoutRoot",
  "controlStyles[4].styles[0]": "CornerRadius=4",
  "controlStyles[4].styles[1]": "Margin=0,-3,0,3",
  "controlStyles[4].styles[2]": "Height=28",
  "controlStyles[5].target": "TabViewItem > Grid#LayoutRoot > Canvas",
  "controlStyles[5].styles[0]": "Visibility=Collapsed",
  "controlStyles[6].target": "TabViewItem > Grid#LayoutRoot > Grid#TabContainer",
  "controlStyles[6].styles[0]": "Background=Transparent",
  "controlStyles[6].styles[1]": "BorderBrush=Transparent",
  "controlStyles[7].target": "TabViewItem > Grid#LayoutRoot@CommonStates",
  "controlStyles[7].styles[0]": "Background@Selected:=<SolidColorBrush Color=\"#808080\" Opacity=\"0.35\"/>",
  "controlStyles[7].styles[1]": "Background@PointerOverSelected:=<SolidColorBrush Color=\"#808080\" Opacity=\"0.35\"/>",
  "controlStyles[7].styles[2]": "Background@PointerOver:=<AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.5\"/>",
  "controlStyles[7].styles[3]": "Background@Normal:=<AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.05\"/>",
  "controlStyles[7].styles[4]": "Background@PressedSelected:=<SolidColorBrush Color=\"#808080\" Opacity=\"0.35\"/>",
  "explorerFrameContainerHeight": 87
}
```

<!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

[Preview]: https://gitlab.com/the-back-room/windhawk/-/raw/main/Windows-11-File-Explorer-Styler/minimal-tabbed/Extras/Preview.png

<!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
