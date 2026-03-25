---
title: [Windows HDR Calibration]
type:
summary: How to find your display's peak brightness value for HDR mods such as RenoDX / Luma.
description: How to find your display's peak brightness value for HDR mods such as RenoDX / Luma.
sidebar: false
---

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

## 1) Install the Windows HDR Calibration application

**This can be found in the Microsoft Store app within Windows 11.**

## 2) Open the Windows HDR Calibration app
If you have multiple displays, move the HDR Calibration window to the display you're wanting to calibrate.
- **Click `Get Started`**

## 3) Minimum Luminance

This step will determine the darkest visible details of your display.  Drag the slider until the grid goes away.  
- **Click `Next`**

## 4) Maximum Luminance

This step will determine the brightest visible details of your display.  Drag the slider until the grid goes away.
- **Click `Next`**

## 5) Max Full Frame Luminance

This step will determine how bright your display can be. Drag the slider until the grid goes away.
- Don't worry if the value is the same or different compared to the Maximum Luminance value from the previous page.
- **Click `Next`**

## 6) HDR Saturation

Just keep at the defaults and click Next. You can always adjust game saturation with RenoDX or other ReShade shaders.
- **Click `Next`**

## 7) Review and Save Settings

Keep the default name or name it something useful you can reference later, such as the display mode you used during the calibation (True Black, HGIG, etc.)
- **Click `Finish`**
Close the HDR Calibration app.

## 8) Open the Windows settings.  Go to System > Display > Advanced Display

Under the Display Calibration you should see the peak brightness that was determined based on the HDR Calibration test.
- **Use this number as the peak brightness within RenoDX and any other HDR application.**

<a href="https://slow.pics/RVhb9nFM/"><img src="https://i.slow.pics/RVhb9nFM.png" style="width:75%;height:75%;"/></a>


