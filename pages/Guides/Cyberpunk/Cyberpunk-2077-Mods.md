---
title: [Cyberpunk 2077 Mod Recommendations]
type: 
summary: 
description: Recommended Mods to Use with Virtual Photography
sidebar: false
---

{% include callout.html type="note" content="This guide isn't specific to RenoDX or HDR.

<b>I will not be covering every single mod you should use, as the list would be over 100 items long.</b>  There are plenty of modlists that include most of the essential visual mods, such as Ultrapunk: <https://www.nexusmods.com/games/cyberpunk2077/collections/eem6yz>" %}

{% include callout.html type="important" content="Please support the creators of any recommended mods.  Piracy of paid mods, camera tools, and shaders is frowned upon." %}

<!--
[**MY OTHER CYBERPUNK 2077 GUIDES**](Cyberpunk-2077-Index)
- [**RENODX INSTALLATION GUIDE**](Cyberpunk) - Doesn't include preset installation or personal setting recommendations.
- [**CREEPY ULTRA HDR PRESET GUIDE**](Cyberpunk-Creepy-Preset) - RenoDX installation guide that also includes instructions on how to install my preset [**Creepy Ultra HDR**](https://www.nexusmods.com/cyberpunk2077/mods/28191)
- [**HOW TO FIND THE PERFECT LUT TO USE WITH RENODX**](Cyberpunk-2077-LUTs)
-->

[RETURN TO THE MAIN VIRTUAL PHOTOGRAPHY GUIDE](Cyberpunk-Virtual-Photography)
[RENODX INSTALLATION GUIDE](Cyberpunk)

## Virtual Photography

- [Otis Camera Tools](https://www.patreon.com/cw/Otis_Inf): Available from Otis' Patreon. This is much more flexible than the in-game photomode, allowing infinite camera distance, disable the HUD, hotsampling, pausing NPC movement, along with many other features.  Also comes with a ReShade addon called CyberLit, which can be used to add additional light sources to the scene.  However I prefer using [CharLi](https://www.nexusmods.com/cyberpunk2077/mods/8176) for this purpose.

- [CharLi](https://www.nexusmods.com/cyberpunk2077/mods/8176): Useful for placing additional lighting when taking screenshots.  I personally use this over Otis' CyberLit Addon.  Can also place light blockers which can be used to black out areas of the background or to stop added lighting from casting additional shadows.

- [Holo Ad Freezer](https://www.nexusmods.com/cyberpunk2077/mods/23427): Stops the giant vertical ads from scrolling upwards.  Handy for when you want to take long exposure or DoF shots and the ads just look like a giant blur.

- [Hot-Sampled Photomode Renders (IGPT)](https://www.nexusmods.com/cyberpunk2077/mods/26318):  **NOT Compatible with ReShade or Otis IGCS DoF**  Allows you to do hotsampling within Photomode without needing to use something like Otis tools. 

- [Photomode-EX](https://www.nexusmods.com/cyberpunk2077/mods/18839): Adds a bunch of features to the in-game photomode, such as the ability to add additional characters that can be posed.
    - [Photomode NPCs Extended](https://www.nexusmods.com/cyberpunk2077/mods/18837): Adds additional appearances to existing PM NPCs and expands the available list by over two hundred characters from the game and its expansion. Replaced the older Nibbles to NPCs mod.

- [Appearance Menu Mod (AMM)](https://www.nexusmods.com/cyberpunk2077/mods/790):  Useful for posing characters, removing background NPCs, changing the time of day, spawning props, teleporting to hard to reach areas, etc. *Make sure to grab pose packs that are compatible with AMM.*
    - [AMM Expressions Overhaul](https://www.nexusmods.com/cyberpunk2077/mods/20108):  Adds over 200 facial animations to AMM. If you're going to use AMM to do character poses, you'll want to download this as well.

- [Appearance Creator Mod (ACM)](https://www.nexusmods.com/cyberpunk2077/mods/10795): Handy for adding new outfits to NPCs. You can often find ACM codes within the description of clothing mods, otherwise you'll need to use something like [Wolvenkit](https://www.nexusmods.com/cyberpunk2077/mods/2201) to find the clothing mesh paths and appearance names for each clothing piece.
    - Wolvenkit isn't going to be covered in this guide, but there are plenty of tutorials out there like: [how to add modded clothing or hair to NPCs](https://wiki.redmodding.org/cyberpunk-2077-modding/modding-guides/npcs/appearances-change-the-looks), or [making your own tattoos](https://wiki.redmodding.org/cyberpunk-2077-modding/modding-guides/npcs/custom-tattoos-and-scars/how-to-create-an-overlay-tattoo#id-1-create-a-wolvenkit-project).

- [Photomode to AMM Pose Converter (Easy AMM Poses)](https://www.nexusmods.com/cyberpunk2077/mods/13904): Use with [Wolvenkit](https://www.nexusmods.com/cyberpunk2077/mods/2201).  You'll also want to read the guide on [how to add poses to AMM](https://wiki.redmodding.org/cyberpunk-2077-modding/modding-guides/animations/animations/amm-collab-anims-poses#easy-amm-poses).

[Wardrobe Items Adder](https://www.nexusmods.com/cyberpunk2077/mods/5742): Automatically adds all in-game and modded clothing to the wardrobe, without needing to acquire them via CET code or Virtual Atelier store.

[Autodrive Cinematic Camera Extended](https://www.nexusmods.com/cyberpunk2077/mods/24637): Essential if you want to take shots of cars while they're moving. 

[Enhanced Vehicle System](https://www.nexusmods.com/cyberpunk2077/mods/11765): Provides full control over vehicle systems: headlights, power state, engine, interior lights, crystal dome, doors, windows, hood, trunk and spoiler. It also preserves these elements state when the player gets out of the vehicle.  Handy for when you want to leave the lights on or doors open when taking screenshots.

### Pose Mods

- You can find a variety of pose mods on the [Nexus](https://www.nexusmods.com/games/cyberpunk2077), for both Photomode (PM) and Appearance Menu Mod (AMM).  You'll often see PM and AMM in the pose name or in the description.
    - If the mod doesn't list which it supports, you can easily tell by the file structure of the mod itself.  On the Nexus page for the pose mod, click the `Files` tab then click `Preview file contents` right below the download button.  
        - AMM mods will have a `bin` folder that also includes a `Custom Poses` folder further in. This is what tells AMM what poses are available.  
        - If you see a `Custom Props` folder but not `Custom Poses`, then the mod doesn't have any AMM poses. You can convert a Photomode pose pack to AMM pretty easily following this [Guide](https://wiki.redmodding.org/cyberpunk-2077-modding/modding-guides/animations/animations/amm-collab-anims-poses#easy-amm-poses) that also makes use of the [Easy AMM Poses mod](https://www.nexusmods.com/cyberpunk2077/mods/13904)
        - PM mods will have an `r6` folder. Within the r6 folder chain you should see a `.yaml` file.  This is is what tells Photomode what poses are available.
    - With pose mods you also want to pay attention to what body types they support:  
        - FV = Fem V / Female Average
        - MV = Male V / Male Average 
        - MB = Male Big
    - Poses meant for to be used with more than one character will also say what body combos they support:
        - MF = Couples poses for 1 Male and 1 Female
        - FF = Couples poses for 2 Females
        - MM = Couples poses for 2 Males
        - MBM = Couples poses for 1 Male Big and 1 Male Average
        - MBF = Couples poses for 1 Male Big and 1 Female
    - Some poses will also include variations for different male / female body types, such as Angel, Lush, and Hyst for females and Gymfiend for males.
{% include callout.html type="warning" content="I've seen at least one mod that claimed to support AMM, when it actually didn't include any AMM poses.  This is because some photomode mods will include props that need to be placed with AMM. This is one reason previewing the file contents can be helpful." %}

## Enhancing Visuals

- [Nova City 2](https://www.nexusmods.com/cyberpunk2077/mods/12490): While not strictly for virtual photography, the weathers added by Nova City 2 can make a huge difference, especially Drought for sunrise and sunset shots.
    
- [Weather Switcher](https://www.nexusmods.com/cyberpunk2077/mods/18027):  Super handy for changing the weather to something more appealing when trying to get that perfect lighting.  Useful for changing the time of day (which AMM can also do).  Works well with Nova City 2.

- [ENV Tuner](https://www.nexusmods.com/cyberpunk2077/mods/23079): The full version is handy for fine tuning how the environment / weather looks. Note that some of the HDR specific features do not work with RenoDX.

<!--
- [Ultra Plus](https://www.nexusmods.com/cyberpunk2077/mods/10490):  Recommended for fine tuning the game's ray tracing and path tracing options. Also has a built-in VRAM and FPS usage meter which can come in handy when trying to determine how much overhead you have for hotsampling or cranking up the graphics settings.  You can view the full list of features here: <https://theultraplace.com/games/cyberpunk2077/>
-->

- [LUT Switcher 3](https://www.nexusmods.com/cyberpunk2077/mods/16310):  People love a good LUT mod.  This is the easiest way to apply them.  Can switch between LUTs without having to restart the game.  Requires LUT packs designed for LUT Switcher.
    - [Nova LUT 4](https://www.nexusmods.com/cyberpunk2077/mods/11622): Grab the LUT Switcher Color Temp pack under optional files (don't use the main download with LUT switcher).  I use this LUT in pretty much all my shots, and I personally tested the HDR version for CyanideX.  

- [RenoDX](Cyberpunk): **For HDR Users Only**. The Nexus version is outdated, so the link takes you to the installation guide I wrote that goes over how to download it from Discord and configure it.  I personally use the [version from April](https://discord.com/channels/1408098019194310818/1434377434022809610/1490559043343876196) that first introduced PsychoV-17 because the most recent version causes weird dimming issues that not everyone can reproduce. 


## Skin / Body Mods

- The important thing with body mods of all sorts is that they can be broken down into two main frameworks:
    - [VTK](https://www.nexusmods.com/cyberpunk2077/mods/7054): supports female bodies
        - [Gymfiend](https://www.nexusmods.com/cyberpunk2077/mods/6423): the male body version of VTK
    - [KSUV](https://www.nexusmods.com/cyberpunk2077/mods/3783): supports both male and female body types
- VTK and KSUV are NOT compatible with each other; however, both only affect V unless you download an NPC mod designed around one of the frameworks.  
    - VTK Textures for [Judy](https://www.nexusmods.com/cyberpunk2077/mods/18006) / [Panam](https://www.nexusmods.com/cyberpunk2077/mods/21802) are compatible with either VTK or KSUV.  They are just the textures ported from the main VTK mod but they're still using the vanilla bodies for both NPCs. Good example of *why you should always read the description and not rely on the mod name.*
- **To be continued...** (body types, clothing, etc)


[RETURN TO THE MAIN VIRTUAL PHOTOGRAPHY GUIDE](Cyberpunk-Virtual-Photography)



