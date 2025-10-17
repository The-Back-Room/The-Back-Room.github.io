---
title: DownAero Squared Taskbar Setup
summary: Instructions for setting up the DownAero Squared theme's Taskbar using Windhawk
nav_exclude: true
permalink: /Tutorials/WindhawkThemes/DownAeroSquared/Taskbar
---

## DownAero Squared Taskbar Setup
Instructions for setting up the DownAero Squared theme's Taskbar using Windhawk.

### Requirements
- [Windhawk](https://windhawk.net/)
- [Windows 11 Taskbar Styler](https://windhawk.net/mods/windows-11-taskbar-styler)

### Instructions

1. If you haven't already, download and install Windhawk from the [official website](https://windhawk.net/).
2. Download and install the [Windows 11 Taskbar Styler](https://windhawk.net/mods/windows-11-taskbar-styler) mod through Windhawk.
3. Copy and paste the code below into `Windhawk >> Windows 11 Taskbar Styler >> Advanced >> Mod Settings` and click `Save`:

```json
{
"controlStyles[0].target": "Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground",
"controlStyles[0].styles[0]": "Visibility=1",
"controlStyles[1].target": "Grid#OverflowRootGrid > Border",
"controlStyles[1].styles[0]": "CornerRadius=$r1",
"controlStyles[2].target": "Grid#SystemTrayFrameGrid",
"controlStyles[2].styles[0]": "CornerRadius=$r1",
"controlStyles[2].styles[1]": "Margin=6",
"controlStyles[2].styles[2]": "BorderThickness=$t1",
"controlStyles[3].target": "Windows.UI.Xaml.Controls.Grid#ModalRootGrid > Windows.UI.Xaml.Controls.Border#BackgroundElement ",
"controlStyles[3].styles[0]": "Background:=$card",
"controlStyles[4].target": "Windows.UI.Xaml.Controls.Border#BackgroundDimmingLayer",
"controlStyles[4].styles[0]": "Background:=$card",
"controlStyles[4].styles[1]": "CornerRadius=$r1",
"controlStyles[5].target": "Windows.UI.Xaml.Shapes.Rectangle#HorizontalTrackRect",
"controlStyles[5].styles[0]": "Height=5",
"controlStyles[6].target": "TextBlock#InnerTextBlock[Text=]",
"controlStyles[6].styles[0]": "Text=",
"controlStyles[6].styles[1]": "Margin=5",
"controlStyles[7].target": "Taskbar.TaskListLabeledButtonPanel@RunningIndicatorStates > Rectangle#RunningIndicator",
"controlStyles[7].styles[0]": "Fill:=$accent",
"controlStyles[8].target": "Taskbar.TaskItemThumbnailView > Grid > Border",
"controlStyles[8].styles[0]": "CornerRadius=$r1",
"controlStyles[8].styles[1]": "BorderThickness=$t1",
"controlStyles[8].styles[2]": "Background:=$card",
"controlStyles[9].target": "Taskbar.TaskListButtonPanel@CommonStates > Border#BackgroundElement",
"controlStyles[9].styles[0]": "Background@ActiveNormal:=$card",
"controlStyles[9].styles[1]": "Background@ActivePressed:=$accentdk2",
"controlStyles[9].styles[2]": "Background@ActivePointerOver:=$accentdk3",
"controlStyles[9].styles[3]": "Background@InactiveNormal:=$card",
"controlStyles[9].styles[4]": "Background@InactivePressed:=$accentlt2",
"controlStyles[9].styles[5]": "Background@InactivePointerOver:=$accentlt3",
"controlStyles[10].target": "Taskbar.TaskListLabeledButtonPanel@CommonStates > Border#BackgroundElement",
"controlStyles[10].styles[0]": "Background@ActiveNormal:=$card",
"controlStyles[10].styles[1]": "Background@ActivePressed:=$accentdk2",
"controlStyles[10].styles[2]": "Background@ActivePointerOver:=$accentdk3",
"controlStyles[10].styles[3]": "Background@InactiveNormal:=$card",
"controlStyles[10].styles[4]": "Background@InactivePressed:=$accentlt2",
"controlStyles[10].styles[5]": "Background@InactivePointerOver:=$accentlt3",
"controlStyles[10].styles[6]": "Background@MultiWindowNormal:=$card",
"controlStyles[10].styles[7]": "Background@MultiWindowPressed:=$accentdk2",
"controlStyles[10].styles[8]": "Background@MultiWindowPointerOver:=$accentdk3",
"controlStyles[11].target": "Taskbar.TaskbarBackground#HoverFlyoutBackgroundControl > Grid > Rectangle#BackgroundFill",
"controlStyles[11].styles[0]": "CornerRadius=$r1",
"controlStyles[12].target": "Rectangle#BackgroundStroke",
"controlStyles[12].styles[0]": "Visibility=1",
"controlStyles[13].target": "ToolTip",
"controlStyles[13].styles[0]": "CornerRadius=$r1",
"controlStyles[13].styles[1]": "BorderThickness=$t1",
"controlStyles[13].styles[2]": "Margin=3",
"controlStyles[2].styles[3]": "Background:=$card",
"controlStyles[13].styles[3]": "Background:=$card",
"controlStyles[14].target": "Border#BackgroundElement",
"controlStyles[15].target": "Border#MultiWindowElement",
"controlStyles[14].styles[0]": "CornerRadius=$r1",
"controlStyles[15].styles[0]": "CornerRadius=$r1",
"controlStyles[14].styles[1]": "Padding=1,0,-10,0",
"controlStyles[15].styles[1]": "Padding=1,0,-10,0",
"controlStyles[1].styles[1]": "BorderThickness=$t1",
"controlStyles[1].styles[2]": "Background:=$card",
"controlStyles[16].target": "Grid#ModalRootGrid > Border#BackgroundElement",
"controlStyles[16].styles[0]": "CornerRadius=$r1",
"controlStyles[16].styles[1]": "Background:=$card",
"controlStyles[17].target": "Windows.UI.Xaml.Controls.Border#BackgroundDimmingLayer",
"controlStyles[17].styles[0]": "Background:=$card",
"controlStyles[9].styles[6]": "Background@MultiWindowNormal:=$card",
"controlStyles[9].styles[7]": "Background@MultiWindowPressed:=$accentdk2",
"theme": "",
"styleConstants[0]": "card=<AcrylicBrush TintColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" FallbackColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" TintOpacity=\"0\" TintLuminosityOpacity=\"1\" Opacity=\"1\" />",
"resourceVariables[0].variableKey": "",
"resourceVariables[0].value": "",
"controlStyles[18].target": " SearchUx.SearchUI.SearchButtonRootGrid@CommonStates > Border#BackgroundElement",
"controlStyles[18].styles[0]": "CornerRadius=$r1",
"controlStyles[18].styles[1]": "BorderThickness=$t1",
"controlStyles[18].styles[2]": "Margin=-2",
"controlStyles[18].styles[3]": "Background:=$card",
"controlStyles[10].styles[9]": "Margin=2",
"controlStyles[9].styles[8]": "Background@MultiWindowointerOver:=$accentdk3",
"controlStyles[3].styles[1]": "CornerRadius=$r1",
"styleConstants[1]": "surface=<AcrylicBrush TintColor=\"{ThemeResource SurfaceStrokeColorDefaultSolid}\" FallbackColor=\"{ThemeResource SurfaceStrokeColorDefaultSolid}\" TintOpacity=\"0\" TintLuminosityOpacity=\"1\" Opacity=\"1\" />",
"styleConstants[2]": "accent=<AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" FallbackColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" TintLuminosityOpacity=\"0.4\" />",
"styleConstants[3]": "accentlt1=<AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight1}\" FallbackColor=\"{ThemeResource SystemAccentColorLight1}\" TintOpacity=\"0.4\" TintLuminosityOpacity=\"0.4\" />",
"controlStyles[9].styles[9]": "Margin=2",
"styleConstants[4]": "accentlt2=<AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight2}\" FallbackColor=\"{ThemeResource SystemAccentColorLight2}\" TintOpacity=\"0.4\" TintLuminosityOpacity=\"0.4\" />",
"styleConstants[5]": "accentlt3=<AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight3}\" FallbackColor=\"{ThemeResource SystemAccentColorLight3}\" TintOpacity=\"0.4\" TintLuminosityOpacity=\"0.4\" />",
"styleConstants[6]": "accentdk1=<AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.4\" TintLuminosityOpacity=\"0.4\" />",
"styleConstants[7]": "accentdk2=<AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" TintLuminosityOpacity=\"0.4\" />",
"styleConstants[8]": "accentdk3=<AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" TintLuminosityOpacity=\"0.4\" />",
"controlStyles[1].styles[3]": "BorderBrush:=$transparent",
"controlStyles[2].styles[4]": "BorderBrush:=$transparent",
"controlStyles[8].styles[3]": "BorderBrush:=$transparent",
"controlStyles[18].styles[4]": "BorderBrush:=$transparent",
"styleConstants[9]": "transparent=<AcrylicBrush TintColor=\"Transparent\" FallbackColor=\"Transparent\" TintOpacity=\"0.1\" TintLuminosityOpacity=\"0.1\" />",
"styleConstants[10]": "r1=2",
"styleConstants[11]": "r2=6",
"styleConstants[12]": "r3=30",
"styleConstants[13]": "t1=1",
"styleConstants[14]": "t2=5",
"styleConstants[15]": "t3=0",
"styleConstants[16]": "f1=Segoe UI",
"styleConstants[17]": "f2=Segoe UI",
"styleConstants[18]": "f3=Segoe UI",
"controlStyles[13].styles[4]": "BorderBrush:=$transparent",
"controlStyles[16].styles[2]": "BorderThickness=$t1",
"controlStyles[16].styles[3]": "BorderBrush:=$transparent",
"controlStyles[15].styles[2]": "BorderThickness=$t1",
"controlStyles[15].styles[3]": "BorderBrush:=$transparent",
"controlStyles[14].styles[2]": "BorderThickness=$t1",
"controlStyles[14].styles[3]": "BorderBrush:=$transparent",
"controlStyles[15].styles[4]": "Background:=$card",
"controlStyles[14].styles[4]": "Background:=$card"
}
```

To get the taskbar clock to display the system performance metrics like in the screenshot, set the following in `Windhawk >> Taskbar Clock Customization >> Settings`:

- **Top Line**: `CPU %cpu% RAM %ram% | %date%`
- **Bottom Line**: `🔽 %download_speed% 🔼 %upload_speed% | %time%`
