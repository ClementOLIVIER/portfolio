<template>
  <section id="contact" class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-6">
        Contact
      </h2>

      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <div class="flex items-center mb-6">
            <img src="~/assets/images/profile.png" alt="Clément OLIVIER" class="w-12 h-12 rounded-full">
            <div class="ml-4">
              <h3 class="text-xl font-semibold">
                Let's Talk
              </h3>
              <p>Response within 2 days (if not on vacation)</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center">
              <Icon name="fa-map-marker" />
              <span class="ml-4">Lyon, France</span>
            </div>
            <div class="flex items-center">
              <Icon name="fa-envelope" />
              <span class="ml-4">contact@clementolivier.dev</span>
            </div>
          </div>
        </div>

        <div class="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <form>
            <div class="mb-4">
              <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input id="name" type="text" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
            </div>

            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input id="email" type="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
            </div>

            <div class="mb-6">
              <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Don't hesitate to add your preferred channel of communication"
                required
              />
            </div>

            <div class="flex items-center justify-between">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  // Handle form submission here.
  // You can use your preferred method/API to send the form data.
  console.log({ name: name.value, email: email.value, message: message.value })
}
</script>
