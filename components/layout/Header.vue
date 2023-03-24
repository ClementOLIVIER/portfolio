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
            inline-flex items-center
          "
        >
          <span><img src="/favicon.ico" class="w-8 h-8 mr-2"></span>
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
            {{ content.home }}
          </button>
          <button
            class="
              px-3 py-2
              rounded-md
              hover:bg-gray-200
            "
            @click.prevent="scrollToSection('#services')"
          >
            {{ content.services }}
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
            {{ content.portfolio }}
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
            {{ content.about }}
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
            {{ content.contact }}
          </button>
          <div>
            <button
              class="
                p-2
                rounded-md
                hover:bg-gray-200
              "
              @click="toggleLanguage"
            >
              <span>{{ languageIcons[language] }}</span>
            </button>
            <div
              v-if="isLanguageOpen"
              class="
                absolute mt-2
                text-left
                bg-white
                border border-gray-200
                rounded-md
                shadow-lg
              "
            >
              <li v-for="lang in Object.keys(languageIcons)" :key="lang">
                <button
                  class="
                  p-2
                  hover:bg-gray-100
                  focus:outline-none
                "
                  @click="changeLanguage(lang)"
                >
                  {{ languageIcons[lang] }}
                </button>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { scrollToSection } from '~/utils/ux'

// 📒 Content
const multiContent = {
  en: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About Me',
    contact: 'Contact'
  },
  fr: {
    home: 'Accueil',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'À Propos',
    contact: 'Contact'
  }
}

// Menu
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Language
const language = useState('language', () => 'en')

// TODO: State should be deduced from the user location

const isLanguageOpen = ref(false)

const toggleLanguage = () => {
  isLanguageOpen.value = !isLanguageOpen.value
}

const changeLanguage = (lang) => {
  language.value = lang
  isLanguageOpen.value = false
}

const languageIcons = {
  en: '🇬🇧',
  fr: '🇫🇷'
}

const content = computed(() => multiContent[language.value])

</script>
