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
        class="flex items-center"
        @click="scrollToSection('#hero')"
      >
        <h1
          class="
            text-xl font-text font-bold tracking-wider
            text-gray-900
          "
        >
          Clément OLIVIER
        </h1>
      </button>
      <!-- Toggle Mobile Menu -->
      <div class="block md:hidden">
        <button
          class="
            flex items-center p-2
            rounded-lg
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
            md:gap-2 md:my-auto
            text-gray-900
          "
        >
          <button
            class="
              px-3 py-2
              rounded-md
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
              bg-salmon-500 text-white
              hover:bg-salmon-900
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
