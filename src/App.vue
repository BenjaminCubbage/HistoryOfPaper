<template>
    <main class="app">
        <header class="page-header">
            <page-hero class="page-hero"></page-hero>
        </header>
        <side-bar class="side-bar"></side-bar>
        <page-body class="page-body"></page-body>
    </main>
</template>

<script setup>
import PageHero from './components/PageHero.vue';
import PageBody from './components/PageBody.vue';
import SideBar from './components/SideBar.vue';
</script>

<style scoped>
.app {
    isolation: isolate;

    display: grid;
    grid-template:
        "hero hero hero" auto
        "sidebar body ." auto /
         1fr auto 1fr;

    place-items: start stretch;

    background: var(--clr-beige-100);

    /* Grain overlay */
    &::after {
        content: '';

        position: fixed;
        inset: 0;
        z-index: 9999;
        pointer-events: none;

        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4Ij48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHNlZWQ9IjciLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+");
        background-repeat: repeat;

        opacity: 0.6;
        mix-blend-mode: soft-light;
    }
    
    header { z-index: 2;}
    .page-header { grid-area: hero; z-index: 2; }
    .page-body   { grid-area: body; z-index: 1; }
    .side-bar    { grid-area: sidebar; }
}

.page-body { 
    margin-top: calc(-1 * var(--hero-overlap-range));
}
</style>