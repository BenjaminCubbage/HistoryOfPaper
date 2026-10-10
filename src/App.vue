<template>
    <main class="app">
        <header>
            <page-hero class="page-hero"></page-hero>
        </header>
        <page-body class="page-body"></page-body>
    </main>
</template>

<script setup>
import PageHero from './components/PageHero.vue';
import PageBody from './components/PageBody.vue';
</script>

<style scoped>
.app {
    isolation: isolate;

    display: flex;
    flex-flow: column;

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
    .page-hero { align-self: stretch; z-index: 2; }
    .page-body { align-self: center;  z-index: 1; }

    .page-hero { 
        margin-bottom: calc(-1 * var(--hero-overlap-range));
    }
}
</style>