---
title: [RenoDX Install Guide for Cyberpunk 2077 version 2.5]
type: 
summary:
description: Install Guide for Cyberpunk 2077 version 2.5
---

[**BACK TO CYBERPUNK GUIDE INDEX**](Cyberpunk)

{% include callout.html type="important" content="<b>Instructions below assume you're not using any other mods, including optiscaler.  Please do not submit bug reports until testing with no other mods installed.</b>

WE ARE NOT RESPONSIBLE FOR TROUBLESHOOTING YOUR MODLIST!!!"%}


## PART 1: INSTALLING RESHADE AND RENODX

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

**5)** Grab the RenoDX addon from the RenoDX Discord server.
- **The version of RenoDX hosted on Nexus Mods is outdated and doesn't work properly with game versions 2.31 or 2.5.**

<details><summary>Click for RenoDX server info and screenshots of the Cyberpunk 2077 addon location.</summary>
<ol>
<ul>
    <li>RenoDX server invite: <a href="https://discord.gg/jz6ujVpgFB">https://discord.gg/jz6ujVpgFB</a></li>

    <li>Direct link to the latest version of RenoDX within the Cyberpunk 2077 Discord thread: <a href="https://discord.com/channels/1408098019194310818/1434377434022809610/1549851775253610617">Cyberpunk 2077 RenoDX file</a></li>
</ul>
</ol>
<b>Cyberpunk 2077 thread location in the RenoDX server:</b>
<a href="https://slow.pics/TfUSXS2q/"><img src="https://i.slow.pics/TfUSXS2q.png" style="width:100%;height:100%;"/></a>
<b>Cyberpunk 2077 addon pinned in the Cyberpunk 2077 thread (will be labeled <i>with cbv</i>):</b>
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

## PART 2: IN-GAME HDR SETTINGS

**7)** Start the game. Open the Settings menu.

**8)** Go to Video > HDR settings. **Make sure Cyberpunk's HDR is turned ON.  HDR10 PQ and HDR10 scRGB will both work with RenoDX.**

**9)** Press the `Z` button on your keyboard or press the `Right Analog Stick` on your controller to access the HDR Settings.

- **Min Monitor Brightness:** RenoDX tonemappers set it 0 no m so don't worry about this.
- **Maximum Brightness:** Enter your display's peak brightness here.
- **Brightness:** Game Brightness / Diffuse White. But CDPR math says it's Brightness * 200 + 100. So 1.0 = 100 nits, 0.5 = 200 nits, 1.0 = 300 nits

**Brightness chart supplied by Koklusz.  Can view his HDR Analysis of Cyberpunk 2077, as well as lots of other games, here: <https://github.com/KoKlusz/HDR-Gaming-Database/discussions/104>**
<details><summary>Game Brightness Chart</summary>
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg"><thead>
  <tr>
    <th class="tg-0lax">Brightness</th>
    <th class="tg-0lax">Nits Output</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">0.0</td>
    <td class="tg-0lax">25</td>
  </tr>
  <tr>
    <td class="tg-0lax">0.1</td>
    <td class="tg-0lax">35</td>
  </tr>
  <tr>
    <td class="tg-0lax">0.2</td>
    <td class="tg-0lax">50</td>
  </tr>
  <tr>
    <td class="tg-0pky">0.3</td>
    <td class="tg-0pky">75</td>
  </tr>
  <tr>
    <td class="tg-0pky">0.4</td>
    <td class="tg-0pky">100</td>
  </tr>
  <tr>
    <td class="tg-0pky">0.5</td>
    <td class="tg-0pky">130</td>
  </tr>
  <tr>
    <td class="tg-0pky">0.6</td>
    <td class="tg-0pky">170</td>
  </tr>
  <tr>
    <td class="tg-0pky">0.7</td>
    <td class="tg-0pky">225</td>
  </tr>
  <tr>
    <td class="tg-0pky">0.75 (default)</td>
    <td class="tg-0pky">250</td>
  </tr>
  <tr>
    <td class="tg-0pky">0.8</td>
    <td class="tg-0pky">280</td>
  </tr>
  <tr>
    <td class="tg-0pky">0.9</td>
    <td class="tg-0pky">335</td>
  </tr>
  <tr>
    <td class="tg-0pky">1.0</td>
    <td class="tg-0pky">400</td>
  </tr>
  <tr>
    <td class="tg-0pky">1.1</td>
    <td class="tg-0pky">470</td>
  </tr>
  <tr>
    <td class="tg-0pky">1.2</td>
    <td class="tg-0pky">540</td>
  </tr>
  <tr>
    <td class="tg-0pky">1.3</td>
    <td class="tg-0pky">615</td>
  </tr>
  <tr>
    <td class="tg-0pky">1.4</td>
    <td class="tg-0pky">700</td>
  </tr>
  <tr>
    <td class="tg-0pky">1.5</td>
    <td class="tg-0pky">800</td>
  </tr>
  <tr>
    <td class="tg-0pky">1.6</td>
    <td class="tg-0pky">920</td>
  </tr>
  <tr>
    <td class="tg-0pky">1.7</td>
    <td class="tg-0pky">1070</td>
  </tr>
  <tr>
    <td class="tg-0pky">1.8</td>
    <td class="tg-0pky">1230</td>
  </tr>
  <tr>
    <td class="tg-0pky">1.9</td>
    <td class="tg-0pky">1400</td>
  </tr>
  <tr>
    <td class="tg-0pky">2.0</td>
    <td class="tg-0pky">1600</td>
  </tr>
</tbody></table>
</details>

**10)** Within Cyberpunk's Graphics settings, make sure Color Precision is set to High or it will result in a washed out / gray image.

<details><summary>Color precision setting</summary>
<a href="https://slow.pics/Uinn4FKy/"><img src="https://i.slow.pics/Uinn4FKy.png" style="width:100%;height:100%;"/></a>
</details>

**11)** Still within Cyberpunk's Graphics settings, highly recommend you leave film grain enabled.  The film grain options within RenoDX relies on this to be enabled to work.  If you don't want to use film grain, you can always set film grain intensity to 0 within RenoDX.
- Film grain really helps with banding issues in Cyberpunk (and any game in-general).

**12)** Open the ReShade interface, default button is the Home key.  

- If you don't have a Home key please refer to this guide that goes over how to change it to a different key: <https://www.youtube.com/watch?v=xoCdpOIRKus>

## PART 3: RENODX SETTINGS
WIP - WILL ADD LATER

<!--
## Compatibility FAQ
> RenoDX was not made with any other mods in mind so any compatiblity notes are based on reports made by other RenoDX users.

- **Is RenoDX compatible with [Ultra Plus](https://www.nexusmods.com/cyberpunk2077/mods/10490)?** YES
- **Is RenoDX compatible with the [Ultrapunk modlist](https://www.nexusmods.com/games/cyberpunk2077/collections/eem6yz)?**  YES
- **Is RenoDX compatible with the [Cyberpunk Render Tweaks](https://www.nexusmods.com/cyberpunk2077/mods/33943) mod?**  YES, The version hosted on the GitHub and Discord server will work fine with it.
- **Is RenoDX compatible with [Nova City 2](https://www.nexusmods.com/cyberpunk2077/mods/12490)?** Yes, but it can make the game a bit darker especially in the interiors.  Recommend combining with the [Nova Optics](https://www.nexusmods.com/cyberpunk2077/mods/29190) mod and utilize its shadow boost feature. Also keep in mind that Nova City 2 was meant to be used alongside a [flashlight](https://www.nexusmods.com/cyberpunk2077/mods/2913) and/or [night vision](https://www.nexusmods.com/cyberpunk2077/mods/8326) mod.
- **Is RenoDX compatible with [ENV Tuner](https://www.nexusmods.com/cyberpunk2077/mods/23079)?  Mostly, though a lot of the HDR specific sliders won't work.
- **Is RenoDX compatible with other LUTs?** If the LUT was made for HDR you can probably get it to work; however, you will need to adjust the various RenoDX settings until you're happy with the final look.  Recommend using mods compatible with [LUT Switcher](https://www.nexusmods.com/cyberpunk2077/mods/16310), so you can switch which LUT you're using without having to restart the game.
- **Can RenoDX be used with the [Hot-Sampled Photomode Renders (IGPT)](https://www.nexusmods.com/cyberpunk2077/mods/26318) mod?** If using just RenoDX then it should work.  However, normal ReShade shaders will not show up in the final render, including Otis' IGCS DoF.
- **Can RenoDX be used with other ReShade shaders and addons?**  This will vary but if the game is in HDR10 PQ mode then most ReShade shaders should work, at least partially, but you'll need to take precautions to control how bright the highlights get.
  - Use the HDR Analysis shader and place it after each ReShade effect to see how each one affects the peak and average brightness.  
  - Can also place a tonemapper shader at the very end of your preset to bring the highlights under control, though you'll get better results by fine tuning each shader to avoid going too high in the first place.
  - While I haven't tested every addon, I have used quite a few of them with RenoDX without issue.  
- **What about other mods that weren't mentioned?**  Feel free to ask in the RenoDX Cyberpunk thread, but typically most mods will be fine. Some mods might require you to adjust RenoDX a bit, like the LUT mods mentioned earlier, but overall you should be fine.
-->

## Common Issues

### Character Blacked Out
- Within RenoDX settings at the very bottom, change `Internal Sampling Encoding` and `Internal Sampling Decoding` to `Vanilla`

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
<i>Screenshot taken from an older version of RenoDX</i>
<a href="https://slow.pics/R1nHEgpd/"><img src="https://i.slow.pics/R1nHEgpd.png" style="width:100%;height:100%;"/></a>
</details>

<!--
### Map is hard to read
<details><summary>RenoDX Map Bug</summary>
<a href="https://slow.pics/FScCfiyT/"><img src="https://i.slow.pics/FScCfiyT.png" style="width:100%;height:100%;"/></a>
</details>

**Known issue with this version of RenoDX.  This bug affects the vanilla map and every map mod.**
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


### How do I adjust the UI brightness?
**You can change the UI brightness by adjusting the `paper white` value in the game's HDR settings.**  This value has no other effect when RenoDX is installed.
--> 

### HUD / UI Looks Weird
- This usually appears as boxes or borders around parts of the HUD.
- The vanilla film grain is broken and can cause this issue.  Make sure film grain type within RenoDX is set to `Perceptual`.

## HOW TO PROVIDE MORE INFO FOR TROUBLESHOOTING

- **Disable all mods:** With mods still in the process of being updated for 2.5, some may not work at all of having issues that need to be addressed. Even mods that were updated can still have lingering issues.
    -  WE ARE NOT GOING TO TROUBLESHOOT YOUR MODLIST!  RenoDX is only designed to work with an otherwise vanilla game, those *most* mods should work fine with it.
- **Make sure you are using the latest addon support version of ReShade.  This can be downloaded from <https://reshade.me/#download>**


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

**2) Take screenshots of the issue with ReShade!**  HDR Frame is another good alternative: <https://apps.microsoft.com/detail/9p4ngn61cr4t>
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

[**BACK TO CYBERPUNK GUIDE INDEX**](Cyberpunk)
