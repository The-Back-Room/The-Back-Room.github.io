---
layout: default
title: Windows 11 Hidden EDU Themes
nav_order: 3
parent: SFW Themes
grand_parent: Windows Themes
permalink: /themes/windows/sfw/windows-11-hidden-edu-themes
---

<!-- 
{: .note }
> {: .opaque }
> 
>
> 
-->

<div class="w3-card">
    <div class="slideshow-container">
    <div class="slideshow slideshow-fade" style="text-align:center">
      <div class="slideshow-number-text text-small">1 / 6</div>
      <img width="100%" height="auto" class="block" src="../../../assets/images/themes/sfw/FLOWER_LIGHT.jpg" />
      <div class="slideshow-caption-text text-small">Flower (light)</div>
    </div>
    <div class="slideshow slideshow-fade" style="text-align:center">
      <div class="slideshow-number-text text-small">2 / 6</div>
      <img width="100%" height="auto" class="block" src="../../../assets/images/themes/sfw/FLOWER_DARK.jpg" />
      <div class="slideshow-caption-text text-small">Flower (dark)</div>
    <div class="slideshow slideshow-fade" style="text-align:center">
      <div class="slideshow-number-text text-small">3 / 6</div>
      <img width="100%" height="auto" class="block" src="../../../assets/images/themes/sfw/PLANETS_LIGHT.jpg" />
      <div class="slideshow-caption-text text-small">Planets (light)</div>
    </div>
    <div class="slideshow slideshow-fade" style="text-align:center">
      <div class="slideshow-number-text text-small">4 / 6</div>
      <img width="100%" height="auto" class="block" src="../../../assets/images/themes/sfw/PLANETS_DARK.jpg" />
      <div class="slideshow-caption-text text-small">Planets (dark)</div>
    <div class="slideshow slideshow-fade" style="text-align:center">
      <div class="slideshow-number-text text-small">5 / 6</div>
      <img width="100%" height="auto" class="block" src="../../../assets/images/themes/sfw/SUNSET_LIGHT.jpg" />
      <div class="slideshow-caption-text text-small">Sunset (light)</div>
    </div>
    <div class="slideshow slideshow-fade" style="text-align:center">
      <div class="slideshow-number-text text-small">6 / 6</div>
      <img width="100%" height="auto" class="block" src="../../../assets/images/themes/sfw/SUNSET_DARK.jpg" />
      <div class="slideshow-caption-text text-small">Sunset (dark)</div>
    </div>
  </div>
  <div style="text-align:center">
    <span class="slideshow-dot"></span> 
    <span class="slideshow-dot"></span>
    <span class="slideshow-dot"></span> 
    <span class="slideshow-dot"></span>
    <span class="slideshow-dot"></span> 
    <span class="slideshow-dot"></span>
  </div>
  <div class="w3-container">
    <h2 class="text-small" style="text-align:center">Windows 11 Hidden EDU Themes</h2>
    <p class="text-small" style="text-align:center">Windows 11 Hidden EDU Themes for all to enjoy.</p>
    <br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://gitlab.com/the-back-room/Themes/-/archive/main/Themes-main.zip?path=Windows/SFW/Windows-11-Hidden-EDU-Themes" target="_blank">
          <button type="button" name="button" class="btn">Download</button></a> 
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