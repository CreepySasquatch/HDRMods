---
title: [Cyberpunk 2077 LUTs]
type: 
summary: 
description: How to find the perfect LUT to use with RenoDX in Cyberpunk 2077
sidebar: false
---

## LUTs: Everything you need to know

**What is a LUT?**
- **L**ook-**U**p **T**able: Think of it like a table of contents that changes colors from one value to another.

**Do I need to use a LUT mod?** No, the vanilla LUT is fine, especially when using the latest version of RenoDX with the PsychoV-11 tone mapper.  However, many people choose to use a LUT to further customize the look of the game.  LUTs also come in handy when doing virtual photography.

**RenoDX was designed around the vanilla LUT.**  Thus picking any other LUT will most likely require you to adjust the various sliders within RenoDX to get it to look decent.

### But should I use a LUT??? If so, which one should I pick???

**How can I figure out which LUT to use?**
- Use LUT Switcher 2's Comparison Mode Feature: 
    - LUT Switcher 2 download link: <https://www.nexusmods.com/cyberpunk2077/mods/16310>
    - Allows you to rank the LUTs you like the best in an unbiased fashion, also known as a blind test.  You can pick which LUT packs you want to be included in the test, then you go through a bunch of "A or B" tests with random LUTs on either side of the screen, but you won't know which LUT is which.  Then after the test is done, it'll rank the 10 top LUTs that you picked the most often.
  {% include callout.html type="important" content="When download LUTs for LUT Switcher 2, make sure you're downloading LUT Switcher packs, not individual LUTs, because those just replace the vanilla LUT.
  
  Some LUTs such as Nova LUT 3 have HDR and SDR versions.  Make sure you're grabbing the HDR versions!!!" %}

**My *personally* recommended LUT to use with RenoDX: PREEM LUT 3 or the Vanilla (default) LUT at 50% strength.**
- Please do not take this LUT recommendation as gospel.  It's mentioned solely because everyone asks, "Which LUT should I use?"  If you want a proper answer, then read the LUT Switcher 2 guide in the next section.

**What about Nova LUT 3?**
- This is the other LUT that is often recommended, for both HDR and SDR.
- Please note that there are specific SDR and HDR versions.  Make sure you using the HDR versions with RenoDX!!!
- It's recommended to use the ENV Tuner (Simple version) and enabling Highlight Reduction, and setting it to 1.
- Nova LUT 3 HDR has many variants, 72 to be exact!  There are two numbers you need to be aware of: Exposure Multiplier (the smaller number listed as a decimal **X.X**) and Color Temperature (the larger number with a **K** on the end).
    - The 72 LUTs are split into 8 packs within LUT Switcher, with each pack representing a specific color temperature using the Kelvin scale (K). Lower K numbers will be warmer, aka more yellow, whereas higher K numbers will be cooler, aka more blue.
    - Each color temperature LUT pack contains 9 LUTs, each with a different exposure multiplier (2.0 to 6.0). Higher numbers will appear to be brighter compared to lower ones.
<details><summary>Nova LUT 3 HDR - Comparison Chart</summary>
<i>Yeah, I took 72 screenshots and combined them into one massive chart.  You're welcome!</i>
<a href="https://slow.pics/6isWQBlY/"><img src="https://i.slow.pics/6isWQBlY.png" style="width:100%;height:100%;"/></a>
</details>

### LUT Switcher 2 Comparison Mode Guide

**1) Install the LUT Switcher 2 mod, along with its requirements, as well as any LUT Switcher packs you want to try.**

**2) Launch the game.  Open up the Cyber Engine Tweaks overlay and click on Bindings.** 
  - **Set these bindings to your preferred hotkeys:**
    - Start/Stop Comparison
    - Toggle Comparison Effect
    - Select Favorite Effect A
    - Select Favorite Effect B
    <details><summary>LUT Switcher Bindings</summary>
    <b>You can use whatever keybindings you want.  These are just what I picked.</b>
    <a href="https://slow.pics/5aoK63pi/"><img src="https://i.slow.pics/5aoK63pi.png" style="width:100%;height:100%;"/></a>
    </details>
  - **Click Save Changes to save your bindings**
    - Keybindings will turn from a light yellow to white once they're saved.

**3) Open LUT Switcher window within Cyber Engine Tweaks. In the control panel at the bottom of the window, click on the little square / check-list icon to go to the LUT Packs page.**
- The LUT packs icon is the 2nd from the right at the very bottom of the LUT Switcher window.
<a href="https://slow.pics/qqsP7ZEQ/"><img src="https://i.slow.pics/qqsP7ZEQ.png" style="width:100%;height:100%;"/></a>
- <details><summary>Click on any LUT packs you want to include in the comparison.</summary>
<i>Note how the LUT Packs icon changes to a triangle</i>
	<a href="https://slow.pics/i6AT8E2P/"><img src="https://i.slow.pics/i6AT8E2P.png" style="width:100%;height:100%;"/></a>
    </details>
    - Don't pick the Fun or Utility LUT packs as these are not meant to be used for gameplay.
    - If you have any interest in the Nova 3 HDR LUTs, consider not picking ALL of the LUT packs for testing, especially if you're intested in any of the other LUT packs such as Preem LUT 3. 
    - Each Nova 3 HDR pack contains 9 LUTs, so if you were to pick all 8 Nova 3 HDR packs you would be adding an additional 72 LUTs to compare. Rankings are based on individual LUTs picked, not the LUT pack picked.  So you would have to cycle through a lot more LUT comparisons to get an accurate list.
    - If picking one Nova 3 HDR pack, a good recommendation would be 6500K, because of it being a standard color temperature used in color grading.  If picking two packs, maybe go with a slightly warmer one such as 4500K along with a cooler option like 7500K.  You can then make a better judgement call about which of the other Nova LUTs you might like based on how high your test LUTs are ranked.

- Click on the LUT packs icon to go back to the main LUT Switcher menu.
- Close the Cyber Engine Tweaks overlay.

**4) Configure RenoDX for the LUT comparison.**
- For the LUT comparison test I recommend changing all the colorgrading sliders within RenoDX back to their default settings, or pick a different preset in RenoDX for the test if you don't want to screw up the settings you already have.
- Keep the important settings such as Peak Brightness and Game Brightness the same as the your original setup.
    - If you adjusted the game brightness for a specific LUT, change it back to a comfortable setting that works with the vanilla LUT, generally between 150-300 nits.
- **Set LUT Strength to 50.**  This is very important, because a lot of the LUTs probably won't look right at full strength. So setting this to 50 (aka half strength) will balance out the intensity and will give more LUTs a fair chance at being selected.  It also negates the need to have to adjust all the other RenoDX sliders for each LUT during the test.
- Once the test is over with, you can adjust the various RenoDX color grading sliders as desired to perfect the look of your chosen LUT.

**4A) Where should I do my LUT comparisons?**
- Ideally you'd want to do the LUT comparison multiple times, to test different locations, weathers, time of day, interior vs exterior, etc.
- However a good place to start would be the El Coyote Cojo bar. It has a nice variety of colors, multiple neon signs, and is a darker interior space.
- Another good location is around Jig Jig street.

**5) Start the LUT comparison using the Start/Stop Comparison binding.**
- You should see a message pop up, "Comparison started. Use hotkeys to pick your favorite."
- You should also see a comparison mode bar on the bottom of your screen that is keeping track of how my tests were done.
- You'll see either an A on the left side of your screen, or a B on the right side of your screen. This is telling you which LUT is currently active between the two random LUTs.  
- Toggle between both LUTs with the Toggle Comparison Effect binding.
- Once you're decided which LUT you like more, pick the binding for A or B depending on which one you liked.
<details><summary>Comparison Started Message with LUT A on the Left</summary>
    <a href="https://slow.pics/CdCwdoR9/"><img src="https://i.slow.pics/CdCwdoR9.png" style="width:100%;height:100%;"/></a>
    </details>

**6) You'll need to progress through the tests until at least one LUT reaches rank 10.  For more accurate results, do the comparison tests until 100% completion.**
- When you decide to stop the comparison, press the Start/Stop Comparison keybind.
- <details><summary>Should see a message saying Comparison Mode Disabled</summary>
    <a href="https://slow.pics/KaylcTDr/"><img src="https://i.slow.pics/KaylcTDr.png" style="width:100%;height:100%;"/></a>
    </details>

**7) Open the LUT Switcher window in CET.  As long as one LUT reached rank 10, then you should see the LUT rankings in the main screen.**
<details><summary>Example of LUT Rankings</summary>
<br>
<b>Please do not rely on the LUT rankings in this screenshot to figure out which LUT to use!</b>  
<br>
    <a href="https://slow.pics/W0NnAtTJ/"><img src="https://i.slow.pics/W0NnAtTJ.png" style="width:100%;height:100%;"/></a>
    </details>
