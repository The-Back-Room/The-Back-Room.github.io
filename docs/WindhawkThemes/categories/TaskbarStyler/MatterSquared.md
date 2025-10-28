---
title: Matter Squared
tags: [Windhawk Themes, Advanced Customization, Taskbar Theme]
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
- [Taskbar height and icon size](https://windhawk.net/mods/taskbar-icon-size) (optional, but recommended)

### Installation

- Open the Windows 11 Taskbar Styler mod in Windhawk.
- Go to the "Advanced" tab.
- Copy the content below to the text box under "Mod settings" and click "Save".

```json
{
  "controlStyles[0].target": "Taskbar.TaskbarBackground#HoverFlyoutBackgroundControl",
  "controlStyles[0].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[1].target": "Taskbar.TaskListButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[1].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[2].target": "Taskbar.TaskListButton#TaskListButton[AutomationProperties.Name=Copilot] > Taskbar.TaskListLabeledButtonPanel#IconPanel > Border#BackgroundElement",
  "controlStyles[2].styles[0]": "Visibility=1",
  "controlStyles[3].target": "Taskbar.TaskListLabeledButtonPanel@CommonStates > Border#BackgroundElement",
  "controlStyles[3].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[4].target": "Border#MultiWindowElement",
  "controlStyles[4].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[5].target": "Grid#SystemTrayFrameGrid",
  "controlStyles[5].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[6].target": "Border#BackgroundBorder",
  "controlStyles[6].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[7].target": "Grid#OverflowRootGrid > Border",
  "controlStyles[7].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[8].target": "Grid#VolumeConfirmator",
  "controlStyles[8].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[9].target": "Grid#ConfirmatorMainGrid",
  "controlStyles[9].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[10].target": "Grid#BrightnessConfirmator",
  "controlStyles[10].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[11].target": "Taskbar.Badge#BadgeControl",
  "controlStyles[11].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[12].target": "Rectangle#BackgroundRect",
  "controlStyles[12].styles[0]": "RadiusX=$CornerRadius",
  "controlStyles[12].styles[1]": "RadiusY=$CornerRadius",
  "controlStyles[13].target": "MenuFlyoutPresenter",
  "controlStyles[13].styles[0]": "CornerRadius=$CornerRadius",
  "theme": "Matter",
  "styleConstants[0]": "CornerRadius=4",
  "controlStyles[14].target": "Border#BackgroundElement",
  "controlStyles[14].styles[0]": "CornerRadius=$CornerRadius"
}
```

### Optional: Adjust Taskbar height and icon size

- Open the Taskbar height and icon size mod in Windhawk.
- Go to the "Advanced Settings" tab.
- Copy the content below to the text box under "Mod settings" and click "Save".

```json
{
  "TaskbarHeight": 48,
  "IconSize": 24,
  "TaskbarButtonWidth": 44,
  "IconSizeSmall": 16,
  "TaskbarButtonWidthSmall": 32
}
```

---

<a href="/WindhawkThemes" class="btn btn--secondary btn--sm">Back to Windhawk Themes</a>