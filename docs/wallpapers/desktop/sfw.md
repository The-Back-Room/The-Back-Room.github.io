---
layout: default
title: SFW Wallpapers
nav_order: 1
parent: Desktop Wallpapers
grand_parent: Wallpapers
permalink: /wallpapers/desktop/sfw
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
<div class="slideshow-one slideshow-fade" style="text-align:center">
<div class="slideshow-number-text text-small">1 / 2</div>
<img width="100%" height="auto" src="../../assets/images/wallpapers/desktop/sfw/Ghost-in-the-Shell/Wallpaper (1).png">
<div class="slideshow-caption-text text-small"></div>
</div>
<div class="slideshow-one slideshow-fade" style="text-align:center">
<div class="slideshow-number-text text-small">2 / 2</div>
<img width="100%" height="auto" src="../../assets/images/wallpapers/desktop/sfw/Ghost-in-the-Shell/Wallpaper (2).png">
<div class="slideshow-caption-text text-small"></div>
</div>
</div>
<div style="text-align:center">
<span class="slideshow-dot-one"></span> 
<span class="slideshow-dot-one"></span>
</div>
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
let S1Index = 0;
showS1();
function showS1() {
  let i;
  let S1 = document.getElementsByClassName("slideshow-one");
  let D1 = document.getElementsByClassName("slideshow-dot-one");
  for (i = 0; i < S1.length; i++) {
    S1[i].style.display = "none";  
  }
  S1Index++;
  if (S1Index > S1.length) {S1Index = 1}    
  for (i = 0; i < D1.length; i++) {
    D1[i].className = D1[i].className.replace(" slideshow-active", "");
  }
  S1[S1Index-1].style.display = "block";  
  D1[S1Index-1].className += " slideshow-active";
  setTimeout(showS1, 2000);
}
</script>