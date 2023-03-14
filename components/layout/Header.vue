<template>
  <!-- Add bottom border to the header -->
  <header
    class="
      fixed
      w-full
      p-4
      bg-gradient-to-r from-primary-400 to-primary-600
      transition-colors duration-300
      border-white border-b-2
    "
  >
    <nav
      class="flex flex-wrap items-center justify-between"
    >
      <!-- My Name -->
      <NuxtLink
        to="/"
        class="flex items-center flex-shrink-0 text-white"
      >
        <span class="font-semibold text-lg">
          Clément OLIVIER
        </span>
      </NuxtLink>
      <!-- Toggle Mobile Menu -->
      <div class="block md:hidden">
        <button
          class="
            flex items-center p-2
            text-white rounded-lg
            hover:ring-2 hover:ring-gray-200
            transition-colors duration-200
          "
          @click="toggleMenu"
        >
          <Icon v-if="!isOpen" name="fa6-solid:bars" />
          <Icon v-else name="fa6-solid:xmark" />
        </button>
      </div>
      <!-- Menu -->
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="
        w-full
        flex-grow
        pt-6
        text-right
        md:block
        md:items-center
        md:w-auto  md:pt-0
        "
      >
        <div
          class="
            flex flex-col
            md:flex-row md:justify-end
            md:gap-2 md:my-auto"
        >
          <NuxtLink
            to="/about"
            class="
              p-2
              rounded
            text-white
              hover:ring-2 hover:ring-gray-200
            "
          >
            About Me
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="
              p-2
              rounded
            text-white
              hover:ring-2 hover:ring-gray-200
            "
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            class="
              p-2
              rounded
            text-white
              hover:ring-2 hover:ring-gray-200
            "
          >
            Portfolio
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="
              p-2
              rounded
            text-white
              hover:ring-2 hover:ring-gray-200
            "
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="
              p-2
              bg-white text-primary-300 rounded-md
              hover:ring-2 hover:ring-gray-400
            "
          >
            Hire me
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
