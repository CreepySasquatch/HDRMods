---
title: [Cyberpunk-FAQ]
type: 
summary:
description: Troubleshooting RenoDX in Cyberpunk 2077
---

[**BACK TO MAIN RENODX GUIDE**](Cyberpunk)

## Washed out / gray image
- Make sure RTXHDR is turned off globally (or at least for Cyberpunk 2077)
- Verify HDR is turn on in Windows and in Cyberpunk 2077.
- Make sure Color Precision is set to High within the graphics settings. RenoDX will not work with this set to medium.
- Make sure you're using the latest add-on version of ReShade.

## Crushed Black Levels / Shadows Appear Darker Than They Should
- Disable HDR10+ Gaming within the in-game video settings.  This will only appear if your computer detects that you are using an HDR10+ capable display.
<details><summary>HDR10+ Setting Location</summary>
<a href="https://slow.pics/eE2HLqSI/"><img src="https://i.slow.pics/eE2HLqSI.png" style="width:100%;height:100%;"/></a>
</details>
- Is the Tone-Mapping Midpoint, within the in-game HDR settings, set at something lower than 1.0?
- Some LUTs can cause this issue, especially if the RenoDX settings are not configured to compensate for it.  See if the problem goes away by selecting the vanilla LUT with RenoDX at the default settings (but leave Peak Brightness the same). 
- Disable any ReShade shaders if you're using them, especially if in HDR10 scRGB mode.
- Are you using Nova City 2?  This can cause the game to appear darker in some areas, especially in interior spaces and at night.  This is expected behavior of the mod as it recommends using flashlight and night vision mods with it.

## Colored Square Behind Minimap / Upper Right Corner
- This is the debug graph from the WIP RenoDX. Look at the very bottom of the RenoDX settings, under Debug turn off Debug Graph

<details><summary>Debug Graph Off</summary>
<i>Screenshot taken from an older version of RenoDX</i>
<a href="https://slow.pics/R1nHEgpd/"><img src="https://i.slow.pics/R1nHEgpd.png" style="width:100%;height:100%;"/></a>
</details>

<!--
### Banding / Grid Pattern in the Sky
- Make sure you're using Ray Reconstruction preset D.  Easiest way is to use the Nvidia App or a third party program such as DLSS Swapper: <https://github.com/beeradmoore/dlss-swapper/releases>
- When using Ray Reconstruction it overrides the SR model completely, meaning presets K, L, M, etc. won't get applied when using RR.

**Ray Reconstruction Preset D vs E:**
{% include comparison-slider.html before="images/Cyberpunk/RayReconstruction/PresetD.png" after="images/Cyberpunk/RayReconstruction/PresetE.png" before_label="Preset D" after_label="Preset E" %}
- Credit to **squarto** and **Gn3xus** for figuring this out and taking these comparison images.
-->

## Frame Generation artifacts when moving
*Especially in light sources*

<details><summary>Make sure HDR10 PQ Saturation is set to 0 in the base game / vanilla HDR settings.</summary>
<a href="https://slow.pics/zFyyInhD/"><img src="https://i.slow.pics/zFyyInhD.png" style="width:100%;height:100%;"/></a>
</details>


**Before and After Changing HDR10 PQ Saturation:**

<video src="https://raw.githubusercontent.com/CreepySasquatch/HDRMods/main/images/Cyberpunk/Cyberpunk-Frame-Generation-Bug.mp4" controls width="100%"></video>
*Credit to **Invictus** for figuring out this issue and supplying the video showing the fix!*

<!--
### Map is hard to read
<details><summary>RenoDX Map Bug</summary>
<a href="https://slow.pics/FScCfiyT/"><img src="https://i.slow.pics/FScCfiyT.png" style="width:100%;height:100%;"/></a>
</details>

**Known issue with this version of RenoDX (and the WIP version before it).  This bug affects the vanilla map and every map mod.**
- Cyanide has kindly made a MapLUTBegone mod that will help fix the issue.  It's pinned in the Cyberpunk channel of the RenoDX server.  Direct link to post: <https://discord.com/channels/1408098019194310818/1434377434022809610/1492718360163647642>.  
- HUD Painter can change the contrast, saturation, and colors of the World Map: <https://www.nexusmods.com/cyberpunk2077/mods/14935>
    - Color options do not work on the realistic map mod
    - HUD Painter does require most of the core mods such as redscript and codeware, but if you have a full modlist then you'll probably have these anyways. Make sure to install the mod settings optional mod so you can see the World Map options.
    - Can be used in combination with the MapLUTBegone fix or on its own.
<details><summary>MOD Settings HUD Painter</summary>
Settings listed only for reference, please adjust to your liking.
<a href="https://slow.pics/l8t0m7js/"><img src="https://i.slow.pics/l8t0m7js.png" style="width:100%;height:100%;"/></a>
</details>
- Some people also find that the Realistic Map Mod looks better.  Pick the 8K version or higher, as the lower resolution versions have issues: <https://www.nexusmods.com/cyberpunk2077/mods/17811>
-->

## How do I adjust the UI brightness?
**You can change the UI brightness by adjusting the `paper white` value in the game's HDR settings.**  This value has no other effect when RenoDX is installed.

## HUD / UI Looks Weird
- This usually appears as boxes or borders around parts of the HUD.
- The vanilla film grain is broken and can cause this issue.  Make sure film grain type within RenoDX is set to `Perceptual`.

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

**2) Take screenshots of the issue with ReShade!** This will take HDR PNGs that can be uploaded to Discord. You're also using ReShade to inject RenoDX anyways so there's little to no reason to use another option.
- The only other accurate alternative is SKIV.
- Special K can technically work as well, but like I said in the beginning of this guide, this option isn't supported due to issues Special K can have with RenoDX.  If you need to use Special K, just use the Display Commander addon instead.  It has most of the same features as Special K but is more compatible with RenoDX because it loads as a ReShade addon.
- Nvidia overlay isn't always accurate, and it takes JXR screenshots which need to be converted to HDR PNG with another program such as SKIV.
- Windows Gamebar can suffer from accuracy issues as well.
- The Windows snipping tool, and similar apps such as ShareX, are not capable of taking HDR screenshots at all.  The most they can do is tonemap an HDR image to SDR, which is equally as useless for troubleshooting.  
- **Please do not take pictures of your monitor/TV with your phone unless we're troubleshooting an issue with the display itself. This prevents us from separating the issues that are present in the game, and which are just artifacts from the phone's camera sensor.**

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

{% include callout.html type="note" content="If you're using MO2, you will find most of these logs within the overwrite folder." %}

- Cyberpunk 2077 Crash Dump - `%LocalAppData%\REDEngine\ReportQueue` for the main game crash log
- Cyber Engine Tweaks - `\bin\x64\plugins\cyber_engine_tweaks`
- Redscript - `\r6\logs`
- Red4Ext - `\red4ext\logs` and `\red4ext\plugins` for specific mod logs
