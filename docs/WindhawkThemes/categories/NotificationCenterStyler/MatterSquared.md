---
title: Matter Squared
tags: [Windhawk Themes, Advanced Customization, Notification Center Theme]
summary: >
  Theme for Windows 11 Notification Center Styler based off of the Matter theme.
nav_exclude: true
permalink: /WindhawkThemes/c/NotificationCenterStyler/MatterSquared
---

## Matter Squared
Theme for Windows 11 Notification Center Styler based off of the Matter theme.

[![Matter Squared Preview](/assets/images/previews/notification-center-styler/matter-squared.bmp)](/assets/images/previews/notification-center-styler/matter-squared.bmp)

### Requirements

- [Windhawk](https://windhawk.net/)
- [Windows 11 Notification Center Styler](https://windhawk.net/mods/windows-11-notification-center-styler)

### Installation

- Open the Windows 11 Notification Center Styler mod in Windhawk.
- Go to the "Advanced" tab.
- Copy the content below to the text box under "Mod settings" and click "Save".

```json
{
  "controlStyles[0].target": "Grid#NotificationCenterGrid",
  "controlStyles[0].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[1].target": "Grid#CalendarCenterGrid",
  "controlStyles[1].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[2].target": "ScrollViewer#CalendarControlScrollViewer",
  "controlStyles[2].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[3].target": "Border#CalendarHeaderMinimizedOverlay",
  "controlStyles[3].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[4].target": "ActionCenter.FocusSessionControl#FocusSessionControl > Grid#FocusGrid",
  "controlStyles[4].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[5].target": "MenuFlyoutPresenter",
  "controlStyles[5].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[6].target": "Border#JumpListRestyledAcrylic",
  "controlStyles[6].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[7].target": "Grid#ControlCenterRegion",
  "controlStyles[7].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[8].target": "ContentPresenter#PageContent > Grid > Border",
  "controlStyles[8].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[9].target": "QuickActions.ControlCenter.AccessibleWindow#PageWindow > ContentPresenter > Grid#FullScreenPageRoot > ContentPresenter#PageHeader",
  "controlStyles[9].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[10].target": "ScrollViewer#ListContent",
  "controlStyles[10].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[11].target": "Border#ToastBackgroundBorder2",
  "controlStyles[11].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[12].target": "JumpViewUI.SystemItemListViewItem > Grid#LayoutRoot > Border#BackgroundBorder",
  "controlStyles[12].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[13].target": "JumpViewUI.JumpListListViewItem > Grid#LayoutRoot > Border#BackgroundBorder",
  "controlStyles[13].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[14].target": "ActionCenter.FlexibleItemView",
  "controlStyles[14].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[15].target": "QuickActions.AccessibleToggleButton#ToggleButton",
  "controlStyles[15].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[16].target": "QuickActions.AccessibleToggleButton#SplitL2Button",
  "controlStyles[16].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[17].target": "Grid#NotificationCenterTopBanner",
  "controlStyles[17].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[18].target": "Button#FooterButton[AutomationProperties.Name=Edit quick settings]",
  "controlStyles[18].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[19].target": "Button[AutomationProperties.AutomationId=Microsoft.QuickAction.Battery]",
  "controlStyles[19].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[20].target": "Button#FooterButton[AutomationProperties.Name=All settings]",
  "controlStyles[20].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[21].target": "Button[AutomationProperties.AutomationId=Microsoft.QuickAction.Volume]",
  "controlStyles[21].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[22].target": "Button#VolumeL2Button[AutomationProperties.Name=Select a sound output]",
  "controlStyles[22].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[23].target": "Windows.UI.Xaml.Shapes.Rectangle#HorizontalTrackRect",
  "controlStyles[24].target": "Windows.UI.Xaml.Shapes.Rectangle#HorizontalDecreaseRect",
  "controlStyles[25].target": "Grid#MediaTransportControlsRegion",
  "controlStyles[26].target": "Grid#ThumbnailImage",
  "controlStyles[27].target": "Primitives.RepeatButton#PreviousButton > ContentPresenter#ContentPresenter@CommonStates",
  "controlStyles[28].target": "Button#PlayPauseButton > ContentPresenter#ContentPresenter@CommonStates",
  "controlStyles[29].target": "Primitives.RepeatButton#NextButton > ContentPresenter#ContentPresenter@CommonStates",
  "controlStyles[29].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[28].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[27].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[26].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[25].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[30].target": "CalendarViewDayItem > Border",
  "controlStyles[30].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[31].target": "CalendarViewDayItem",
  "controlStyles[31].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[32].target": "Control > Border",
  "controlStyles[32].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[33].target": "Primitives.CalendarViewItem",
  "controlStyles[33].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[34].target": "ListViewHeaderItem",
  "controlStyles[35].target": "Button#SettingsButton",
  "controlStyles[36].target": "Button#DismissButton",
  "controlStyles[37].target": "Grid#WeekDayNames",
  "controlStyles[37].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[34].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[38].target": "ListViewItem",
  "controlStyles[38].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[39].target": "Grid#RootGrid > ContentPresenter#ContentPresenter",
  "controlStyles[39].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[40].target": "Grid > Border#ItemOpaquePlating",
  "controlStyles[41].target": "Grid#StandardHeroContainer",
  "controlStyles[40].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[41].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[36].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[35].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[23].styles[0]": "RadiusY=$CornerRadius",
  "controlStyles[23].styles[1]": "RadiusX=$CornerRadius",
  "controlStyles[24].styles[0]": "RadiusY=$CornerRadius",
  "controlStyles[24].styles[1]": "RadiusX=$CornerRadius",
  "controlStyles[42].target": "Button#BackButton",
  "controlStyles[42].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[43].target": "Windows.UI.Xaml.Shapes.Rectangle#OuterBorder",
  "controlStyles[43].styles[0]": "RadiusX=$CornerRadius",
  "controlStyles[43].styles[1]": "RadiusY=$CornerRadius",
  "controlStyles[44].target": "Windows.UI.Xaml.Shapes.Rectangle#SwitchKnobOff",
  "controlStyles[44].styles[0]": "RadiusY=$CornerRadius",
  "controlStyles[44].styles[1]": "RadiusX=$CornerRadius",
  "controlStyles[45].target": "Border#SwitchKnobOn",
  "controlStyles[45].styles[0]": "CornerRadius=$CornerRadius",
  "controlStyles[46].target": "Windows.UI.Xaml.Shapes.Rectangle#SwitchKnobBounds",
  "controlStyles[46].styles[0]": "RadiusX=$CornerRadius",
  "controlStyles[46].styles[1]": "RadiusY=$CornerRadius",
  "controlStyles[47].target": "NetworkUX.View.SettingsListViewItem > Primitives.ListViewItemPresenter#Root",
  "controlStyles[47].styles[0]": "CornerRadius=$CornerRadius",
  "theme": "Matter",
  "styleConstants[0]": "CornerRadius=4"
}
```

---

<a href="/WindhawkThemes" class="btn btn--secondary btn--sm">Back to Windhawk Themes</a>