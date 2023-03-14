<template>
  <!-- Landing Page-->
  <section
    class="
      flex flex-row items-center justify-between
      bg-gradient-to-r from-primary-400 to-primary-600
      bg-repeat bg-cover bg-center
      min-h-screen
    "
  >
    <!-- TODO: Check hero in https://codewithsadee.github.io/portfolio/# for background image -->
    <!-- Hero Content -->
    <div class="hero-content text-left text-white">
      <h2 class="hero-title">
        <span>Hello I'm</span>
        <strong>Ethan Ward</strong> Web Developer from New York
      </h2>

      <p class="hero-text">
        Adipisicing elit. Neque nulla voluptatum eos repellat deserunt nesciunt tempore porro totam.
      </p>

      <div class="btn-group flex justify-start">
        <a href="#contact" class="btn btn-primary blue">Get a Quote</a>

        <a href="#about" class="btn">About Me</a>
      </div>
    </div>

    <!-- Hero Banner -->
    <div class="relative">
      <div>
        <img
          src="~/assets/images/hero-picture.png"
          loading="lazy"
          class="img-cover object-contain w-96"
        >
      </div>
      <div
        class="
            absolute flex items-center gap-3 bg-white rounded-sm p-2
            top-2 left-2
          "
      >
        <p class="text-cyan-200">
          12
        </p>

        <p class="font-semibold">
          Years of Success
        </p>
      </div>
    </div>
  </section>
</template>
