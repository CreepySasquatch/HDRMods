---
title: [Recommended HDR Solutions for each Graphics API]
type:
summary:
description: 
sidebar: false
---

## DirectX 9

- **Best:** DXVK HDR with Lilium's Inverse Tonemapper
- **Alternative:** dgVoodoo 2 to DX11, then use Special K's HDR Retrofit

## DirectX 10
- **Best:** DXVK HDR with Lilium's Inverse Tonemapper
- **Alternative:** AutoHDR addon with *either* Lilium's Inverse Tone Mapper *OR* Pumbo's AdvancedAutoHDR

## DirextX 11
- **Best:** Luma or RenoDX
- **Alternative:** Special K's HDR Retrofit - supports remastering 8-bit, 10-bit, and 11-bit render passes as well as compute passes to further enhance the end result of the HDR retrofit process, plus an adaptive tone mapping option is available 
- **Last Resort:** AutoHDR addon with *either* Lilium's Inverse Tone Mapper *OR* Pumbo's AdvancedAutoHDR

## DirectX 12
- **Best:** RenoDX
- **Alternative:** Special K's HDR Retrofit - more limited with DX12, can undo the SDR compression of the internal tone mapper of the game with its own user-configurable tone mapper; however remastering options and adaptive tone mapping are not available.
- **Last Resort:** AutoHDR addon with *either* Lilium's Inverse Tone Mapper *OR* Pumbo's AdvancedAutoHDR 

## Vulkan
- **Only Option:** Special K, no HDR Retrofit options available

## OpenGL 
- **Only Option:** Special K's HDR Retrofit - more limited with OpenGL, remastering options are available but often don't work. Adaptive tone mapping is also available.  Special K also promotes OpenGL to OpenGL-IK (uses an interop system where DirectX 11 is used for final presentation)

