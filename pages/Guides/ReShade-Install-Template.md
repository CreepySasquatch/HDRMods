---
title: [ReShade Install Template]
type: 
summary: How to create a template installation that can copied into any game.
description: How to create a template installation that can be copied into any game.
sidebar: false
---

Are you tired of having to redo the ReShade installation process each time you start a new game?  This will help simplify the process.

**What will this create?**

It will create a full ReShade setup that can be copied into any new game you play.  All the common settings you want to preserve such as hotkeys, shader and texture location, screenshot path, etc. can be configured using this method. 

**Limitations:**

**1)** Any game specific settings such as the preprocesser depth buffer configuration is best left untouched as each game can be different. 

**2)** Vulkan games will still need to be installed with the installer.  Though you can still manually copy and paste the input settings etc from your template ReShade.ini to the Vulkan game's ReShade.ini.

## Prep Work

**1)** Make sure view file name extensions is enabled within Windows File Viewer.  This will allow you to see the commonly used file types such as .ini, .txt, .log, and .exe.  

  <details>
  <summary><b>How to view file name extensions in Windows 11:</b></summary>
	<ol>
	<ul>
    <li>1) Open File Explorer.</li>

      <li>2) Along the top bar of File Explorer, left click View.</li>

    <li>3) Hover over Show, then make sure File name extensions is checked.</li>
	</ul>
	</ol>
	</details> 
    
<br>

**2)** Create a new folder that you will store all your template files in.  I will call this **New Game Template** for the purpose of this guide. 

**3)** Load up a game that you want to use as the template.

**4)** Configure any settings you want to transfer over, such as hotkeys, shader and texture path, screenshot location, etc.

**5)** Do not configure anything that you don't plan on transferring over, as that will just make it harder to figure out what you want to transfer to our template ReShade.ini

**6)** Exit the game. Copy your ReShade.ini to your New Game Template folder.  Rename ReShade.ini to ReShade_Template.ini so the ReShade installer doesn't overwrite it.

## Creating the ReShade Template

**1)** Within the template folder you created during prep work, create a new text file (right click in the folder > select New > Text Document).  It can be any name you want but it must end in **.exe**.  In this guide I'm calling it **newgame.exe**.  Make sure there is no other file extension at the end such as **.txt**.  This is the reason why I told you to enable view file extensions earlier.  
<br>
<a href="https://slow.pics/T1C99sOH/"><img src="https://i.slow.pics/T1C99sOH.jpg" style="width:50%;height:50%;"/></a>

 * Windows will probably pop up an warning window saying "If you change a fine name extension, the file might become unusable."  Click yes to go ahead with the renaming.
 <br>
 <br> 
 <a href="https://slow.pics/tYtoXqj1/"><img src="https://i.slow.pics/tYtoXqj1.jpg" style="width:50%;height:50%;"/></a>
 <br>
 <br>

 * If renamed successfully, it should look something like this:
 <br>
 <br>
 <a href="https://slow.pics/UcHDdH01/"><img src="https://i.slow.pics/UcHDdH01.jpg" style="width:50%;height:50%;"/></a>
 <br>
 <br>

**2)** Grab the latest version of the ReShade installer with addon support from [*https://reshade.me/#download*](https://reshade.me/#download) and run it.

**3)** Select the newgame.exe you just created, click *Next*.

**4)** For rendering API just pick DirectX 10/11/12, click *Next*.

**5)** Select any shaders you want, click *Next*.  If you click *Skip* the reshade-shaders folder won't be created for you.

**6)** With addons I recommend not picking any, unless there's some that you use in almost every game, such as the IGCS Connector for people using Otis' camera tools. Click *Next* or *Skip*.

**7)** Click Finish to exit the installer.

**8)** You should see the following files created within your template folder: 
* dxgi.dll: this will be the 32-bit version of ReShade.  
    * You can extract the 64-bit version of ReShade by right-clicking on the ReShade_Setup_X.X.X_Addon.exe and extracting with 7-Zip.  You'll see both ReShade64.dll and ReShade32.dll in the extracted folder. 
* ReShade.ini: the whole reason we did this
* ReShade.log: feel free to delete this log
* ReShadePreset.ini: Not needed, feel free to delete.  A new ReShadePreset.ini will automatically be created for you the first time you boot a game with ReShade.
* reshade-shaders folder: assuming you picked any shaders and didn't click *Skip*
* Any addons you picked, if you didn't click *Skip*
 <br>
 <br>
 <a href="https://slow.pics/ahhcAPG2/"><img src="https://i.slow.pics/ahhcAPG2.jpg" style="width:50%;height:50%;"/></a>
 <br>
 <br>


**9)** Open your ReShade_Template.ini and copy any settings you want to transfer over.

**10)** Paste these settings into the ReShade.ini you just created. Save the file.
 <br>
 <br>
 <a href="https://slow.pics/ksGz06Eu/"><img src="https://i.slow.pics/ksGz06Eu.jpg" style="width:50%;height:50%;"/></a>
 <br>
 <br>

**11)** You now have a premade manual ReShade install that can be used in any game.

## Tips and Tricks

* Use Notepad++ or Visual Studio Code to read and edit ReShade.ini files, though normal Notepad will work just fine.

* Create a centralized reshade-shaders folder instead of copying and pasting to into each game.  It will make updating shaders easier in the future, especially if you often manually download shaders from GitHub or Patreon.

* I personally use F10 for my screenshot key since very few games make use of it.  Shift + Home is my preferred ReShade GUI combination, because it doesn't interfere with Otis' camera tools.

* If you use Special K for a lot of games, consider creating new profile folders for each new game, even if you don't intend on using Special K with it.  It'll help keep the screenshot structure the same for all of your games, regardless of what setup you're using.  




