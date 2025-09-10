---
title: Acrylic UI
summary: Simple acrylic theme for Windows 11 File Explorer Styler
parent: File Explorer Styler
grand_parent: Windhawk
permalink: /windhawk/file-explorer-styler/acrylic
---

## Acrylic UI
Simple acrylic theme for Windows 11 File Explorer Styler

![Preview](https://raw.githubusercontent.com/The-Back-Room/The-Back-Room.github.io/refs/heads/main/docs/assets/images/previews/file-explorer-styler/acrylic.bmp)

### Requirements

- [Windhawk](https://windhawk.net/) Plugin: [Windows 11 File Explorer Styler](https://windhawk.net/mods/windows-11-file-explorer-styler)
- [Windhawk](https://windhawk.net/) Plugin: [Translucent Windows](https://windhawk.net/mods/translucent-windows)

### Installation

- Copy and paste the code below into `Windhawk >>  Windows 11 File Explorer Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`
- Turn on the following settings in `Windhawk > Translucent Windows > Settings`:
  - `Windows theme custom rendering`
  - `Windows theme accent colorizer`
  - `Immersive darkmode titlebar`
  - `Extend effects into entire window`
- Set `Windhawk > Translucent Windows > Settings > Effects` to `Acrylic (SystemBackdrop)`

```json
{
  "theme": "",
  "explorerFrameContainerHeight": 0,
  "controlStyles[0].target": "AppBarButton#backButton > Grid#Root@CommonStates > Border#AppBarButtonInnerBorder",
  "controlStyles[0].styles[0]": "Background@Normal := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.07\"/>",
  "controlStyles[0].styles[1]": "Background@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.12\"/>",
  "controlStyles[0].styles[2]": "Background@Pressed := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.12\"/>",
  "controlStyles[0].styles[3]": "Background@Disabled := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.05\"/>",
  "controlStyles[1].target": "AppBarButton#forwardButton > Grid#Root@CommonStates > Border#AppBarButtonInnerBorder",
  "controlStyles[1].styles[0]": "Background@Normal := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.05\"/>",
  "controlStyles[1].styles[1]": "Background@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.12\"/>",
  "controlStyles[1].styles[2]": "Background@Pressed := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.12\"/>",
  "controlStyles[1].styles[3]": "Background@Disabled := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.05\"/>",
  "controlStyles[2].target": "AppBarButton#refreshButton",
  "controlStyles[2].styles[0]": "Visibility = Collapsed",
  "controlStyles[3].target": "AppBarButton#upButton",
  "controlStyles[3].styles[0]": "Visibility = Collapsed",
  "controlStyles[4].target": "Border#BottomBorderLine",
  "controlStyles[4].styles[0]": "Visibility = Collapsed",
  "controlStyles[5].target": "FileExplorerExtensions.AddressBarControl > Grid#PART_LayoutRoot > Grid#NormalModeGrid",
  "controlStyles[5].styles[0]": "BorderThickness = 1",
  "controlStyles[5].styles[1]": "BorderBrush = <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.5\" />",
  "controlStyles[5].styles[2]": "CornerRadius = $radius",
  "controlStyles[6].target": "Grid#NavigationBarControlGrid",
  "controlStyles[6].styles[0]": "Background := Transparent",
  "controlStyles[7].target": "CommandBar#FileExplorerCommandBar",
  "controlStyles[7].styles[0]": "Background := Transparent",
  "controlStyles[8].target": "Grid#CommandBarControlRootGrid",
  "controlStyles[8].styles[0]": "Background := Transparent",
  "controlStyles[9].target": "Grid#TabContainerGrid > Border#LeftBottomBorderLine",
  "controlStyles[9].styles[0]": "Visibility = Collapsed",
  "controlStyles[10].target": "Grid#TabContainerGrid > Border#RightBottomBorderLine",
  "controlStyles[10].styles[0]": "Visibility = Collapsed",
  "controlStyles[11].target": "TabViewItem",
  "controlStyles[11].styles[0]": "Margin = 0,0,3,0",
  "controlStyles[12].target": "TabViewItem > Grid#LayoutRoot",
  "controlStyles[12].styles[0]": "CornerRadius = $radius",
  "controlStyles[12].styles[1]": "Margin = 0,-3,0,3",
  "controlStyles[12].styles[2]": "Height = 28",
  "controlStyles[13].target": "TabViewItem > Grid#LayoutRoot > Canvas",
  "controlStyles[13].styles[0]": "Visibility = Collapsed",
  "controlStyles[14].target": "TabViewItem > Grid#LayoutRoot > Grid#TabContainer",
  "controlStyles[14].styles[0]": "Background := Transparent",
  "controlStyles[14].styles[1]": "BorderBrush := Transparent",
  "controlStyles[15].target": "TabViewItem > Grid#LayoutRoot@CommonStates",
  "controlStyles[15].styles[0]": "Background@Selected := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.35\" />",
  "controlStyles[15].styles[1]": "Background@PointerOverSelected := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.35\" />",
  "controlStyles[15].styles[2]": "Background@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.13\" />",
  "controlStyles[15].styles[3]": "Background@Normal := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.05\" />",
  "controlStyles[15].styles[4]": "Background@PressedSelected := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.35\" />",
  "controlStyles[16].target": "AppBarButton#backButton > Grid#Root",
  "controlStyles[16].styles[0]": "Padding = 2",
  "controlStyles[17].target": "AppBarButton#forwardButton > Grid#Root",
  "controlStyles[17].styles[0]": "Padding = 2",
  "controlStyles[18].target": "AppBarButton#forwardButton > Grid#Root > Grid#ContentRoot > Viewbox#ContentViewbox",
  "controlStyles[18].styles[0]": "Margin = 9",
  "controlStyles[19].target": "AppBarButton#backButton > Grid#Root > Grid#ContentRoot > Viewbox#ContentViewbox",
  "controlStyles[19].styles[0]": "Margin = 9",
  "controlStyles[20].target": "Grid#HomeViewRootGrid",
  "controlStyles[20].styles[0]": "Background := Transparent",
  "controlStyles[21].target": "FileExplorerExtensions.GalleryViewControl#GalleryViewControl > Grid",
  "controlStyles[21].styles[0]": "Background := Transparent",
  "controlStyles[22].target": "Microsoft.UI.Xaml.Controls.Grid#GalleryRootGrid",
  "controlStyles[22].styles[0]": "Background := Transparent",
  "controlStyles[23].target": "ToolTip",
  "controlStyles[23].styles[1]": "BorderThickness = 1",
  "controlStyles[23].styles[2]": "Foreground = White",
  "controlStyles[23].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.8\" />",
  "controlStyles[23].styles[4]": "Background := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.4\" />",
  "controlStyles[23].styles[0]": "CornerRadius = $radius",
  "controlStyles[24].target": "Grid#DetailsViewControlRootGrid",
  "controlStyles[24].styles[0]": "Background := Transparent",
  "controlStyles[25].target": "StackPanel#DetailsViewThumbnail > Grid",
  "controlStyles[25].styles[0]": "Background := Transparent",
  "controlStyles[26].target": "StackPanel#DetailsViewThumbnail > Grid",
  "controlStyles[26].styles[0]": "Background := Transparent",
  "controlStyles[27].target": "Grid#FileExplorerAddressBarGrid",
  "controlStyles[27].styles[0]": "Grid.ColumnSpan = 2",
  "controlStyles[27].styles[1]": "Margin = 0,0,10,0",
  "controlStyles[28].target": "AutoSuggestBox#FileExplorerSearchBox",
  "controlStyles[28].styles[0]": "Visibility = Collapsed",
  "styleConstants[0]": "main = Transparent",
  "styleConstants[1]": "radius = 2",
  "styleConstants[2]": "thickness = 1"
}
```
