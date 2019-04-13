<template>
<div class="root">
    <header class="mainHeader">
        <router-link
            :to="{ name: 'Home'}"
            tag="h1"
            class="h1"
        >
            Avant-garde Movement App
        </router-link>
        <!-- <h1 class="h1">

        </h1> -->
    </header>

    <router-view/>
</div>
</template>

<style src="@/assets/sass/index.scss" lang="scss"></style>
