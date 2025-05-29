---
layout: default
title: Ghost in the Shell
nav_order: 1
parent: SFW Wallpapers
grand_parent: Desktop Wallpapers
permalink: /wallpapers/desktop/sfw/ghost-in-the-shell
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
    <div class="slideshow fade">
      <div class="number-text text-small">1 / 2</div>
      <img width="100%" height="auto" src="../../../assets/images/wallpapers/desktop/sfw/Ghost-in-the-Shell/Wallpaper (1).png" />
      <div class="caption-text text-small">768x512</div>
    </div>
    <div class="slideshow fade">
      <div class="number-text text-small">2 / 2</div>
      <img width="100%" height="auto" src="../../../assets/images/wallpapers/desktop/sfw/Ghost-in-the-Shell/Wallpaper (2).png" />
      <div class="caption-text text-small">768x512</div>
    </div>
  </div>
  <!-- >
  <br>
  <div style="text-align:center">
    <span class="dot"></span> 
    <span class="dot"></span> 
    <span class="dot"></span> 
  </div>
  -->
  <!-- 
  <div class="gallery">
    <img width="100%" height="auto" src="../../../assets/images/wallpapers/desktop/sfw/Ghost-in-the-Shell/Wallpaper (1).png" />
    <img width="100%" height="auto" src="../../../assets/images/wallpapers/desktop/sfw/Ghost-in-the-Shell/Wallpaper (2).png" />
  </div>
  -->
  <div class="w3-container">
  <h2 class="text-small" style="text-align:center">Ghost in the Shell</h2>
    <p class="text-small" style="text-align:center">Ghost in the Shell desktop wallpapers created with AI</p><br /><br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://gitlab.com/the-back-room/Wallpapers/-/archive/main/Wallpapers-main.zip?path=desktop/SFW/Ghost-in-the-Shell" target="_blank">
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
  // let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
</script>