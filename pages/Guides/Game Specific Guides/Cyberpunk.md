---
title: [Cyberpunk 2077]
type: 
summary:
description: Cyberpunk 2077 HDR Guide
sidebar: false
---

{% include callout.html type="important" content="<b>Grab the WIP version of the RenoDX mod from the RenoDX server. Look for the pinned post in the Cyberpunk channel.  The GitHub and Nexus versions are both outdated; disregard the snapshot date on the GitHub page, it's not accurate.</b>  

<i>This is still valid as of January 25th, 2026.</i>

RenoDX server invite: <https://discord.gg/jz6ujVpgFB>

Direct link to the RenoDX Cyberpunk channel: <https://discord.com/channels/1408098019194310818/1410855640112566375/threads/1434377434022809610/1434377434022809610>" %}

{% include callout.html type="note" content="This guide is focused mainly on providing the recommended tools and settings to get Cyberpunk's HDR in the correct place.  

It would be impossible to cover every combination of LUT and visual mods that are available for the game.  Manual adjustment of the various RenoDX sliders will most likely to be necessary to achieve the best possible result." %}

## How to Fix Cyberpunk's HDR

**1)** Download the latest addon version of ReShade from <https://reshade.me/#download>

**2)** Install ReShade to the Cyberpunk 2077/bin/x64 folder (which the installer should default to once you pick Cyberpunk 2077)
    
- Note about mod managers: I do not recommend installing ReShade as a mod within Vortex or MO2 (Mod Organizer 2) unless you know what you're doing. Same applies to using Special K with ReShade.  This guide will cover a normal ReShade install.  

- For more detailed instructions on how to install ReShade with RenoDX, please refer to this guide: [**How to Install ReShade for RenoDX**](ReShade-Install-RenoDX)

**3)** Grab the WIP (Work in progress) version of RenoDX from the RenoDX Discord server. Look for the pinned comment in the Cyberpunk channel.

<a href="https://slow.pics/A4UyiLo0/"><img src="https://i.slow.pics/A4UyiLo0.jpg" style="width:75%;height:75%;"/></a>

<details>
<summary>Click for more RenoDX Info</summary>
<ol>
<ul>
    <li>The GitHub and Nexus Mods versions of Cyberpunk's RenoDX are outdated as mentioned in the bubble at the top of this guide.  The WIP verison fixes the contrast issue that is present in the other two versions.</li>

    <li>RenoDX server invite: <a href="https://discord.gg/jz6ujVpgFB">https://discord.gg/jz6ujVpgFB</a></li>

    <li>Direct link to the RenoDX Cyberpunk channel: <a href="https://discord.com/channels/1408098019194310818/1410855640112566375/threads/1434377434022809610/1434377434022809610">Cyberpunk 2077 Thread</a></li>

    <li>Note that the WIP version only applies to Cyberpunk 2077.  For all other games it's best to use the GitHub version (marked as a Snapshot button)</li>
</ul>
</ol>
</details>

**4)** Place the RenoDX addon in the Cyberpunk 2077/bin/x64 folder next to the ReShade install.

**5)** Start the game. Open the Settings menu.

**6)** Go to Video > HDR settings. **Make sure Cyberpunk's HDR is turned ON (set to HDR10 PQ)**, set Tone-Mapping Midpoint to 1 and Paper White to 200.

- This is also good advice with the native HDR as well.

- Maximum Brightness just leave at the default.  This is now overridden with the Peak Brightness setting within RenoDX.

- HDR10 PQ saturation leave at 0. You can use RenoDX's sliders to change saturation among other things.

<details><summary>HDR settings</summary>
<a href="https://slow.pics/zFyyInhD/"><img src="https://i.slow.pics/zFyyInhD.png" style="width:100%;height:100%;"/></a>
</details>

**7)** Within Cyberpunk's Graphics settings, make sure Color Precision is set to High or it will result in a washed out / gray image.

<details><summary>Color precision setting</summary>
<a href="https://slow.pics/Uinn4FKy/"><img src="https://i.slow.pics/Uinn4FKy.png" style="width:100%;height:100%;"/></a>
</details>

**8)** Open the ReShade interface, default button is the Home key.  

- If you don't have a Home key please refer to this guide that goes over how to change it to a different key: <https://www.youtube.com/watch?v=xoCdpOIRKus>

**9)** Click on the RenoDX tab along the top of the ReShade GUI.  Set the Peak Brightness to match your display's capabilities.  

- If you don't know what that value is, refer to the spec sheet for your display or look it up on <https://www.rtings.com/> which has reviews for a wide range of displays that includes detailed spec lists.

- Technically all the other RenoDX settings are user preference but I'll go over a few more important ones.

**10)** Game Brightness is the paper white value.  Set this between 150-300 nits (I personally have it set to 200 nits) but this is ultimately user preference and may need to change depending on which LUT you're using.

**11)** Set SDR EOTF Emulation to UI/Menu only.  If you like how the older version of RenoDX looked, slide this to the right so it applies to everything.

**12)** Filmgrain I personally have set to around 20.  This is the same filmgrain from ShortFuse's ReShade shader repository: <https://github.com/clshortfuse/reshade-shaders/tree/main/Shaders>

- If using other ReShade shaders such as Lilium's RCAS (which is commonly recommended), then I would set the filmgrain within RenoDX to 0 and then use the ShortFuse's filmgrain shader and place it at the very end (you never want to sharpen filmgrain, and RCAS is a sharpening shader).

**13)** Double check to make sure Debug Graph is turned off (found at the very bottom of RenoDX under Debug).  Otherwise you'll see a colored square on the upper right corner behind the minimap.

<details><summary>Debug Graph On</summary>
<a href="https://slow.pics/xY8QcYui/"><img src="https://i.slow.pics/xY8QcYui.png" style="width:100%;height:100%;"/></a>
</details>

<details><summary>Debug Graph Off</summary>
<a href="https://slow.pics/R1nHEgpd/"><img src="https://i.slow.pics/R1nHEgpd.png" style="width:100%;height:100%;"/></a>
</details>

**14)** Adjust the rest of the sliders however you'd like!

## Troubleshooting

**Washed out / gray image**
- Make sure RTXHDR is turned off globally (or at least for Cyberpunk 2077)
- Verify HDR is turn on in Windows and in Cyberpunk 2077.
- Make sure Color Precision is set to High within the graphics settings. RenoDX will not work with this set to medium.
- Make sure you're using the latest add-on version of ReShade.

**Colored Square Behind Minimap / Upper Right Corner**
- This is the debug graph from the WIP RenoDX. Look at the very bottom of the RenoDX settings, under Debug turn off Debug Graph

<details><summary>Debug Graph Off</summary>
<a href="https://slow.pics/R1nHEgpd/"><img src="https://i.slow.pics/R1nHEgpd.png" style="width:100%;height:100%;"/></a>
</details>


## Recommended LUTs
All LUTs mentioned can be found in the main LUT switcher 2 mod: <https://www.nexusmods.com/cyberpunk2077/mods/16310>

- **Preem LUT 3:** my personal favorite

<details><summary>RenoDX with Preem LUT 3 settings that I personally use</summary>
<a href="https://slow.pics/8aHFqCZ4/"><img src="https://i.slow.pics/8aHFqCZ4.png" style="width:75%;height:75%;"/></a>
</details>

- **Nova LUT 3:** The other predominant LUT that many people use with HDR

<details><summary>RenoDX with Nova LUT 3 settings provided by Roybreaker</summary>
<a href="https://slow.pics/QDnxkz0d/"><img src="https://i.slow.pics/QDnxkz0d.png" style="width:75%;height:75%;"/></a>
</details>

## Recommended Mods
RenoDX settings listed had these mods in mind but any listed are completely optional. Make sure to check the mod descriptions for other required mods needed to make them work.

- **Ultra Plus:**  Fixes performance issues and improves the overall look of the game by adding new ray tracing and path tracing modes in addition to other visual improvements.  Nexus Mods link: <https://www.nexusmods.com/cyberpunk2077/mods/10490>

    - Check the Ultra Plus Discord server's Cyberpunk channel for newer beta builds that haven't been released to the Nexus yet.  Invite link: <https://discord.com/invite/ultraplace>

- **Nova City 2:** Weather and lighting mod. Will make the shadows and nights a bit darker so a night vision and/or flashlight mod is recommended (read the mod description for details).  Nexus Mods link:  <https://www.nexusmods.com/cyberpunk2077/mods/12490>

- **ReLUX and ReImagined:** Pair of mods meant to work with each other.  Removes fake lights designed to further enhance the look of the various path tracing modes. ReLUX: <https://www.nexusmods.com/cyberpunk2077/mods/20808> ReImagined: <https://www.nexusmods.com/cyberpunk2077/mods/25845>

- **For more recommended mods check out the 3077 Collection (now a full-fledged Wabbajack list):** <https://www.nexusmods.com/games/cyberpunk2077/collections/lv4wpp>.  Even if you don't want to download the entire modlist, the other visual mods are still worth checking out.



