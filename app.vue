<script setup>
const message = ref('Hello World')

const toggle = () => {
  message.value = 'This is a Nuxt 3 Starter Kit'
}

</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="toggle"
    >
      Toggle
    </button>
  </div>
</template>
