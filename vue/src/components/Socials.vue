<template>
  <div class="fixed left-0 top-1/2 transform -translate-y-1/2 space-y-6 z-20 lg:block hidden">
    <a
      v-for="social in socialLinks"
      :key="social.label"
      :href="social.href"
      :target="social.target"
      @click="social.action"
      class="group"
    >
      <div
        :class="['flex items-center justify-start h-16 w-16 group-hover:w-48 transition-all duration-500 ease-in-out rounded-none shadow-lg hover:shadow-2xl overflow-hidden relative', social.bgColor]"
      >
        <span
          class="text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out absolute left-16 ml-4 z-10"
        >
          {{ social.label }}
        </span>
        <img :src="social.imgSrc" :alt="social.label" class="h-8 w-8 mx-4" />
      </div>
    </a>
  </div>
</template>

<script>
import linkedinIcon from "@/assets/social-linkedin.png";
import gmailIcon from "@/assets/social-gmail.png";
import githubIcon from "@/assets/social-github.png";
import instagramIcon from "@/assets/social-instagram.png";

export default {
  name: "Socials",
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
          bgColor: "bg-[#0288D1]",
          imgSrc: linkedinIcon,
        },
        {
          label: "Gmail",
          href: "javascript:void(0)",
          target: null,
          bgColor: "bg-[#313131]",
          imgSrc: gmailIcon,
          action: () => this.openMail(),
        },
        {
          label: "Github",
          href: "https://github.com/esurenajames/",
          target: "_blank",
          bgColor: "bg-black",
          imgSrc: githubIcon,
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/cinnamonesurena/",
          target: "_blank",
          bgColor: "bg-[#be3939]",
          imgSrc: instagramIcon,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Custom styling for the ripple effect */
a.group::before {
  content: '';
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

a.group:hover::before {
  transform: scale(3);
  opacity: 0.4;
}
</style>
