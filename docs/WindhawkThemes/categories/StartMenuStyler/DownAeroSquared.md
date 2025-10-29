---
title: Down Aero Squared
tags: [Windhawk Themes, Advanced Customization, Start Menu Theme]
summary: >
  Theme for Windows 11 Start Menu Styler based off of the Down Aero theme.
nav_exclude: true
permalink: /WindhawkThemes/c/StartMenuStyler/DownAeroSquared
---

## Down Aero Squared
Theme for Windows 11 Start Menu Styler based off of the Down Aero theme.

[![Down Aero Squared Preview](/assets/images/previews/start-menu-styler/down-aero-squared.bmp)](/assets/images/previews/start-menu-styler/down-aero-squared.bmp)

{: .note }
> {: .opaque }
> This theme is for the new Windows 11 start menu redesign being rolled out in version 24H2 and later. As such, it may not work properly on earlier versions of Windows 11.

### Requirements

- [Windhawk](https://windhawk.net/)
- [Windows 11 Start Menu Styler](https://windhawk.net/mods/windows-11-start-menu-styler)

### Installation

- Open the Windows 11 Start Menu Styler mod in Windhawk.
- Go to the "Advanced" tab.
- Copy the content below to the text box under "Mod settings" and click "Save".


```json
{
  "theme": "Down Aero",
  "controlStyles[0].target": "Border#AcrylicBorder",
  "controlStyles[0].styles[0]": "CornerRadius=$CornerRadius",
  "styleConstants[0]": "CornerRadius=4",
  "controlStyles[1].target": "Border#AcrylicOverlay",
  "controlStyles[1].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[2].target": "StartDocked.NavigationPaneButton#PowerButton > Grid@CommonStates > Border#BackgroundBorder",
  "controlStyles[2].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[2].styles[1]": "Height=40",
  "controlStyles[2].styles[2]": "Width=40",
  "controlStyles[2].styles[3]": "BorderThickness=2",
  "controlStyles[3].target": "StartDocked.NavigationPaneButton#UserTileButton > Grid > Border#BackgroundBorder",
  "controlStyles[3].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[4].target": "Border#DropShadow",
  "controlStyles[4].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[5].target": "Border#StartDropShadow",
  "controlStyles[5].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[6].target": "Border#RightCompanionDropShadow",
  "controlStyles[6].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[7].target": "Grid#CompanionRoot > Grid#MainContent > Border#AcrylicOverlay",
  "controlStyles[7].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[8].target": "Grid#CompanionRoot > Grid#MainContent > Border#AcrylicBorder",
  "controlStyles[8].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[9].target": "Border#AppBorder",
  "controlStyles[10].target": "Border#AppOverlay",
  "controlStyles[9].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[10].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[11].target": "Border#TaskbarSearchBackground",
  "controlStyles[11].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[12].target": "StartDocked.SearchBoxToggleButton > Grid > Border",
  "controlStyles[12].styles[0]": "BorderThickness=1",
  "controlStyles[12].styles[1]": "CornerRadius=$CornerRadius",
  "controlStyles[12].styles[2]": "BorderBrush:=$SearchBorder",
  "controlStyles[12].styles[3]": "Background:=$SearchBG",
  "styleConstants[1]": "ClockFG=<WindhawkBlur BlurAmount=\"20\" TintColor=\"{ThemeResource SystemAccentColorLight2}\" TintOpacity=\"0.3\" />",
  "controlStyles[13].target": "StackPanel#TimePanel > TextBlock#Time",
  "controlStyles[14].target": "StackPanel#TimeAndDatePanel > TextBlock#Date",
  "controlStyles[13].styles[0]": "HorizontalAlignment=Center",
  "controlStyles[13].styles[1]": "RenderTransform:=$TimePosition",
  "controlStyles[13].styles[2]": "FontFamily=$TimeFont",
  "controlStyles[13].styles[3]": "Foreground:=$ClockFG",
  "controlStyles[14].styles[0]": "HorizontalAlignment=Center",
  "controlStyles[14].styles[1]": "RenderTransform:=$DatePosition",
  "controlStyles[14].styles[2]": "FontFamily=$DateFont",
  "controlStyles[14].styles[3]": "Foreground:=$ClockFG",
  "styleConstants[2]": "TimeFont=vivo Sans Clock Stencil Regular",
  "styleConstants[3]": "DateFont=vivo Sans EN VF",
  "styleConstants[4]": "TimePosition=<TranslateTransform X=\"0\\\" Y=\"50\" />",
  "styleConstants[5]": "DatePosition=<TranslateTransform X=\"0\" Y=\"-150\" />",
  "styleConstants[6]": "SearchBorder=<AcrylicBrush TintColor=\"{ThemeResource SurfaceStrokeColorDefault}\" FallbackColor=\"{ThemeResource SurfaceStrokeColorDefault}\" TintOpacity=\"0\" TintLuminosityOpacity=\".1\" Opacity=\"1\" />",
  "styleConstants[7]": "SearchBG=<AcrylicBrush TintColor=\"{ThemeResource SurfaceStrokeColorDefault}\" FallbackColor=\"{ThemeResource SurfaceStrokeColorDefault}\" TintOpacity=\".3\" TintLuminosityOpacity=\".5\" Opacity=\"1\" />",
  "controlStyles[15].target": "Grid#TopLevelHeader > Grid > Button[AutomationProperties.Name=Show all] > Grid@CommonStates  > Border",
  "controlStyles[15].styles[0]": "CornerRadius=0,4,4,0",
  "controlStyles[16].styles[0]": "CornerRadius=4,0,0,4",
  "controlStyles[16].target": "Button#ShowMoreSuggestionsButton > Grid@CommonStates > Border",
  "controlStyles[17].target": "Microsoft.UI.Xaml.Controls.DropDownButton > Grid@CommonStates",
  "controlStyles[17].styles[0]": "CornerRadius=0,4,4,0",
  "controlStyles[18].target": "Grid#TopLevelHeader > Grid > Button",
  "controlStyles[18].styles[0]": "CornerRadius=$CornerRadius",
  "disableNewStartMenuLayout": 0,
  "webContentStyles[0].target": "Button#ShowMoreSuggestionsButton > Grid > ContentPresenter > StackPanel > TextBlock",
  "webContentStyles[0].styles[0]": "Visibility=0",
  "webContentStyles[0].styles[1]": "Text=Recommended",
  "webContentStyles[1].target": "Windows.UI.Xaml.Controls.Button#HideMoreSuggestionsButton",
  "webContentStyles[1].styles[0]": "CornerRadius=4,4,0,4",
  "webContentStyles[2].target": "",
  "webContentStyles[2].styles[0]": "",
  "controlStyles[19].target": "Button#HideMoreSuggestionsButton > Grid@CommonStates > Border",
  "controlStyles[19].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[19].styles[1]": "BorderThickness=2",
  "controlStyles[19].styles[2]": "Background:=<SolidColorBrush Color=\"{ThemeResource SystemAltMediumLowColor}\" Opacity=\"1\" />",
  "controlStyles[19].styles[3]": "BorderBrush:=<SolidColorBrush Color=\"{ThemeResource SystemChromeAltHighColor}\" Opacity=\".8\" />",
  "controlStyles[19].styles[4]": "Background@PointerOver:=<SolidColorBrush Color=\"{ThemeResource SystemBaseLowColor}\" Opacity=\".7\" />",
  "controlStyles[19].styles[5]": "BorderBrush@PointerOver:=<SolidColorBrush Color=\"{ThemeResource SystemBaseLowColor}\" Opacity=\"1\" />"
}
```

---

<a href="/WindhawkThemes" class="btn btn--secondary btn--sm">Back to Windhawk Themes</a>