---
title: Down Aero Squared
summary: Clean squared theme for Windows 11 Taskbar Styler
parent: Taskbar Styler
grand_parent: Windhawk
permalink: /windhawk/taskbar-styler/down-aero-squared
---

## Down Aero Squared
Theme for Windows 11 Taskbar Styler

![Preview](https://raw.githubusercontent.com/The-Back-Room/The-Back-Room.github.io/refs/heads/main/docs/assets/images/previews/taskbar-styler/down-aero-squared.bmp)

### Requirements

- [Windhawk](https://windhawk.net/) Plugin: [Windows 11 Taskbar Styler](https://windhawk.net/mods/windows-11-taskbar-styler)

### Installation

- Copy and paste the code below into `Windhawk >> Windows 11 Taskbar Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`

```json
{
  "controlStyles[0].target": "Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground",
  "controlStyles[0].styles[0]": "Visibility = Collapsed",
  "controlStyles[1].target": "Grid#OverflowRootGrid > Border",
  "controlStyles[1].styles[0]": "CornerRadius = 2",
  "controlStyles[2].target": "Grid#SystemTrayFrameGrid",
  "controlStyles[2].styles[0]": "CornerRadius = 5",
  "controlStyles[2].styles[1]": "Margin = 3,6,-5,-5",
  "controlStyles[2].styles[2]": "BorderThickness = 1",
  "controlStyles[3].target": "Windows.UI.Xaml.Controls.Grid#ModalRootGrid > Windows.UI.Xaml.Controls.Border#BackgroundElement ",
  "controlStyles[3].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[4].target": "Windows.UI.Xaml.Controls.Border#BackgroundDimmingLayer",
  "controlStyles[4].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[4].styles[1]": "CornerRadius = 2",
  "controlStyles[5].target": "Windows.UI.Xaml.Shapes.Rectangle#HorizontalTrackRect",
  "controlStyles[5].styles[0]": "Height = 5",
  "controlStyles[6].target": "TextBlock#InnerTextBlock[Text=]",
  "controlStyles[6].styles[0]": "Text = ",
  "controlStyles[6].styles[1]": "Margin = 5",
  "controlStyles[7].target": "Taskbar.TaskListLabeledButtonPanel@RunningIndicatorStates > Rectangle#RunningIndicator",
  "controlStyles[7].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[8].target": "Taskbar.TaskItemThumbnailView > Grid > Border",
  "controlStyles[8].styles[0]": "CornerRadius = 2",
  "controlStyles[8].styles[1]": "BorderThickness = 1",
  "controlStyles[8].styles[2]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[8].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[9].target": "Taskbar.TaskListButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[9].styles[0]": "Background@ActiveNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[9].styles[1]": "Background@ActivePressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[9].styles[2]": "Background@ActivePointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorLight2}\" />",
  "controlStyles[9].styles[3]": "Background@InactiveNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[9].styles[4]": "Background@InactivePressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[9].styles[5]": "Background@InactivePointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorLight2}\" />",
  "controlStyles[10].target": "taskbar:TaskListLabeledButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[10].styles[0]": "Background@ActiveNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[10].styles[1]": "Background@ActivePressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[10].styles[2]": "Background@ActivePointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorLight2}\" />",
  "controlStyles[10].styles[3]": "Background@InactiveNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[10].styles[4]": "Background@InactivePressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[10].styles[5]": "Background@InactivePointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorLight2}\" />",
  "controlStyles[10].styles[6]": "Background@MultiWindowNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[10].styles[7]": "Background@MultiWindowPressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[10].styles[8]": "Background@MultiWindowPointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorLight2}\" />",
  "controlStyles[11].target": "Taskbar.TaskbarBackground#HoverFlyoutBackgroundControl > Grid > Rectangle#BackgroundFill",
  "controlStyles[11].styles[0]": "Fill := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[12].target": "Rectangle#BackgroundStroke",
  "controlStyles[12].styles[0]": "Visibility = Collapsed",
  "controlStyles[13].target": "ToolTip",
  "controlStyles[13].styles[0]": "CornerRadius = 2",
  "controlStyles[13].styles[1]": "BorderThickness =1",
  "controlStyles[13].styles[2]": "Foreground = White",
  "controlStyles[13].styles[3]": "Margin = 3",
  "controlStyles[2].styles[3]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[2].styles[4]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[13].styles[4]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[13].styles[5]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[14].target": "Border#BackgroundElement",
  "controlStyles[15].target": "Border#MultiWindowElement",
  "controlStyles[14].styles[0]": "CornerRadius = 2",
  "controlStyles[14].styles[1]": "BorderThickness = 1",
  "controlStyles[15].styles[0]": "CornerRadius = 2",
  "controlStyles[15].styles[1]": "BorderThickness = 1",
  "controlStyles[14].styles[2]": "Padding = 1,0,-10,0",
  "controlStyles[15].styles[2]": "Padding = 1,0,-10,0",
  "controlStyles[1].styles[1]": "BorderThickness = 1",
  "controlStyles[1].styles[2]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[1].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[16].target": "Windows.UI.Xaml.Controls.Grid#ModalRootGrid > Windows.UI.Xaml.Controls.Border#BackgroundElement",
  "controlStyles[16].styles[0]": "CornerRadius = 2",
  "controlStyles[16].styles[1]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[17].target": "Windows.UI.Xaml.Controls.Border#BackgroundDimmingLayer",
  "controlStyles[17].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[10].styles[9]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[9].styles[6]": "Background@MultiWindowNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[9].styles[7]": "Background@MultiWindowPressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[9].styles[8]": "Background@MultiWindowPointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorLight2}\" />",
  "controlStyles[9].styles[9]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.8\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[14].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "controlStyles[15].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"Transparent\" TintOpacity=\"0.4\" FallbackColor=\"Transparent\" />",
  "theme": "",
  "styleConstants[0]": "",
  "resourceVariables[0].variableKey": "",
  "resourceVariables[0].value": ""
}
```
