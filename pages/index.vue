<template>
  <!-- Landing Page-->
  <section
    class="
      mt-10 md:mt-0
      bg-gradient-to-r from-background-200 to-background-300 min-h-screen flex items-center justify-center
    "
  >
    <!-- Hero Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10">
      <div class="flex flex-col justify-center items-center text-left text-white backdrop-blur-lg pl-4">
        <h1 class="text-3xl md:text-3xl font-bold mb-4 leading-tight">
          Hello, I'm <span class="text-purple-700">Clément OLIVIER</span>
        </h1>
        <p class="text-lg md:text-xl mb-8">
          Data Scientist, Product Designer & Full Stack Developer
        </p>
        <p class="text-sm md:text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </p>
        <div class="flex justify-center items-center">
          <NuxtLink
            to="/contact"
            class="
              bg-orange-700 text-white
              font-semibold
              rounded-full py-2 px-6 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300 ease-in-out
            "
          >
            Hire me
          </NuxtLink>
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
        <div
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
        </div>
      </div>
    </div>
  </section>
</template>
