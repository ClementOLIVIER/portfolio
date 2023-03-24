<template>
  <!-- Landing Page-->
  <section
    class="
      h-screen
      flex items-center justify-center
      pt-36 sm:pt-12 md:pt-0
      bg-gradient-to-r from-navy-800 to-navy-500
    "
  >
    <!-- Hero Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1 mx-12">
      <div class="flex flex-col justify-center items-center text-left text-white backdrop-blur-lg pl-4">
        <h2 class="text-xl md:text-xl mb-4 text-white">
          Hi, I'm Clément OLIVIER 👋
        </h2>
        <h1 class="text-2xl font mb-8">
          Data Scientist, NLP Expert & Full Stack Developer
        </h1>
        <p class="text-lg mb-8 font-text">
          I help people design and implement digital solutions to solve complex problems using latest technologies.
        </p>
        <div class="flex justify-center items-center">
          <button
            class="
              px-6 py-2
              rounded-xl
              font-semibold
              bg-salmon-600 text-white
              hover:bg-salmon-800
              transition duration-300
            "
            @click.prevent="scrollToSection('#contact')"
          >
            Contact Me
          </button>
        </div>
      </div>
      <!-- Hero Banner -->
      <div class="flex justify-center items-center relative">
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
import { scrollToSection } from '~~/utils/ux'
</script>
