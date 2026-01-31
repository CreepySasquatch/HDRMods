---
title: [HDR Screenshot Guide]
type:
summary:
description: Detailed guide on how to take and view HDR screenshots
sidebar: false
---

{% include callout.html type="tip" content="If you're trying to figure out how to view or post HDR images in Discord: <https://www.hdrmods.com/Discord-HDR-Screenshots>" %}

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

- **Steam** Can take HDR AVIFs. 
  - Doesn't appear to work properly on Linux.

- **OBS** can capture HDR screenshots in the JXR file format and record HDR
  video.  Recommended method for capturing accurate HDR video.

  - OBS HDR setup guide:
    <https://www.reddit.com/r/IntelligentGaming2020/comments/x4s8h4/how_to_capture_record_hdr_high_dynamic_range/>

- **Windows Snipping Tool** CANNOT take HDR screenshots!!!  If you go into the Snipping Tool settings there is an option to enable "HDR screenshot color corrector."  This allows the snipping tool to take SDR shots that are properly tonemapped from HDR.  Otherwise the colors will look washed out.  SKIV is the closest thing to an HDR version of the snipping tool.



