---
title: [Ultra Punk Installation and Testing Guide]
type: 
summary:
description: Testing Guide
---

{% include callout.html type="note" content="Guide is a work in progress.  As this is meant for people interested in TESTING a new Cyberpunk modlist, some basic knowledge of Cyberpunk and how to use MO2 is to be expected. Portions of the guide will be incomplete or fully missing.

A more complete guide will be made available for the full release of Ultra Punk." %}

## WHAT IS ULTRA PUNK?

**Ultra Punk is the spiritual successor to the popular 3077 and 2099 modlists created by UltraMatt.  With UltraMatt moving on from Cyberpunk modding and no longer supporting either modlist, a successor was needed and thus Ultra Punk was born.**

## TESTING DISCLAIMERS

**TESTING MUST BE DONE ON A WINDOWS 11 PC ONLY.** <br> **LINUX AND MAC IS NOT SUPPORTED.**

**TESTERS SHOULD HAVE AT LEAST 10GB OF VRAM.  Anything lower is not being supported at this time.**

**TESTERS are expected to provide regular feedback, report bugs (as well as notes and possibly screenshots on how to reproduce them), and provide any other requested infromation such as VRAM usage, system configuration (graphics card, CPU, available VRAM and RAM, etc).**

**During the testing phase, the Wabbajack file will be updated regularly and testers are expected to install the updated wabbajack file.  When this occurs any other mods you may have downloaded that are not part of Ultra Punk will be deleted!  This is an unfortunate side effect of how Wabbajack modlists work.**  
- There are a couple MO2 plugins that claim to provide a solution to this, such as [Mod Keeper](https://www.nexusmods.com/site/mods/1768).  We do not provide support for these plugins and do not endorse their use.  They may or may not work as claimed.
- If you decide to use other mods while testing Ultra Punk and run into issues, then you will need to troubleshoot those yourself.  It is up to the discretion of the Ultra Punk team if a bug report is deamed to be valid if non Ultra Punk mods are used while testing.

{% include callout.html type="important" content="<b>Any tester purposely hiding the fact they're using other mods while making a bug report may be removed from the Ultra Punk testing program!</b>" %}

## INSTALLATION INSTRUCTIONS

1. Make sure no other mods are installed. If you were previously using Vortex, make sure all mods are disabled.  You can use the [Mod Remover Tool](https://www.nexusmods.com/cyberpunk2077/mods/8597) to backup any mod files that remain in the Cyberpunk installation folder.
    - If you have Optiscaler, ReShade, or RenoDX installed then you can leave those in the Cyberpunk folder and use them during testing.  The Mod Remover Tool will not remove those files so they'll be safe. 

1. Verify the Cyberpunk 2077 game install.  If you previously swapped the DLSS files then you were need to place these back and confirm that they're still configured as you'd like.

1. Install the [Wabbajack Installer](https://www.wabbajack.org/).

1. Grab the most recent Ultra Punk Wabbajack file from the pinned post in the `ultrapunk-testing` channel within the Ultra Plus Discord server.

1. Double click the Ultra Punk Wabbajack file, this should automatically open up the Wabbajack Installer. Alternatively click `Browse Lists`, then at the top right corner click `Install from disk` and pick the Ultra Punk Wabbajack file. 

1. For the Installation Location make sure you pick a CLEAN EMPTY folder, preferably outside of any protected Windows folders such as Program Files.  For this example I made a folder called `Ultra Punk` on my gaming SSD. 
- The Downloads Location should autofill to the *Installation Location*\downloads

1. Click `Install` on the bottom right of the Wabbajack Installer.

1. Once the install completes you should see `Finished Installation Project Ultrapunk` in the top center of the Wabbajack Installer.
- On the bottom right, you should see `Create Desktop Shortcut`. This will create an MO2 shortcut called `Project Ultrapunk` on your Desktop.  `Open in File Explorer` will open the Installation Location you picked earlier.  

1. Exit out of the Wabbajack Installer.  Open MO2, either within the Installation Location or on the Desktop Shortcut you created.

1. Once MO2 loads look over at the upper middle left side where it says `Profile`.  This will say `2. Project Ultrapunk - Quality (12GB+ vram)` by default. 

1. If you click on profile name you should see 4 profiles total:
- `1. Project Ultrapunk - Performance (10GB vram)`
- `2. Project Ultrapunk - Quality (12GB+ vram)`
- `3. Project Ultrapunk - Ultra Quality (16GB+ vram)`
- `4. Project Ultrapunk - Psycho Quality (20GB+ vram)`

1. Pick the profile that matches your VRAM number or *lower*.  If you're in-between two VRAM amounts do not go higher, go with the lower number.

1. Click on the big RUN button to start the game. 

1. Please follow any testing instructions / criteria currently pinned in the `ultrapunk-testing` channel.  Anything pinned there supercedes what is written in this guide.

**Optional: HDR users can follow Creepy's [RenoDX Install Guide](https://www.hdrmods.com/Cyberpunk-WIP) in order to get the best HDR experience.**
