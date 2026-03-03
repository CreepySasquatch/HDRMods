---
title: [Cyberpunk 2077]
type: 
summary:
description: How to Setup RenoDX in Cyberpunk 2077
---

{% include callout.html type="tip" content="<b>Make sure your display actually supports HDR before installing RenoDX. Your monitor should be rated for HDR400 or higher, meaning it should have at least 400 nits peak brightness.</b>  

<b>This is not to be confused with TB400 or higher.</b>  

TB stands for True Black.  True Black rated monitors will have a separate True Black mode with a more limited peak brightness, but it <i>should</i> result in better looking black levels and shadows. The downside to using True Black mode is a lower peak brightness, thus the highlights won't be as bright.  When setting the peak brightness within RenoDX, make sure it matches the peak brightness of the mode you are in.  Both True Black and the normal modes should look fine, so try both and see which you like better.  

<b>Try checking your display manufacturer's website for the peak brightness, or you can check the AVS forums:</b> <https://www.avsforum.com/> When in doubt try searching for the model number in your favorite search engine.  <i>ChatGPT or similar AI is not a search engine.</i>

<b>Update 3/2/2026: RTINGs is now paywalled and a subscription is required to see most of the technical details about a display.</b> Thus I can no longer recommend them for finding out the technical specs for your display." %}

{% include callout.html type="important" content="<b>Grab the WIP version of the RenoDX mod from the RenoDX server. Look for the pinned post in the Cyberpunk channel.  The GitHub and Nexus versions are both outdated; disregard the snapshot date on the GitHub page, it's not accurate.</b> <i>This is still accurate as of March 2nd, 2026.</i>  

<b>RenoDX server invite:</b> <https://discord.gg/jz6ujVpgFB>

<b>Direct link to the RenoDX Cyberpunk 2077 thread:</b> <https://discord.com/channels/1408098019194310818/1410855640112566375/threads/1434377434022809610/1434377434022809610>

<b>How to manually find the Cyberpunk channel:</b> 
<img src='https://i.slow.pics/TfUSXS2q.png' alt='Cyberpunk channel location' style='max-width:100%;'>" %}


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
### PART 1 - Steps 0-7: Installing ReShade and RenoDX

**0)** Install Cyberpunk 2077.  Make sure you're using the latest version of the game, **2.31**.

**1)** Download the **LATEST** addon version of ReShade from <https://reshade.me/#download>
- When running the ReShade installer, make sure to not run it directly from the Windows Downloads folder or the Cyberpunk 2077 install folder, because both options can cause issues.  At the very least make a new folder in Downloads or the Desktop and place the ReShade installer there.

<details><summary>The latest ReShade version as of writing this guide is <b>6.7.3</b></summary>
<a href="https://slow.pics/KbN1KUCW/"><img src="https://i.slow.pics/KbN1KUCW.jpg" style="width:100%;height:100%;"/></a>
</details>

**2)** Install ReShade to Cyberpunk2077.exe that is located in `\bin\x64 folder` (which the installer should default to once you pick Cyberpunk 2077). Click `Next`
    
- Note about mod managers: I do not recommend installing ReShade as a mod within Vortex or MO2 (Mod Organizer 2) unless you know what you're doing. 
- This guide also does not cover using Special K with ReShade, Display Commander, or using Optiscaler.

<details><summary>ReShade: Select Game or Application</summary>
<a href="https://slow.pics/uhUhohcS/"><img src="https://i.slow.pics/uhUhohcS.jpg" style="width:75%;height:75%;"/></a>
</details>

**3)** For the rendering API pick `DirectX 10/11/12`, as the game is DirectX 12. Click `Next`
<details><summary>ReShade: Choose the Rendering API</summary>
<a href="https://slow.pics/m1tqUrg4/"><img src="https://i.slow.pics/m1tqUrg4.jpg" style="width:75%;height:75%;"/></a>
</details>

**4)** This step will look different depending on if you already installed ReShade to Cyberpunk 2077.
- Go to step 4A if ReShade is already installed and you see a screen asking if you want to update ReShade.
- Go to step 4B if ReShade wasn't previously installed and you see the "Select effects to install" screen.

**4A)** ReShade already installed: pick `Update ReShade only`. Click `Next`, then click `Finish`.  **Skip to step 6.**
- Alternatively uninstall ReShade and Effects, click `Next` then `Finish`.  Then reinstall ReShade from Step 2 onwards. This is the recommended option if you picked a ton of addons the first time you installed ReShade, as having a ton of extra addons you don't need will just cause issues.  If you're unsure what you picked last time, then just uninstall and reinstall ReShade.  It'll save you a headache later on and it only takes an extra few seconds to do.
<details><summary>ReShade: Update Options:</summary>
<a href="https://slow.pics/dMPn4wT9/"><img src="https://i.slow.pics/dMPn4wT9.jpg" style="width:75%;height:75%;"/></a>
</details>

**4B)** ReShade new installation: You should see the Effect / Shader selection screen.  You do not need any shaders for RenoDX; however, it's often recommended to grab Lilium's HDR shaders, especially for RCAS and the HDR Analysis Tool.  Whether you do this is entirely up to you.  Click `Next`.
<details><summary>Feel free to uncheck the box next to SweetFX though, as those are selected by default.</summary>
<a href="https://slow.pics/Ku9OHLUk/"><img src="https://i.slow.pics/Ku9OHLUk.jpg" style="width:75%;height:75%;"/></a>
</details>
<details><summary>You can change the Effect sorting from Default to A to Z to make it easier to find the various shader packs.</summary>
<a href="https://slow.pics/ATvCVf33/"><img src="https://i.slow.pics/ATvCVf33.jpg" style="width:100%;height:100%;"/></a>
</details>
<details><summary>Picking Lilium's HDR Shaders (optional)</summary>
<a href="https://slow.pics/xwMDil4f/"><img src="https://i.slow.pics/xwMDil4f.jpg" style="width:75%;height:75%;"/></a>
</details>    

**5)** If you just updated ReShade, skip to Step 6, otherwise you should be seeing the addon selection screen.  **DO NOT PICK ANY ADDONS!!!** Click `Next`, then Click `Finish`. 
- Addons are not similar to shaders at all.  Unlike shaders which are post processing only (aka they basically act like a photoshop filter), addons can operate at the game engine level and can easily cause issues if you don't know what you're doing.  
- Some addons are not compatible with each other, yes seriously.  Just one more reason to not download them randomly.  
- **So rule of thumb, if you don't know what it is then don't touch it.  If you do touch it after reading this step, and shit breaks, then uninstall ReShade and start the ReShade installation process over again.  Seriously, you've been warned!!!**
<details><summary>DO NOT PICK ANY ADDONS!!!</summary>
<a href="https://slow.pics/f2EQMwqO/"><img src="https://i.slow.pics/f2EQMwqO.jpg" style="width:100%;height:100%;"/></a>
</details>    

**6)** Grab the WIP (Work in progress) version of RenoDX from the RenoDX Discord server. Look for the pinned comment in the Cyberpunk channel.

<details><summary>Click for RenoDX server info and screenshots of the Cyberpunk 2077 WIP addon location.</summary>
<ol>
<ul>
    <li>The GitHub and Nexus Mods versions of Cyberpunk's RenoDX are outdated as mentioned in the bubble at the top of this guide.  The WIP verison fixes the contrast issue that is present in the other two versions.</li>

    <li>RenoDX server invite: <a href="https://discord.gg/jz6ujVpgFB">https://discord.gg/jz6ujVpgFB</a></li>

    <li>Direct link to the RenoDX Cyberpunk 2077 thread: <a href="https://discord.com/channels/1408098019194310818/1410855640112566375/threads/1434377434022809610/1434377434022809610">Cyberpunk 2077 Thread</a></li>

    <li>Note that the WIP version only applies to Cyberpunk 2077.  For all other games it's best to use the GitHub version (marked as a Snapshot button)</li>
</ul>
</ol>
<b>Cyberpunk 2077 thread location in the RenoDX server:</b>
<a href="https://slow.pics/TfUSXS2q/"><img src="https://i.slow.pics/TfUSXS2q.png" style="width:100%;height:100%;"/></a>
<b>Cyberpunk 2077 WIP addon pin in the Cyberpunk 2077 thread:</b>
<a href="https://slow.pics/A4UyiLo0/"><img src="https://i.slow.pics/A4UyiLo0.jpg" style="width:50%;height:50%;"/></a>
</details>    

**7)** Place the RenoDX addon in the `\bin\x64` folder where Cyberpunk 2077 is installed.
<a href="https://slow.pics/xuB4Etdm/"><img src="https://i.slow.pics/xuB4Etdm.jpg" style="width:100%;height:100%;"/></a>

### PART 2 - Steps 8-17: Configuring the in-game settings and RenoDX.

**8)** Start the game. Open the Settings menu.

**9)** Go to Video > HDR settings. **Make sure Cyberpunk's HDR is turned ON (set to HDR10 PQ)**

<!--
{% include callout.html type="warning" content="Technically the HDR10 scRGB mode will work fine with RenoDX; however, if you have any desire to use a ReShade preset with Cyberpunk 2077, then pick HDR10 PQ. If you don't know which one to pick, then pick HDR10 PQ. 

Pros of using scRGB mode: it's technically a little bit better.  Will the average person notice the difference? Probably not. Unless you just happen to have a keen eye for color, you would need to be a super HDR nerd, like one of the RenoDX developers, or a colorist to be able to appreciate the difference.

HDR10 scRGB does not like ReShade shaders that weren't specifically designed to work with HDR, and most shaders are not designed to work with HDR. The fact that most shaders will work with HDR10 PQ is just a coincidence with how HDR10 PQ is coded. The shaders themselves most likely have no HDR code in them, thus they can't really take advantage of the HDR color space.  Even with HDR10 PQ you're better off using non HDR shaders within Soop's HDR converters, to allow those shaders to work in an SDR colorspace. 

Soop's HDR converters can be found within the ReShade installer (smolbbsoop) or on their GitHub: <https://github.com/smolbbsoop/smolbbsoopshaders>

List of HDR compatible shader packs which will work with both HDR10 and scRGB without needing the HDR converters: <https://www.hdrmods.com/HDR-Link-Library#hdr-compatible-shaders>." %} 
-->

- **Maximum Brightness: Leave at the default value.**  You'll change this in the RenoDX addon under *Peak Brightness*.

- **Paper White: 200.** You'll change this in the RenoDX addon as the *Game Brightness*.

- **Set Tone-Mapping Midpoint to 1.** Tone-Mapping Midpoint is critical for the overall brightness of the game.  If the game is too bright then doublecheck this setting.

- **Make sure HDR10 PQ saturation is 0!!!** This will cause issues with Frame Generation if changed.  Just use the Saturation slider within RenoDX instead.

{% include callout.html type="important" content="<b>HDR10 PQ Saturation absolutely, 100% without a doubt, needs to be 0!</b>  

<b>DO NOT CHANGE THIS SETTING!!!</b> 

<i>Non zero values will cause issues with frame generation when moving.  If you want to increase the game saturation, use the saturation slider within RenoDX.</i>" %}

<details><summary>HDR settings</summary>
<i>Ignore the Maximum Brightness setting.</i>
<a href="https://slow.pics/zFyyInhD/"><img src="https://i.slow.pics/zFyyInhD.png" style="width:100%;height:100%;"/></a>
</details>

**10)** Within Cyberpunk's Graphics settings, make sure Color Precision is set to High or it will result in a washed out / gray image.

<details><summary>Color precision setting</summary>
<a href="https://slow.pics/Uinn4FKy/"><img src="https://i.slow.pics/Uinn4FKy.png" style="width:100%;height:100%;"/></a>
</details>

**11)** Open the ReShade interface, default button is the Home key.  

- If you don't have a Home key please refer to this guide that goes over how to change it to a different key: <https://www.youtube.com/watch?v=xoCdpOIRKus>

**12)** Click on the RenoDX tab along the top of the ReShade GUI.  Set the Peak Brightness to match your display's capabilities.  

- If you don't know what that value is, refer to the spec sheet for your display or look it up on <https://www.rtings.com/> which has reviews for a wide range of displays that includes detailed spec lists.

- Technically all the other RenoDX settings are user preference but I'll go over a few more important ones.

**13)** Game Brightness is the paper white value.  Set this between 150-300 nits (I personally have it set to 200 nits) but this is ultimately user preference and may need to change depending on which LUT you're using.

**14)** Set SDR EOTF Emulation to UI/Menu only.  If you like how the older version of RenoDX looked, slide this to the right so it applies to everything.

**15)** Filmgrain I personally have set to around 20.  This is the same filmgrain from ShortFuse's ReShade shader repository: <https://github.com/clshortfuse/reshade-shaders/tree/main/Shaders>

- If using other ReShade shaders such as Lilium's RCAS (which is commonly recommended), then I would set the filmgrain within RenoDX to 0 and then use the ShortFuse's filmgrain shader and place it at the very end (you never want to sharpen filmgrain, and RCAS is a sharpening shader).

**16) Double check to make sure Debug Graph is turned off** (found at the very bottom of RenoDX under Debug).  Otherwise you'll see a colored square on the upper right corner behind the minimap.

<details><summary>Debug Graph On</summary>
<a href="https://slow.pics/xY8QcYui/"><img src="https://i.slow.pics/xY8QcYui.png" style="width:100%;height:100%;"/></a>
</details>

<details><summary>Debug Graph Off</summary>
<a href="https://slow.pics/R1nHEgpd/"><img src="https://i.slow.pics/R1nHEgpd.png" style="width:100%;height:100%;"/></a>
</details>

**17)** Adjust the rest of the sliders however you'd like!

## Troubleshooting

### Washed out / gray image
- Make sure RTXHDR is turned off globally (or at least for Cyberpunk 2077)
- Verify HDR is turn on in Windows and in Cyberpunk 2077.
- Make sure Color Precision is set to High within the graphics settings. RenoDX will not work with this set to medium.
- Make sure you're using the latest add-on version of ReShade.

### Crushed Black Levels / Shadows Appear Darker Than They Should
- Disable HDR10+ Gaming within the in-game video settings.  This will only appear if your computer detects that you are using an HDR10+ capable display.
<details><summary>HDR10+ Setting Location</summary>
<a href="https://slow.pics/eE2HLqSI/"><img src="https://i.slow.pics/eE2HLqSI.png" style="width:100%;height:100%;"/></a>
</details>
- Is the Tone-Mapping Midpoint, within the in-game HDR settings, set at something lower than 1.0?
- Some LUTs can cause this issue, especially if the RenoDX settings are not configured to compensate for it.  See if the problem goes away by selecting the vanilla LUT with RenoDX at the default settings (but leave Peak Brightness the same). 
- Disable any ReShade shaders if you're using them, especially if in HDR10 scRGB mode.
- Are you using Nova City 2?  This can cause the game to appear darker in some areas, especially in interior spaces and at night.  This is expected behavior of the mod as it recommends using flashlight and night vision mods with it.

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

### Frame Generation artifacts when moving
*Especially in light sources*

<details><summary>Make sure HDR10 PQ Saturation is set to 0 in the base game / vanilla HDR settings.</summary>
<a href="https://slow.pics/zFyyInhD/"><img src="https://i.slow.pics/zFyyInhD.png" style="width:100%;height:100%;"/></a>
</details>


**Before and After Changing HDR10 PQ Saturation:**

<video src="https://raw.githubusercontent.com/CreepySasquatch/HDRMods/main/images/Cyberpunk/Cyberpunk-Frame-Generation-Bug.mp4" controls width="100%"></video>
*Credit to **Invictus** for figuring out this issue and supplying the video showing the fix!*

### Map is washed out
<details><summary>Washed Out Map Bug</summary>
<a href="https://slow.pics/FScCfiyT/"><img src="https://i.slow.pics/FScCfiyT.png" style="width:100%;height:100%;"/></a>
</details>
- Known issue with RenoDX WIP that affects both the vanilla map and the Preem Map mod from CyanideX.  Use the Realistic Map Mod instead (8K version or higher): <https://www.nexusmods.com/cyberpunk2077/mods/17811>

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

{% include callout.html type="note" content="If you're using MO2, you will find mose of these logs within the overwrite folder." %}

- Cyberpunk 2077 Crash Dump - `%LocalAppData%\REDEngine\ReportQueue` for the main game crash log
- Cyber Engine Tweaks - `\bin\x64\plugins\cyber_engine_tweaks`
- Redscript - `\r6\logs`
- Red4Ext - `\red4ext\logs` and `\red4ext\plugins` for specific mod logs
- Ultra Plus - `\bin\x64\plugins\cyber_engine_tweaks\mods\UltraPlus`

{% include callout.html type="tip" content="Highly recommend that you use RenoDX alongside the Ultra Plus mod!  Provides some performance tweaks and also adds new visual modes for both lower end and higher end hardware configurations. 

Link to Ultra Plus mod page: <https://www.nexusmods.com/cyberpunk2077/mods/10490>" %}

## LUTs: Everything you need to know

{% include callout.html type="note" content="This section on LUTs is included because one of the most often asked questions when it comes to RenoDX and Cyberpunk 2077 is <b><i>which LUT should I use???</i></b>

To be absolutely clear on this, there is no officially recommended LUT to use with RenoDX, other than the vanilla LUT, nor was RenoDX designed to work with any other mods in particular.  So from this point forward, consider this to be a courtesy on my part to help you figure out which LUT is right for you.  However, you can consider the <i>official</i> part of the guide to have ended." %}

**What is a LUT?**
- **L**ook-**U**p **T**able: Think of it like a table of contents that changes colors from one value to another.

**Do I need to use a LUT mod?** No, the vanilla LUT is fine, especially when using the latest version of RenoDX.  However, many people choose to use a LUT to further customize the look of the game.

**RenoDX was designed around the vanilla LUT.**  Thus picking any other LUT will most likely require you to adjust the various sliders within RenoDX to get it to look decent.

### But should I use a LUT??? If so, which one should I pick???

**How can I figure out which LUT to use?**
- Use LUT Switcher 2's Comparison Mode Feature: 
    - LUT Switcher 2 download link: <https://www.nexusmods.com/cyberpunk2077/mods/16310>
    - Allows you to rank the LUTs you like the best in an unbiased fashion, also known as a blind test.  You can pick which LUT packs you want to be included in the test, then you go through a bunch of "A or B" tests with random LUTs on either side of the screen, but you won't know which LUT is which.  Then after the test is done, it'll rank the 10 top LUTs that you picked the most often.
  {% include callout.html type="important" content="When download LUTs for LUT Switcher 2, make sure you're downloading LUT Switcher packs, not individual LUTs, because those just replace the vanilla LUT.
  
  Some LUTs such as Nova LUT 3 have HDR and SDR versions.  Make sure you're grabbing the HDR versions!!!" %}

**My *personally* recommended LUT to use with RenoDX: PREEM LUT 3.**
- With RenoDX it seems to require the least amount of slider adjustment to look decent.  In fact, I pretty much keep RenoDX at the default settings when using it.  The main thing I change is LUT strength to 50 within RenoDX.
- Please do not take this LUT recommendation as gospel.  It's mentioned solely because everyone asks, "Which LUT should I use?"  If you want a proper answer, then read the LUT Switcher 2 guide in the next section.

**What about Nova LUT 3?**
- This is the other LUT that is often recommended, for both HDR and SDR.
- Please note that there are specific SDR and HDR versions.  Make sure you using the HDR versions with RenoDX!!!
- It's recommended to use the ENV Tuner (Simple version) and enabling Highlight Reduction, and setting it to 1.
- Nova LUT 3 HDR has many variants, 72 to be exact!  There are two numbers you need to be aware of: Exposure Multiplier (the smaller number listed as a decimal **X.X**) and Color Temperature (the larger number with a **K** on the end).
    - The 72 LUTs are split into 8 packs within LUT Switcher, with each pack representing a specific color temperature using the Kelvin scale (K). Lower K numbers will be warmer, aka more yellow, whereas higher K numbers will be cooler, aka more blue.
    - Each color temperature LUT pack contains 9 LUTs, each with a different exposure multiplier (2.0 to 6.0). Higher numbers will appear to be brighter compared to lower ones.
<details><summary>Nova LUT 3 HDR - Comparison Chart</summary>
<i>Yeah, I took 72 screenshots and combined them into one massive chart.  You're welcome!</i>
<a href="https://slow.pics/6isWQBlY/"><img src="https://i.slow.pics/6isWQBlY.png" style="width:100%;height:100%;"/></a>
</details>

### LUT Switcher 2 Comparison Mode Guide

**1) Install the LUT Switcher 2 mod, along with its requirements, as well as any LUT Switcher packs you want to try.**

**2) Launch the game.  Open up the Cyber Engine Tweaks overlay and click on Bindings.** 
  - **Set these bindings to your preferred hotkeys:**
    - Start/Stop Comparison
    - Toggle Comparison Effect
    - Select Favorite Effect A
    - Select Favorite Effect B
    <details><summary>LUT Switcher Bindings</summary>
    <b>You can use whatever keybindings you want.  These are just what I picked.</b>
    <a href="https://slow.pics/5aoK63pi/"><img src="https://i.slow.pics/5aoK63pi.png" style="width:100%;height:100%;"/></a>
    </details>
  - **Click Save Changes to save your bindings**
    - Keybindings will turn from a light yellow to white once they're saved.

**3) Open LUT Switcher window within Cyber Engine Tweaks. In the control panel at the bottom of the window, click on the little square / check-list icon to go to the LUT Packs page.**
- The LUT packs icon is the 2nd from the right at the very bottom of the LUT Switcher window.
<a href="https://slow.pics/qqsP7ZEQ/"><img src="https://i.slow.pics/qqsP7ZEQ.png" style="width:100%;height:100%;"/></a>
- <details><summary>Click on any LUT packs you want to include in the comparison.</summary>
<i>Note how the LUT Packs icon changes to a triangle</i>
	<a href="https://slow.pics/i6AT8E2P/"><img src="https://i.slow.pics/i6AT8E2P.png" style="width:100%;height:100%;"/></a>
    </details>
    - Don't pick the Fun or Utility LUT packs as these are not meant to be used for gameplay.
    - If you have any interest in the Nova 3 HDR LUTs, consider not picking ALL of the LUT packs for testing, especially if you're intested in any of the other LUT packs such as Preem LUT 3. 
    - Each Nova 3 HDR pack contains 9 LUTs, so if you were to pick all 8 Nova 3 HDR packs you would be adding an additional 72 LUTs to compare. Rankings are based on individual LUTs picked, not the LUT pack picked.  So you would have to cycle through a lot more LUT comparisons to get an accurate list.
    - If picking one Nova 3 HDR pack, a good recommendation would be 6500K, because of it being a standard color temperature used in color grading.  If picking two packs, maybe go with a slightly warmer one such as 4500K along with a cooler option like 7500K.  You can then make a better judgement call about which of the other Nova LUTs you might like based on how high your test LUTs are ranked.

- Click on the LUT packs icon to go back to the main LUT Switcher menu.
- Close the Cyber Engine Tweaks overlay.

**4) Configure RenoDX for the LUT comparison.**
- For the LUT comparison test I recommend changing all the colorgrading sliders within RenoDX back to their default settings, or pick a different preset in RenoDX for the test if you don't want to screw up the settings you already have.
- Keep the important settings such as Peak Brightness and Game Brightness the same as the your original setup.
    - If you adjusted the game brightness for a specific LUT, change it back to a comfortable setting that works with the vanilla LUT, generally between 150-300 nits.
- **Set LUT Strength to 50.**  This is very important, because a lot of the LUTs probably won't look right at full strength. So setting this to 50 (aka half strength) will balance out the intensity and will give more LUTs a fair chance at being selected.  It also negates the need to have to adjust all the other RenoDX sliders for each LUT during the test.
- Once the test is over with, you can adjust the various RenoDX color grading sliders as desired to perfect the look of your chosen LUT.

**4A) Where should I do my LUT comparisons?**
- Ideally you'd want to do the LUT comparison multiple times, to test different locations, weathers, time of day, interior vs exterior, etc.
- However a good place to start would be the El Coyote Cojo bar. It has a nice variety of colors, multiple neon signs, and is a darker interior space.
- Another good location is around Jig Jig street.

**5) Start the LUT comparison using the Start/Stop Comparison binding.**
- You should see a message pop up, "Comparison started. Use hotkeys to pick your favorite."
- You should also see a comparison mode bar on the bottom of your screen that is keeping track of how my tests were done.
- You'll see either an A on the left side of your screen, or a B on the right side of your screen. This is telling you which LUT is currently active between the two random LUTs.  
- Toggle between both LUTs with the Toggle Comparison Effect binding.
- Once you're decided which LUT you like more, pick the binding for A or B depending on which one you liked.
<details><summary>Comparison Started Message with LUT A on the Left</summary>
    <a href="https://slow.pics/CdCwdoR9/"><img src="https://i.slow.pics/CdCwdoR9.png" style="width:100%;height:100%;"/></a>
    </details>

**6) You'll need to progress through the tests until at least one LUT reaches rank 10.  For more accurate results, do the comparison tests until 100% completion.**
- When you decide to stop the comparison, press the Start/Stop Comparison keybind.
- <details><summary>Should see a message saying Comparison Mode Disabled</summary>
    <a href="https://slow.pics/KaylcTDr/"><img src="https://i.slow.pics/KaylcTDr.png" style="width:100%;height:100%;"/></a>
    </details>

**7) Open the LUT Switcher window in CET.  As long as one LUT reached rank 10, then you should see the LUT rankings in the main screen.**
<details><summary>Example of LUT Rankings</summary>
<br>
<b>Please do not rely on the LUT rankings in this screenshot to figure out which LUT to use!</b>  
<br>
    <a href="https://slow.pics/W0NnAtTJ/"><img src="https://i.slow.pics/W0NnAtTJ.png" style="width:100%;height:100%;"/></a>
    </details>
