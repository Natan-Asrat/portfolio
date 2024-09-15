
<template>
      <header id="header" class="header d-flex flex-column justify-content-center">

<i class="header-toggle d-xl-none bi bi-list"></i>

<nav id="navmenu" class="navmenu">
  <ul>
    <li><a href="#hero" class="active"><i class="bi bi-house navicon"></i><span>Home</span></a></li>
    <li><a href="#about"><i class="bi bi-person navicon"></i><span>About</span></a></li>
    <li><a href="#resume"><i class="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
    <li><a href="#portfolio"><i class="bi bi-images navicon"></i><span>Portfolio</span></a></li>
    <li><a href="#services"><i class="bi bi-hdd-stack navicon"></i><span>Services</span></a></li>
    <li><a href="#contact"><i class="bi bi-envelope navicon"></i><span>Contact</span></a></li>
  </ul>
</nav>

</header>
  <router-view></router-view>
  <footer id="footer" class="footer position-relative light-background">
      <div class="container">
        <h3 class="sitename">Natan Asrat</h3>
        <p>Django | </p>
        <div class="social-links d-flex justify-content-center">
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href="https://www.youtube.com/@natvilletutor"><i class="bi bi-youtube"></i></a>
          <a href="https://www.linkedin.com/in/natan-asrat/"><i class="bi bi-linkedin"></i></a>
        </div>
        <div class="container">
          <div class="copyright">
            <span>Copyright</span> <strong class="px-1 sitename">Alex Smith</strong> <span>All Rights Reserved</span>
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you've purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </div>
    </footer>
</template>
