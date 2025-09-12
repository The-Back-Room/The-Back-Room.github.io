---
title: How to Install Custom Themes on Windows
summary: A step-by-step guide on how to install custom visual styles on Windows operating systems.
nav_exclude: true
permalink: /HowTo/InstallCustomThemes
---

## How to Install Custom Visual Styles on Windows
Custom visual styles can significantly enhance the visual appeal of your Windows desktop. This guide will walk you through the steps to install custom visual styles on your Windows operating system.

Keep in mind that installing third-party visual styles requires modifying system files, which can pose security risks. Always download visual styles from trusted sources and ensure they are compatible with your version of Windows.

### Step 1: Prepare Your System
Before installing a custom visual style, it's essential to back up your system. Create a restore point or back up your important files.

1. Download and install the classic personalization panel from [here](https://www.tenforums.com/tutorials/6051-add-personalize-classic-context-menu-windows-10-a.html). This will allow you to easily apply custom themes.
2. Download and install [SecureUxTheme Patcher](https://github.com/namazso/SecureUxTheme/releases/latest). This tool allows you to use third-party themes by patching system files.
    - Follow the instructions provided on the GitHub page to install the patcher.
    - Note that some antivirus programs may flag this tool as a potential threat due to its nature of modifying system files. Ensure you download it from the official source and understand the risks involved.
3. Restart your computer again to ensure all changes take effect.

### Step 2: Install the Custom Visual Styles
1. Download the desired theme. Prefereably a `ZIP` archive as `EXE` theme installers may contain unwanted software and often contain malware.
2. Extract the contents of the downloaded file using a file extraction tool like WinRAR or 7-Zip.
3. Look for the folder containing the `.theme` file and copy the contents to the `%SYSTEMROOT%\Resources\Themes` directory. You can access this folder by typing the path into the File Explorer address bar.
4. Some themes may require additional programs like [StartIsBack](https://www.startisback.com/) or [Open-Shell](https://open-shell.github.io/) to fully apply the theme. Follow any additional instructions provided with the theme.
    - **Note**: If the uploader didn't provide any instructions, you can usually skip this step.
