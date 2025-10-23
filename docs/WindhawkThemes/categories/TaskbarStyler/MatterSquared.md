---
title: Matter Squared
summary: >
  Theme for Windows 11 Taskbar Styler based off of the Matter theme.
nav_exclude: true
permalink: /WindhawkThemes/c/TaskbarStyler/MatterSquared
---

## Matter Squared
Theme for Windows 11 Taskbar Styler based off of the Matter theme.

[![Matter Squared Preview](/assets/images/previews/taskbar-styler/matter-squared.bmp)](/assets/images/previews/taskbar-styler/matter-squared.bmp)


### Requirements

- [Windhawk](https://windhawk.net/)
- [Windows 11 Taskbar Styler](https://windhawk.net/mods/windows-11-taskbar-styler)

### Installation

- Open the Windows 11 Taskbar Styler mod in Windhawk.
- Go to the "Advanced" tab.
- Copy the content below to the text box under "Mod settings" and click "Save".

```json
{
  "controlStyles[0].target": "Taskbar.TaskbarBackground#HoverFlyoutBackgroundControl",
  "controlStyles[0].styles[0]": "CornerRadius=2",
  "controlStyles[1].target": "Taskbar.TaskListButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[1].styles[0]": "CornerRadius=2",
  "controlStyles[2].target": "Taskbar.TaskListButton#TaskListButton[AutomationProperties.Name=Copilot] > Taskbar.TaskListLabeledButtonPanel#IconPanel > Border#BackgroundElement",
  "controlStyles[2].styles[0]": "Visibility=1",
  "controlStyles[3].target": "Taskbar.TaskListLabeledButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[3].styles[0]": "CornerRadius=2",
  "controlStyles[4].target": "Border#MultiWindowElement",
  "controlStyles[4].styles[0]": "CornerRadius=2",
  "controlStyles[5].target": "Grid#SystemTrayFrameGrid",
  "controlStyles[5].styles[0]": "CornerRadius=2",
  "controlStyles[6].target": "Border#BackgroundBorder",
  "controlStyles[6].styles[0]": "CornerRadius=2",
  "controlStyles[7].target": "Grid#OverflowRootGrid > Border",
  "controlStyles[7].styles[0]": "CornerRadius=2",
  "controlStyles[8].target": "Windows.UI.Xaml.Controls.Grid#VolumeConfirmator",
  "controlStyles[8].styles[0]": "CornerRadius=2",
  "controlStyles[9].target": "Windows.UI.Xaml.Controls.Grid#ConfirmatorMainGrid",
  "controlStyles[9].styles[0]": "CornerRadius=2",
  "controlStyles[10].target": "Windows.UI.Xaml.Controls.Grid#BrightnessConfirmator",
  "controlStyles[10].styles[0]": "CornerRadius=2",
  "controlStyles[11].target": "Taskbar.Badge#BadgeControl",
  "controlStyles[11].styles[0]": "CornerRadius=2",
  "controlStyles[12].target": "Windows.UI.Xaml.Shapes.Rectangle#BackgroundRect",
  "controlStyles[12].styles[0]": "RadiusX=2",
  "controlStyles[12].styles[1]": "RadiusY=2",
  "controlStyles[13].target": "MenuFlyoutPresenter",
  "controlStyles[13].styles[0]": "CornerRadius=2",
  "styleConstants[0]": "mainRadius=2",
  "styleConstants[1]": "transparent=<SolidColorBrush Color=\"Transparent\"/>",
  "styleConstants[2]": "base=<AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"1\" TintLuminosityOpacity=\"0.7\" FallbackColor=\"{ThemeResource SystemChromeLowColor}\" />",
  "styleConstants[3]": "overlay=<AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"1\" TintLuminosityOpacity=\"0.8\" FallbackColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" />",
  "styleConstants[4]": "overlay2=<AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"1\" TintLuminosityOpacity=\"0.5\" FallbackColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" />",
  "styleConstants[5]": "accentColor=<SolidColorBrush Color=\"{ThemeResource SystemAccentColor}\" Opacity=\"1\" />",
  "styleConstants[6]": "inverseBW=<SolidColorBrush Color=\"{ThemeResource SystemBaseHighColor}\" Opacity=\"1\" />",
  "styleConstants[7]": "active=<AcrylicBrush TintColor=\"{ThemeResource SystemAltLowColor}\" TintOpacity=\"1\" TintLuminosityOpacity=\"1\" FallbackColor=\"{ThemeResource CardStrokeColorDefaultSolid}\" />",
  "theme": "Matter"
}
```

---

<a href="/WindhawkThemes" class="btn btn--secondary btn--sm">Back to Windhawk Themes</a>