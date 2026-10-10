<template>
    <section aria-label="page hero" class="page-hero">
        <hero-collage class="crumpled-paper" />
    </section>
</template>

<script setup>
import HeroCollage from './svg/HeroCollage.vue';
</script>

<style scoped>
.page-hero {
    --border-transition-allowance: 50px;

    height: 600px;
    
    display: grid;
    place-items: center;

    background:
        url("@/assets/img/chevron.svg") center / 130px space no-repeat content-box,
        url("@/assets/img/hero-border.svg") bottom / 1000px repeat-x,
        linear-gradient(
            to bottom, 
            var(--clr-red-100) calc(100% - var(--border-transition-allowance)), 
            transparent calc(100% - var(--border-transition-allowance)));

    padding-bottom: var(--border-transition-allowance);
}

.crumpled-paper {
    max-width: 100%;
    height: 75%;
}
</style>