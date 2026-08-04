---
title: [HDR FAQ]
type:
summary:
description: 
sidebar: false
---

## Is HDR worth using or is it just a gimmick?

**Yes HDR is worth using *if* you have a proper HDR display.**  These typically include OLED, QD-OLED, or some other display technology that has lots of dimming zones with a minimum peak brightness of 400 nits.

## What are the benefits of using HDR?

**HDR allows for a wider range of colors, a lower black floor level, and brighter highlights.**  SDR is limited as to what colors it can show, and highlights often look like white blobs without much depth to them. Proper HDR allows those highlights to "shine" without raising the overall brightness of the rest of the display.  Black / gray levels will also be more accurate because SDR often leads to darker scenes losing detail. 

## Misconceptions about HDR

- HDR doesn't automatically add contrast, saturated colors, or darker black levels.  SDR can actually be darker when compared to HDR because of the black values getting compressed within SDR.  
- You don't need a super bright display to take advantage of HDR.  The main benefit of HDR can be seen on displays with lots of dimming zones, especially OLED with its per pixel dimming. There are plenty of HDR fans that are happy with just 400 nits peak brightness.

## HDR10 Compatible Displays
 
If you're looking for an HDR monitor you might come across a marketing term that says its "HDR10 compatible" or "supports HDR10," especially when looking at cheaper displays. All this means is that the display supports an HDR10 signal, it does not mean the visual output of the screen is HDR.  It could very well be converting that HDR10 signal and converting it to SDR. 

## What is HDR10?

HDR10 is one of the common HDR colorspaces you'll see in gaming.  The other one being scRGB.  You'll also see HDR10+ and Dolby Vision, but these are mainly meant for video content as it doesn't have much benefit for gaming.

## How do I Know If a Display Actually Supports HDR?

A dead giveaway is if you see multiple peak brightnesses listed, one for SDR and one for HDR.  If you see a low brightness value like 300 nits, that is going to be for SDR.  The HDR peak brightness is usually hidden in a difference section, if its listed at all. Display manufacturers like to hide the HDR peak brightness so you're best bet is to search for your display model on Google along with "HDR peak brightness" and you should hopefully see a reddit or forum post with the answer.

### HDR400/600/800/1000

HDR followed by a number like 400, means the display is certified to support HDR output with at least 400 nits peak brightness.  So if you see HDR followed by a larger number, then you know the display itself supports HDR.   

### True Black Displays

If you see True Black mode, then that's also a giveaway the display supports HDR.  True Black monitors should have the peak brightness listed for its True Black mode, typically 400-500 nits.  They'll also have a second HDR mode that is able to output a higher peak brightness, typically around 1000 to 1500 nits.  
  
The difference between the two modes is that with the True Black mode, the ABL (auto brightness limiter) will get disabled, which in practice means the display won't automatically dim once the screen gets too bright.  With the non True Black mode, it'll be able to display a higher peak brightness, but only within the highlights on a small percentage of the screen, typically 2-10%.  If the screen exceeds a certain peak brightness value for a certain percentage of the screen, then the screen will start to dim. The peak brightness threshold will vary based on the display. Typically the highest peak brightness listed for an HDR display is for the smallest percentage of the total screen area. 

The reason why ABL exists is to prevent overheating and limit the amount of burn-in that occurs.  This is especially noticeable on OLED displays.  So while it can be annoying, it is necessary to extend the overall life of the display. 


## RTXHDR / AutoHDR?

RTXHDR is a type of AutoHDR available if you have an Nvidia graphics card.  AutoHDR expands SDR content to make it look brighter, more saturated, and provide additional contrast.  While some people may like how AutoHDR looks, most HDR purists do not consider it to be proper HDR. It is not accurate to the original intentions of game developers and is purely a post-process effect. The end result often looks like a bad ReShade preset.  

Compare this to a proper HDR mod framework like RenoDX or Luma, which injects itself into the game's graphic pipeline and has access to the original code found within the game engine itself.  This is not something AutoHDR has access to.

### FakeHDR?

FakeHDR is a type of shader found within ReShade.  It has no relation to proper HDR, and just acts like a contrast and saturation adjustment like you would find within a colorgrading shader and is purely meant for use within SDR.

### Is AutoHDR considered to be Fake HDR?

Yes and no.  A lot of HDR purists will call AutoHDR Fake HDR because of its purely post process nature; however, unlike fake HDR shaders, AutoHDR is able to operate within HDR colorspaces and use the same levels of brightness as proper HDR.  Though it is recommended to not go above 600-700 nits peak brightness when using any kind of AutoHDR solution, in order to avoid blownout highlights.  By blownout I mean that all detail is lost and all you're left with is a blurry mess.  Proper HDR should never make a scene lose detail compared to SDR; in fact, HDR often increases the amount of detail we can see because we're not compressing the image as much. 

## Can HDR be useful for virtual photography?

When it comes to virtual photography HDR unlocks a whole other dimension for what can be possible.  Skin tones are more accurate, shiny surfaces look better without losing detail, the sky can look better because clouds can be bright without losing detail. Darker scenes are able to breath and are much more nuanced. 

The downside with virtual photography is much of that community still uses SDR, and as such won't be able to appreciate the HDR specific images.  However all HDR images have the ability to auto convert to SDR, though Discord's level of support on this isn't the best and only HDR PNGs have any kind of real support.  

### Is HDR Compatible with ReShade?

ReShade has the ability to take HDR screenshots in the form of HDR PNG or JXL.  Currently JXL has limited support but is gradually gaining acceptance.  HDR PNG is what you want to use most of the time.  Both JXL and HDR PNG are lossless when taken with ReShade, because they're always taken with the maximum quality settings. 

Shader compatiblity with HDR is a bit more limited though.  Most shaders do not work properly with HDR; HDR10 usually is fine, but if you use a non HDR shader with scRGB you'll see a lot of artifacting occur or it just outright won't work at all.  SDR shaders can quickly make the peak brightness skyrocket and can often lead to blownout highlights.  A workaround to this problem is to place a tonemapper shader at the very bottom of the shader order, which will bring the peak brightness and highlights back under control.

## Can I use a smartphone to determine if I like HDR?

While smartphones do have HDR support, they aren't typically designed with accuracy in mind.  The screen is also too small to get an accurate sense of what a proper HDR monitor / TV is able to showcase.    

