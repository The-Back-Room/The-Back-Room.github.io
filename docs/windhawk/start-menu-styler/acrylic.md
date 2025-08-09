---
title: Acrylic UI
summary: Acrylic styled theme
parent: Start Menu Styler
grand_parent: WindHawk
permalink: /windhawk/start-menu-styler/acrylic
---


## Acrylic UI
Simple acrylic theme for Windows 11 Start Menu Styler colorized with the system accent color.

![Preview](https://raw.githubusercontent.com/The-Back-Room/The-Back-Room.github.io/refs/heads/main/docs/assets/images/previews/start-menu-styler/acrylic.bmp)

### Installation

- Copy and paste the code below into `WindHawk >> Windows 11 Start Menu Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`

<details>
<summaray>Code</summary>

```json
{
  "controlStyles[0].target": "Windows.UI.Xaml.Controls.Button#CloseAllAppsButton",
  "controlStyles[0].styles[0]": "CornerRadius = 2",
  "controlStyles[1].target": "Windows.UI.Xaml.Controls.Button#ShowAllAppsButton",
  "controlStyles[1].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[2].target": "Windows.UI.Xaml.Controls.GridViewItem",
  "controlStyles[2].styles[0]": "Margin = 0",
  "disableNewStartMenuLayout": 1,
  "controlStyles[0].styles[1]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[1].styles[1]": "CornerRadius = 2",
  "controlStyles[3].target": "Windows.UI.Xaml.Controls.SemanticZoom#ZoomControl",
  "controlStyles[3].styles[0]": "IsZoomOutButtonEnabled = True",
  "controlStyles[4].target": "Windows.UI.Xaml.Controls.Button#ZoomOutButton",
  "controlStyles[4].styles[0]": "Width = 18",
  "controlStyles[4].styles[1]": "Height = 18",
  "controlStyles[5].target": "Windows.UI.Xaml.Controls.Button#ZoomOutButton > Windows.UI.Xaml.Controls.ContentPresenter#ContentPresenter > Windows.UI.Xaml.Controls.TextBlock",
  "controlStyles[5].styles[0]": "Text = ",
  "controlStyles[5].styles[1]": "FontSize = 18",
  "controlStyles[6].target": "Border#AcrylicBorder",
  "controlStyles[7].target": "Border#AppBorder",
  "controlStyles[6].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
  "controlStyles[7].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
  "controlStyles[6].styles[1]": "CornerRadius = 2",
  "controlStyles[7].styles[1]": "CornerRadius = 2",
  "controlStyles[8].target": "StartDocked.SearchBoxToggleButton",
  "controlStyles[8].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[8].styles[1]": "CornerRadius = 2",
  "controlStyles[8].styles[2]": "BorderThickness = 1",
  "controlStyles[8].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorLight3}\" />",
  "controlStyles[9].target": "Border#TaskbarSearchBackground",
  "controlStyles[9].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[9].styles[1]": "CornerRadius = 2",
  "controlStyles[9].styles[2]": "BorderThickness = 1",
  "controlStyles[9].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorLight3}\" />",
  "controlStyles[10].target": "StartDocked.SearchBoxToggleButton#StartMenuSearchBox > Grid > Border#BorderElement",
  "controlStyles[10].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[10].styles[1]": "CornerRadius = 2",
  "controlStyles[10].styles[2]": "BorderThickness = 1",
  "controlStyles[10].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorLight3}\" />",
  "webContentStyles[0].target": "#qfPreviewPane",
  "controlStyles[11].target": "Windows.UI.Xaml.Controls.Grid#SearchBoxOnTaskbarGleamContainer",
  "controlStyles[11].styles[0]": "ConrerRadius = 2",
  "controlStyles[12].target": "Windows.UI.Xaml.Controls.Grid#MainContent",
  "controlStyles[12].styles[0]": "ConrerRadius = 2",
  "controlStyles[12].styles[1]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
  "webContentStyles[0].styles[0]": "min-width: 300px !important",
  "controlStyles[13].target": "Windows.UI.Xaml.Controls.Grid#TopLevelSuggestionsListHeader",
  "controlStyles[13].styles[0]": "Visibility = 0",
  "controlStyles[14].target": "Windows.UI.Xaml.Controls.Grid#NoTopLevelSuggestionsText",
  "controlStyles[15].target": "Windows.UI.Xaml.Controls.Grid#TopLevelSuggestionsContainer",
  "controlStyles[16].target": "Windows.UI.Xaml.Controls.Grid#ShowMoreSuggestions",
  "controlStyles[17].target": "StartMenu.PinnedList",
  "controlStyles[17].styles[0]": "Height = 504",
  "controlStyles[14].styles[0]": "Visibility = 0",
  "controlStyles[15].styles[0]": "Visibility = 0",
  "controlStyles[16].styles[0]": "Visibility = 0",
  "theme": "",
  "controlStyles[18].target": "Grid#AllAppsRoot",
  "controlStyles[18].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[18].styles[1]": "CornerRadius = 2",
  "controlStyles[19].target": "Border#AcrylicOverlay",
  "controlStyles[19].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
  "controlStyles[19].styles[1]": "CornerRadius = 2"
}
```
</details>