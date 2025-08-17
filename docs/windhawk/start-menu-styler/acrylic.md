---
title: Acrylic UI
summary: Simple acrylic theme for Windows 11 Start Menu Styler colorized with the system accent color
parent: Start Menu Styler
grand_parent: WindHawk
permalink: /windhawk/start-menu-styler/acrylic
---

## Acrylic UI
Simple acrylic theme for Windows 11 Start Menu Styler colorized with the system accent color

![Preview](https://raw.githubusercontent.com/The-Back-Room/The-Back-Room.github.io/refs/heads/main/docs/assets/images/previews/start-menu-styler/acrylic.bmp)

### Requirements

- [WindHawk](https://windhaek.net/) Plugin: [Windows 11 Start Menu Styler](https://windhawk.net/mods/windows-11-start-menu-styler)

### Installation

- Copy and paste the code below into `WindHawk >> Windows 11 Start Menu Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`

```json
{
  "theme": "",
  "disableNewStartMenuLayout": 1,
  "controlStyles[0].target": "Windows.UI.Xaml.Controls.Button#CloseAllAppsButton",
  "controlStyles[0].styles[0]": "CornerRadius = $radius",
  "controlStyles[0].styles[1]": "Background := <AcrylicBrush TintColor=\"$dark2\" TintOpacity=\"$opacity\" />",
  "controlStyles[1].target": "Windows.UI.Xaml.Controls.Button#ShowAllAppsButton",
  "controlStyles[1].styles[0]": "Background := <AcrylicBrush TintColor=\"$dark2\" TintOpacity=\"$opacity\" />",
  "controlStyles[1].styles[1]": "CornerRadius = $radius",
  "controlStyles[2].target": "Windows.UI.Xaml.Controls.GridViewItem",
  "controlStyles[2].styles[0]": "Margin = 0",
  "controlStyles[3].target": "Windows.UI.Xaml.Controls.SemanticZoom#ZoomControl",
  "controlStyles[3].styles[0]": "IsZoomOutButtonEnabled = True",
  "controlStyles[4].target": "Windows.UI.Xaml.Controls.Button#ZoomOutButton",
  "controlStyles[4].styles[0]": "Width = 18",
  "controlStyles[4].styles[1]": "Height = 18",
  "controlStyles[5].target": "Windows.UI.Xaml.Controls.Button#ZoomOutButton > Windows.UI.Xaml.Controls.ContentPresenter#ContentPresenter > Windows.UI.Xaml.Controls.TextBlock",
  "controlStyles[5].styles[0]": "Text = ",
  "controlStyles[5].styles[1]": "FontSize = 18",
  "controlStyles[6].target": "Border#AcrylicBorder",
  "controlStyles[6].styles[0]": "Background := <AcrylicBrush TintColor=\"$main\" TintOpacity=\"$opacity\" />",
  "controlStyles[6].styles[1]": "CornerRadius = $radius",
  "controlStyles[7].target": "Border#AppBorder",
  "controlStyles[7].styles[0]": "Background := <AcrylicBrush TintColor=\"$main\" TintOpacity=\"$opacity\" />",
  "controlStyles[7].styles[1]": "CornerRadius = $radius",
  "controlStyles[8].target": "StartDocked.SearchBoxToggleButton",
  "controlStyles[8].styles[0]": "Background := <AcrylicBrush TintColor=\"$dark3\" TintOpacity=\"$opacity\" />",
  "controlStyles[8].styles[1]": "CornerRadius = $radius",
  "controlStyles[8].styles[2]": "BorderThickness = $thickness",
  "controlStyles[8].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"$light3\" TintOpacity=\"$opacity\" />",
  "controlStyles[9].target": "Border#TaskbarSearchBackground",
  "controlStyles[9].styles[0]": "Background := <AcrylicBrush TintColor=\"$dark3\" TintOpacity=\"$opacity\" />",
  "controlStyles[9].styles[1]": "CornerRadius = $radius",
  "controlStyles[9].styles[2]": "BorderThickness = $thickness",
  "controlStyles[9].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"$light3\" TintOpacity=\"$opacity\" />",
  "controlStyles[10].target": "StartDocked.SearchBoxToggleButton#StartMenuSearchBox > Grid > Border#BorderElement",
  "controlStyles[10].styles[0]": "Background := <AcrylicBrush TintColor=\"$dark3\" TintOpacity=\"0.4\" />",
  "controlStyles[10].styles[1]": "CornerRadius = $radius",
  "controlStyles[10].styles[2]": "BorderThickness = $thickness",
  "controlStyles[10].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"$light3\" TintOpacity=\"$opacity\" />",
  "controlStyles[11].target": "Windows.UI.Xaml.Controls.Grid#SearchBoxOnTaskbarGleamContainer",
  "controlStyles[11].styles[0]": "CornerRadius = $radius",
  "controlStyles[12].target": "Windows.UI.Xaml.Controls.Grid#MainContent",
  "controlStyles[12].styles[0]": "CornerRadius = $radius",
  "controlStyles[12].styles[1]": "Background := <AcrylicBrush TintColor=\"$main\" TintOpacity=\"$opacity\" />",
  "controlStyles[13].target": "Windows.UI.Xaml.Controls.Grid#TopLevelSuggestionsListHeader",
  "controlStyles[13].styles[0]": "Visibility = Collapsed",
  "controlStyles[14].target": "Windows.UI.Xaml.Controls.Grid#NoTopLevelSuggestionsText",
  "controlStyles[14].styles[0]": "Visibility = Collapsed",
  "controlStyles[15].target": "Windows.UI.Xaml.Controls.Grid#TopLevelSuggestionsContainer",
  "controlStyles[15].styles[0]": "Visibility = Collapsed",
  "controlStyles[16].target": "Windows.UI.Xaml.Controls.Grid#ShowMoreSuggestions",
  "controlStyles[16].styles[0]": "Visibility = Collapsed",
  "controlStyles[17].target": "StartMenu.PinnedList",
  "controlStyles[17].styles[0]": "Height = 504",
  "controlStyles[18].target": "Grid#AllAppsRoot",
  "controlStyles[18].styles[0]": "Background := <AcrylicBrush TintColor=\"$dark2\" TintOpacity=\"$opacity\" />",
  "controlStyles[18].styles[1]": "CornerRadius = $radius",
  "controlStyles[19].target": "Border#AcrylicOverlay",
  "controlStyles[19].styles[0]": "Background := <AcrylicBrush TintColor=\"$dark2\" TintOpacity=\"$opacity\" />",
  "controlStyles[19].styles[1]": "CornerRadius = $radius",
  "webContentStyles[0].target": "#qfPreviewPane",
  "webContentStyles[0].styles[0]": "min-width: 300px !important",
  "styleConstants[0]": "dark3 = {ThemeResource SystemAccentColorDark3}",
  "styleConstants[1]": "dark2 = {ThemeResource SystemAccentColorDark2}",
  "styleConstants[2]": "dark1 = {ThemeResource SystemAccentColorDark1}",
  "styleConstants[3]": "light3 = {ThemeResource SystemAccentColorLight3}",
  "styleConstants[4]": "light2 = {ThemeResource SystemAccentColorLight2}",
  "styleConstants[5]": "light1 = {ThemeResource SystemAccentColorLight1}",
  "styleConstants[6]": "main = {ThemeResource SystemAccentColor}",
  "styleConstants[7]": "radius = 2",
  "styleConstants[8]": "opacity = 0.4",
  "styleConstants[9]": "thickness = 1"
}
```
