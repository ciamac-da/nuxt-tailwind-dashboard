<template>
    <header class="sticky top-0 z-20 border-b border-gray-800 bg-blue-400 backdrop-blur">
        <!-- Flex Container -->
        <div class="container flex h-16 items-center justify-between">
            <!-- Logo & Page Title-->
            <div class="flex items-center gap-3">
                <!-- Logo -->
                <img src="/icon.svg" alt="Analytics Logo" class="h-7 w-7 object-contain" />
                <!-- Page Title -->
                <nuxt-link class="text-xl font-bold" to="/">Analytics Dashboard App</nuxt-link>
            </div>
            <!-- Right side of header -->
        <div class="flex items-center gap-5">
            <button @click="toggleTheme"
            class="flex h-9 shrink-0 items-center justify-center rounded-full border bg-background">
            <Icon name="heroicons:sun" class="h-5 w-5" />
            </button>
        </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
const mode = useColorMode();
  const toggleTheme = () => {
    mode.value = mode.value === "dark" ? "light" : "dark";
  };
</script>

<style>
</style>