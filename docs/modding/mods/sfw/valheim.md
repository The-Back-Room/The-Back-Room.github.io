---
layout: default
title: Valheim
description: A list of mods for Valheim
nav_order: 2
parent: SFW Mods
grand_parent: Game Mods
permalink: /modding/mods/sfw/valheim
---

<!-- 
{: .note }
> {: .opaque }
> 
>
> 
-->

<div class="w3-card">
  <img width="100%" height="auto" class="block" src="../../../assets/images/modding/mods/sfw/odinheim.png" />
  <div class="w3-container">
    <h2 class="text-small" style="text-align:center">Odinheim</h2>
    <p class="text-small" style="text-align:center">A collection of mods to improve gameplay.<br />Contains both client-side and server-side mods.</p>
    <br />
    <h2 class="text-small" style="text-align:center">Download</h2>
    <br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://thunderstore.io/c/valheim/p/Nimbi/Odinheim/" target="_blank">
          <button type="button" name="button" class="btn">Thunderstore</button></a> 
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