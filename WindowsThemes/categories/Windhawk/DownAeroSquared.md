---
title: DownAero Squared
summary: Theme for Windows 11 based off of the Windhawk DownAero start menu theme.
nav_exclude: true
permalink: /WindowsThemes/c/windhawk/DownAeroSquared
---

## DownAero Squared

Theme for Windows 11 based off of the Windhawk [DownAero](https://github.com/ramensoftware/windows-11-start-menu-styling-guide/tree/main/Themes/Down%20Aero) start menu theme. This theme extends the DownAero design to the taskbar and notification center for a more complete look while adding in a few tweaks and improvements.


<a href="/assets/images/previews/start-menu-styler/down-aero-squared.bmp" target="_blank" ref="noopener noreferrer">
<img src="/assets/images/previews/start-menu-styler/down-aero-squared.bmp" width="600" height="400"></a>

### Requirements

- [Windhawk](https://windhawk.net/)
- [Windows 11 Start Menu Styler](https://windhawk.net/mods/windows-11-start-menu-styler)

### Installation

- Open the Windows 11 Start Menu Styler mod in Windhawk.
- Go to the "Advanced" tab.
- Copy the content below to the text box under "Mod settings" and click "Save".


```json
{
"disableNewStartMenuLayout": 0,
"theme": "Down Aero",
"controlStyles[0].target": "Border#AcrylicBorder",
"controlStyles[0].styles[0]": "CornerRadius=2",
"controlStyles[1].target": "Border#AcrylicOverlay",
"controlStyles[1].styles[0]": "CornerRadius=2",
"controlStyles[2].target": "Button#ActionBarOverflowButton > ContentPresenter#ContentPresenter@CommonStates",
"controlStyles[3].target": "Button#PrimaryActionBarButton > ContentPresenter#ContentPresenter@CommonStates",
"controlStyles[3].styles[0]": "CornerRadius=2",
"controlStyles[3].styles[1]": "Height=38",
"controlStyles[4].target": "Button#HideMoreSuggestionsButton > ContentPresenter#ContentPresenter",
"controlStyles[4].styles[0]": "CornerRadius=2",
"controlStyles[5].target": "Button#CloseAllAppsButton > ContentPresenter#ContentPresenter",
"controlStyles[5].styles[0]": "CornerRadius=2",
"controlStyles[6].target": "Button#ShowMoreSuggestionsButton > ContentPresenter#ContentPresenter@CommonStates",
"controlStyles[6].styles[0]": "CornerRadius=2,0,0,2",
"controlStyles[7].target": "Button#ShowAllAppsButton > ContentPresenter#ContentPresenter@CommonStates",
"controlStyles[7].styles[0]": "CornerRadius=0,2,2,0",
"controlStyles[8].target": "StartDocked.NavigationPaneButton#PowerButton > Grid@CommonStates > Border#BackgroundBorder",
"controlStyles[8].styles[0]": "BorderBrush@Normal:=<AcrylicBrush TintColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" FallbackColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" TintOpacity=\"0\" TintLuminosityOpacity=\".1\" Opacity=\"1\" />",
"controlStyles[8].styles[1]": "BorderBrush@PointerOver:=<AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" FallbackColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\".8\" TintLuminosityOpacity=\".5\" Opacity=\"1\" />",
"controlStyles[8].styles[2]": "Background:=<AcrylicBrush TintColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" FallbackColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" TintOpacity=\"0\" TintLuminosityOpacity=\"1\" Opacity=\"1\" />",
"controlStyles[8].styles[3]": "BorderThickness=2",
"controlStyles[8].styles[4]": "CornerRadius=2",
"controlStyles[2].styles[0]": "CornerRadius=2",
"controlStyles[2].styles[1]": "Height=38",
"controlStyles[2].styles[2]": "Width=38",
"controlStyles[1].styles[1]": "Margin=0,0,0,2",
"controlStyles[9].target": "StartDocked.NavigationPaneButton#UserTileButton > Grid > Border#BackgroundBorder",
"controlStyles[9].styles[0]": "CornerRadius=2",
"controlStyles[10].target": "StartDocked.AppListView#NavigationPanePlacesListView",
"controlStyles[10].styles[0]": "Visibility=1",
"controlStyles[11].target": "StartDocked.NavigationPaneView#NavigationPane > Grid#RootPanel",
"controlStyles[11].styles[0]": "Margin=0,-2,0,2",
"controlStyles[12].target": "StartDocked.SearchBoxToggleButton",
"controlStyles[12].styles[0]": "Visibility=0",
"controlStyles[13].target": "Windows.UI.Xaml.Controls.Primitives.ScrollBar#VerticalScrollBar",
"controlStyles[13].styles[0]": "Visibility=1",
"controlStyles[14].target": "Border#AppBorder",
"controlStyles[14].styles[0]": "CornerRadius=2",
"controlStyles[15].target": "StartDocked.StartMenuCompanion#RightCompanion > Grid#CompanionRoot > Grid",
"controlStyles[15].styles[0]": "CornerRadius=2",
"controlStyles[16].target": "Border#DropShadow",
"controlStyles[17].target": "Border#StartDropShadow",
"controlStyles[16].styles[0]": "CornerRadius=2",
"controlStyles[17].styles[0]": "CornerRadius=2",
"controlStyles[18].target": "StartMenu.ExpandedFolderList > Grid > Border",
"controlStyles[18].styles[0]": "CornerRadius=2",
"controlStyles[2].styles[3]": "Background:=<AcrylicBrush TintColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" FallbackColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" TintOpacity=\"0\" TintLuminosityOpacity=\"1\" Opacity=\"1\" />",
"controlStyles[3].styles[2]": "Background:=<AcrylicBrush TintColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" FallbackColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" TintOpacity=\"0\" TintLuminosityOpacity=\"1\" Opacity=\"1\" />",
"controlStyles[19].target": "Border#AppOverlay",
"controlStyles[19].styles[0]": "CornerRadius=2",
"controlStyles[20].target": "Border#TaskbarSearchBackground",
"controlStyles[20].styles[0]": "CornerRadius=2",
"controlStyles[12].styles[1]": "Height=0",
"controlStyles[12].styles[2]": "Margin=0,0,0,30",
"controlStyles[7].styles[1]": "Margin=0,0,-35,0",
"controlStyles[18].styles[1]": "Height=325",
"controlStyles[8].styles[5]": "Height=38",
"controlStyles[8].styles[6]": "Width=38"
}
```

---

<a href="/WindowsThemes" class="btn btn--secondary btn--sm">Back to Windows Themes</a>