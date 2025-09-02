---
title: Down Aero Squared
summary: Theme for Windows 11 Start Menu Styler
parent: Start Menu Styler
grand_parent: Windhawk
permalink: /windhawk/start-menu-styler/down-aero-squared
---

## Down Aero Squared
Theme for Windows 11 Start Menu Styler

![Preview](https://raw.githubusercontent.com/The-Back-Room/The-Back-Room.github.io/refs/heads/main/docs/assets/images/previews/start-menu-styler/down-aero-squared.bmp)

### Requirements

- [Windhawk](https://windhawk.net/) Plugin: [Windows 11 Start Menu Styler](https://windhawk.net/mods/windows-11-start-menu-styler)

### Installation

- Copy and paste the code below into `Windhawk >> Windows 11 Start Menu Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`

```json
{
  "controlStyles[0].target": "StartDocked.StartSizingFrame",
  "controlStyles[0].styles[0]": "MaxHeight = 520",
  "controlStyles[1].target": "Windows.UI.Xaml.Controls.Grid#TopLevelSuggestionsListHeader",
  "controlStyles[1].styles[0]": "Visibility = Collapsed",
  "controlStyles[2].target": "StartMenu.PinnedList",
  "controlStyles[2].styles[0]": "Height = 340",
  "controlStyles[3].target": "Windows.UI.Xaml.Controls.Grid#ShowMoreSuggestions",
  "controlStyles[3].styles[0]": "RenderTransform := <TranslateTransform Y=\"-408\" />",
  "controlStyles[4].target": "Windows.UI.Xaml.Controls.Grid#NoTopLevelSuggestionsText",
  "controlStyles[4].styles[0]": "Height = 0",
  "controlStyles[5].target": "Windows.UI.Xaml.Controls.Grid#ShowMoreSuggestions > Windows.UI.Xaml.Controls.Button > Windows.UI.Xaml.Controls.ContentPresenter > Windows.UI.Xaml.Controls.StackPanel > Windows.UI.Xaml.Controls.TextBlock",
  "controlStyles[5].styles[0]": "Text = Recommended",
  "controlStyles[6].target": "Windows.UI.Xaml.Controls.Border#DropShadow",
  "controlStyles[6].styles[0]": "CornerRadius = 2",
  "controlStyles[7].target": "Windows.UI.Xaml.Controls.Border#StartDropShadow",
  "controlStyles[7].styles[0]": "CornerRadius = 2",
  "controlStyles[8].target": "StartDocked.LauncherFrame > Grid#RootGrid > Grid#RootContent > Grid#MainContent > Grid#InnerContent > Rectangle",
  "controlStyles[8].styles[0]": "Visibility = Collapsed",
  "controlStyles[9].target": "StartDocked.SearchBoxToggleButton",
  "controlStyles[10].target": "Border#AcrylicOverlay",
  "controlStyles[10].styles[0]": "CornerRadius = 2",
  "controlStyles[10].styles[1]": "Margin = 0,0,0,20",
  "controlStyles[11].target": "Windows.UI.Xaml.Controls.Grid#AllAppsRoot",
  "controlStyles[11].styles[0]": "Margin = 0,0,0,40",
  "controlStyles[12].target": "Windows.UI.Xaml.Controls.Grid#UndockedRoot",
  "controlStyles[12].styles[0]": "Margin = 0,0,0,40",
  "controlStyles[13].target": "StartDocked.NavigationPaneView#NavigationPane > Windows.UI.Xaml.Controls.Grid#RootPanel",
  "controlStyles[13].styles[0]": "Margin = 0,-10,0,10",
  "controlStyles[14].target": "StartDocked.AppListView#NavigationPanePlacesListView > Windows.UI.Xaml.Controls.Border",
  "controlStyles[14].styles[0]": "CornerRadius = 2",
  "controlStyles[14].styles[1]": "Margin = 0,0,15,0",
  "controlStyles[15].target": "StartDocked.NavigationPaneButton#PowerButton > Windows.UI.Xaml.Controls.Grid@CommonStates > Windows.UI.Xaml.Controls.Border#BackgroundBorder",
  "controlStyles[15].styles[0]": "CornerRadius = 2",
  "controlStyles[15].styles[1]": "BorderThickness = 1",
  "controlStyles[15].styles[2]": "Margin = -7",
  "controlStyles[16].target": "StartDocked.NavigationPaneButton#UserTileButton > Grid > Border#BackgroundBorder",
  "controlStyles[16].styles[0]": "CornerRadius = 2",
  "controlStyles[17].target": "Windows.UI.Xaml.Controls.Button#ShowAllAppsButton > Windows.UI.Xaml.Controls.ContentPresenter#ContentPresenter@CommonStates",
  "controlStyles[17].styles[0]": "Padding = 10,5",
  "controlStyles[17].styles[1]": "Margin = 0,0,-25,0",
  "controlStyles[17].styles[2]": "CornerRadius = 2",
  "controlStyles[18].target": "Windows.UI.Xaml.Controls.Button#ShowMoreSuggestionsButton > Windows.UI.Xaml.Controls.ContentPresenter#ContentPresenter@CommonStates",
  "controlStyles[18].styles[0]": "Padding = 10,5",
  "controlStyles[18].styles[1]": "Margin = 0,0,40,2",
  "controlStyles[18].styles[2]": "CornerRadius = 2",
  "controlStyles[18].styles[3]": "BorderThickness  =  1",
  "controlStyles[19].target": "Windows.UI.Xaml.Controls.Button#HideMoreSuggestionsButton > Windows.UI.Xaml.Controls.ContentPresenter#ContentPresenter",
  "controlStyles[19].styles[0]": "Padding = 10,5",
  "controlStyles[19].styles[1]": "Margin = 0,0,-35,0",
  "controlStyles[19].styles[2]": "CornerRadius = 2",
  "controlStyles[20].target": "Windows.UI.Xaml.Controls.Button#CloseAllAppsButton > Windows.UI.Xaml.Controls.ContentPresenter#ContentPresenter",
  "controlStyles[20].styles[0]": "Padding = 10,5",
  "controlStyles[20].styles[1]": "Margin = 0,0,-35,0",
  "controlStyles[20].styles[2]": "CornerRadius = 2",
  "disableNewStartMenuLayout": 1,
  "controlStyles[9].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[9].styles[1]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[9].styles[2]": "CornerRadius = 2",
  "controlStyles[9].styles[3]": "BorderThickness = 1",
  "controlStyles[21].target": "Border#TaskbarSearchBackground",
  "controlStyles[21].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[21].styles[1]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[21].styles[2]": "CornerRadius = 2",
  "controlStyles[21].styles[3]": "BorderThickness = 1",
  "controlStyles[19].styles[3]": "Background@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[20].styles[3]": "Background@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[16].styles[1]": "BorderThickness = 1",
  "controlStyles[17].styles[3]": "BorderThickness  = 1",
  "controlStyles[18].styles[4]": "Background@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[14].styles[2]": "BorderThickness = 1",
  "controlStyles[17].styles[4]": "Background@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[15].styles[3]": "Height = 38",
  "controlStyles[15].styles[4]": "Width = 38",
  "controlStyles[15].styles[5]": "Background@Normal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[15].styles[6]": "Background@PointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[15].styles[7]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[11].styles[1]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[17].styles[5]": "Background@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[17].styles[6]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[18].styles[5]": "Background@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[18].styles[6]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[19].styles[4]": "Background@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[19].styles[5]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[20].styles[4]": "Background@Pressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[20].styles[5]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[16].styles[2]": "Height = 38",
  "controlStyles[14].styles[3]": "Height = 38",
  "controlStyles[14].styles[4]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[14].styles[5]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[16].styles[3]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[16].styles[4]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "webContentStyles[0].target": "h4, .suggContainer, .groupTitle, .suggsListContainer, .title, .details, .secondaryText, .scope-tile > div, .menu-item_details",
  "webContentStyles[0].styles[0]": "font-family: 'Inter' !important",
  "webContentStyles[1].target": ".cortanaFontIcon, .iconContent",
  "webContentStyles[1].styles[0]": "font-family: 'Segoe MDL2 Assets' !important",
  "webContentStyles[2].target": "#qfPreviewPane",
  "webContentStyles[2].styles[0]": "min-width: 300px !important",
  "controlStyles[22].target": "Border#AppBorder",
  "controlStyles[22].styles[0]": "CornerRadius = 2",
  "controlStyles[22].styles[1]": "BorderThickness = 1",
  "controlStyles[22].styles[2]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[23].target": "Border#AcrylicBorder",
  "controlStyles[23].styles[0]": "CornerRadius = 2",
  "controlStyles[23].styles[1]": "BorderThickness = 1",
  "controlStyles[23].styles[2]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[23].styles[3]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[22].styles[3]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "webContentStyles[3].target": "#scopesHeader",
  "webContentStyles[3].styles[0]": "display: none !important"
}
```
