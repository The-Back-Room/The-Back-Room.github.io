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
  "controlStyles[12].styles[2]": "BorderBrush:=<AcrylicBrush TintColor=\"{ThemeResource SurfaceStrokeColorDefault}\" FallbackColor=\"{ThemeResource SurfaceStrokeColorDefault}\" TintOpacity=\"0\" TintLuminosityOpacity=\".1\" Opacity=\"1\" />",
  "controlStyles[12].styles[3]": "Background:=<AcrylicBrush TintColor=\"{ThemeResource SurfaceStrokeColorDefault}\" FallbackColor=\"{ThemeResource SurfaceStrokeColorDefault}\" TintOpacity=\".3\" TintLuminosityOpacity=\".5\" Opacity=\"1\" />"
}
```

---

<a href="/WindhawkThemes" class="btn btn--secondary btn--sm">Back to Windhawk Themes</a>