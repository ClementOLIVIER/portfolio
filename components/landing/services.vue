<template>
  <section
    class="
      container
      mx-auto
      pt-24
    "
  >
    <h1 class="text-4xl font-bold text-center mb-10">
      Services
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- NLP Service -->
      <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
        <img
          src="~/assets/images/nlp-icon.png"
          alt="NLP Icon"
          class="w-36 h-36 mb-4"
        >
        <h2 class="text-2xl font-semibold mb-4">
          Natural Language Processing
        </h2>
        <p class="text-center">
          Leveraging my expertise in NLP to develop and implement advanced solutions for sentiment analysis, machine translation, text classification, and more.
        </p>
      </div>
      <!-- Data Science Service -->
      <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
        <img
          src="~/assets/images/data-science-icon.png"
          alt="Data Science Icon"
          class="w-36 h-36 mb-4"
        >
        <h2 class="text-2xl font-semibold mb-4">
          Data Science
        </h2>
        <p class="text-center">
          Utilizing machine learning algorithms and statistical techniques to uncover insights, build predictive models, and help businesses make data-driven decisions.
        </p>
      </div>
      <!-- Full Stack Development Service -->
      <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
        <img
          src="~/assets/images/full-stack-icon.png"
          alt="Full Stack Icon"
          class="w-36 h-36 mb-4"
        >
        <h2 class="text-2xl font-semibold mb-4">
          Full Stack Development
        </h2>
        <p class="text-center">
          Building scalable and high-performance web applications with modern frontend and backend technologies, ensuring a seamless user experience across all devices.
        </p>
      </div>
    </div>
    <!-- Why me section -->
    <div class="mt-16">
      <h1 class="text-4xl font-bold text-center mb-10">
        Why Choose Me
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <i class="fas fa-brain text-4xl mb-4" />
          <h2 class="text-2xl font-semibold mb-4">
            State-of-the-Art Knowledge
          </h2>
          <p class="text-center">
            Continuously staying updated with the latest advancements in AI and related fields to provide cutting-edge solutions.
          </p>
        </div>
        <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <i class="fas fa-calendar-check text-4xl mb-4" />
          <h2 class="text-2xl font-semibold mb-4">
            9+ Years of Experience
          </h2>
          <p class="text-center">
            A proven track record of delivering successful projects across various industries, leveraging my extensive experience in NLP, data science, and full stack development.
          </p>
        </div>
        <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <i class="fas fa-users text-4xl mb-4" />
          <h2 class="text-2xl font-semibold mb-4">
            Satisfied Clients
          </h2>
          <p class="text-center">
            A history of building strong relationships with clients by delivering valuable solutions tailored to their unique needs and goals.
          </p>
        </div>
      </div>
    </div>
    <!-- Call to action -->
    <div class="mt-16 flex justify-center">
      <NuxtLink
        to="/#contact"
        class="
          px-6 py-2
          rounded-xl
          font-semibold
          bg-orange-700 text-white
          hover:bg-orange-900
          transition duration-300
        "
      >
        Get in touch
      </NuxtLink>
    </div>
  </section>
</template>
