<template>
  <section class="container mx-auto pt-24">
    <h1 class="text-4xl font-bold text-center mb-10">
      Contact Me
    </h1>
    <div class="w-full max-w-md mx-auto">
      <form @submit.prevent="submitForm">
        <div class="mb-6">
          <label for="name" class="block mb-2">Name:</label>
          <input
            id="name"
            v-model="name"
            type="text"
            class="w-full px-3 py-2 border rounded-lg"
            required
          >
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2">Email:</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="w-full px-3 py-2 border rounded-lg"
            required
          >
        </div>
        <div class="mb-6">
          <label for="message" class="block mb-2">Message:</label>
          <textarea
            id="message"
            v-model="message"
            class="w-full px-3 py-2 border rounded-lg"
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          class="
            px-6 py-2
            rounded-xl
            font-semibold
            bg-orange-700 text-white
            hover:bg-orange-900
            transition duration-300
          "
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  // Handle form submission here.
  // You can use your preferred method/API to send the form data.
  console.log({ name: name.value, email: email.value, message: message.value })
}
</script>
