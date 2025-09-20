---
title: DownAero Squared
summary: A squared-off version of the DownAero theme for the Windows File Explorer.
nav_exclude: true
permalink: /Windhawk/FileExplorerStyler/DownAeroSquared
---

![Preview](https://the-back-room.info/assets/images/previews/file-explorer-styler/down-aero-squared.bmp?raw=True)

### Requirements

- [Windhawk](https://windhawk.net/)
- [Windhawk](https://windhawk.net/) Plugin: [Windows 11 File Explorer Styler](https://windhawk.net/mods/windows-11-file-explorer-styler)
- [Windhawk](https://windhawk.net/) Plugin: [Translucent Windows]( https://windhawk.net/mods/translucent-windows)

### Installation

- Copy and paste the code below into `Windhawk >>  Windows 11 File Explorer Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`
- Turn on the following settings in `Windhawk >> Translucent Windows >> Settings`:
  - `Windows theme custom rendering`
  - `Windows theme accent colorizer`
  - `Immersive darkmode titlebar`
  - `Extend effects into entire window`
- Set `Windhawk >> Translucent Windows >> Settings >> Effects` to `Acrylic (SystemBackdrop)`

```json
{
  "theme": "",
  "explorerFrameContainerHeight": 87,
  "controlStyles[0].target": "AppBarButton#backButton > Grid#Root@CommonStates > Border#AppBarButtonInnerBorder",
  "controlStyles[0].styles[0]": "Background@Normal:=$transparent",
  "controlStyles[0].styles[1]": "Background@PointerOver:=$base",
  "controlStyles[0].styles[2]": "Background@Pressed:=$transparent",
  "controlStyles[0].styles[3]": "Background@Disabled:=$transparent",
  "controlStyles[0].styles[4]": "CornerRadius=$radius",
  "controlStyles[0].styles[5]": "BorderThickness=0",
  "controlStyles[1].target": "AppBarButton#forwardButton > Grid#Root@CommonStates > Border#AppBarButtonInnerBorder",
  "controlStyles[1].styles[0]": "Background@Normal:=$transparent",
  "controlStyles[1].styles[1]": "Background@PointerOver:=$base",
  "controlStyles[1].styles[2]": "Background@Pressed:=$transparent",
  "controlStyles[1].styles[3]": "Background@Disabled:=$transparent",
  "controlStyles[1].styles[4]": "CornerRadius=$radius",
  "controlStyles[1].styles[5]": "BorderThickness=0",
  "controlStyles[2].target": "AppBarButton#refreshButton > Grid#Root@CommonStates > Border#AppBarButtonInnerBorder",
  "controlStyles[2].styles[0]": "Background@Normal:=$transparent",
  "controlStyles[2].styles[1]": "Background@PointerOver:=$base",
  "controlStyles[2].styles[2]": "Background@Pressed:=$transparent",
  "controlStyles[2].styles[3]": "Background@Disabled:=$transparent",
  "controlStyles[2].styles[4]": "CornerRadius=$radius",
  "controlStyles[2].styles[5]": "BorderThickness=0",
  "controlStyles[3].styles[1]": "Background@PointerOver:=$base",
  "controlStyles[3].styles[2]": "Background@Pressed:=$transparent",
  "controlStyles[3].styles[3]": "Background@Disabled:=$transparent",
  "controlStyles[3].styles[4]": "CornerRadius=$radius",
  "controlStyles[3].styles[5]": "BorderThickness=0",
  "controlStyles[3].target": "AppBarButton#upButton > Grid#Root@CommonStates > Border#AppBarButtonInnerBorder",
  "controlStyles[3].styles[0]": "Background@Normal:=$transparent",
  "controlStyles[4].target": "Border#BottomBorderLine",
  "controlStyles[4].styles[0]": "Visibility=Collapsed",
  "controlStyles[5].target": "Grid#NavigationBarControlGrid",
  "controlStyles[5].styles[0]": "Background:=Transparent",
  "controlStyles[6].target": "CommandBar#FileExplorerCommandBar",
  "controlStyles[6].styles[0]": "Background:=Transparent",
  "controlStyles[7].target": "Grid#TabContainerGrid > Border#LeftBottomBorderLine",
  "controlStyles[7].styles[0]": "Visibility=Collapsed",
  "controlStyles[8].target": "Grid#TabContainerGrid > Border#RightBottomBorderLine",
  "controlStyles[8].styles[0]": "Visibility=Collapsed",
  "controlStyles[9].target": "TabViewItem",
  "controlStyles[9].styles[0]": "Margin=0,0,3,0",
  "controlStyles[10].target": "TabViewItem > Grid#LayoutRoot",
  "controlStyles[10].styles[0]": "CornerRadius=$radius",
  "controlStyles[10].styles[1]": "Margin=0,-3,0,3",
  "controlStyles[10].styles[2]": "Height=28",
  "controlStyles[11].target": "TabViewItem > Grid#LayoutRoot > Canvas",
  "controlStyles[11].styles[0]": "Visibility=Collapsed",
  "controlStyles[12].target": "TabViewItem > Grid#LayoutRoot > Grid#TabContainer",
  "controlStyles[13].target": "TabViewItem > Grid#LayoutRoot@CommonStates",
  "controlStyles[13].styles[0]": "Background@Selected:=$transparent",
  "controlStyles[13].styles[1]": "Background@PointerOverSelected:=$base",
  "controlStyles[13].styles[2]": "Background@PressedSelected:=$transparent",
  "controlStyles[13].styles[3]": "Background@Normal:=$transparent",
  "controlStyles[13].styles[4]": "Background@PointerOver:=$base",
  "controlStyles[13].styles[5]": "CornerRadius=$radius",
  "controlStyles[14].target": "Grid#HomeViewRootGrid",
  "controlStyles[14].styles[0]": "Background:=Transparent",
  "controlStyles[15].target": "FileExplorerExtensions.GalleryViewControl#GalleryViewControl > Grid",
  "controlStyles[15].styles[0]": "Background:=Transparent",
  "controlStyles[16].target": "Microsoft.UI.Xaml.Controls.Grid#GalleryRootGrid",
  "controlStyles[16].styles[0]": "Background:=Transparent",
  "controlStyles[17].target": "ToolTip",
  "controlStyles[17].styles[0]": "Background:=$transparent",
  "controlStyles[17].styles[1]": "Foreground=White",
  "controlStyles[17].styles[2]": "CornerRadius=$radius",
  "controlStyles[17].styles[3]": "BorderThickness=0",
  "controlStyles[18].target": "Grid#DetailsViewControlRootGrid",
  "controlStyles[18].styles[0]": "Background:=Transparent",
  "controlStyles[19].target": "StackPanel#DetailsViewThumbnail > Grid",
  "controlStyles[19].styles[0]": "Background:=Transparent",
  "controlStyles[20].target": "StackPanel#DetailsViewThumbnail > Grid",
  "controlStyles[20].styles[0]": "Background:=Transparent",
  "controlStyles[21].target": "AutoSuggestBox#FileExplorerSearchBox > Grid#LayoutRoot > TextBox > Grid > Border#BorderElement",
  "controlStyles[21].styles[0]": "Background:=$transparent",
  "controlStyles[21].styles[1]": "CornerRadius=$radius",
  "controlStyles[21].styles[2]": "BorderThickness=0",
  "controlStyles[21].styles[3]": "Margin=2,0,0,1",
  "controlStyles[22].target": "FileExplorerExtensions.AddressBarControl > Grid#PART_LayoutRoot > Grid#NormalModeGrid",
  "controlStyles[22].styles[0]": "Background:=$transparent",
  "controlStyles[22].styles[1]": "CornerRadius=$radius",
  "controlStyles[22].styles[2]": "BorderThickness=0",
  "controlStyles[23].target": "FileExplorerExtensions.CommandBarControl",
  "controlStyles[23].styles[0]": "Visibility=Collapsed",
  "controlStyles[24].target": "FileExplorerExtensions.NavigationBarControl",
  "controlStyles[24].styles[0]": "Margin=2,2,8,-8",
  "controlStyles[25].target": "AppBarButton#backButton",
  "controlStyles[25].styles[0]": "Margin=2,8",
  "controlStyles[26].target": "AppBarButton#forwardButton",
  "controlStyles[26].styles[0]": "Margin=2,8",
  "controlStyles[27].target": "AppBarButton#upButton",
  "controlStyles[27].styles[0]": "Margin=2,8",
  "controlStyles[28].target": "AppBarButton#refreshButton",
  "controlStyles[28].styles[0]": "Margin=2,8",
  "controlStyles[22].styles[3]": "Height=28",
  "controlStyles[1].styles[6]": "Height=28",
  "controlStyles[0].styles[6]": "Height=28",
  "controlStyles[2].styles[6]": "Height=28",
  "controlStyles[3].styles[6]": "Height=28",
  "controlStyles[0].styles[7]": "Width=28",
  "controlStyles[1].styles[7]": "Width=28",
  "controlStyles[2].styles[7]": "Width=28",
  "controlStyles[3].styles[7]": "Width=28",
  "controlStyles[12].styles[0]": "CornerRadius=$radius",
  "controlStyles[21].styles[4]": "Height=28",
  "controlStyles[29].target": "Grid#DetailsViewControlRootGrid",
  "controlStyles[29].styles[0]": "Background:=Transparent",
  "styleConstants[0]": "base=<AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" FallbackColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" TintLuminosityOpacity=\"0.4\" />",
  "styleConstants[1]": "transparent=<AcrylicBrush TintColor=\"Transparent\" FallbackColor=\"Transparent\" Opacity=\"0.4\" />",
  "styleConstants[2]": "radius=2"
}
```