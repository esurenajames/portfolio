<template>
    <section id="contact" class="section-class">
    <div class="bg-gray-900 pb-32">
      <div class="container mx-auto px-4">
        <h2 class="md:text-4xl text-2xl font-bold text-white text-center md:py-10 py-5 mb-6">Contact Me</h2>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Left Section: Get in Touch & Buy Me a Coffee -->
          <div class="space-y-8">
            <!-- Get in Touch -->
            <div>
              <h3 class="md:text-2xl text-xl font-semibold text-white mb-4">Get in Touch</h3>
                <p class="text-gray-400 md:text-base text-sm">
                If you have any questions, want to work or play<span class="text-[#689F38] font-semibold"> chess</span> together, feel free to reach out! You can also find me on my social platforms or drop me a direct message.
                </p>
            </div>

            <div class="space-y-4">
            <a 
              href="https://www.linkedin.com/in/esurenajames/" 
              target="_blank"
              class="flex items-center space-x-4 hover:bg-gray-800 p-3 rounded-lg transition"
            >
              <img 
                src="@/assets/icons8-linkedin-50.png" 
                alt="LinkedIn" 
                class="md:h-8 w-auto h-6" 
              />
              <span class="text-gray-400 md:text-base text-sm">James Esureña</span>
            </a>

            <a 
              href="https://github.com/esurenajames/" 
              target="_blank"
              class="flex items-center space-x-4 hover:bg-gray-800 p-3 rounded-lg transition"
            >
              <img 
                src="@/assets/icons8-github-50.png" 
                alt="GitHub" 
                class="md:h-8 w-auto h-6" 
              />
              <span class="text-gray-400 md:text-base text-sm">esurenajames</span>
            </a>

            <a 
              href="https://www.chess.com/member/ccsebxx" 
              target="_blank"
              class="flex items-center space-x-4 hover:bg-gray-800 p-3 rounded-lg transition"
            >
              <img 
                src="@/assets/icons8-chess-50.png" 
                alt="GitHub" 
                class="md:h-8 w-auto h-6" 
              />
              <span class="text-[#689F38] md:text-base text-sm">/ccsebxx</span>
            </a>

          </div>
  
            <!-- Buy Me a Coffee -->
            <div class="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h4 class="md:text-xl text-lg font-semibold text-white mb-4 tracking-tighter">Buy Me a Coffee</h4>
                <p class="text-gray-400 mb-4 md:text-base text-sm">
                    Enjoying my work? You can support me by buying me a coffee☕!
                </p>
                <a 
                    href="https://ko-fi.com/X8X22GBNE" 
                    target="_blank"
                    class="inline-flex items-center md:text-base text-sm px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition"
                    >
                    <img 
                        src="@/assets/icons8-ko-fi-96.png" 
                        alt="Ko-Fi Icon" 
                        class="w-6 h-6 mr-2"
                    />
                    Buy Me a Ko-fi
                </a>
            </div>
          </div>
  
          <!-- Right Section: Contact Me Form -->
          <form 
            action="https://api.web3forms.com/submit" method="POST" 
            class="bg-gray-800 rounded-lg shadow-md p-6 md:p-10 space-y-5">

          <input type="hidden" name="access_key" value="f9b51d57-942a-4095-b1e1-12e6ee14ec4e">
          <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

            <!-- Email -->
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-400">
                Your Email
              </label>
              <input
                type="email"
                name="email" 
                id="email"
                class="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="youremail@example.com"
                required
              />
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-400">
                Subject
              </label>
              <input
                type="text"
                name="subject" 
                id="subject"
                class="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="What is your message about?"
                required
              />
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block mb-2 text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                name="message" 
                id="message"
                rows="6"
                class="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full py-3 px-4 md:text-base text-sm bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>
  