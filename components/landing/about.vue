<script setup>
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn')
  const tabPanes = document.querySelectorAll('.tab-pane')

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab

      tabBtns.forEach((otherBtn) => {
        otherBtn.classList.toggle('active', otherBtn === btn)
      })

      tabPanes.forEach((pane) => {
        pane.classList.toggle('active', pane.dataset.tab === tab)
      })
    })
  })
})
</script>

<template>
  <section id="about-me" class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-6">
        About Me
      </h2>

      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <h3 class="text-xl font-semibold mb-4">
            Personal Info
          </h3>
          <p>I'm a French data scientist and full-stack developer based in Lyon.</p>
          <div class="mt-4">
            <img src="path/to/your/map-image.png" alt="Map of Lyon" class="rounded-lg shadow-md">
          </div>
        </div>

        <div class="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <div class="tabs">
            <div class="tab-list flex justify-center space-x-4">
              <button class="tab-btn focus:outline-none font-bold" data-tab="nlp">
                NLP
              </button>
              <button class="tab-btn focus:outline-none" data-tab="full-stack">
                Full Stack
              </button>
              <button class="tab-btn focus:outline-none" data-tab="data-science">
                Data Science
              </button>
            </div>

            <div class="tab-content mt-6">
              <!-- NLP Tab -->
              <div class="tab-pane active" data-tab="nlp">
                <h4 class="text-lg font-semibold mb-4">
                  NLP
                </h4>
                <div class="grid grid-cols-3 gap-4">
                  <img src="path/to/nlp-logo-1.png" alt="NLP Technology 1" class="w-16">
                  <img src="path/to/nlp-logo-2.png" alt="NLP Technology 2" class="w-16">
                  <img src="path/to/nlp-logo-3.png" alt="NLP Technology 3" class="w-16">
                </div>
              </div>

              <!-- Full Stack Tab -->
              <div class="tab-pane" data-tab="full-stack">
                <h4 class="text-lg font-semibold mb-4">
                  Full Stack
                </h4>
                <div class="grid grid-cols-3 gap-4">
                  <img src="path/to/fullstack-logo-1.png" alt="Full Stack Technology 1" class="w-16">
                  <img src="path/to/fullstack-logo-2.png" alt="Full Stack Technology 2" class="w-16">
                  <img src="path/to/fullstack-logo-3.png" alt="Full Stack Technology 3" class="w-16">
                </div>
              </div>

              <!-- Data Science Tab -->
              <div class="tab-pane" data-tab="data-science">
                <h4 class="text-lg font-semibold mb-4">
                  Data Science
                </h4>
                <div class="grid grid-cols-3 gap-4">
                  <img src="path/to/datascience-logo-1.png" alt="Data Science Technology 1" class="w-16">
                  <img src="path/to/datascience-logo-2.png" alt="Data Science Technology 2" class="w-16">
                  <img src="path/to/datascience-logo-3.png" alt="Data Science Technology 3" class="w-16">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tabs .tab-btn {
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.tabs .tab-btn:hover {
  border-color: #1a202c;
}

.tabs .tab-btn.active {
  border-color: #1a202c;
}

.tabs .tab-pane {
  display: none;
}

.tabs .tab-pane.active {
  display: block;
}
</style>
