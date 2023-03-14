<template>
  <!-- Landing Page-->
  <section
    class="
      bg-gradient-to-r from-primary-400 to-primary-600
      min-h-screen
      flex items-center justify-center
    "
  >
    <!-- TODO: Check hero in https://codewithsadee.github.io/portfolio/# for background image -->
    <div class="grid grid-cols-2 gap-4 mx-10">
      <!-- Hero Content -->
      <div class="text-left text-white">
        <div class="flex flex-col gap-2">
          <span>Hello I'm </span>
          <strong>Clément OLIVIER</strong>
          <span>Data Scientist, Product Designer & Full Stack Developer</span>
          <p class="mt-4">
            Adipisicing elit. Neque nulla voluptatum eos repellat deserunt nesciunt tempore porro totam. Adipisicing elit. Neque nulla voluptatum eos repellat deserunt nesciunt tempore porro totam. Adipisicing elit. Neque nulla voluptatum eos repellat deserunt nesciunt tempore porro totam.
          </p>
        </div>
        <div class="flex justify-center items-center mt-4">
          <NuxtLink
            to="/contact"
            class="
                p-2
                text-white rounded-2xl
                ring-2 ring-white
                transition-colors duration-200
                hover:ring-yellow-200
              "
          >
            Hire me
          </NuxtLink>
        </div>
      </div>

      <!-- Hero Banner -->
      <div class="relative flex justify-center items-center">
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
    </div>
  </section>
</template>
