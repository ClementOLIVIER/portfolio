<template>
  <header
    class="
      fixed flex items-center
      h-16 w-full
      p-4
      bg-primary-300
      shadow-lg transition-colors duration-300
      md:px-6
    "
  >
    <nav
      class="flex grow flex-wrap items-center justify-between "
    >
      <!-- Welcome -->
      <NuxtLink
        to="/"
      >
        Clément OLIVIER <!-- TODO: Add transition with transparent temporary-->
      </NuxtLink>
      <!-- Toggle Mobile Menu -->
      <div class="flex items-centerp-2">
        <button
          aria-label="Toggle Menu"
          class="
            inline-flex
            p-2 ml-3
            bg-white text-primary-300 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200
            transition-colors duration-200
            md:hidden
          "
          @click="toggleMobileNavigation"
        >
          <Icon
            v-if="!isOpen"
            name="fa-bars"
          />
          <Icon
            v-else
            name="fa-times"
          />
        </button>
      </div>
      <!-- Menu -->
      <div
        :class="isOpen ? 'flex' : 'hidden'"
        class="
          absolute top-16
          flex flex-col py-2
        bg-primary-300
          md:relative md:top-0
          md:py-2
          md:flex md:flex-col md:mt-0 md:gap-2 md:my-auto
        "
      >
        <div
          class="flex flex-col"
        >
          <!-- TODO: Add transition -->
          <NuxtLink
            to="/about"
            class="
              p-2
              rounded
            text-white
              hover:ring-2 hover:ring-gray-200
              transition-colors duration-300
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
              transition-colors duration-300
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
              transition-colors duration-300
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
              transition-colors duration-300
            "
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="
              p-2
              bg-white text-primary-300 rounded-lg
              hover:ring-2 hover:ring-gray-400
              transition-colors duration-200
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

const toggleMobileNavigation = () => {
  isOpen.value = !isOpen.value
}
</script>
