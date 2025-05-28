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
  <div class="w3-content w3-display-container" style="max-width:800px">
    <img class="slideshow" src="../../../assets/images/wallpapers/desktop/sfw/Ghost-in-the-Shell/Wallpaper (1).png" style="width:100%">
    <img class="slideshow" src="../../../assets/images/wallpapers/desktop/sfw/Ghost-in-the-Shell/Wallpaper (2).png" style="width:100%">
    <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
      <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
      <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
    </div>
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
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
</script>