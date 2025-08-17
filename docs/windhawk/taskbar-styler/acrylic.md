---
title: Acrylic UI
summary: Simple acrylic theme for Windows 11 Taskbar Styler colorized with the system accent color
parent: Taskbar Styler
grand_parent: WindHawk
permalink: /windhawk/taskbar-styler/acrylic
---

## Acrylic UI
Simple acrylic theme for Windows 11 Taskbar Styler colorized with the system accent color

![Preview](https://raw.githubusercontent.com/The-Back-Room/The-Back-Room.github.io/refs/heads/main/docs/assets/images/previews/taskbar-styler/acrylic.bmp)

### Requirements

- [WindHawk](https://windhaek.net/) Plugin: [Windows 11 Taskbar Styler](https://windhawk.net/mods/windows-11-taskbar-styler)

### Installation

- Copy and paste the code below into `WindHawk >> Windows 11 Taskbar Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`

```json
{
  "controlStyles[0].target": "Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground",
  "controlStyles[0].styles[0]": "Margin = 12,5",
  "controlStyles[0].styles[1]": "CornerRadius = $radius",
  "controlStyles[1].target": "Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground > Grid > Rectangle#BackgroundFill",
  "controlStyles[1].styles[0]": "Fill := $main",
  "controlStyles[2].target": "Grid#OverflowRootGrid > Border",
  "controlStyles[2].styles[0]": "Background := $main",
  "controlStyles[2].styles[1]": "CornerRadius = $radius",
  "controlStyles[3].target": "Grid#SystemTrayFrameGrid",
  "controlStyles[3].styles[0]": "CornerRadius = $radius",
  "controlStyles[3].styles[1]": "Margin = 0,8,16,8",
  "controlStyles[3].styles[2]": "Background := $dark2",
  "controlStyles[4].target": "Border#SearchPillBackgroundElement",
  "controlStyles[4].styles[0]": "CornerRadius = $radius",
  "controlStyles[4].styles[1]": "Margin = 3",
  "controlStyles[4].styles[2]": "BorderThickness = 1",
  "controlStyles[4].styles[3]": "BorderBrush := $dark3",
  "controlStyles[5].target": "SearchUx.SearchUI.SearchButtonRootGrid > Border#BackgroundElement",
  "controlStyles[5].styles[0]": "Background := $dark3",
  "controlStyles[5].styles[1]": "CornerRadius = $radius",
  "controlStyles[5].styles[2]": "BorderThickness = 1",
  "controlStyles[5].styles[3]": "BorderBrush := $light3",
  "controlStyles[6].target": "SearchUx.SearchUI.SearchIconButton > SearchUx.SearchUI.SearchButtonRootGrid@CommonStates > Border#BackgroundElement",
  "controlStyles[6].styles[0]": "Background := $main",
  "controlStyles[6].styles[1]": "CornerRadius = $radius",
  "controlStyles[7].target": "Taskbar.ExperienceToggleButton",
  "controlStyles[7].styles[0]": "CornerRadius = $radius",
  "controlStyles[8].target": "Taskbar.SearchBoxButton",
  "controlStyles[8].styles[0]": "CornerRadius = $radius",
  "controlStyles[9].target": "Taskbar.TaskListButton",
  "controlStyles[9].styles[0]": "CornerRadius = $radius",
  "controlStyles[10].target": "Windows.UI.Xaml.Controls.Grid#ModalRootGrid > Windows.UI.Xaml.Controls.Border#BackgroundElement ",
  "controlStyles[10].styles[0]": "CornerRadius = $radius",
  "controlStyles[10].styles[1]": "Background := $main",
  "controlStyles[11].target": "Windows.UI.Xaml.Controls.Border#BackgroundDimmingLayer",
  "controlStyles[11].styles[0]": "Background := $main",
  "controlStyles[11].styles[1]": "CornerRadius = $radius",
  "controlStyles[12].target": "Windows.UI.Xaml.Shapes.Rectangle#HorizontalTrackRect",
  "controlStyles[12].styles[0]": "Height = 5",
  "controlStyles[13].target": "TextBlock#InnerTextBlock[Text=]",
  "controlStyles[13].styles[0]": "Text = ",
  "controlStyles[13].styles[1]": "Margin = 5",
  "controlStyles[14].target": "Taskbar.TaskListLabeledButtonPanel@RunningIndicatorStates > Rectangle#RunningIndicator",
  "controlStyles[14].styles[0]": "Fill := $transparent",
  "controlStyles[15].target": "Taskbar.TaskItemThumbnailView > Grid > Border",
  "controlStyles[15].styles[0]": "CornerRadius = $radius",
  "controlStyles[15].styles[1]": "BorderThickness = 1",
  "controlStyles[15].styles[2]": "Background := $dark2",
  "controlStyles[15].styles[3]": "BorderBrush := $dark1",
  "controlStyles[16].target": "Border#ProgressBarRoot > Border > Grid > Rectangle",
  "controlStyles[16].styles[0]": "Fill := $solidDark1",
  "controlStyles[17].target": "Border#ProgressBarRoot > Border > Grid > Rectangle#ProgressBarTrack",
  "controlStyles[17].styles[0]": "Fill := $solidDark3",
  "controlStyles[18].target": "Taskbar.TaskListButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[18].styles[0]": "Background := $dark2",
  "controlStyles[18].styles[1]": "Background@ActiveNormal := $dark2",
  "controlStyles[18].styles[2]": "Background@ActivePressed := $dark1",
  "controlStyles[18].styles[3]": "Background@ActivePointerOver := $dark3",
  "controlStyles[18].styles[4]": "Background@InactiveNormal := $dark2",
  "controlStyles[18].styles[5]": "Background@InactivePressed := $dark1",
  "controlStyles[18].styles[6]": "Background@InactivePointerOver := $dark3",
  "controlStyles[18].styles[7]": "Padding = 1,0,-10,0",
  "controlStyles[18].styles[8]": "Margin = 3",
  "controlStyles[18].styles[9]": "CornerRadius = $radius",
  "controlStyles[19].target": "Taskbar.TaskListLabeledButtonPanel",
  "controlStyles[19].styles[0]": "Margin = 3",
  "controlStyles[20].target": "taskbar:TaskListLabeledButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[20].styles[0]": "Background := $dark2",
  "controlStyles[20].styles[1]": "Background@ActiveNormal := $dark2",
  "controlStyles[20].styles[2]": "Background@ActivePressed := $dark1",
  "controlStyles[20].styles[3]": "Background@ActivePointerOver := $dark3",
  "controlStyles[20].styles[4]": "Background@InactiveNormal := $dark2",
  "controlStyles[20].styles[5]": "Background@InactivePressed := $dark1",
  "controlStyles[20].styles[6]": "Background@InactivePointerOver := $dark3",
  "controlStyles[20].styles[7]": "Background@MultiWindowNormal := $dark2",
  "controlStyles[20].styles[8]": "Background@MultiWindowPressed := $dark1",
  "controlStyles[20].styles[9]": "Background@MultiWindowPointerOver := $dark3",
  "controlStyles[21].target": "Taskbar.TaskbarBackground#HoverFlyoutBackgroundControl > Grid > Rectangle#BackgroundFill",
  "controlStyles[21].styles[0]": "Fill := $dark2",
  "controlStyles[22].target": "Rectangle#BackgroundStroke",
  "controlStyles[22].styles[0]": "Fill := $transparent",
  "controlStyles[23].target": "TextBlock#SearchBoxTextBlock",
  "controlStyles[23].styles[0]": "Foreground = White",
  "controlStyles[24].target": "ToolTip",
  "controlStyles[24].styles[0]": "Background := $dark3",
  "controlStyles[24].styles[1]": "CornerRadius = $radius",
  "controlStyles[24].styles[2]": "BorderThickness = 1",
  "controlStyles[24].styles[3]": "FontSize = 12",
  "controlStyles[24].styles[4]": "Foreground = White",
  "controlStyles[24].styles[5]": "Margin = 3",
  "controlStyles[23].styles[1]": "FontSize = 12",
  "controlStyles[24].styles[6]": "BorderBrush := $light3",
  "styleConstants[0]": "dark3 = <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight3}\" TintOpacity=\"0.4\" />",
  "styleConstants[1]": "dark2 = <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" />",
  "styleConstants[2]": "dark1 = <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.4\" />",
  "styleConstants[3]": "light3 = <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight3}\" TintOpacity=\"0.4\" />",
  "styleConstants[4]": "light2 = <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight2}\" TintOpacity=\"0.4\" />",
  "styleConstants[5]": "light1 = <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight1}\" TintOpacity=\"0.4\" />",
  "styleConstants[6]": "main = <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" />",
  "styleConstants[7]": "solidDark3 = <SolidColorBrush Color=\"{ThemeResource SystemAccentColorDark3}\" />",
  "styleConstants[8]": "solidDark1 = <SolidColorBrush Color=\"{ThemeResource SystemAccentColorDark1}\" />",
  "styleConstants[9]": "transparent =  <SolidColorBrush Color=\"Transparent\" />",
  "styleConstants[10]": "radius = 2",
  "styleConstants[11]": "opacity = 0.4",
  "styleConstants[12]": "thickness = 1"
}
```
