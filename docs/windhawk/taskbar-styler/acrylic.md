---
title: Acrylic
summary: Acrylic styled theme
parent: Notification Styler
grand_parent: WindHawk
permalink: /windhawk/notification-styler/acrylic
---


## Acrylic
Simple acrylic theme for Windows 11 Taskbar Styler colorized with the system accent color.

![Preview][Preview]

### Installation

- Copy and paste the code below into `WindHawk >> Windows 11 Notification Styler >> Advanced >> Mod Settings`
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
   "controlStyles[5].styles[1]":"Margin = 0,3",
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
   "controlStyles[9].styles[0]":"Margin = 0"
}
```

[Preview]: https://raw.githubusercontent.com/The-Back-Room/The-Back-Room.github.io/refs/heads/main/docs/assets/images/previews/taskbar-styler/acrylic.bmp