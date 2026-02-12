---
title: [ReShade Preset Guide]
type: 
summary: 
description: Introduction to using HDR with ReShade
sidebar: false
---

{% include callout.html type="tip" content="Martys Mods has a Load Order guide that I recommend checking out as well: <https://guides.martysmods.com/reshade/loadorder>.  It goes into a bit more detail but if you want a simple version mine can still be useful.  Check out Marty's other guides as well for general ReShade tips as I won't be covering most of them in the guides on my site." %}

## Shader Order (applies to both SDR and HDR)

{% include callout.html type="important" content="Remember that shaders are rendered from TOP to BOTTOM.  Whatever shader is on top will be affected by every other shader below it and vice-versa." %}
 
1. **Any shaders that explicitly say to place them on top of the shader order, such as Immerse Launchpad or Zenteon Framework.**  Do not put these inside of Soop's HDR converters.  
1. **Ambient Occlusion, Ray Tracing, and Global Illumination shaders.**
1. **Fog shaders such as PTVL, Atmosphere, and Nebulus go here.** These go after lighting and AO shaders to prevent those from bleeding through the fog.
1. **Bloom shaders such as Solaris, Xenon, and HDR Bloom.**
1. **Color grading shaders such as PreCorrect, ReGrade, Lightroom, and LUTs typically go here.**  However, color grading shaders generally have more flexibility compared to other shader types, so these could also be placed elsewhere. Feel free to experiment.
1. **Sharpening / Local Contrast shaders, AA shaders, and DoF shaders would all go here.** Most are obviously named as such but would include shaders like Clarity and IGCS.
1. **Image correcting shaders such as Deband or Denoise, as well as any lens / dirt shaders like Film Grain or Lens Flare, should be placed toward the bottom.** This would also apply to shaders that apply borders or cropping guides.

{% include callout.html type="warning" content="Most shaders do not work with HDR.  Quite a few non-HDR shaders will work with HDR10 without too much issue but if you try using them with scRGB you'll definitely run into issues.  A work around is using Soop's HDR Converter shaders.  More information can be found here: <https://www.hdrmods.com/HDR-Shader-Order>" %}

<a href="https://imgflip.com/i/a59obk"><img src="https://i.imgflip.com/a59obk.jpg" title="made at imgflip.com"/></a>