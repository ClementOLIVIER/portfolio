<template>
  <!-- Landing Page-->
  <section
    class="
      h-screen
      flex items-center justify-center
      pt-36 sm:pt-12 md:pt-0
      bg-gradient-to-r from-background-200 to-background-300
    "
  >
    <!-- Hero Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10">
      <div class="flex flex-col justify-center items-center text-left text-white backdrop-blur-lg pl-4">
        <h1 class="text-3xl md:text-3xl font-bold mb-4 text-white">
          Hello, I'm <span class="text-white">Clément OLIVIER</span>
        </h1>
        <p class="text-lg md:text-xl mb-8">
          Data Scientist, Product Designer & Full Stack Developer
        </p>
        <p class="text-sm md:text-lg mb-8">
          I'm data scientist and full-stack developer with a passion for creating meaningful and engaging solutions. Dive in to explore my work and learn how I've used cutting-edge technologies to solve complex problems across various domains.
        </p>
        <div class="flex justify-center items-center">
          <button
            class="
              px-6 py-2
              rounded-xl
              font-semibold
              bg-orange-700 text-white
              hover:bg-orange-900
              transition duration-300
            "
            @click.prevent="scrollToSection('#contact')"
          >
            Hire me
          </button>
        </div>
      </div>
      <!-- Hero Banner -->
      <div class="relative flex justify-center items-center">
        <div
          class="flex justify-center items-center"
        >
          <img
            src="~/assets/images/hero-picture.png"
            loading="lazy"
            class="img-cover object-contain w-3/4 rounded-md border-2 border-white"
          >
        </div>
        <!-- <div
          class="
              absolute flex items-center gap-3 bg-white rounded-sm p-2
              top-5 right-0
            "
        >
          <p class="text-black font-bold">
            10
          </p>

          <p class="font-semibold">
            Years of Experience
          </p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { scrollToSection } from '~/utils/ux'
</script>
