---
layout: default
title: NSFW Themes
nav_order: 2
parent: Windows Themes
grand_parent: Themes
permalink: /themes/windows/nsfw
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
> This page is for adults only. By being on this page, you are agreeing that you are of legal age.
>
> We take **NO** responsibility for anyone who violates this rule. You are responsible for your own actions.

<div class="w3-card">
  <img width="100%" height="auto" class="block" src="../../assets/images/themes/nsfw/BLEACH-HENTAI.jpg" />
  <br />
  <div class="w3-container">
    <h2 class="text-small" style="text-align:center">Bleach Hentai</h2>
    <p class="text-small" style="text-align:center">NSFW Theme inspired by BLEACH</p>
    <br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://gitlab.com/the-back-room/Themes/-/archive/main/Themes-main.zip?path=Windows/NSFW/Bleach-Hentai" target="_blank">
          <button type="button" name="button" class="btn">Download</button></a> 
      </div>
    </span>
    <br />
  </div>
</div>
<br />
<div class="w3-card">
  <img width="100%" height="auto" class="block" src="../../assets/images/themes/nsfw/ECCHI.jpg" />
  <br />
  <div class="w3-container">
    <h2 class="text-small" style="text-align:center">Ecchi</h2>
    <p class="text-small" style="text-align:center">Ecchi theme featuring girls from various different anime</p>
    <br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://gitlab.com/the-back-room/Themes/-/archive/main/Themes-main.zip?path=Windows/NSFW/Ecchi" target="_blank">
          <button type="button" name="button" class="btn">Download</button></a> 
      </div>
    </span>
    <br />
  </div>
</div>
<br />
<div class="w3-card">
  <img width="100%" height="auto" class="block" src="../../assets/images/themes/nsfw/RANMA-HENTAI.jpg" />
  <br />
  <div class="w3-container">
    <h2 class="text-small" style="text-align:center">Ranma Hentai</h2>
    <p class="text-small" style="text-align:center">NSFW Theme inspired by Ranma 1/2</p>
    <br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://gitlab.com/the-back-room/Themes/-/archive/main/Themes-main.zip?path=Windows/NSFW/Ranma-Hentai" target="_blank">
          <button type="button" name="button" class="btn">Download</button></a> 
      </div>
    </span>
    <br />
  </div>
</div>
<br />
<div class="w3-card">
  <img width="100%" height="auto" class="block" src="../../assets/images/themes/nsfw/SEXY-NARUTO-GIRLS.jpg" />
  <br />
  <div class="w3-container">
    <h2 class="text-small" style="text-align:center">Sexy Naruto Girls</h2>
    <p class="text-small" style="text-align:center">Ecchi theme featuring some of the girls from the Naruto franchise</p>
    <br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://gitlab.com/the-back-room/Themes/-/archive/main/Themes-main.zip?path=Windows/NSFW/Sexy-Naruto-Girls" target="_blank">
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