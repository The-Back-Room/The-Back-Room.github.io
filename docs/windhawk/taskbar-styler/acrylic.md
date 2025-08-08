---
title: Acrylic
summary: Acrylic styled theme
parent: Taskbar Styler
grand_parent: WindHawk
permalink: /windhawk/taskbar-styler/acrylic
---


## Acrylic
Simple acrylic theme for Windows 11 Taskbar Styler colorized with the system accent color.  
You may need to download the [Franklin Gothic Fonts][Franklin Gothic Fonts] for the fonts to display correctly.

![Preview][Preview]

### Installation

- Copy and paste the code below into `WindHawk >> Windows 11 Taskbar Styler >> Advanced >> Mod Settings`
- Click `Save`, then click `Load`

```json
{
   "controlStyles[0].target":"Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground",
   "controlStyles[0].styles[0]":"Margin = 3",
   "controlStyles[1].target":"Taskbar.TaskbarFrame > Grid#RootGrid > Taskbar.TaskbarBackground > Grid > Rectangle#BackgroundFill",
   "controlStyles[1].styles[0]":"Fill := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" />",
   "controlStyles[2].target":"Grid#OverflowRootGrid > Border",
   "controlStyles[2].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" />",
   "controlStyles[3].target":"ToolTip",
   "controlStyles[3].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" />",
   "controlStyles[3].styles[1]":"CornerRadius = 2",
   "controlStyles[2].styles[1]":"CornerRadius = 2",
   "controlStyles[0].styles[1]":"CornerRadius = 2",
   "controlStyles[4].target":"Grid#SystemTrayFrameGrid",
   "controlStyles[4].styles[0]":"CornerRadius = 2",
   "controlStyles[4].styles[1]":"Margin = 0,8,8,8",
   "controlStyles[4].styles[2]":"Padding = 1,0,-10,0",
   "controlStyles[4].styles[3]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" />",
   "controlStyles[5].target":"Border#BackgroundElement",
   "controlStyles[5].styles[0]":"CornerRadius = 2",
   "controlStyles[5].styles[1]":"Margin = 3",
   "controlStyles[5].styles[2]":"Padding = 1,0,-10,0",
   "controlStyles[5].styles[3]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" />",
   "controlStyles[6].target":"Border#SearchPillBackgroundElement",
   "controlStyles[6].styles[0]":"CornerRadius = 2",
   "controlStyles[6].styles[1]":"Margin = 3",
   "controlStyles[6].styles[2]":"Padding = 1,0,-10,0",
   "controlStyles[6].styles[3]":"BorderThickness = 1.5",
   "controlStyles[6].styles[4]":"BorderBrush := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark2}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark2}\" />",
   "controlStyles[7].target":"SearchUx.SearchUI.SearchButtonRootGrid > Border#BackgroundElement",
   "controlStyles[7].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
   "controlStyles[8].target":"SearchUx.SearchUI.SearchIconButton > SearchUx.SearchUI.SearchButtonRootGrid@CommonStates > Border#BackgroundElement",
   "controlStyles[8].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
   "controlStyles[8].styles[1]":"CornerRadius = 2",
   "controlStyles[9].target":"Taskbar.TaskListLabeledButtonPanel",
   "controlStyles[9].styles[0]":"Margin = 0",
   "controlStyles[10].target":"Taskbar.ExperienceToggleButton",
   "controlStyles[11].target":"Taskbar.SearchBoxButton",
   "controlStyles[12].target":"Taskbar.TaskListButton",
   "controlStyles[10].styles[0]":"CornerRadius = 2",
   "controlStyles[11].styles[0]":"CornerRadius = 2",
   "controlStyles[12].styles[0]":"CornerRadius = 2",
   "controlStyles[13].target":"Windows.UI.Xaml.Controls.Grid#ModalRootGrid > Windows.UI.Xaml.Controls.Border#BackgroundElement",
   "controlStyles[13].styles[0]":"CornerRadius = 2",
   "controlStyles[13].styles[1]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
   "controlStyles[14].target":"Windows.UI.Xaml.Controls.Border#BackgroundDimmingLayer",
   "controlStyles[14].styles[0]":"Background := <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColor}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColor}\" />",
   "controlStyles[14].styles[1]":"CornerRadius = 2",
   "controlStyles[15].target":"Windows.UI.Xaml.Shapes.Rectangle#HorizontalTrackRect",
   "controlStyles[15].styles[0]":"Height = 5",
   "controlStyles[16].target":"TextBlock#InnerTextBlock[Text=]",
   "controlStyles[16].styles[0]":"Text = ",
   "controlStyles[16].styles[1]":"Margin = 5",
   "controlStyles[17].target":"Taskbar.TaskListLabeledButtonPanel@RunningIndicatorStates > Rectangle#RunningIndicator",
   "controlStyles[17].styles[0]":"Height = 2",
   "controlStyles[17].styles[1]":"Width = 12",
   "controlStyles[17].styles[2]":"Width@ActiveRunningIndicator = 20",
   "controlStyles[17].styles[3]":"Fill = <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
   "controlStyles[17].styles[4]":"Fill@ActiveRunningIndicator = <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark3}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark3}\" />",
   "controlStyles[17].styles[5]":"Fill@InactiveRunningIndicator = <AcrylicBrush TintColor=\"{ThemeResource SystemAccentColorDark1}\" TintOpacity=\"0.4\" FallbackColor=\"{ThemeResource SystemAccentColorDark1}\" />",
   "controlStyles[18].target":"TextBlock#LabelControl",
   "controlStyles[18].styles[0]":"FontFamily = Franklin Gothic"
}
```

[Preview]: https://raw.githubusercontent.com/The-Back-Room/The-Back-Room.github.io/refs/heads/main/docs/assets/images/previews/taskbar-styler/acrylic.bmp
[Franklin Gothic Fonts]: https://font.download/font/franklin-gothic