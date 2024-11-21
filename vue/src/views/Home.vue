<template>
  <section id="home" class="section-class">
    <div class="mt-12 relative z-10">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="flex items-center justify-around px-12 py-16 flex-col md:flex-row">
        <!-- Text content on the left with animation -->
        <div class="flex-1 space-y-0 md:space-y-2 pl-0 md:pl-32 opacity-0 animate-fadeIn text-left">
          <h1 class="text-xl font-semibold text-gray-600 tracking-tight">
            Hello there 👋,
          </h1>
          <h2 class="text-3xl md:text-7xl font-semibold text-gray-800 tracking-tighter">
            I am <span class="text-gray-800 font-bold animate-wiggle-more">James Esureña</span>
          </h2>
          <h3 class="text-xl md:text-5xl font-bold text-gray-600 tracking-tighter">
            Full-Stack Web Developer
          </h3>
          <p
            class="text-lg md:text-xl text-gray-800 max-w-3xl py-4 md:tracking-tight"
            style="word-spacing: 0.1em;"
          >
            I am passionate about creating dynamic and efficient web applications, focused on
            <span class="font-bold text-[#F05340] inline-flex tracking-tighter">
              <img
                src="@/assets/laravel.png"
                alt="Laravel Logo"
                class="h-6 w-auto mr-2"
              />
              Laravel
            </span>
            and
            <span class="font-bold text-[#42B883] inline-flex tracking-tighter">
              <img
                src="@/assets/vue.js.png"
                alt="vue.js Logo"
                class="h-6 w-auto mr-1"
              />
              Vue.js
            </span>
            framework. I am seeking freelance opportunities and full-time positions to further grow and explore.
          </p>
          <div class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 justify-start">
            <!-- Icons -->
            <div class="flex py-2 space-x-4">
              <a href="https://www.linkedin.com/in/esurenajames/" target="_blank">
                <img
                  src="@/assets/linkedin.png"
                  alt="LinkedIn"
                  class="h-6 w-6 lg:h-8 lg:w-8 hover:opacity-80 transition-all"
                />
              </a>
              <a @click="openMail" href="javascript:void(0)">
                <img
                  src="@/assets/gmail.png"
                  alt="Gmail"
                  class="h-6 w-6 lg:h-8 lg:w-8 hover:opacity-80 transition-all"
                />
              </a>
              <a href="https://github.com/esurenajames/" target="_blank">
                <img
                  src="@/assets/github.png"
                  alt="Github"
                  class="h-6 w-6 lg:h-8 lg:w-8 hover:opacity-80 transition-all"
                />
              </a>
              <a href="https://www.instagram.com/cinnamonesurena/" target="_blank">
                <img
                  src="@/assets/instagram.png"
                  alt="Instagram"
                  class="h-6 w-6 lg:h-8 lg:w-8 hover:opacity-80 transition-all"
                />
              </a>
            </div>
            <!-- Button -->
            <a
              href="#contact"
              class="text-white font-semibold px-4 rounded-full bg-black hover:bg-gray-700 transition-all flex items-center sm:text-sm sm:py-1 sm:px-3 md:px-6 md:py-2 lg:text-lg group"
            >
              Contact Me
              <!-- Arrow Icon (right arrow) -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-3 sm:w-3 md:h-5 md:w-5 ml-2 transform transition-transform group-hover:rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6l6 6-6 6"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Image on the right with animation, hidden on small screens -->
        <div class="flex-1 opacity-0 animate-fadeIn hidden md:block">
          <img src="@/assets/php-man.png" alt="PHP Developer" class="h-300" />
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    name: 'Hero',
    methods: {
      openMail() {
        const email = 'esurenajames@gmail.com';
        const subject = 'Hire me'; // Optional
        const body = 'Hire me';  // Optional
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open the mailto link in a new tab
        window.open(mailtoLink, '_blank');
      },
    }
  };
</script>

<style>

</style>
