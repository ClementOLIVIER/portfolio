<script setup>
// document.addEventListener('DOMContentLoaded', () => {
//   const tabBtns = document.querySelectorAll('.tab-btn')
//   const tabPanes = document.querySelectorAll('.tab-pane')

//   tabBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       const tab = btn.dataset.tab

//       tabBtns.forEach((otherBtn) => {
//         otherBtn.classList.toggle('active', otherBtn === btn)
//       })

//       tabPanes.forEach((pane) => {
//         pane.classList.toggle('active', pane.dataset.tab === tab)
//       })
//     })
//   })
// })

</script>

<!-- <div class="flex items-center bg-gray-100 rounded-full py-1 px-2 space-x-1">
  <button x-bind:class="active === 'preview' ? 'bg-white text-secondary shadow-sm' : 'border-ui-tertiary hover:opacity-75 text-ui-secondary hover:bg-gray-200'" class="w-32 rounded-full py-1 font-bold transition flex items-center text-center justify-center bg-white text-secondary shadow-sm" @click="active = 'preview'">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
    </svg>
    Preview
  </button>
  <button x-bind:class="active === 'code' ? 'bg-white text-secondary shadow-sm' : 'border-ui-tertiary hover:opacity-75 text-ui-secondary hover:bg-gray-200'" class="w-32 rounded-full py-1 font-bold transition flex items-center text-center justify-center border-ui-tertiary hover:opacity-75 text-ui-secondary hover:bg-gray-200" @click="active = 'code'">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
    Code
  </button>
</div> -->
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
            <img src="" alt="Map of Lyon" class="rounded-lg shadow-md">
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
                  <img src="" alt="NLP Technology 1" class="w-16">
                  <img src="" alt="NLP Technology 2" class="w-16">
                  <img src="" alt="NLP Technology 3" class="w-16">
                </div>
              </div>

              <!-- Full Stack Tab -->
              <div class="tab-pane" data-tab="full-stack">
                <h4 class="text-lg font-semibold mb-4">
                  Full Stack
                </h4>
                <div class="grid grid-cols-3 gap-4">
                  <img src="" alt="Full Stack Technology 1" class="w-16">
                  <img src="" alt="Full Stack Technology 2" class="w-16">
                  <img src="" alt="Full Stack Technology 3" class="w-16">
                </div>
              </div>

              <!-- Data Science Tab -->
              <div class="tab-pane" data-tab="data-science">
                <h4 class="text-lg font-semibold mb-4">
                  Data Science
                </h4>
                <div class="grid grid-cols-3 gap-4">
                  <img src="" alt="Data Science Technology 1" class="w-16">
                  <img src="" alt="Data Science Technology 2" class="w-16">
                  <img src="" alt="Data Science Technology 3" class="w-16">
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
