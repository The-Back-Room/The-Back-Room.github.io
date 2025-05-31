---
layout: default
title: NSFW Subreddits
nav_order: 2
parent: Reddit
grand_parent: Social
permalink: /social/reddit/nsfw
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

<div align="center">
    <img width="50%" height="auto" class="block" src="../../assets/images/NSFW.png" />
</div>

<div class="w3-card">
    <img width="100%" height="auto" src="https://styles.redditmedia.com/t5_ekyrut/styles/bannerBackgroundImage_r9jlhib4544f1.png" />
    <div class="w3-container">
    <h2 class="text-small" style="text-align:center">NSFW Hentai AI</h2>
    <p class="text-small" style="text-align:center">AI hentai images, videos, and GIFs.</p>
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://www.reddit.com/r/NSFW_Hentai_AI/" target="_blank">
          <button type="button" name="button" class="btn">r/NSFW_Hentai_AI</button></a> 
      </div>
    </span>
    <br />
  </div>
</div>
<br />
<div class="w3-card">
    <img width="100%" height="auto" src="https://styles.redditmedia.com/t5_dn30ob/styles/bannerBackgroundImage_my6kvnkad44f1.png" />
    <div class="w3-container">
    <h2 class="text-small" style="text-align:center">Ranma Hentai</h2>
    <p class="text-small" style="text-align:center">Ranma 1/2 Hentai images, videos, and GIFs</p>
    <span class="fs-3">
      <div align="center" class="text-small">
        <a href="https://www.reddit.com/r/Ranma_Hentai/" target="_blank">
          <button type="button" name="button" class="btn">r/Ranma_Hentai</button></a> 
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