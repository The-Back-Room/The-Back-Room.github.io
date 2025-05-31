---
layout: default
title: Final Fantasy XIV
description: A list of mods for FFXIV
nav_order: 1
parent: SFW Mods
grand_parent: Game Mods
permalink: /modding/mods/sfw/final-fantasy-xiv
---

<!-- 
{: .note }
> {: .opaque }
> 
>
> 
-->

{: .important }
> {: .opaque }
> {: .warning }
> Using mods in any shape or way violates section 2.1 of the Final Fantasy XIV User Agreement and can lead to your service account being terminated and/or banned by SQUARE ENIX.
>
> We take **NO** responsibility for anyone who loses their account due to the use of mods. Use of mods in Final Fantasy XIV is done **AT YOUR OWN RISK**.

<div class="w3-card">
  <img width="100%" height="auto" class="block" src="../../../assets/images/modding/mods/sfw/lustful-eyes.webp" />
  <div class="w3-container">
    <h2 class="text-small" style="text-align:center">Lustful Eyes</h2>
    <p class="text-small" style="text-align:center">Lustful eyes for all races. Let your inner OwO or Yandare take over!</p>
    <br />
    <h2 class="text-small" style="text-align:center">Download</h2>
    <br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://www.nexusmods.com/finalfantasy14/mods/2401" target="_blank">
          <button type="button" name="button" class="btn">Nexus Mods</button></a> 
        <a href="https://heliosphere.app/mod/w7xhfe6s7h0tbc96279yz1eb1g" target="_blank">
          <button type="button" name="button" class="btn">Heliosphere</button></a> 
        <a href="https://www.xivmodarchive.com/modid/120843" target="_blank">
          <button type="button" name="button" class="btn">XIV Mod Archive</button></a> 
      </div>
    </span>
    <br />
  </div>
</div>
<br />
<div class="w3-card">
  <img width="100%" height="auto" class="block" src="../../../assets/images/modding/mods/sfw/ns3d-vm-ui.webp" />
  <div class="w3-container">
    <h2 class="text-small" style="text-align:center">[NS3D] (VM) UI Pack</h2>
    <p class="text-small" style="text-align:center">A simple and minimalistic UI mod that cleans up the UI without making a whole lot of unnecessary changes.</p>
    <br />
    <h2 class="text-small" style="text-align:center">Download</h2>
    <br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://www.nexusmods.com/finalfantasy14/mods/2402" target="_blank">
          <button type="button" name="button" class="btn">Nexus Mods</button></a> 
        <a href="https://heliosphere.app/mod/hrsbv17zxh55567hsseaz4cbf8" target="_blank">
          <button type="button" name="button" class="btn">Heliosphere</button></a> 
        <a href="https://www.xivmodarchive.com/modid/125248" target="_blank">
          <button type="button" name="button" class="btn">XIV Mod Archive</button></a> 
      </div>
    </span>
    <br />
  </div>
</div>
<br />
<div class="w3-card">
  <img width="100%" height="auto" class="block" src="../../../assets/images/modding/mods/sfw/roseblood-duelist.webp" /> 
  <div class="w3-container">
    <h2 class="text-small" style="text-align:center">Roseblood Duelist</h2>
    <p class="text-small" style="text-align:center">Because it's just a better overall look!</p>
    <br />
    <h2 class="text-small" style="text-align:center">Download</h2>
    <br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://www.nexusmods.com/finalfantasy14/mods/2411" target="_blank">
          <button type="button" name="button" class="btn">Nexus Mods</button></a> 
        <a href="https://heliosphere.app/mod/5w9m2enmw16ys40x0v310v269m" target="_blank">
          <button type="button" name="button" class="btn">Heliosphere</button></a> 
        <a href="https://www.xivmodarchive.com/modid/137286" target="_blank">
          <button type="button" name="button" class="btn">XIV Mod Archive</button></a>
      </div>
    </span>
    <br />
  </div>
</div>

<script>
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("slideshow-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshow-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " slideshow-active";
  setTimeout(showSlides, 2000);
}
</script>