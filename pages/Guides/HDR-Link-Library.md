---
title: [HDR Link Library]
type: 
summary: 
description: List of useful websites and resources
sidebar: false
---

## Available HDR Mods

**RenoDX:** *<https://github.com/clshortfuse/renodx/wiki/Mods>*

**Luma:** *<https://github.com/Filoppi/Luma-Framework/wiki/Mods-List>*

{% include callout.html type="tip" content="There may be additional mods that can only be found in the HDR Den and RenoDX servers that aren't listed on the wiki pages.  These are typically ones that are still in development but if you are playing a game on release day, then it might be worth a look."%}


## Discord Servers

**HDR Den:** *<https://discord.gg/R2Bt3uptw6>*. This server is
dedicated to all things HDR. Home to the Luma HDR mods, PumboAutoHDR, and
Lilium's HDR ReShade shaders. This is a good place for asking about
the technical details of HDR and for inquiring about what kind of HDR
display you should get. Also has a dedicated section about using HDR with Linux.

**RenoDX:** *<https://discord.gg/jz6ujVpgFB>*.  This is the new home of the popular RenoDX mods. 

**Special K:** *<https://discord.com/invite/specialk>*. You can
find the latest Special K updates here and support is also provided.
If you're interested in the non-HDR aspects of Special K such as the
various texture mod packs then this is the place to ask.
  
**ReShade:** *<https://discord.com/invite/PrwndfH>*.  The official ReShade server.  
If you have a question about ReShade that doesn't necessarily revolve around HDR then this is the place to go.  This is also the server to join if you're interested in making your own addons or shaders.

## HDR Addons or Related Tools

**AutoHDR addon:** *[https://github.com/EndlesslyFlowering/AutoHDR-ReShade](https://github.com/EndlesslyFlowering/AutoHDR-ReShade)*. To be used with an Inverse Tone Mapping shader to convert an SDR game into HDR. 

**Lilium's HDR DXVK fork:** *[https://github.com/EndlesslyFlowering/dxvk](https://github.com/EndlesslyFlowering/dxvk)*. Just like normal DXVK, it's used to convert DX8, DX9, DX10, & DX11 games into Vulkan. When used with the included dxvk.conf files it can also act similarly to the ReShade AutoHDR addon. Needs to be used with an Inverse Tone Mapper. 

{% include callout.html type="tip" content="Some of the dxvk.conf configurations apply a feature similar to Special K's HDR Retrofit functionality. These do not work with every game but is worth looking into if you want something closer to native HDR."%}

**Special K:** *<https://www.special-k.info/>*. A separate program that can either be run "globally"
  in its launcher form or "locally" when you place the renamed
  SpecialK32/64.dll into the game's installation folder (similar to how
  ReShade is installed when done manually). Can be used to modify a
  game's native HDR or convert an SDR game to HDR. Has its own built-in
  inverse tonemapper but can also be used with Lilium's inverse
  tonemapper or Pumbo's AdvancedAutoHDR shader.
  <details>
  <summary>More info on Special K:</summary>
	<ol>
	<ul>
    <li>Special K's pipeline remastering feature (DX11 has the most features, OpenGL & DX12 is more limited) is
    an advanced feature which allows the HDR remastering process to
    start earlier in the graphics pipeline (similar to RenoDX). In
    simple terms, it can make the final HDR output look better but isn't
    recommended for first-time users of Special K because of the
    additional steps it takes to get it configured.</li>

    <li>Special K gets updated often so I recommend changing update frequency to "Discord: (updates regularly)"
    updates. You can also grab updates from their Discord's
    nightly-builds channel.</li>

    <li>Special K is not compatible with most of Otis' camera tools but this
    will depend on the game it's being used in.</li>

    <li>Special K can also be used for much more than HDR but that's out of
    the scope of this quick overview.</li>
	</ul>
	</ol>
	</details> 

<br>

**SKIV:** (Special K Image Viewer).  Separate program that comes with Special K (you can find it within the Special K installer folder) or you can download it from the Special K Discord server.  Useful for converting HDR images to other formats and seeing details about an HDR image similar to Lilium's HDR Analysis shader. Can also act as an HDR image capture tool, though images are placed into the Windows clipboard and otherwise have to be manually saved to a specific folder; so in practice you can only take one screenshot at a time, similar to the Windows snipping tool.    

**dgVooDoo2:** *<https://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/>*. Used to convert older games into DX11 or DX12. 

**Pictureflect Photo Viewer:** *<https://pictureflect.com/download>*. Useful for viewing and converting HDR images into other formats, such as JPEG with gainmap (not the same as JPEGXL). Can also do some limited editing such as crop and resize. 


## HDR Compatible Shaders


**Lilium's HDR Shaders:** *<https://github.com/EndlesslyFlowering/ReShade_HDR_shaders>*. This shader repository is a one stop shop for everything you need to diagnose and fix HDR issues.  
<details>
  <summary>Breakdown of Included Shaders:</summary>
	<ol>
	<ul>
    <li><b>HDR Analysis Tool:</b> Something you should always download if playing a game in HDR; it can provide essential information to help troubleshoot HDR issues.</li>

    <li><b>Inverse Tone Mapping:</b> Crucial when using one of the AutoHDR methods.</li>

    <li><b>SDR TRC Fix:</b> Used when playing a game in SDR with the display in HDR</li>

    <li><b>Tone Mapping:</b> Primarily used to help fix highlight blowout or lack of a peak brightness limit.</li>

    <li><b>Black Floor Fix:</b> Used to fix gamma mismatch issues</li>

    <li><b>Map SDR into HDR:</b> Maps SDR content into an HDR container.</li>

    <li><b>HDR Brightness Adjustment:</b> Can be used to adjust the overall brightness. If using the HLG Gain feature you can adjust the brightness of just the brightest areas of the screen. Unchecking the "Only increase brightness" checkbox adds a little contrast as well.</li>

    <li><b>Filmgrain:</b> Used to help fix banding issues</li> 

    <li><b>CAS and RCAS:</b> Sharpening shaders</li>
    <li><b>Test Pattern Generator:</b> HDR Test Patterns</li>
	</ul>
	</ol>
    </details>

<br>

**Pumbo's HDR Shaders:** *<https://github.com/Filoppi/PumboAutoHDR>*. Includes the AdvancedAutoHDR shader which can do both inverse tone mapping for AutoHDR solutions and tone mapping native HDR. 

**Soop's scRGB / HDR10 Converters:** *<https://github.com/smolbbsoop/smolbbsoopshaders>*. The only way to use non HDR shaders
with Native HDR or the popular RenoDX / Luma mods. There's also a radial blur shader to use when taking screenshots if that's your thing. 

- More info on how to use these can be found here: *<https://www.hdrmods.com/HDR-Shader-Order>*

**Max's Simple HDR Shaders:** *<https://github.com/MaxG2D/ReshadeSimpleHDRShaders>*. Includes the HDR Saturation, Bloom, and Motion Blur shaders. 

**ShortFuse's Shaders:** *<https://github.com/clshortfuse/reshade-shaders/tree/main/Shaders>*. 
 Includes a color temperature and filmgrain shader. 
**PotatoFury's PotatoFX:** *<https://github.com/GimleLarpes/potatoFX>*.  Includes a few different colorgrading shaders. 

## HDR Guides

**Dio Brando's YouTube channel:** *<https://www.youtube.com/@diobrando7314>*. High quality how-to video guides. 

**Koklusz' HDR Gaming Database:** *<https://github.com/KoKlusz/HDR-Gaming-Database>*. Good resource to see if a game has any HDR issues and how to fix them.  

**How to use RenoDX with Special K:** *<https://github.com/clshortfuse/renodx/wiki/Guide:-Using-Special-K-with-RenoDX>*

**Special K Wiki**: *<https://wiki.special-k.info/>*. If you want to
  learn more about the various features Special K has to offer.

## Other Useful Resources

**PC Gaming Wiki:** *<https://www.pcgamingwiki.com/wiki/Home>*. If you
  need help finding specific information about a game, such as what API
  it uses. 

**Marty's Mods ReShade guides:** *<https://guides.martysmods.com/>*.
  Nice collection of general ReShade guides, but nothing specifically
  for HDR.

**FRAMED Screenshot Guides**: *<https://framedsc.com/basics.htm>*. If
  you're interested in learning how to take better screenshots this is a
  good place to start. Nothing specifically for HDR but still a good
  resource nonetheless.

## Recommended HDR Youtube channels:

**Dio Brando:** *<https://www.youtube.com/@diobrando7314>*.  How-to guides, HDR comparisons, and gameplay. 

**HDR Central:** *<https://www.youtube.com/@HDRCentral>*. New channel made by yours truly, CreepySasquatch, dedicated to HDR and ReShade guides. 

**TheHuntRider:** *<https://www.youtube.com/@TheHuntRider>*. HDR gameplay. 

**Gametism:** *<https://www.youtube.com/@Gametism>*. HDR gameplay, performance tests, and comparisons. 

**JDSP:** *<https://www.youtube.com/@JDSPonYT>*.  HDR gameplay, and comparisons 
