<script setup>
import { ref, computed } from 'vue';
import store from '../store';

const test = computed(() => store.state.test);
</script>

<template>
  <div class="flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 background">
    <div class="shadow-2xl border-[1px] rounded-lg border-gray-200 bg-gray-100 px-16 py-8 sm:max-w-md lg:max-w-lg w-full bg-opacity-50">
      <div class="sm:mx-auto w-full">
        <h2 class="mt-4 text-center text-2xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div class="mt-10 w-full">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full px-2 rounded-md border-[1px] border-gray-400 py-1.5 text-gray-900" />
            </div>
          </div>

          <div>
            <div class="flex items-center">
              <label for="password" class="block text-sm font-medium text-gray-900">Password</label>
        
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full px-2 rounded-md border-[1px] border-gray-400 py-1.5 text-gray-900" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <input id="rememberMe" name="rememberMe" type="checkbox" class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-0 focus:ring-transparent" />
              <label for="rememberMe" class="ml-2 text-sm text-gray-900">Remember me</label>
            </div>
            <div class="text-sm">
                <router-link to="/forgot-password" class="font-medium text-sm text-blue-500 hover:text-blue-400">Forgot password?</router-link>
              </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <p class="mt-6 mb-4 text-center text-sm text-gray-500">
          Don't have an account? <router-link to="/signup" class="text-blue-500 cursor-pointer">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .background {
    background-image: url('@/assets/background.png');
    background-size: cover;
    background-position: center;

  }
</style>
