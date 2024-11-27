<template>
  <footer class="bg-gray-800 text-gray-400 py-10">
    <div class="container mx-auto px-4">
      <!-- Top Section -->
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div>
          <img
            src="@/assets/other-logo.png"
            alt="Logo"
            class="h-16 w-auto sm:h-16"
          />
        </div>

        <!-- Social Links -->
        <div class="flex space-x-6">
          <div
            v-for="social in socialLinks"
            :key="social.label"
            class="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-700 transition-all"
          >
            <a :href="social.href" :target="social.target" @click="social.action">
              <img :src="social.imgSrc" :alt="social.label" class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <!-- Horizontal Line -->
      <div class="border-t border-gray-600 my-6"></div>

      <!-- Footer Bottom -->
      <div class="text-center text-gray-500 pt-5 text-sm">
        © 2024 James Esurena. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
import linkedinIcon from "@/assets/icons8-linkedin-50.png";
import gmailIcon from "@/assets/icons8-gmail-50.png";
import githubIcon from "@/assets/icons8-github-50.png";
import instagramIcon from "@/assets/icons8-instagram-60.png";

export default {
  methods: {
    openMail() {
      const email = "esurenajames@gmail.com";
      const subject = "Hire me";
      const body = "Hire me";
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, "_blank");
    },
  },
  data() {
    return {
      socialLinks: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/esurenajames/",
          target: "_blank",
          imgSrc: linkedinIcon,
        },
        {
          label: "Gmail",
          href: "javascript:void(0)", // Placeholder for action
          target: null,
          imgSrc: gmailIcon,
          action: () => this.openMail(),
        },
        {
          label: "Github",
          href: "https://github.com/esurenajames/",
          target: "_blank",
          imgSrc: githubIcon,
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/cinnamonesurena/",
          target: "_blank",
          imgSrc: instagramIcon,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
