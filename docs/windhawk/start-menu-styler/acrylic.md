---
title: Acrylic
summary: Acrylic styled theme
parent: Start Menu Styler
grand_parent: WindHawk
permalink: /windhawk/start-menu-styler/acrylic
---


## Acrylic
Simple acrylic theme for Windows 11 Start Menu Styler colorized with the system accent color.

![Preview][Preview]

### Installation

- Copy and paste the code below into `WindHawk >> Windows 11 Start Menu Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`

```json
{
   "theme":"",
   "disableNewStartMenuLayout":0,
   "webContentCustomJs":"",
   "resourceVariables[0].variableKey":"",
   "resourceVariables[0].value":"",
   "// User Profile Text //":"",
   "// Search Box //":"",
   "// Hide the MS 365 & OneDrive buttons //":"",
   "// Network Data Usage indicator bars   //":"",
   "// Make it less eysore with Dark theme //":"",
   "// Bluetooth & devices - Device names               //":"",
   "// Make the long device names wrap into multi-lines //":"",
   "// Fix the navigation pane losing a Mica effect    //":"",
   "// when navigating to Personalization â†’ Background //":"",
   "// Misc //":"",
   "controlStyles[0].target":"Windows.UI.Xaml.Controls.Grid#TopLevelSuggestionsListHeader",
   "controlStyles[1].target":"Windows.UI.Xaml.Controls.Grid#NoTopLevelSuggestionsText",
   "controlStyles[2].target":"Windows.UI.Xaml.Controls.Grid#TopLevelSuggestionsContainer",
   "controlStyles[3].target":"Windows.UI.Xaml.Controls.Grid#ShowMoreSuggestions",
   "controlStyles[0].styles[0]":"Visibility = Collapsed",
   "controlStyles[1].styles[0]":"Visibility = Collapsed",
   "controlStyles[2].styles[0]":"Visibility = Collapsed",
   "controlStyles[3].styles[0]":"Visibility = Collapsed",
   "webContentStyles[0].target":"#qfPreviewPane",
   "webContentStyles[0].styles[0]":"min-width: 300px !important",
   "controlStyles[4].target":"Border#AcrylicBorder",
   "controlStyles[5].target":"Border#AppBorder",
   "controlStyles[6].target":"StartDocked.SearchBoxToggleButton",
   "controlStyles[6].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[6].styles[1]":"CornerRadius = 2",
   "webContentStyles[1].target":".previewContainer",
   "webContentStyles[1].styles[0]":"background-color: Transparent !important",
   "webContentStyles[2].target":".suggContainer",
   "webContentStyles[2].styles[0]":"background-color: Transparent !important",
   "webContentStyles[3].styles[0]":"display: none !important",
   "webContentStyles[3].target":".leftPill::before",
   "controlStyles[7].target":"Grid#AllAppsRoot",
   "controlStyles[7].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[7].styles[1]":"CornerRadius = 2",
   "controlStyles[8].target":"Windows.UI.Xaml.Controls.Button#ShowAllAppsButton",
   "controlStyles[8].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[8].styles[1]":"CornerRadius = 2",
   "controlStyles[9].target":"Grid#TopLevelSuggestionsContainer",
   "controlStyles[9].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[9].styles[1]":"CornerRadius = 2",
   "controlStyles[10].target":"Windows.UI.Xaml.Controls.GridViewItem",
   "controlStyles[10].styles[0]":"CornerRadius = 2",
   "controlStyles[11].target":"Border#AcrylicOverlay",
   "controlStyles[5].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[4].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[11].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[12].target":"Border#LayerBorder",
   "controlStyles[12].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[13].target":"StartDocked.AllAppsGridListView > Windows.UI.Xaml.Controls.ScrollViewer > Border > Grid > Windows.UI.Xaml.Controls.Primitives.ScrollBar",
   "controlStyles[13].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[14].target":"Microsoft.UI.Xaml.Controls.PipsPager#PinnedListPipsPager",
   "controlStyles[14].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[14].styles[1]":"CornerRadius = 2",
   "controlStyles[13].styles[1]":"CornerRadius = 2",
   "controlStyles[15].target":"Windows.UI.Xaml.Controls.Button#CloseAllAppsButton",
   "controlStyles[15].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[15].styles[1]":"CornerRadius = 2",
   "controlStyles[12].styles[1]":"CornerRadius = 2",
   "controlStyles[11].styles[1]":"CornerRadius = 2",
   "controlStyles[5].styles[1]":"CornerRadius = 2",
   "controlStyles[4].styles[1]":"CornerRadius = 2"
}
```

[Preview]: https://raw.githubusercontent.com/The-Back-Room/The-Back-Room.github.io/refs/heads/main/docs/assets/images/previews/start-menu-styler/acrylic.bmp