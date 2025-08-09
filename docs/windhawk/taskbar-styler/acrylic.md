---
title: Acrylic UI
summary: Acrylic styled theme
parent: Taskbar Styler
grand_parent: WindHawk
permalink: /windhawk/taskbar-styler/acrylic
---


## Acrylic UI
Simple acrylic theme for Windows 11 Taskbar Styler colorized with the system accent color.

![Preview](https://raw.githubusercontent.com/The-Back-Room/The-Back-Room.github.io/refs/heads/main/docs/assets/images/previews/taskbar-styler/acrylic.bmp)

### Installation

- Copy and paste the code below into `WindHawk >> Windows 11 Taskbar Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`

<details>

<summary>

Code

</summary>

```json
{
  "controlStyles[0].target": "Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground",
  "controlStyles[0].styles[0]": "Margin = 12,5",
  "controlStyles[1].target": "Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground > Grid > Rectangle#BackgroundFill",
  "controlStyles[1].styles[0]": "Fill := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
  "controlStyles[2].target": "Grid#OverflowRootGrid > Border",
  "controlStyles[2].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
  "controlStyles[2].styles[1]": "CornerRadius = 2",
  "controlStyles[0].styles[1]": "CornerRadius = 2",
  "controlStyles[3].target": "Grid#SystemTrayFrameGrid",
  "controlStyles[3].styles[0]": "CornerRadius = 2",
  "controlStyles[3].styles[1]": "Margin = 0,8,16,8",
  "controlStyles[3].styles[2]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[4].target": "Border#SearchPillBackgroundElement",
  "controlStyles[5].target": "SearchUx.SearchUI.SearchButtonRootGrid > Border#BackgroundElement",
  "controlStyles[5].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[6].target": "SearchUx.SearchUI.SearchIconButton > SearchUx.SearchUI.SearchButtonRootGrid@CommonStates > Border#BackgroundElement",
  "controlStyles[6].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
  "controlStyles[6].styles[1]": "CornerRadius = 2",
  "controlStyles[7].target": "Taskbar.ExperienceToggleButton",
  "controlStyles[8].target": "Taskbar.SearchBoxButton",
  "controlStyles[9].target": "Taskbar.TaskListButton",
  "controlStyles[7].styles[0]": "CornerRadius = 2",
  "controlStyles[8].styles[0]": "CornerRadius = 2",
  "controlStyles[9].styles[0]": "CornerRadius = 2",
  "controlStyles[10].target": "Windows.UI.Xaml.Controls.Grid#ModalRootGrid > Windows.UI.Xaml.Controls.Border#BackgroundElement ",
  "controlStyles[10].styles[0]": "CornerRadius = 2",
  "controlStyles[10].styles[1]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
  "controlStyles[11].target": "Windows.UI.Xaml.Controls.Border#BackgroundDimmingLayer",
  "controlStyles[11].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
  "controlStyles[11].styles[1]": "CornerRadius = 2",
  "controlStyles[12].target": "Windows.UI.Xaml.Shapes.Rectangle#HorizontalTrackRect",
  "controlStyles[12].styles[0]": "Height = 5",
  "controlStyles[13].target": "TextBlock#InnerTextBlock[Text=]",
  "controlStyles[13].styles[0]": "Text = ",
  "controlStyles[13].styles[1]": "Margin = 5",
  "controlStyles[14].target": "Taskbar.TaskListLabeledButtonPanel@RunningIndicatorStates > Rectangle#RunningIndicator",
  "controlStyles[14].styles[0]": "Fill = Transparent",
  "controlStyles[15].target": "Taskbar.TaskItemThumbnailView > Grid > Border",
  "controlStyles[15].styles[0]": "CornerRadius = 2",
  "controlStyles[15].styles[1]": "BorderThickness = 1",
  "controlStyles[15].styles[2]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[15].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[16].target": "Border#ProgressBarRoot > Border > Grid > Rectangle",
  "controlStyles[17].target": "Border#ProgressBarRoot > Border > Grid > Rectangle#ProgressBarTrack",
  "controlStyles[16].styles[0]": "Fill := <SolidColorBrush Color=\"{ThemeResource SystemAccentColorDark1}\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[17].styles[0]": "Fill := <SolidColorBrush Color=\"{ThemeResource SystemAccentColorDark3}\"\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[18].target": "Taskbar.TaskListButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[18].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[19].target": "Taskbar.TaskListLabeledButtonPanel",
  "controlStyles[18].styles[1]": "Background@ActiveNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[18].styles[2]": "Background@ActivePressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[18].styles[3]": "Background@ActivePointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[18].styles[4]": "Background@InactiveNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[18].styles[5]": "Background@InactivePressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[18].styles[6]": "Background@InactivePointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[20].target": "taskbar:TaskListLabeledButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[20].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[20].styles[1]": "Background@ActiveNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[20].styles[2]": "Background@ActivePressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[20].styles[3]": "Background@ActivePointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[20].styles[4]": "Background@InactiveNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[20].styles[5]": "Background@InactivePressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[20].styles[6]": "Background@InactivePointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[20].styles[7]": "Background@MultiWindowNormal := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[20].styles[8]": "Background@MultiWindowPressed := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
  "controlStyles[20].styles[9]": "Background@MultiWindowPointerOver := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[18].styles[7]": "Padding = 1,0,-10,0",
  "controlStyles[18].styles[8]": "Margin = 3",
  "controlStyles[19].styles[0]": "Margin = 3",
  "controlStyles[18].styles[9]": "CornerRadius = 2",
  "controlStyles[21].target": "Taskbar.TaskbarBackground#HoverFlyoutBackgroundControl > Grid > Rectangle#BackgroundFill",
  "controlStyles[21].styles[0]": "Fill := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
  "controlStyles[22].target": "Rectangle#BackgroundStroke",
  "controlStyles[22].styles[0]": "Fill := Transparent",
  "controlStyles[5].styles[1]": "CornerRadius = 2",
  "controlStyles[5].styles[2]": "BorderThickness = 1",
  "controlStyles[5].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorLight3}\" />",
  "controlStyles[23].target": "TextBlock#SearchBoxTextBlock",
  "controlStyles[23].styles[0]": "Foreground = White",
  "controlStyles[24].target": "ToolTip",
  "controlStyles[24].styles[0]": "Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[24].styles[1]": "CornerRadius = 2",
  "controlStyles[24].styles[2]": "BorderThickness = 1",
  "controlStyles[24].styles[3]": "FontSize = 12",
  "controlStyles[24].styles[4]": "Foreground = White",
  "controlStyles[24].styles[5]": "Margin = 3",
  "controlStyles[4].styles[0]": "CornerRadius = 2",
  "controlStyles[4].styles[1]": "Margin = 3",
  "controlStyles[4].styles[2]": "BorderThickness = 1",
  "controlStyles[4].styles[3]": "BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
  "controlStyles[23].styles[1]": "FontSize = 12",
  "controlStyles[24].styles[6]": "BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorLight3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorLight3}\" />"
}
```

</details>