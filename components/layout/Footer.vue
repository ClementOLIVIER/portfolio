<!-- TODO: Update links -->
<template>
  <footer class="bg-gray-100 py-6 font-barlow">
    <div class="container mx-auto px-4 text-center">
      <div class="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/yourusername/"
          class="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="fa6-brands:linkedin" />
        </a>
        <a
          href="https://github.com/yourusername"
          class="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="fa6-brands:github" />
        </a>
        <a
          href="/path/to/your/resume.pdf"
          class="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Résumé
        </a>
      </div>

      <div class="mt-4 text-gray-600 text-sm">
        &copy; <span id="current-year" /> Clément Olivier. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
// const currentYear = new Date().getFullYear()
// document.getElementById('current-year').innerText = currentYear
</script>
