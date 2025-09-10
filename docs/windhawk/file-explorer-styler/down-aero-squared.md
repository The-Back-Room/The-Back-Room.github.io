---
title: Down Aero Squared
summary: Clean squared theme for Windows 11 File Explorer Styler
parent: File Explorer Styler
grand_parent: Windhawk
permalink: /windhawk/file-explorer-styler/down-aero-squared
---

### Requirements

- [Windhawk]
- [Windhawk] Plugin: [Windows 11 File Explorer Styler]
- [Windhawk] Plugin: [Translucent Windows]

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
  "explorerFrameContainerHeight": 87,
  "controlStyles[0].target": "AppBarButton#backButton > Grid#Root@CommonStates > Border#AppBarButtonInnerBorder",
  "controlStyles[0].styles[0]": "Background@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[0].styles[1]": "Background@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[0].styles[2]": "Background@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[0].styles[3]": "Background@Disabled := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[1].target": "AppBarButton#forwardButton > Grid#Root@CommonStates > Border#AppBarButtonInnerBorder",
  "controlStyles[1].styles[0]": "Background@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[1].styles[1]": "Background@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[1].styles[2]": "Background@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[1].styles[3]": "Background@Disabled := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[2].target": "AppBarButton#refreshButton > Grid#Root@CommonStates > Border#AppBarButtonInnerBorder",
  "controlStyles[2].styles[0]": "Background@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[3].target": "AppBarButton#upButton > Grid#Root@CommonStates > Border#AppBarButtonInnerBorder",
  "controlStyles[3].styles[0]": "Background@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[4].target": "Border#BottomBorderLine",
  "controlStyles[4].styles[0]": "Visibility = Collapsed",
  "controlStyles[5].target": "Grid#NavigationBarControlGrid",
  "controlStyles[5].styles[0]": "Background := Transparent",
  "controlStyles[6].target": "CommandBar#FileExplorerCommandBar",
  "controlStyles[6].styles[0]": "Background := Transparent",
  "controlStyles[7].target": "Grid#TabContainerGrid > Border#LeftBottomBorderLine",
  "controlStyles[7].styles[0]": "Visibility = Collapsed",
  "controlStyles[8].target": "Grid#TabContainerGrid > Border#RightBottomBorderLine",
  "controlStyles[8].styles[0]": "Visibility = Collapsed",
  "controlStyles[9].target": "TabViewItem",
  "controlStyles[9].styles[0]": "Margin = 0,0,3,0",
  "controlStyles[10].target": "TabViewItem > Grid#LayoutRoot",
  "controlStyles[10].styles[0]": "CornerRadius = 2",
  "controlStyles[10].styles[1]": "Margin = 0,-3,0,3",
  "controlStyles[10].styles[2]": "Height = 28",
  "controlStyles[11].target": "TabViewItem > Grid#LayoutRoot > Canvas",
  "controlStyles[11].styles[0]": "Visibility = Collapsed",
  "controlStyles[12].target": "TabViewItem > Grid#LayoutRoot > Grid#TabContainer",
  "controlStyles[12].styles[0]": "Background := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.04\" FallbackColor=\"Transparent\" />",
  "controlStyles[12].styles[1]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" Opacity=\"0.04\" FallbackColor=\"Transparent\" />",
  "controlStyles[13].target": "TabViewItem > Grid#LayoutRoot@CommonStates",
  "controlStyles[13].styles[0]": "Background@Selected := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[13].styles[1]": "Background@PointerOverSelected := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[13].styles[2]": "Background@PressedSelected := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[13].styles[3]": "Background@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[13].styles[4]": "Background@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[14].target": "Grid#HomeViewRootGrid",
  "controlStyles[14].styles[0]": "Background := Transparent",
  "controlStyles[15].target": "FileExplorerExtensions.GalleryViewControl#GalleryViewControl > Grid",
  "controlStyles[15].styles[0]": "Background := Transparent",
  "controlStyles[16].target": "Microsoft.UI.Xaml.Controls.Grid#GalleryRootGrid",
  "controlStyles[16].styles[0]": "Background := Transparent",
  "controlStyles[17].target": "ToolTip",
  "controlStyles[17].styles[0]": "BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[17].styles[1]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[18].target": "Grid#DetailsViewControlRootGrid",
  "controlStyles[18].styles[0]": "Background := Transparent",
  "controlStyles[19].target": "StackPanel#DetailsViewThumbnail > Grid",
  "controlStyles[19].styles[0]": "Background := Transparent",
  "controlStyles[20].target": "StackPanel#DetailsViewThumbnail > Grid",
  "controlStyles[20].styles[0]": "Background := Transparent",
  "controlStyles[0].styles[4]": "BorderBrush@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[13].styles[5]": "BorderBrush@Selected := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[1].styles[4]": "BorderBrush@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[1].styles[5]": "BorderBrush@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[1].styles[6]": "BorderBrush@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.6\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[1].styles[7]": "BorderBrush@Disabled := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[1].styles[8]": "CornerRadius = 2",
  "controlStyles[1].styles[9]": "BorderThickness = 1.2",
  "controlStyles[0].styles[5]": "BorderBrush@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[0].styles[6]": "BorderBrush@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.6\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[0].styles[7]": "BorderBrush@Disabled := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[0].styles[8]": "CornerRadius = 2",
  "controlStyles[0].styles[9]": "BorderThickness = 1.2",
  "controlStyles[13].styles[6]": "BorderBrush@PointerOverSelected := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" Opacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[13].styles[7]": "BorderBrush@PressedSelected := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.6\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[13].styles[8]": "BorderBrush@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[13].styles[9]": "BorderBrush@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[13].styles[10]": "CornerRadius = 2",
  "controlStyles[13].styles[11]": "BorderThickness = 1",
  "controlStyles[17].styles[2]": "Foreground = White",
  "controlStyles[17].styles[3]": "CornerRadius = 2",
  "controlStyles[17].styles[4]": "BorderThickness = 1.2",
  "controlStyles[21].target": "AutoSuggestBox#FileExplorerSearchBox > Grid#LayoutRoot > TextBox > Grid@CommonStates > Border#BorderElement",
  "controlStyles[21].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[21].styles[1]": "BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[21].styles[2]": "CornerRadius = 2",
  "controlStyles[21].styles[3]": "BorderThickness = 1.2",
  "controlStyles[22].target": "Grid#PART_LayoutRoot",
  "controlStyles[22].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[22].styles[1]": "BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[22].styles[2]": "CornerRadius = 2",
  "controlStyles[22].styles[3]": "BorderThickness = 1.2",
  "controlStyles[23].target": "FileExplorerExtensions.CommandBarControl",
  "controlStyles[23].styles[0]": "Visibility = Collapsed",
  "controlStyles[24].target": "FileExplorerExtensions.NavigationBarControl",
  "controlStyles[24].styles[0]": "Grid.RowSpan = 2",
  "controlStyles[2].styles[1]": "Background@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[2].styles[2]": "Background@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[2].styles[3]": "Background@Disabled := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[2].styles[4]": "BorderBrush@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[2].styles[5]": "BorderBrush@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[2].styles[6]": "BorderBrush@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.6\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[2].styles[7]": "BorderBrush@Disabled := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[2].styles[8]": "CornerRadius = 2",
  "controlStyles[2].styles[9]": "BorderThickness = 1.2",
  "controlStyles[3].styles[1]": "Background@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[3].styles[2]": "Background@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[3].styles[3]": "Background@Disabled := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[3].styles[4]": "BorderBrush@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[3].styles[5]": "BorderBrush@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[3].styles[6]": "BorderBrush@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.6\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[3].styles[7]": "BorderBrush@Disabled := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" Opacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[3].styles[8]": "CornerRadius = 2",
  "controlStyles[3].styles[9]": "BorderThickness = 1.2",
  "controlStyles[25].target": "AppBarButton#backButton",
  "controlStyles[25].styles[0]": "Margin = 2,9,0,1",
  "controlStyles[26].target": "AppBarButton#forwardButton",
  "controlStyles[27].target": "AppBarButton#upButton",
  "controlStyles[28].target": "AppBarButton#refreshButton",
  "controlStyles[26].styles[0]": "Margin = 2,9,0,1",
  "controlStyles[27].styles[0]": "Margin = 2,9,0,1",
  "controlStyles[28].styles[0]": "Margin = 2,9,0,1",
  "controlStyles[21].styles[4]": "Margin = 2,0,0,1",
  "controlStyles[24].styles[1]": "Margin = 2,-9,0,1"
}
```

<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

[//]: # Resources and links for this page go here.

[Windhawk]: https://windhawk.net/
[Windows 11 File Explorer Styler]: https://windhawk.net/mods/windows-11-file-explorer-styler
[Translucent Windows]: https://windhawk.net/mods/translucent-windows

<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->