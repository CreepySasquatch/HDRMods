---
title: [HDR Screenshot Guide]
type:
summary:
description: Detailed guide on how to take HDR screenshots
sidebar: false
---

{% include callout.html type="note" content="This guide is still a WIP." %}

## HDR Screenshot Methods

- **ReShade:** as of version 6.4, ReShade is capable of taking HDR
  screenshots in the HDR PNG format, and as of version 6.7 is able to take lossless JXL screenshots.  ReShade is the preferred method of taking HDR screenshots in-game when using RenoDX and Luma mods.

{% include callout.html type="important" content="ReShade's **save before and after images** screenshot feature will not work
when using one of the inverse tonemapping shaders because it will
disable the inverse tonemapper as well which will produce a
washed-out image in the before shot." %}

- **Special K** is able to take HDR screenshots in multiple HDR image
  formats including HDR AVIF, JXR, and HDR PNG.

- **SKIV (Special K Image Viewer)** is a handy tool can be used to
  properly view HDR images and see detailed information about the image.
  
   <details>
   <summary>More info on SKIV:</summary>
	<ol>
	<ul>
    <li>Convert HDR images to another HDR image type (such as JXR to HDR
    PNG) and export HDR images to SDR.</li>
    <li>Crop HDR images using by holding ctrl + left click, then select the
    area you want to keep, release the left click which will then save
    the cropped image to your clipboard, paste the image back into SKIV.</li>
	<li>Can take HDR screenshots which essentially makes it an HDR version
    of the Windows snipping tool.</li>
	<li>SKIV automatically comes with Special K when you install the latest
    version from the Discord. You'll find SKIV in the main Special K
    install directory.</li>
	<li>SKIV does not need Special K to function so if you have no interest
    in using Special K you can move SKIV.exe to its own folder, then
    uninstall Special K. I do recommend moving SKIV to a folder, and not
    just place the program on your desktop because it will automatically
    download any additional needed files that are required when saving
    an image to that particular file type. So you'll end up with more
    than just SKIV.exe in that folder.</li>
	</ul>
	</ol>
	</details>

- **Windows Game Bar** can take HDR screenshots in the JXR file format and can also record HDR video. Only recommended when not using ReShade or Special K.

- **Nvidia Overlay** can take HDR screenshots in the JXR file format and can
  also record HDR video.  Only recommended when using RTXHDR.

- **Steam** Can take HDR AVIFs. Unsure of quality or compatibility with ReShade etc.  DO MORE TESTING

- **OBS** can capture HDR screenshots in the JXR file format and record HDR
  video.  Recommended method for capturing accurate HDR video.

  - OBS HDR setup guide:
    <https://www.reddit.com/r/IntelligentGaming2020/comments/x4s8h4/how_to_capture_record_hdr_high_dynamic_range/>

- **Windows Snipping Tool** CANNOT take HDR screenshots!!!  If you go into the Snipping Tool settings there is an option to enable "HDR screenshot color corrector."  This allows the snipping tool to take SDR shots that are properly tonemapped from HDR.  Otherwise the colors will look washed out.  SKIV is the closest thing to an HDR version of the snipping tool.

## Discord

**Discord supports the following HDR screenshot formats:**

1) **HDR PNG (just use this):** This is the recommended format for Discord.  ReShade and Special K can take these without any additional conversion needed.  However, due to the large file size these often are, it mainly benefits those with Discord nitro subscription OR you'll only be able to upload them in larger servers that have unlocked larger file size limits.

2) **HDR AVIF (maybe):** So AVIF is kind of broken on Discord but also kind of works.  Only 8-bit AVIFs load correctly and even then if you're over a certain file size they might not still show the image preview properly.  10-bit / 12-bit AVIFs previews are broken no matter what.  The only solution is to fully open the images in a Chromium browser / zoom in on the screenshot to make them fully load. The upside to AVIF is that you get a smaller file size.  So if you don't have Nitro AND the server also doesn't support larger file sizes, then this may be a viable option.  You can use SKIV or PictureFlect Photo Viewer to convert images to AVIF.

3) **UltraHDR JPEG (it's complicated):** Also known as JPEG with Gain Map.  The plus side, it works with Discord Desktop without issue and you get a smaller file size.  Downside is that it's 8-bit only and it's a lossy format so it's not going to look exactly like the original image but it'll be close enough for the average Discord viewer.  The other real big downside is that it's broken on Android phones, but it'll look good on iOS devices at least.  You can use PictureFlect Photo Viewer (free) to convert images to UltraHDR JPEG.

