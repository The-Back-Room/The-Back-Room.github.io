---
layout: default
title: NSFW Tools
nav_order: 2
parent: Modding Tools
grand_parent: Modding
permalink: /modding/tools/nsfw
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

<div class="card">
  <img width="100%" height="auto" class="block" src="../../../assets/images/modding/tools/nsfw/action-taimanin.webp" />
  <div class="container">
    <h2 class="text-small" style="text-align:center">Action Taimanin Extension</h2>
    <p class="text-small" style="text-align:center">Add mod support to <b><a href="https://www.nexusmods.com/about/vortex" target="_blank">Vortex Mod Manager</a></b></p>
    <br />
    <h2 class="text-small" style="text-align:center">Download</h2>
    <br />
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://www.nexusmods.com/site/mods/546" target="_blank">
          <button style="text-align:center" type="button" name="button" class="btn">Nexus Mods</button></a> 
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