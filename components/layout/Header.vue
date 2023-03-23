<template>
  <header
    class="
      fixed
      w-full
      px-4 py-3
      z-50
      bg-white
      border-b border-gray-200
    "
  >
    <div
      class="flex flex-wrap items-center justify-between"
    >
      <!-- My Name -->
      <button
        to="/"
        class="flex items-center text-gray-900"
      >
        <span class="text-xl font-semibold">
          Clément OLIVIER
        </span>
      </button>
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
      <nav
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
        <ul
          class="
            flex flex-col
            md:flex-row md:justify-end
            md:gap-2 md:my-auto"
        >
          <button
            class="
              px-3 py-2
              rounded-md
              text-gray-900
              hover:bg-gray-200
            "
            @click.prevent="scrollToSection('#hero')"
          >
            Home
          </button>
          <button
            class="
              px-3 py-2
              rounded-md
              text-gray-900
              hover:bg-gray-200
            "
            @click.prevent="scrollToSection('#services')"
          >
            Services
          </button>
          <button
            to="/#portfolio"
            class="
              px-3 py-2
              rounded-md
              text-gray-900
              hover:bg-gray-200
            "
            @click.prevent="scrollToSection('#portfolio')"
          >
            Portfolio
          </button>
          <button
            to="/#about"
            class="
              px-3 py-2
              rounded-md
              text-gray-900
              hover:bg-gray-200
            "
            @click.prevent="scrollToSection('#about')"
          >
            About Me
          </button>
          <button
            to="/#contact"
            class="
              px-4 py-2
              rounded-md
              font-semibold
              bg-orange-700 text-white
              hover:bg-orange-900
              transition duration-300
            "
            @click.prevent="scrollToSection('#contact')"
          >
            Contact me
          </button>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { scrollToSection } from '~/utils/ux'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
