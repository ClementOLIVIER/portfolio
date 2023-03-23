<script setup>
// TODO: Implement a better interface for the project object
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="rounded-lg shadow-md p-4 bg-white">
    <!-- Next to the title and a status badge -->
    <h2 class="text-2xl font-semibold mb-4">
      {{ project.title }}
      <span
        v-if="project.status"
        class="inline-block bg-green-200 text-green-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
      >
        {{ project.status }}
      </span>
    </h2>
    <img
      :src="`/_nuxt/assets/images/portfolio/${project.image}`"
      :alt="project.title"
      class="w-full mb-4 rounded-md"
    >
    <p>{{ project.description }}</p>
    <!-- Front Technologies -->
    <div class="mt-4">
      <span
        v-for="(tag, index) in project.frontTechnologies"
        :key="index"
        class="inline-block bg-pink-700 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
      >
        {{ tag }}
      </span>
    </div>
    <!-- Back Technologies -->
    <div class="mt-4">
      <span
        v-for="(tag, index) in project.backTechnologies"
        :key="index"
        class="inline-block bg-cyan-700 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
      >
        {{ tag }}
      </span>
      <div class="mt-4">
        <a
          :href="project.link"
          target="_blank"
          class="inline-block bg-orange-700 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
        >
          View Project
        </a>
      </div>
    </div>
  </div>
</template>
