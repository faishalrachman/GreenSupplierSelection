<template>
  <div id="app">
    <div class="preloader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle
          class="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        ></circle>
      </svg>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper">
      <!-- ============================================================== -->
      <!-- Topbar header - style you can find in pages.scss -->
      <!-- ============================================================== -->
      <header class="topbar">
        <nav class="navbar top-navbar navbar-toggleable-sm navbar-light">
          <div class="navbar-collapse judul">
            <ul class="navbar-nav mr-auto mt-md-0">
              <li class="nav-item hidden-sm-down inijudul">
                <center>
                  <h1 class="m-l-10 m-t-10">DECISION SUPPORT SYSTEM USING FUZZY AXIOMATIC DESIGN</h1>
                </center>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Navbar/>
      <div class="page-wrapper">
        <router-view></router-view>
      </div>
      <!-- ============================================================== -->
      <!-- End Page wrapper  -->
      <!-- ============================================================== -->
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import Home from "./components/Home.vue";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
