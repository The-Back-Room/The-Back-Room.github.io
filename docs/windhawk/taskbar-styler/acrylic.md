---
title: Acrylic UI
summary: Simple acrylic theme for Windows 11 Taskbar Styler
parent: Taskbar Styler
grand_parent: Windhawk
permalink: /windhawk/taskbar-styler/acrylic
---

### Requirements

- [Windhawk]
- [Windhawk](https://windhawk.net/) Plugin: [Windows 11 Taskbar Styler](https://windhawk.net/mods/windows-11-taskbar-styler)

### Installation

- Copy and paste the code below into `Windhawk >> Windows 11 Taskbar Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`

```json
{
  "controlStyles[0].target": "Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground",
  "controlStyles[0].styles[0]": "Margin = 12,5",
  "controlStyles[0].styles[1]": "CornerRadius = $radius",
  "controlStyles[1].target": "Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground > Grid > Rectangle#BackgroundFill",
  "controlStyles[1].styles[0]": "Fill := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[2].target": "Grid#OverflowRootGrid > Border",
  "controlStyles[2].styles[0]": "Background := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[2].styles[1]": "CornerRadius = $radius",
  "controlStyles[3].target": "Grid#SystemTrayFrameGrid",
  "controlStyles[3].styles[0]": "CornerRadius = $radius",
  "controlStyles[3].styles[1]": "Margin = 0,8,16,8",
  "controlStyles[3].styles[2]": "Background := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[4].target": "Border#SearchPillBackgroundElement",
  "controlStyles[4].styles[0]": "CornerRadius = $radius",
  "controlStyles[4].styles[1]": "Margin = 3",
  "controlStyles[4].styles[2]": "BorderThickness = $thickness",
  "controlStyles[4].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.8\" FallbackColor=\"Transparent\" />",
  "controlStyles[5].target": "SearchUx.SearchUI.SearchButtonRootGrid > Border#BackgroundElement",
  "controlStyles[5].styles[0]": "Background := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[5].styles[1]": "CornerRadius = $radius",
  "controlStyles[5].styles[2]": "BorderThickness = $thickness",
  "controlStyles[5].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.8\" FallbackColor=\"Transparent\" />",
  "controlStyles[6].target": "SearchUx.SearchUI.SearchIconButton > SearchUx.SearchUI.SearchButtonRootGrid@CommonStates > Border#BackgroundElement",
  "controlStyles[6].styles[0]": "Background := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[6].styles[1]": "CornerRadius = $radius",
  "controlStyles[7].target": "Taskbar.ExperienceToggleButton",
  "controlStyles[7].styles[0]": "CornerRadius = $radius",
  "controlStyles[8].target": "Taskbar.SearchBoxButton",
  "controlStyles[8].styles[0]": "CornerRadius = $radius",
  "controlStyles[9].target": "Taskbar.TaskListButton",
  "controlStyles[9].styles[0]": "CornerRadius = $radius",
  "controlStyles[10].target": "Windows.UI.Xaml.Controls.Grid#ModalRootGrid > Windows.UI.Xaml.Controls.Border#BackgroundElement ",
  "controlStyles[10].styles[0]": "CornerRadius = $radius",
  "controlStyles[10].styles[1]": "Background := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[11].target": "Windows.UI.Xaml.Controls.Border#BackgroundDimmingLayer",
  "controlStyles[11].styles[0]": "Background := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[11].styles[1]": "CornerRadius = $radius",
  "controlStyles[12].target": "Windows.UI.Xaml.Shapes.Rectangle#HorizontalTrackRect",
  "controlStyles[12].styles[0]": "Height = 5",
  "controlStyles[13].target": "TextBlock#InnerTextBlock[Text=]",
  "controlStyles[13].styles[0]": "Text = ",
  "controlStyles[13].styles[1]": "Margin = 5",
  "controlStyles[14].target": "Taskbar.TaskListLabeledButtonPanel@RunningIndicatorStates > Rectangle#RunningIndicator",
  "controlStyles[14].styles[0]": "BackGround := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[15].target": "Taskbar.TaskItemThumbnailView > Grid > Border",
  "controlStyles[15].styles[0]": "CornerRadius = $radius",
  "controlStyles[15].styles[1]": "BorderThickness = $thickness",
  "controlStyles[15].styles[2]": "Background := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[15].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.8\" FallbackColor=\"Transparent\" />",
  "controlStyles[16].target": "Border#ProgressBarRoot > Border > Grid > Rectangle",
  "controlStyles[16].styles[0]": "Fill := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[17].target": "Border#ProgressBarRoot > Border > Grid > Rectangle#ProgressBarTrack",
  "controlStyles[17].styles[0]": "Fill := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[18].target": "Taskbar.TaskListButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[18].styles[0]": "Background := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0\" FallbackColor=\"Transparent\" />",
  "controlStyles[18].styles[1]": "Background@ActiveNormal := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[18].styles[2]": "Background@ActivePressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"0.6\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[18].styles[3]": "Background@ActivePointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[18].styles[4]": "Background@InactiveNormal := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[18].styles[5]": "Background@InactivePressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"0.6\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[18].styles[6]": "Background@InactivePointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAltLowColor}\" />",
  "controlStyles[18].styles[7]": "Padding = 1,0,-10,0",
  "controlStyles[18].styles[8]": "Margin = 3",
  "controlStyles[18].styles[9]": "CornerRadius = $radius",
  "controlStyles[19].target": "Taskbar.TaskListLabeledButtonPanel",
  "controlStyles[19].styles[0]": "Margin = 3",
  "controlStyles[20].target": "taskbar:TaskListLabeledButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[20].styles[0]": "Background := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0\" FallbackColor=\"Transparent\" />",
  "controlStyles[20].styles[1]": "Background@ActiveNormal := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[20].styles[2]": "Background@ActivePressed := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.6\" FallbackColor=\"Transparent\" />",
  "controlStyles[20].styles[3]": "Background@ActivePointerOver := $altLow",
  "controlStyles[20].styles[4]": "Background@InactiveNormal := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0\" FallbackColor=\"Transparent\" />",
  "controlStyles[20].styles[5]": "Background@InactivePressed := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[20].styles[6]": "Background@InactivePointerOver := $altLow",
  "controlStyles[20].styles[7]": "Background@MultiWindowNormal := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[20].styles[8]": "Background@MultiWindowPressed := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.6\" FallbackColor=\"Transparent\" />",
  "controlStyles[20].styles[9]": "Background@MultiWindowPointerOver := $altLow",
  "controlStyles[21].target": "Taskbar.TaskbarBackground#HoverFlyoutBackgroundControl > Grid > Rectangle#BackgroundFill",
  "controlStyles[21].styles[0]": "Fill := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0\" FallbackColor=\"Transparent\" />",
  "controlStyles[22].target": "Rectangle#BackgroundStroke",
  "controlStyles[22].styles[0]": "Fill := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0\" FallbackColor=\"Transparent\" />",
  "controlStyles[23].target": "TextBlock#SearchBoxTextBlock",
  "controlStyles[23].styles[0]": "Foreground = $foreground",
  "controlStyles[23].styles[1]": "FontSize = $fontSize",
  "controlStyles[24].target": "ToolTip",
  "controlStyles[24].styles[0]": "Background := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0\" FallbackColor=\"Transparent\" />",
  "controlStyles[24].styles[1]": "CornerRadius = $radius",
  "controlStyles[24].styles[2]": "BorderThickness = $thickness",
  "controlStyles[24].styles[3]": "FontSize = $fontSize",
  "controlStyles[24].styles[4]": "Foreground = $foreground",
  "controlStyles[24].styles[5]": "Margin = 3",
  "styleConstants[0]": "radius = 2",
  "styleConstants[1]": "thickness = 1",
  "styleConstants[2]": "fontSize = 10",
  "styleConstants[3]": "forground = White"
}
```
