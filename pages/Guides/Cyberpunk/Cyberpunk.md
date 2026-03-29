---
title: [Cyberpunk 2077]
type: 
summary:
description: How to Setup RenoDX in Cyberpunk 2077
---

{% include callout.html type="warning" content="  <b>Update March 25th, 2026: This guide has undergone a major revision.  Please note the following updates: </b>

1. A new version of RenoDX has been released for Cyberpunk.  The addon has been renamed back from <i>renodx-cp2077-wip.addon64</i> to <i>renodx-cp2077.addon64</i>, but this is still hosted in the RenoDX server's Cyberpunk 2077 channel.  This RenoDX update includes a new tone mapper called PsychoV, which is a game changer in terms of how the game looks.  Colors will be more accurate, and neon lights will appear as they should.

1. A new guide has been added on how to use the Windows HDR Calibration app to figure out the peak brightness for RenoDX.

1. The ReShade portion of the guide has been rewritten to make it easier to read and understand.  

1. (Optional) Install instructions for <a href='https://www.nexusmods.com/cyberpunk2077/mods/28191'><b>Creepy's Ultra HDR</b></a> ReShade preset is now built into the guide.
 
1. The LUT section has been moved to a new page called, <a href='https://www.hdrmods.com/Cyberpunk-2077-LUTs'><b>Cyberpunk 2077 LUTs</b></a>

1. A mod recommendation page has also been created (WIP), <a href='https://www.hdrmods.com/Cyberpunk-2077-Mods'><b>Cyberpunk Recommended Mods</b></a>" %}

{% include callout.html type="tip" content="<b>Make sure your display actually supports HDR before installing RenoDX. Your monitor should be rated for HDR400 or higher, meaning it should have at least 400 nits peak brightness.</b>  

<b>This is not to be confused with TB400 or higher.</b>  

TB stands for True Black.  True Black rated monitors will have a separate True Black mode with a more limited peak brightness, but it <i>should</i> result in better looking black levels and shadows. The downside to using True Black mode is a lower peak brightness, thus the highlights won't be as bright. Both True Black and the normal modes should look fine, so try both and see which you like better.  

<b>Try checking your display manufacturer's website for the peak brightness, or you can check the AVS forums:</b> <https://www.avsforum.com/> When in doubt try searching for the model number in your favorite search engine.  

<b>Run the Windows HDR Calibration app to figure out your display's clipping point.  In theory this should be the same as the peak brightness of your display, but it's sometimes lower.  The clipping point will act as our peak brightness within RenoDX.</b>" %}

{% include callout.html type="important" content="<b>Grab the most recent PINNED version of the RenoDX mod from the RenoDX server. Look for the pinned post in the Cyberpunk channel.  The GitHub and Nexus versions are both outdated; disregard the snapshot date on the GitHub page, it's not accurate.</b> <i>This is still accurate as of March 25th, 2026.</i>  

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

## My other Cyberpunk 2077 Guides
- [**Cyberpunk 2077 Guide Index**](Cyberpunk-2077-Index)
- [**How to find the perfect LUT to use with RenoDX**](Cyberpunk-2077-LUTs)
- [**Recommended Cyberpunk Mods**](Cyberpunk-2077-Mods)

**A TROUBLESHOOTING SECTION IS PROVIDED TOWARD THE OF THE GUIDE.**
- This lists commonly asked questions and issues with possible solutions.
- A list of crash log locations is also provided.


## How to Fix Cyberpunk's HDR using RenoDX

If you haven't done the Windows HDR Calibration, please do so now before continuing with the guide.
Full instructions can be found here: [**Windows HDR Calibration**](Windows-HDR-Calibration).

### PART 1 - Steps 0-10: Installing ReShade and RenoDX

**0)** Install Cyberpunk 2077.  Make sure you're using the latest version of the game, **2.31**.

**1)** Download the **LATEST** version of ReShade **WITH FULL ADD-ON SUPPORT** from <https://reshade.me/#download>
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

<br>

{% include callout.html type="tip" content="<b>Step 4 includes an optional section that goes over how to install Creepy's Ultra HDR ReShade preset.</b>

This preset is not necessary to use RenoDX, and is not endorsed by any RenoDX mod creator. The instructions are included in this guide to make it  easier on people using both RenoDX and the Creepy Ultra HDR ReShade preset.

More information about the preset, including preview screenshots, can be found here: <a href='https://www.nexusmods.com/cyberpunk2077/mods/28191'>https://www.nexusmods.com/cyberpunk2077/mods/28191</a>" %}

**4) Choose from the following options:**

<details><summary><b>Click here if you have no interest in shaders or presets</b></summary>

<b>If updating ReShade:</b>
<ol>
<li>Select <b>Update ReShade only</b></li>

<li>Click <b>Next</b></li>

<li>Click <b>Finish</b></li>

</ol>

<b>If new ReShade installation:</b>
<ol>
<li>Click <b>Skip</b> on the effect selection screen.</li>

<li>Click <b>Skip</b> again on the add-on selection screen.</li>

<li>Click <b>Finish</b></li>
</ol>
</details>

<details><summary><b>Click here if you also want to install shaders such as Lilium's RCAS</b></summary>
<ol>
    <li>Select <b>Update ReShade and effects</b> if updating ReShade.</li>
    <i>If installing ReShade for the first time you'll already be at the effect (shader) selection screen.</i>
    <li>Change the effect sorting from <b>Default</b> to <b>A to Z</b> to make it easier to find the various shader packs (also known as "repositories" because of how they're stored on GitHub).
    <img src='https://i.slow.pics/ATvCVf33.jpg' alt='Change shader sorting from Default to A to Z' style='max-width:100%;'></li>
    <li>For Lilium's shaders, scroll down unti you see <b>ReShade_HDR_shaders by Lilium</b>.</li>
    <li>Check the box <b>ReShade_HDR_shaders by Lilium</b> to download all of Lilium's shaders (recommended).
     <img src='https://i.slow.pics/xwMDil4f.jpg' alt='Pick shaders' style='max-width:75%;'></li>

<ul> 
    <li><b>I DO NOT recommend clicking the <i>Check All</i> button and picking all of the shaders.  This will just lead to longer compile times when you start the game. Most shaders won't work with HDR so there's not much point to picking all of them anyways.</b></li>
    <li><b><a href="https://www.hdrmods.com/HDR-Link-Library#hdr-compatible-shaders">List of HDR Compatible Shaders</a></b></li>
    <li>The repository <b>Standard effects</b> is always downloaded when clicking <i>Next</i> instead of <i>Skip</i>, even if you don't pick any other shader packs to install.  This includes important shaders such as <i>Deband</i> (used to fix banding issues, especially in the sky) and <i>Display Depth</i> (used to help setup the depth buffer for shaders that require it such as Deband).  It also includes the helper shaders <i>ReShade.fxh</i> and <i>ReShadeUI.fxh</i> which most other shaders make use of.</li>
</ul>
    <li>Click <b>Next</b></li>
    <li>Click <b>Skip</b> on the add-on selection screen.</li>
    <li>Click <b>Finish</b></li>
</ol>
</details>

<details><summary><b>Click here if installing Creepy's Ultra HDR ReShade preset</b></summary>
<ul>
<li>You'll need the Ultra HDR VP.ini preset file from the <a href='https://www.nexusmods.com/cyberpunk2077/mods/28191'><b>Creepy Ultra HDR</b></a> mod page. These will be easier to find in-game if placed in the /bin/x64 folder of the Cyberpunk 2077 installation.</li>  
<li>This will automatically select any shaders that can be grabbed from the installer that can then be used in both presets.</li>
<li>You'll still need a few more shaders from GitHub, but this will save you the bulk of the work.</li>  
</ul>
<ol>
    <li>Select <b>Update ReShade and effects</b> if updating ReShade.</li>
    <i>If installing ReShade for the first time you'll already be at the effect (shader) selection screen.</i>
    <li>Click the <b>Browse...</b> button toward the bottom and pick the <b>Ultra HDR VP</b> preset file.</li>
<ul> 
    <li>This will automatically pick: Soop's HDR Converters, Zenteon's Local Contrast, Lilium's HDR Brightness Adjustment, Lilium's RCAS, and Marty's Meteor Film Grain shaders.  This will also pick the entire Standard Shaders repository that includes shaders such as Deband (which is optional for the preset).</li>
    <li>You may not see the HDR Brightness Adjustment shader listed within Lilium's ReShade HDR Shaders. This is normal so don't worry.  The checkbox is missing for that shader, but it will still download it for you.</li>
    <img src='https://i.slow.pics/nqRq8STi.png' alt='Download Shaders' style='max-width:100%;'>
    <li>You're welcome to pick any other shaders you want.  A recommended option would be to grab the rest of Lilium's shaders because they're always handy to have, especially the HDR Analysis Tool.</li>
    <li><b>I DO NOT recommend clicking the <i>Check All</i> button and picking all of the shaders.  This will just lead to longer compile times when you start the game. Most shaders won't work without Soop's HDR Converters so keep that in mind.</b></li>
    <li><b><a href="https://www.hdrmods.com/HDR-Link-Library#hdr-compatible-shaders">List of HDR Compatible Shaders</a></b></li>
</ul>
    <li>Click <b>Next</b></li>
    <li>Click <b>Skip</b> on the add-on selection screen.</li>
    <li>Click <b>Finish</b></li>
    <li><b>Do not start the game until the remaining shaders are downloaded and placed within the reshade-shaders folder!</b> Failing to adhere to this warning will result in both presets missing shaders, and the presets won't look as intended.</li>
    <li><b>Download the remaining shaders from GitHub:</b></li> 
    <ul>
    <li>On each GitHub page click the gree <b>Code</b> button, then click Download ZIP.</li>
    <img src='https://i.slow.pics/UlxAbvmJ.png' alt='GitHub Download Code Button' style='max-width:100%;'>
    <li><b>Azen PreCorrect: </b><a href="https://github.com/Zenteon/Azen/tree/main">https://github.com/Zenteon/Azen/tree/main.</a><br><i>You need the shaders AND textures folders.</i></li>
    <li><b>ShortFuse's Film Grain:</b> <a href="https://github.com/clshortfuse/reshade-shaders/tree/main">https://github.com/clshortfuse/reshade-shaders/tree/main.</a></li>
    </ul>
    <li>Extract the contents of the ZIP folders to the reshade-shaders folder located in the /bin/x64 folder within the Cyberpunk 2077 installation.</li>
</ol>
</details>

<!--
**5)** Welcome to the add-on selection screen.  **DO NOT PICK ANY ADDONS!!!** Click `Next`, then Click `Finish`. 
- Addons are not similar to shaders at all.  Unlike shaders which are post processing only (aka they basically act like a photoshop filter), addons can operate at the game engine level and can easily cause issues if you don't know what you're doing.

- **Some addons are not compatible with each other!  So do not download them randomly!**  

- **Rule of thumb, if you don't know what it is then don't touch it.  If you do touch it after reading this step, and shit breaks, then uninstall ReShade and start the ReShade installation process over again.  Seriously, you've been warned!!!**
<details><summary>DO NOT PICK ANY ADDONS!!!</summary>
<a href="https://slow.pics/f2EQMwqO/"><img src="https://i.slow.pics/f2EQMwqO.jpg" style="width:100%;height:100%;"/></a>
</details>   
-->

**5)** Grab the RenoDX addon from RenoDX Discord server. Look in the pinned comments of the Cyberpunk 2077 channel.

<details><summary>Click for RenoDX server info and screenshots of the Cyberpunk 2077 addon location.</summary>
<ol>
<ul>
    <li>The GitHub and Nexus Mods versions of Cyberpunk's RenoDX are outdated as mentioned in the bubble at the top of this guide.  The version pinned in the comments has the new fancy PsychoV-11 tone mapper, which makes colors look a lot more accurate and neon lights should look a lot better.</li>

    <li>RenoDX server invite: <a href="https://discord.gg/jz6ujVpgFB">https://discord.gg/jz6ujVpgFB</a></li>

    <li>Direct link to the RenoDX Cyberpunk 2077 thread: <a href="https://discord.com/channels/1408098019194310818/1410855640112566375/threads/1434377434022809610/1434377434022809610">Cyberpunk 2077 Thread</a></li>
</ul>
</ol>
<b>Cyberpunk 2077 thread location in the RenoDX server:</b>
<a href="https://slow.pics/TfUSXS2q/"><img src="https://i.slow.pics/TfUSXS2q.png" style="width:100%;height:100%;"/></a>
<b>Cyberpunk 2077 addon pinned in the Cyberpunk 2077 thread:</b>
<a href="https://slow.pics/KahWu7Xf/"><img src="https://i.slow.pics/KahWu7Xf.png" style="width:95%;height:95%;"/></a>
</details>    

**6)** Place the RenoDX addon `renodx-cp2077.addon64` in the `\bin\x64` folder where Cyberpunk 2077 is installed.  If you previously installed the WIP version of RenoDX, `renodx-cp2077-wip.addon64`, then delete it.
<a href="https://slow.pics/rW4SsThY/"><img src="https://i.slow.pics/rW4SsThY.png" style="width:100%;height:100%;"/></a>

<!--
### PART Steps 7-10: Configuring the in-game settings and installing RenoDX.
-->

**IF YOU HAVEN'T DONE THE WINDOWS HDR CALIBRATION, PLEASE DO SO NOW BEFORE CONTINUING WITH THE GUIDE!**
- Full instructions can be found here: [**Windows HDR Calibration**](Windows-HDR-Calibration).

{% include callout.html type="tip" content="<b>Clipping Point vs Peak Brightness</b>

<li><b>Peak Brightness:</b> The maximum brightness your display can output in its current mode.</li>

<li><b>Clipping Point:</b> The brightness value when highlight detail starts being lost in its current mode.</li> 
<ol>
<ul>
    <li>Anything above this value can't be seen with the naked eye.</li>

    <li>Theoretically this should be the same value as the peak brightness, but that's not always the case.  Some displays have a higher peak brightness with a lower clipping point.</li>
</ul>
</ol>
<b>REMEMBER: PEAK BRIGHTNESS = CLIPPING POINT</b>  

<b>This is your peak brightness for now on when it comes to RenoDX, and any other HDR mod, shader, or application.</b>

<li><b>If you have a True Black monitor, you must run the HDR calibration separately for each display mode.</b></li>
<ol>
<ul> 
<li>After you run it once for each mode, you can then switch the HDR profile within the Windows Display settings whenever you switch to the corresponding display mode.</li>
<li>This does not apply when switching from HGIG to Dynamic Tone Mapping mode.  You should always calibrate in HGIG mode if your display has that capability. You would then use that same value even in Dynamic Tone Mapping mode.</li>
</ul>
</ol>" %} 

{% include callout.html type="tip" content="
<b>HDR10 PQ vs HDR10 scRGB</b>
<p><b>TLDR, the mode doesn't matter. There is basically no visual difference between them. HDR10 PQ is more compatible with ReShade shaders, which is why I usually recommend it.</b></p>
<ul>
  <li>If you have any interest in using a ReShade preset, such as my <a href='https://www.nexusmods.com/cyberpunk2077/mods/28191'><b>Creepy Ultra HDR preset</b></a>, then pick HDR10 PQ.</li>
  <li>While HDR10 scRGB is <i>technically better</i>, whether you'll actually notice the difference is highly unlikely.</li>
  <li>Note: Some users have reported that scRGB mode is incompatible with frame generation.</li>
</ul>
<a href='https://discourse.differentk.fyi/t/topic-free-mega-thread-v-1-11-2020/79/3746?u=kaldaien'><b>Click here to read Kaldaien's post, if you want the technical details into the differences between HDR10 PQ and HDR10 scRGB.</b></a>
" %}

**7)** Start the game. Open the Settings menu.

**8)** Go to Video > HDR settings. **Make sure Cyberpunk's HDR is turned ON (recommend setting to HDR10 PQ)**

- **Maximum Brightness: Leave at the default value.** This setting is ignored when using RenoDX. This gets replaced with the `Peak Brightness` setting in the RenoDX addon.

- **Paper White: (UI Brightness) 200 or change as desired.**  This setting has no other effect when RenoDX is installed. 

While some RenoDX mods have a dedicated UI slider, the Cyberpunk one does not.  However, the actual paper white setting, in terms of what you're probably used to with HDR settings (aka the average brightness), is called  `Game Brightness` in the RenoDX addon.

- **Set Tone-Mapping Midpoint to 1.** Tone-Mapping Midpoint is critical for the overall brightness of the game.  If the game is too bright then doublecheck this setting.

- **Make sure HDR10 PQ saturation is 0!!!** This will cause issues with Frame Generation if changed.  Just use the Saturation slider within RenoDX instead.

{% include callout.html type="important" content="<b>HDR10 PQ Saturation absolutely, 100% without a doubt, needs to be 0!</b>  

<b>DO NOT CHANGE THIS SETTING!!!</b> 

<i>Non zero values will cause issues with frame generation when moving.  If you want to increase the game saturation, use the saturation slider within RenoDX.</i>" %}

<details><summary>HDR settings</summary>
<i>Ignore the Maximum Brightness setting.</i>
<a href="https://slow.pics/zFyyInhD/"><img src="https://i.slow.pics/zFyyInhD.png" style="width:100%;height:100%;"/></a>
</details>

**9)** Within Cyberpunk's Graphics settings, make sure Color Precision is set to High or it will result in a washed out / gray image.

<details><summary>Color precision setting</summary>
<a href="https://slow.pics/Uinn4FKy/"><img src="https://i.slow.pics/Uinn4FKy.png" style="width:100%;height:100%;"/></a>
</details>

**10)** Open the ReShade interface, default button is the Home key.  

- If you don't have a Home key please refer to this guide that goes over how to change it to a different key: <https://www.youtube.com/watch?v=xoCdpOIRKus>

### PART 2: RENODX SETTINGS
*Click on the RenoDX tab along the top of the ReShade UI.*
*I did not list every setting here, only the commonly changed ones.  Feel free to come up with your own RenoDX presets.*

{% include callout.html type="tip" content="Recommend adjusting color grading sliders when using Lilium's HDR Analyis tool shader.  

It's normal for the peak brightness to slightly exceed what you set it too and going over by like 50 nits isn't usually a big deal, especially if using film grain.

Be very careful with the exposure, contrast, and highlights sliders.  If you notice that your peak brightness is really high, check these first." %}

**Tone Mapper: `PsychoV-11`**
- This is probably the most important tweak you can make now.  I do not recommend using any other tone mapper.  The game's color grading as a whole just feels more natural with it.  Neon lights look amazing!

**Peak Brightness:**  Set the Peak Brightness to match the results from the Windows HDR Calibration test you did earlier.  

**Game Brightness:** The paper white value, also known as average brightnes.  You typically want to set this between 150-300 nits.  
- Below 1500 nits or so, having this set to 1/4 to 1/5 of your Peak Brightness is usually good enough.
- The higher the ratio between game brightness and peak brightness, the more room you have for highlights to standout.

**SDR EOTF Emulation:** Recommend setting this to `UI/Menu only`.  The `On` setting will probably be too dark for most people when using the PsychoV-11 tone mapper.

**Hue Correction:** None

**Exposure:** Recommend leaving at 1.00, or very minor adjustments.  Can easily mess up the look of your game if changed too much.

**Highlights:** 50, but set as desired.  **Can easily exceed peak brightness if increased too much.**  If you can't see highlight details anymore then this may be too high.

**Shadows:** 50, but set as desired.  If you can't see details in the shadows then this may be too high.  If you want darker interiors / nights, recommend using the Nova City 2 mod instead.

**Contrast:** 50-60, but set as desired.  **This setting is particularly sensitive in this game and can easily make you exceed your peak nits if pushed to an extreme setting.**

**Saturation:** 50-60, but set as desired. 

**Highlight Saturation:** Grayed out when using PsychoV-11 tone mapper.

**Blowout:** Set to 0.

**Flare:** Grayed out when using PsychoV-11 tone mapper.

**White Point:** I personally leave this at Vanilla, but you can set this to whatever you want.

**LUT Strength:** 50-60.  This will depend on the LUT, but this seems to work in most cases.  Vanilla LUT is way too intense at 100.

**Film Grain Type:** Perceptual

**Film Grain Strength:** I personally have set to around 20, but set as desired.

- If you're seeing lots of banding, increase the film grain intensity.

- This is the same filmgrain from ShortFuse's ReShade shader repository: <https://github.com/clshortfuse/reshade-shaders/tree/main/Shaders>

- If using other ReShade shaders such as Lilium's RCAS (which is commonly recommended), then I would set the filmgrain within RenoDX to 0 and then use ShortFuse's filmgrain shader and place it at the very end (you never want to sharpen filmgrain, and RCAS is a sharpening shader).

**LUT Scaling:** Some people have reported this looks better at 75, but I personally keep it at 100.

**LUT Order:** Only need to change this if using a LUT mod / LUT Switcher pack that doesn't look right. Can adjust as needed.  But otherwise leave this on Vanilla.

**DEBUG GRAPH: SET TO OFF!!!** 
- *Found at the very bottom of RenoDX under Debug.*  
- Otherwise you'll see a colored square on the upper right corner behind the minimap.

**If you do not see a Debug Graph slider, you did not *correctly* install a version hosted in the Discord server!**

<details><summary>Debug Graph On</summary>
<i>Screenshot was taken using older version of RenoDX</i>
<a href="https://slow.pics/xY8QcYui/"><img src="https://i.slow.pics/xY8QcYui.png" style="width:100%;height:100%;"/></a>
</details>

<details><summary>Debug Graph Off</summary>
<i>Screenshot was taken using older version of RenoDX</i>
<a href="https://slow.pics/R1nHEgpd/"><img src="https://i.slow.pics/R1nHEgpd.png" style="width:100%;height:100%;"/></a>
</details>

<details><summary><b>Click to see RenoDX settings</b></summary>
<a href="https://slow.pics/5A2qVoFc/"><img src="https://i.slow.pics/5A2qVoFc.png" style="width:100%;height:100%;"/></a>
</details>

**RenoDX Installation Completed!**  
- Please continue reading if you're installing the Creepy Ultra HDR preset.

### PART 3: (Optional) Finishing the Creepy Ultra HDR preset setup

**1) Open ReShade, and click the Settings tab**
- Under the Overlay & Styling section, I recommend enabling `Group effect files with tabs instead of a tree`.  When enable it will place each active shader, *that has available settings to configure*, into it's own separate tab under the Home screen.  If left disabled, all shaders will be listed one after the other.
<details><summary>Click for more ReShade Settings Tab Notes</summary>
<a href="https://CejgZu0m/"><img src="https://i.slow.pics/CejgZu0m.png" style="width:100%;height:100%;"/></a>
</details>

**This is your last chance to grab the remaining shaders from GitHub if you forgot to earlier.**  Otherwise you'll have some troubleshooting to do.  Check Step 4 of this guide for more details.

**2) Click the ReShade Home tab**
- Pick one of the Ultra HDR presets.
- Click the tab for smolbbsoop_HDR_Converter.fx
    - This tab won't show up if in scRGB mode, as this setting is only needed when using HDR10.
- By default the Peak Brightness will show at 800 (nits), which is the peak brightness of my display.
- Change this to match the peak brightness value found during the Windows HDR calibration test.
- You will need to do this for both presets.

**Ultra HDR Gameplay**
<a href="https://GXcPwifr/"><img src="https://i.slow.pics/GXcPwifr.png" style="width:100%;height:100%;"/></a>

**Ultra HDR VP**
<a href="https://4eGDlP4r/"><img src="https://i.slow.pics/4eGDlP4r.png" style="width:100%;height:100%;"/></a>

{% include callout.html type="note" content="By default any changes made to the active ReShade preset automatically get saved to that same preset file.  This behavior can be changed by clicking the <b>Auto Save On</b> button and cycling through the different options.

If for some reason the preset settings are goofed up, or some shaders aren't showing up for the chosen preset, then you'll want to copy over the presets again to the /bin/x64 folder, and overwrite the goofed up presets." %}


## Troubleshooting RenoDX Issues

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

### Map is hard to read
<details><summary>RenoDX Map Bug</summary>
<a href="https://slow.pics/FScCfiyT/"><img src="https://i.slow.pics/FScCfiyT.png" style="width:100%;height:100%;"/></a>
</details>

**Known issue with this version of RenoDX (and the WIP version before it).  This bug affects the vanilla map and every map mod.**
- HUD Painter can change the contrast, saturation, and colors of the World Map: <https://www.nexusmods.com/cyberpunk2077/mods/14935>
    - Color options do not work on the realistic map mod
    - HUD Painter does require most of the core mods such as redscript and codeware, but if you have a full modlist then you'll probably have these anyways. Make sure to install the mod settings optional mod so you can see the World Map options.
    - Can be used in combination with the MapLUTBegone fix or on its own.
<details><summary>MOD Settings HUD Painter</summary>
Settings listed only for reference, please adjust to your liking.
<a href="https://slow.pics/l8t0m7js/"><img src="https://i.slow.pics/l8t0m7js.png" style="width:100%;height:100%;"/></a>
</details>
- Another partial solution, Cyanide has posted a MapLUTBegone mod in the Cyberpunk Modding and Ultra Place servers the disables the map ENV.
    - It's not a perfect solution, but it will at least make it so the map isn't washed out; however, the map may still appear to be too dark. 
    - Invite link for the Cyberpunk 2077 Modding Server: <https://discord.gg/Epkq79kd96>  
        - Link to the MapLUTBegone mod post: <https://discord.com/channels/717692382849663036/1198976262765564018/1479210647550955711>
    - Invite link for the Ultra Place server: <https://discord.com/invite/UltraPlace>
        - Link to the MapLUTBegone mod post: <https://discord.com/channels/1296187754979528747/1296190077717971004/1486441333181911124>
- Some people also find that the Realistic Map Mod looks better, and is what I personally use (8K version or higher): <https://www.nexusmods.com/cyberpunk2077/mods/17811>


### How do I adjust the UI brightness?
**You can change the UI brightness by adjusting the `paper white` value in the game's HDR settings.**  This value has no other effect when RenoDX is installed.

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
- Ultra Plus - `\bin\x64\plugins\cyber_engine_tweaks\mods\UltraPlus`

{% include callout.html type="tip" content="Highly recommend that you use RenoDX alongside the Ultra Plus mod!  Provides some performance tweaks and also adds new visual modes for both lower end and higher end hardware configurations. 

Link to Ultra Plus mod page: <https://www.nexusmods.com/cyberpunk2077/mods/10490>" %}



<!--
- Alternatively, click `Uninstall ReShade and Effects`, click `Next` then `Finish`.  Then reinstall ReShade from Step 2 onwards. *This is the recommended option if you picked a ton of addons the first time you installed ReShade, as having a ton of extra addons you don't need will just cause issues.*  If you're unsure what you picked last time, then just uninstall and reinstall ReShade. 
- To uninstall ReShade pick `Uninstall ReShade and effects` seen in the `Select the operation to perform` screen, then run the ReShade installer again, following the same steps seen in **Step 2** of this guide onwards.  It'll save you a headache later on and it only takes an extra few seconds to do.
- Uninstalling ReShade via the installer removes everything ReShade added except for any ReShade presets, those will remain. 
- You can also manually uninstall ReShade by deleting the following files from the /bin/x64 folder.  
    - **If you don't see the file extensions such as `.ini` or `.dll` then you need to enable file extensions within Windows file viewer.  Here's a guide on how to do that: <https://guides.martysmods.com/additionalguides/fileextensions>**
    - `dxgi.dll` - Other mods may also use dxgi.dll and as such you may have renamed this to something different, such as d3d12.dll.  Either hover your mouse over the .dll file or right click on it and click on the details tab.  You should see `crosire's ReShade post-processing injector`
    - `ReShade.ini` - You may also see `ReShade2.ini`, `ReShade3.ini` and so on.  Delete those as well.  This is where any changes made in the Settings tab are saved. RenoDX preset settings are saved here.
    - `reshade-shaders` folder
    - `ReShade.log`
    - `ReShadePreset.ini` - this is the default preset that any Home tab shader configurations are saved to.  ReShade presets can be renamed to anything you want, so long as the file type is `.ini`.
-->

<!--
<details><summary>ReShade: Update / Uninstall Options:</summary>
<a href="https://slow.pics/dMPn4wT9/"><img src="https://i.slow.pics/dMPn4wT9.jpg" style="width:75%;height:75%;"/></a>
</details>
-->