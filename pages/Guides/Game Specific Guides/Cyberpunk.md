---
title: [Cyberpunk 2077]
type: 
summary:
description: How to Setup RenoDX in Cyberpunk 2077
---

{% include callout.html type="tip" content="Make sure your display actually supports HDR before installing RenoDX. Your monitor should be rated for HDR400 or higher, meaning it should have at least 400 nits peak brightness. If you're unsure whether your display actually supports HDR, a good resource is <https://www.rtings.com> which has reviews for a wide range of displays and will include a list of detailed technical specifications for anything they cover." %}

{% include callout.html type="important" content="<b>Grab the WIP version of the RenoDX mod from the RenoDX server. Look for the pinned post in the Cyberpunk channel.  The GitHub and Nexus versions are both outdated; disregard the snapshot date on the GitHub page, it's not accurate.</b>  

<i>This is still valid as of January 25th, 2026.</i>

RenoDX server invite: <https://discord.gg/jz6ujVpgFB>

Direct link to the RenoDX Cyberpunk channel: <https://discord.com/channels/1408098019194310818/1410855640112566375/threads/1434377434022809610/1434377434022809610>" %}

{% include callout.html type="note" content="This guide is focused mainly on providing the recommended tools and settings to get Cyberpunk's HDR in the correct place.  

It would be impossible to cover every combination of LUT and visual mods that are available for the game.  Manual adjustment of the various RenoDX sliders will most likely to be necessary to achieve the best possible result." %}

## What is Wrong with Cyberpunk's HDR?
<details><summary><b>This is the answer provided directly from ShortFuse, the creator of RenoDX:</b></summary>
<ol>
<ul>
    <li>SDR uses LUTs that clip, they don't properly roll off.  But they're all baked with ACES. So they're graded, with ACES per channel coloring, and their color tuning.</li>

    <li>For HDR, they took the SDR LUT, and as they were stretched them to 1900 nits. If the SDR LUT went to 100 nits, then it stretched them to 1900. If the SDR LUTs went to 325 nits (clipping over 100 nits), they were also stretched to 1900 nits. So they have inconsistent stretching.</li>

    <li> Then, after taking their ACES-baked SDR LUTs stretched to 1900 nits, they apply their custom ACES HDR to apply a second round of ACES to try to tonemap it down to user selected peak. Except they didn't.</li>
    
    <li>First of all, a LUT that only goes to 1900 nits would never hit peak, because that's not how you're supposed to use ACES. It's supposed to be the render. They're supposed to do Render => ACES-HDR. They did Render => ACESSDR-LUT-Stretched-to-1900-nits => CustomStretchedACESHDR.</li>
    
    <li>And they still overshot user peak by about 10%. And their custom ACES would scale and stretch based on what you put. The more peak nits your put, the more it did per channel stretching, meaning overcoloring things.</li>

    <li>It's basically nonsense and had no metric of sanity. The original RenoDX fix I did was to at least fix the stretching from their custom ACES HDR.  I redid the CP2077 mod, and the one that's in the Discord targets the SDR look, fully knowing their HDR LUT is just cooked, ITM ACES-SDR.</li>
</ul>
</ol>
</details>


## How to Fix Cyberpunk's HDR using RenoDX

**1)** Download the latest addon version of ReShade from <https://reshade.me/#download>

**2)** Install ReShade to the `\bin\x64 folder` (which the installer should default to once you pick Cyberpunk 2077)
    
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

**4)** Place the RenoDX addon in the `\bin\x64` folder next to the ReShade install.

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

### Washed out / gray image
- Make sure RTXHDR is turned off globally (or at least for Cyberpunk 2077)
- Verify HDR is turn on in Windows and in Cyberpunk 2077.
- Make sure Color Precision is set to High within the graphics settings. RenoDX will not work with this set to medium.
- Make sure you're using the latest add-on version of ReShade.

### Colored Square Behind Minimap / Upper Right Corner
- This is the debug graph from the WIP RenoDX. Look at the very bottom of the RenoDX settings, under Debug turn off Debug Graph

<details><summary>Debug Graph Off</summary>
<a href="https://slow.pics/R1nHEgpd/"><img src="https://i.slow.pics/R1nHEgpd.png" style="width:100%;height:100%;"/></a>
</details>

### Banding / Grid Pattern in the Sky
- Switch to Ray Reconstruction preset D, which seems to be a little bit better for HDR.  Easiest way is to use DLSS Swapper: <https://github.com/beeradmoore/dlss-swapper/releases>
- Preset E is typically recommended over D because it has less issues with boiling and has less artifacts overall.  So don't switch to D unless you're having the banding / grid pattern issue.
- When using Ray Reconstruction it overrides the SR model completely, meaning presets K, L, M, etc. won't get applied when using RR.

**Ray Reconstruction Preset D vs E:**
{% include comparison-slider.html before="images/Cyberpunk/RayReconstruction/PresetD.png" after="images/Cyberpunk/RayReconstruction/PresetE.png" before_label="Preset D" after_label="Preset E" %}
- Credit to **squarto** and **Gn3xus** for figuring this out and taking these comparison images.

## How to Provide More Info for Troubleshooting

**1) Make sure view file name extensions is enabled within Windows File Viewer.**  This will allow you to see the commonly used file types such as .ini, .txt, .log, and .exe.  

  <details>
  <summary>How to view file name extensions in Windows 11:</summary>
	<ol>
	<ul>
    <li>1) Open File Explorer.</li>

      <li>2) Along the top bar of File Explorer, left click View.</li>

    <li>3) Hover over Show, then make sure File name extensions is checked.</li>
	</ul>
	</ol>
	</details> 

**2) Take screenshots of the issue with ReShade.** This will take HDR PNGs that can be uploaded to Discord.
- Please do not take pictures of your monitor/TV with your phone unless we're troubleshooting an issue with the display itself. Phones are horrible at taking pictures of what is onscreen.

**3) Common troubleshooting questions:**
- What version of ReShade are you using?
<details><summary>Can be found at the very top of the ReShade About tab:</summary>
<a href="https://slow.pics/3Zj4JfF9/"><img src="https://i.slow.pics/3Zj4JfF9.jpg" style="width:100%;height:100%;"/></a>
</details>

- Are you using any other ReShade shaders? (checkmarks enabled in the ReShade Home tab)?
- Is HDR turned on within Windows and in Cyberpunk 2077?
- What RenoDX settings are you using? (just take a screenshot to show this)

**4) Log file locations:**
*Unless otherwise noted, all file paths are assumed to start within the Cyberpunk 2077 game folder*
- ReShade.log - `\bin\x64` 
    - By far the most important log for RenoDX issues

====OTHER MOD LOGS====

- Cyberpunk 2077 Crash Dump - `%LocalAppData%\REDEngine\ReportQueue` for the main game crash log
- Cyber Engine Tweaks - `\bin\x64\plugins\cyber_engine_tweaks`
- Redscript - `\r6\logs`
- Red4Ext - `\red4ext\logs` and `\red4ext\plugins` for specific mod logs
- Ultra Plus - `\bin\x64\plugins\cyber_engine_tweaks\mods\UltraPlus`

{% include callout.html type="tip" content="Highly recommend that you use RenoDX alongside the Ultra Plus mod!  Provides some performance tweaks and also adds new visual modes for both lower end and higher end hardware configurations. 

Link to Ultra Plus mod page: <https://www.nexusmods.com/cyberpunk2077/mods/10490>" %}

<!--

## LUTs: Everything you need to know

**What is a LUT?**
- **L**ook-**U**p **T**able: Think of it like a table of contents that change colors from one value to another.

**Do I need to use a LUT mod?** No, the vanilla LUT is fine and it'll look even better when using RenoDX.  However, many people choose to use a LUT to further customize the look of the game.

**RenoDX was designed around the vanilla LUT.**  Thus picking any other LUT will most likely require you to adjust the various sliders within RenoDX to get it to look decent.  
- To emulate the look of Vanilla HDR:
    - Contrast: 60
    - Saturation: 60
- To emulate the look of Vanilla SDR:
    - Highlights: 75
    - LUT Scaling: 95

### But should I use a LUT??? If so, which one should I pick???

**How can I figure out which LUT to use?**

LUT Switcher 2 has a feature that allows you to compare different LUTs to each other, blindly.  Meaning you don't know which LUT you are currently looking at.

**My personally recommended LUT to use *with* RenoDX:** PREEM LUT 3.
- With RenoDX it seems to require the least amount of slider adjustment to look decent.  In fact, I pretty much keep RenoDX at the default settings when using it.

-->

<!--
{% include callout.html type="warning" content=" The LUT you pick has a large impact on how the game looks.   There is no perfect answer for which LUT you should use, because everyone has their own preference based on the rest of the mods their using, the type of display they have, and personal taste." %}

<a href="https://imgflip.com/i/aj6m9b"><img src="https://i.imgflip.com/aj6m9b.jpg"/></a>
-->


<!--
{% include callout.html type="note" content=" <b>Disclaimer:</b> Consider this the end of the actual proper guide.  Everything after this point was included for fun and as a way to endorse some of my favorite mods." %}

-->

<!--

## Recommended LUTs
All LUTs mentioned can be found in the main LUT switcher 2 mod: <https://www.nexusmods.com/cyberpunk2077/mods/16310>

- **Preem LUT 3:** my personal favorite


<details><summary>RenoDX with Preem LUT 3 settings that I personally use</summary>
<a href="https://slow.pics/8aHFqCZ4/"><img src="https://i.slow.pics/8aHFqCZ4.png" style="width:75%;height:75%;"/></a>
</details>

- **Nova LUT 3:** The other predominant LUT that many people use with HDR. 

<details><summary>RenoDX with Nova LUT 3 settings provided by Roybreaker</summary>
<a href="https://slow.pics/QDnxkz0d/"><img src="https://i.slow.pics/QDnxkz0d.png" style="width:75%;height:75%;"/></a>
</details>

-->

<!--

## Recommended Mods
Make sure to check the mod descriptions for other required mods needed to make them work.

- **Ultra Plus:**  Fixes performance issues and improves the overall look of the game by adding new ray tracing and path tracing modes in addition to other visual improvements.  Nexus Mods link: <https://www.nexusmods.com/cyberpunk2077/mods/10490>

    - Check the Ultra Plus Discord server's Cyberpunk channel for newer beta builds that haven't been released to the Nexus yet.  Invite link: <https://discord.com/invite/ultraplace>

- **Nova City 2:** Weather and lighting mod. Will make the shadows and nights a bit darker so a night vision and/or flashlight mod is recommended (read the mod description for details).  Nexus Mods link:  <https://www.nexusmods.com/cyberpunk2077/mods/12490>

- **ReLUX and ReImagined:** Pair of mods meant to work with each other.  Removes fake lights designed to further enhance the look of the various path tracing modes. ReLUX: <https://www.nexusmods.com/cyberpunk2077/mods/20808> ReImagined: <https://www.nexusmods.com/cyberpunk2077/mods/25845>

- **For more recommended mods check out the 3077 Collection (now a full-fledged Wabbajack list):** <https://www.nexusmods.com/games/cyberpunk2077/collections/lv4wpp>.  Even if you don't want to download the entire modlist, the other visual mods are still worth checking out.



{% include callout.html type="tip" content=" <b>What about LUT Mods?</b>

I originally included some recommended LUTs and associated RenoDX configurations in this guide; however, I ended up removing that section because everyone is going to have their own opinions about which LUTs and RenoDX settings look good to them.  Also, to be completely honest I don't want to get pinged over a preset that doesn't work with someone's specific setup.  That really isn't the focus of this guide anyways.

Thus my own recommendation is to install the LUT Switcher 2 mod and try the various LUTs out for yourself.

LUT Switcher 2 link: <https://www.nexusmods.com/cyberpunk2077/mods/16310>" %}

-->

