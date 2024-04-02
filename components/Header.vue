<template>
    <header class="sticky top-0 z-20 border-b bg-backfround/80 background-blur">
        <!-- Flex Container -->
        <div class="container-flex h-16 items-center justify-between">
            <!-- Logo & Page Title-->
            <div class="flex items-center gap-3">
                <!-- Logo -->
                <img src="/icon.svg" alt="Analytics Logo" class="h-7 w-7 object-contain" />
                <!-- Page Title -->
                <nuxt-link class="text-xl font-bold" to="/">Analytics</nuxt-link>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts"></script>