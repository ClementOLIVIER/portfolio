<template>
  <header
    class="
      sticky top-0
      z-10
      w-full
      px-4 py-3
      bg-white
      border-b border-gray-200
    "
  >
    <nav
      class="flex flex-wrap items-center justify-between"
    >
      <!-- My Name -->
      <NuxtLink
        to="/"
        class="flex items-center text-gray-900"
      >
        <span class="text-xl font-semibold">
          Clément OLIVIER
        </span>
      </NuxtLink>
      <!-- Toggle Mobile Menu -->
      <div class="block md:hidden">
        <button
          class="
            flex items-center p-2
            text-gray-900 rounded-lg
            hover:bg-gray-200
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
              px-3 py-2
              rounded-md
              text-gray-900
              hover:bg-gray-200
            "
          >
            About Me
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="
              px-3 py-2
              rounded-md
              text-gray-900
              hover:bg-gray-200
            "
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            class="
              px-3 py-2
              rounded-md
              text-gray-900
              hover:bg-gray-200
            "
          >
            Portfolio
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="
              px-3 py-2
              rounded-md
              text-gray-900
              hover:bg-gray-200
            "
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="
              px-4 py-2
              bg-orange-700 text-white rounded-md
              hover:bg-orange-800
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
