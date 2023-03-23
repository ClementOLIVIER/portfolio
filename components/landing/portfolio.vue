<template>
  <section class="container mx-auto pt-24">
    <h1 class="text-4xl font-bold text-center mb-10">
      Portfolio
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ContentList v-slot="{ list }" path="/portfolio">
        <div v-for="project in list" :key="project._path">
          <ProjectCard :project="project" />
        </div>
      </ContentList>
    </div>
  </section>
</template>

<script setup>
</script>
