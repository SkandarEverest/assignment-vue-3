<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  show: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 mt-0" :class="show? 'sticky-top shadow-sm' : ''">
      <a href="/" class="navbar-brand p-0">
          <h1 class="text-primary m-0"><font-awesome-icon icon="utensils" class="me-3" />Restoran</h1>
          <!-- <img src="@/assets/img/logo.svg" alt="Logo"> -->
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span><font-awesome-icon icon="bars"/></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0 pe-4 text-start">
              <!-- <a href="index.html" class="nav-item nav-link active">Home</a> -->
              <!-- <a href="menu.html" class="nav-item nav-link">Menu</a> -->
              <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
              <RouterLink to="/menu" class="nav-item nav-link">Menu</RouterLink>
            </div>
            <!-- <a href="" class="btn btn-primary py-2 px-4 d-md-block mt-2 mt-lg-0">Book A Table</a> -->
            <RouterLink to="/booking" class="btn btn-primary py-2 px-4 d-md-block mt-2 mt-lg-0">Book A Table</RouterLink>
      </div>
  </nav>
</template>

