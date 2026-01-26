---
title: [How to Install ReShade for RenoDX]
type: 
summary: 
description: Reference this guide for all RenoDX installs
sidebar: false
---

## Install Process

**1) Install latest version of ReShade with full add-on support:**
- Download ReShade from <https://reshade.me/#download>**
<a href="https://slow.pics/BLUMrJiN/"><img src="https://i.slow.pics/BLUMrJiN.jpg" style="width:75%;height:75%;"/></a>

**2) Pick the rendering API that the game uses:**
- <details><summary>Click to see what this step looks like</summary>
<a href="https://slow.pics/V4scY4i0/"><img src="https://i.slow.pics/V4scY4i0.jpg" style="width:75%;height:75%;"/></a>
    
- Some games have multiple rendering APIs that can be chosen. In those cases it's possible that RenoDX may only work with one of them, so make sure to consult the RenoDX download page for details for your specific game.  

- You can also find a list of rendering APIs for each game on PC Gaming Wiki: <https://www.pcgamingwiki.com/wiki/Home>
	
**3) In the shader selection screen make sure to select Lilium's HDR Analysis tool.**  This will come in handy when configuring the in-game HDR settings. Click here for full list of HDR compatible shader repositories: <https://www.hdrmods.com/HDR-Link-Library>

- <details><summary>This is listed under "ReShade HDR shaders by Lilium" and the shader is called "lilium_hdr_and_sdr_analysis.fx". You can click "Sort by:" and change the option to "A to Z" to make finding Lilium's shaders easier: </summary>		
<img src="https://github.com/CreepySasquatch/HDRMods/blob/main/images/Guide-Generic-Images/ReShade-Lilium-Shaders.jpg?raw=true" title="Lilium Shaders" style="width:359px;height:470px;"/>
	
**4) When you get to the select addons screen DO NOT PICK ANY ADDONS...***unless you know what the addons are for and are actually going to use them*.  
- <details><summary>Unneeded addons will hurt your game performance and selecting them all is likely to make your game crash or not boot at all: </summary>		
<img src="https://github.com/CreepySasquatch/HDRMods/blob/main/images/Guide-Generic-Images/ReShade%20Skip%20Addons.jpg?raw=true" title="ReShade Addons" style="width:363px;height:468px;"/>

## ReShade Tips

- If you're not using any shaders in the Home tab of ReShade feel free to disable the Generic Depth addon as it can save some performance, especially in DX12 games.  Common shaders such as Lilium's RCAS also do not need this addon.

- Default key to open the ReShade GUI is the HOME key. If you don't have a Home key please refer to this guide that goes over how to change it to a different key: <https://www.youtube.com/watch?v=xoCdpOIRKus>


