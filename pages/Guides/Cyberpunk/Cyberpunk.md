---
title: [Cyberpunk 2077]
type: 
summary:
description: How to Setup RenoDX in Cyberpunk 2077
---

[**TROUBLESHOOTING SECTION MOVED TO SEPARATE PAGE**](Cyberpunk-FAQ)
- This lists commonly asked questions and issues with possible solutions.
- A list of crash log locations is also provided.

**DLSS 5 SUPPORT IS NOT PROVIDED!!!  While you are free to use it, I personally feel like there is little need for it when path tracing is already available.  You're better off instaling the Ultrapunk modlist instead which includes all the important visual fixes for the game.**

{% include callout.html type="important" content="<b>Updating guide for version released on September 16th, 2026.</b>  No ETA as to when it'll be finished."%}


{% include callout.html type="warning" content="<b>DISCLAIMER:</b> The contents of this guide do not reflect the views or opinions of ShortFuse, the creator of the Cyberpunk 2077 RenoDX mod and the RenoDX framework as a whole.  Any troubleshooting tips and recommended settings are based on my own personal experience from helping others with the game." %}


{% include callout.html type="tip" content="<b>Make sure your display actually supports HDR before installing RenoDX. Your monitor should be rated for HDR400 or higher, meaning it should have at least 400 nits peak brightness.</b>  

<b>This is not to be confused with TB400 or higher.</b>  

TB stands for True Black.  True Black rated monitors will have a separate True Black mode with a more limited peak brightness, but it <i>should</i> result in better looking black levels and shadows. The downside to using True Black mode is a lower peak brightness, thus the highlights won't be as bright. Both True Black and the normal modes should look fine, so try both and see which you like better.  

<b>Try checking your display manufacturer's website for the peak brightness, or you can check the AVS forums:</b> <https://www.avsforum.com/> When in doubt try searching for the model number in your favorite search engine.  

<b>Run the Windows HDR Calibration app to figure out your display's clipping point.  In theory this should be the same as the peak brightness of your display, but it's sometimes lower.  The clipping point will act as our peak brightness within RenoDX.</b>" %}

{% include callout.html type="important" content="<b>Grab the most recent PINNED version of the RenoDX mod from the RenoDX server. Look for the pinned post in the Cyberpunk channel.  The GitHub and Nexus versions are both outdated; disregard the snapshot date on the GitHub page, it's not accurate.</b> <i>This is still accurate as of July 2026.</i>  

<b>RenoDX server invite:</b> <https://discord.gg/jz6ujVpgFB>

<b>Direct link to the RenoDX Cyberpunk 2077 thread:</b> <https://discord.com/channels/1408098019194310818/1434377434022809610/1490559043343876196>

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

<!--

[**MY OTHER CYBERPUNK 2077 GUIDES**](Cyberpunk-2077-Index)
- [**CREEPY ULTRA HDR PRESET GUIDE**](Cyberpunk-Creepy-Preset) - RenoDX installation guide that also includes instructions on how to install my preset [**Creepy Ultra HDR**](https://www.nexusmods.com/cyberpunk2077/mods/28191)
- [**HOW TO FIND THE PERFECT LUT TO USE WITH RENODX**](Cyberpunk-2077-LUTs)
- [**RECOMMENDED CYBERPUNK MODS**](Cyberpunk-2077-Mods)

-->

## How to Fix Cyberpunk's HDR using RenoDX

If you haven't done the Windows HDR Calibration, please do so now before continuing with the guide.
Full instructions can be found here: [**Windows HDR Calibration**](Windows-HDR-Calibration).

### PART 1: INSTALLING RESHADE AND RENODX

**0)** Install Cyberpunk 2077.  Make sure you're using the latest version of the game, **2.31**.

**1)** Download the **LATEST** version of ReShade **WITH FULL ADD-ON SUPPORT** from <https://reshade.me/#download>
- When running the ReShade installer, make sure to not run it directly from the Windows Downloads folder or the Cyberpunk 2077 install folder, because both options can cause issues.  At the very least make a new folder in Downloads or the Desktop and place the ReShade installer there.

<details><summary>The latest ReShade version as of writing this guide is <b>6.8.0</b></summary>
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

**4)** The rest of the ReShade Installation will look slightly different if you already installed ReShade:

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

{% include callout.html type="important" content="<b>RenoDX does not require any other ReShade shaders or addons to function, as such these are not covered in the guide.</b>  

Click this link for a list of HDR compatible ReShade shaders: <https://www.hdrmods.com/HDR-Link-Library#hdr-compatible-shaders>

Picking unneeded addons can cause performance issues or even crashes.  Addons are for specific use cases such as VR and virtual photography." %}


**5)** Grab the RenoDX addon from RenoDX Discord server. Look in the pinned comments of the Cyberpunk 2077 channel.

<details><summary>Click for RenoDX server info and screenshots of the Cyberpunk 2077 addon location.</summary>
<ol>
<ul>
    <li>The GitHub and Nexus Mods versions of Cyberpunk's RenoDX are outdated as mentioned in the bubble at the top of this guide.  The version pinned in the comments has the new fancy PsychoV tone mapper, which makes colors look a lot more accurate and neon lights should look a lot better.</li>

    <li>RenoDX server invite: <a href="https://discord.gg/jz6ujVpgFB">https://discord.gg/jz6ujVpgFB</a></li>

    <li>Direct link to the RenoDX Cyberpunk 2077 thread: <a href="https://discord.com/channels/1408098019194310818/1410855640112566375/threads/1434377434022809610/1434377434022809610">Cyberpunk 2077 Thread</a></li>
</ul>
</ol>
<b>Cyberpunk 2077 thread location in the RenoDX server:</b>
<a href="https://slow.pics/TfUSXS2q/"><img src="https://i.slow.pics/TfUSXS2q.png" style="width:100%;height:100%;"/></a>
<b>Cyberpunk 2077 addon pinned in the Cyberpunk 2077 thread:</b>
<img src='./images/Cyberpunk/RenoDX-Download.jpg' alt='RenoDX Discord Pinned Download' style='max-width:70%;'>
</details>    

**6)** Place the RenoDX addon `renodx-cp2077.addon64` in the `\bin\x64` folder where Cyberpunk 2077 is installed.
<a href="https://slow.pics/rW4SsThY/"><img src="https://i.slow.pics/rW4SsThY.png" style="width:100%;height:100%;"/></a>


**IF YOU DON'T KNOW THE PEAK BRIGHTNESS OF YOUR DISPLAY PLEASE PERFORM A WINDOWS HDR CALIBRATION BEFORE CONTINUING!**
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
<p><b>HDR10 PQ is more compatible with ReShade shaders and it supports Frame Generation.</b></p>
<p><b>HDR10 SCRGB has slightly better visual quality but does not support DLSS Frame Generation. FSR FG still works but is inferior to DLSS FG.</b></p>
<p><b>Both HDR types are compatible with RenoDX.</b></p>

<a href='https://discourse.differentk.fyi/t/topic-free-mega-thread-v-1-11-2020/79/3746?u=kaldaien'><b>Click here to read Kaldaien's post if you want the technical details into the differences between HDR10 PQ and HDR10 scRGB.</b></a>
" %}

**7)** Start the game. Open the Settings menu.

**8)** Go to Video > HDR settings. **Make sure Cyberpunk's HDR is turned ON.  HDR10 PQ and HDR10 scRGB will both work with RenoDX.**

**9)** Press the `Z` button on your keyboard or press the `Right Analog Stick` on your controller to access the HDR Settings.

- **Maximum Brightness: Set to the peak brightness of your display.** You'll also want to enter the same value in the `Peak Brightness` setting within the RenoDX addon.

- **Paper White: (UI Brightness) 200 or change as desired.**  This setting has no other effect when RenoDX is installed. 

While some RenoDX mods have a dedicated UI slider, the Cyberpunk one does not.  However, the actual paper white setting, in terms of what you're probably used to with HDR settings (aka the average brightness), is called  `Game Brightness` in the RenoDX addon.

- **Set Tone-Mapping Midpoint to 1.** Tone-Mapping Midpoint is critical for the overall brightness of the game.  If the game is too bright then doublecheck this setting.  This is a poor attempt at an exposure slider, and shouldn't be adjusted.  Use RenoDX's exposure slider for better results.

- **Make sure HDR10 PQ saturation is 0!!!** This will cause issues with Frame Generation if changed.  Just use the Saturation slider within RenoDX instead.

[**Click HERE to see why**](https://www.hdrmods.com/Cyberpunk#frame-generation-artifacts-when-moving)

<details><summary>HDR settings</summary>
<a href="https://slow.pics/zFyyInhD/"><img src="https://i.slow.pics/zFyyInhD.png" style="width:100%;height:100%;"/></a>
</details>

**9)** Within Cyberpunk's Graphics settings, make sure Color Precision is set to High or it will result in a washed out / gray image.

<details><summary>Color precision setting</summary>
<a href="https://slow.pics/Uinn4FKy/"><img src="https://i.slow.pics/Uinn4FKy.png" style="width:100%;height:100%;"/></a>
</details>

**10)** Still within Cyberpunk's Graphics settings, highly recommend you leave film grain enabled.  The film grain options within RenoDX relies on this to be enabled to work.  If you don't want to use film grain, you can always set film grain intensity to 0 within RenoDX.
- Film grain really helps with banding issues in Cyberpunk (and any game in-general).

**11)** Open the ReShade interface, default button is the Home key.  

- If you don't have a Home key please refer to this guide that goes over how to change it to a different key: <https://www.youtube.com/watch?v=xoCdpOIRKus>

### PART 2: RENODX SETTINGS
- Click on the `RenoDX` tab along the top of the ReShade UI.
- **Setting recommendations listed here assume the PsychoV tone mapper is selected.**

**Tone Mapper: `PsychoV-17`.**  This has better color accuracy and neon lights will look much better compared to the other tone mapper versions. The other tone mapper options are not supported in this guide.
- **If you do not see PsychoV-17 as an option:** - Still accurate as of May 3rd, 2026.
    - **RenoDRT:** older tone mapper.  This will appear as the furthest right option if you download it from GitHub or Nexus Mods, either are going to be older than the Discord pinned versions.  Do not recommend using as any of the PsychoV versions will look much better.
    - **PsychoV-11:** older version that was pinned in the RenoDX server's Cyberpunk thread.  Looks nice but the blue and purples will look better with PsychoV-17.  Lacks the `Cone Response` adjustment.
    - **PsychoV-XX:** If the XX number is higher than 17 that means a newer version of RenoDX has come out after this guide was last edited. 
    - **Aces:** AVOID
    - **Vanilla:** AVOID 

**Peak Brightness:**  Set the Peak Brightness to match the results from the Windows HDR Calibration test you did earlier.  This should match the value entered for the `Maximum Brightness` slider in the game's HDR settings.

**Game Brightness:** The paper white value, also known as average brightnes.  You typically want to set this between 100-300 nits.  Think of this as a volume knob for brightness.  You probably heard of 203 nits being the magic value that everyone should use, but in reality this varies based on personal preference, type of display used, and how much ambient lighting there is.

**SDR EOTF Emulation: also known as gamma correction.**  `UI/Menu Only` is recommended for most use cases, as having it set to `On` can be too dark in some situations. 
- If you're going to change this I recommend picking a dark room in the middle of the night so you can use that as a reference point.

**Hue Correction:** This setting is grayed out when using the latest version of PsychoV-17.  Thus the setting has no effect.

**Hue Processor:** This setting is grayed out when using the latest version of PsychoV-17.  Thus the setting has no effect.

**Per Channel:** This setting is grayed out when using the latest version of PsychoV-17.  Thus the setting has no effect.

**Exposure:** One of the major settings that affects the overall brightness / darkness of the game. 

**Highlights:** Adjusts the intensity of the brightest elements on the screen.  
- **Can easily exceed peak brightness if increased too much.**  If you can't see highlight details anymore then this may be too high.

**Shadows:** Adjusts the intensity of the darkest elements in the game. If you can't see details in the shadows then this may be too high.  
- If you want darker interiors / nights, recommend using the Nova City 2 mod instead.

**Contrast:**  Controls the visual difference between the brightest and darkest tones in the game. 
- **This setting is particularly sensitive in this game and can easily make you exceed your peak nits if pushed to an extreme setting.** 

**Saturation:** Adjusts the color intensity of the game.  Reduce to 0 to make the game appear to be in black and white.

**Cone Response: Set to `50` to simulate the look of Vanilla HDR (aka the intended appearance), per ShortFuse.**  *Only available when using PsychoV-17.* Controls both Saturation and Contrast. 
- **This should be the first slider you adjust with PsychoV-17**.  

**Highlight Saturation:** Controls the intensity of the highlight colors.

**Blowout:** Set to 0 with PsychoV.

**Flare:** *Grayed out when using PsychoV.*

**White Point:** Adjusts the color temperature.

**LUT Strength:** 50-60 for most LUTs, including the default / Vanilla LUTs.  100 is going to be too intense most of the time.
- I personally use [Nova LUT 4](https://www.nexusmods.com/cyberpunk2077/mods/11622) at 100% strength, but feel free to adjust as desired even if using this LUT.  The default Nova LUT 4 is equivalent to 5600K, but I prefer using the LUT Switcher color temp pack so I can change the color temperature in-game at the LUT level without needing to use any other shaders. 
- *Reminder: RenoDX was not designed with any LUT mod in mind.*

**Dynamic Exposure:** Leave at 0.  If this setting does anything that means the tone-mapping midpoint wasn't set to 1.0 within the game's HDR settings.

**Bloom:** Lighting effect that scatters light and creates a soft glow around highlights. If your game is too bright this is one of the settings you should check.

**Vignette:** Darkens the edges of the screen.

**Film Grain Type:** Perceptual. This Film grain does not affect black levels, which is a major benefit of using it.  You must have film grain enabled within the game settings for this to work.  
- The game's vanilla film grain is broken currently so there is zero reason to use that setting.  The vanilla option can also cause artifacts to appear in parts of the HUD.

**Film Grain Strength:** This is one of the most important settings when it comes to fixing banding issues.

- If you're seeing lots of banding, increase the film grain intensity.

- This is the same filmgrain from ShortFuse's ReShade shader repository: <https://github.com/clshortfuse/reshade-shaders/tree/main/Shaders>

- If using other ReShade shaders such as Lilium's RCAS (which is commonly recommended), then I would set the filmgrain within RenoDX to 0 and then use ShortFuse's filmgrain shader and place it at the very end (you never want to sharpen filmgrain, and RCAS is a sharpening shader).

**LUT Scaling:** Looks at the texture and scales the color based on the amount of dynamic range the LUT isn’t using. You might not notice a difference when adjusting this setting depending on the situtaion, because LUT scaling only does things if the LUT has compressed black/white levels. 

**LUT Order:** Only need to change this if using a LUT mod / LUT Switcher pack that doesn't look right. Can adjust as needed. But otherwise leave this on Vanilla.

**DEBUG GRAPH: SET TO OFF!!!** 
- *Found at the very bottom of RenoDX under Debug.*  
- Otherwise you'll see a colored square on the upper right corner behind the minimap.

**If you do not see a Debug Graph slider, you did not *correctly* install a version hosted in the Discord server!**

<!--

<details><summary>Debug Graph On</summary>
<img src='./images/Cyberpunk/RenoDX-PsychoV17-DebugOn.png' alt='RenoDX Debug Graph On' style='max-width:100%;'>
</details>

<details><summary>Debug Graph Off</summary>
<img src='./images/Cyberpunk/RenoDX-PsychoV17-DebugOff.png' alt='RenoDX Debug Graph Off' style='max-width:100%;'>
</details>

<details><summary><b>Click to see RenoDX settings</b></summary>
<img src='./images/Cyberpunk/RenoDX-PsychoV17-Settings.png' alt='RenoDX PsychoV-17 Settings' style='max-width:75%;'>
</details>

-->

**RENODX INSTALLATION COMPLETED!**  

[**TROUBLESHOOTING SECTION MOVED TO SEPARATE PAGE**](Cyberpunk-FAQ)
- This lists commonly asked questions and issues with possible solutions.
- A list of crash log locations is also provided.



