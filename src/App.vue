<template>
    <main class="app">
        <header class="page-header">
            <page-hero class="page-hero"></page-hero>
        </header>

        <div class="page-layout">
            <div class="left">
                <side-bar 
                    class="side-bar" 
                    :visible-eras="pageBodyEl?.visibleEras"
                    @navigate-to-era="pageBodyEl?.navigateToEra"></side-bar>
            </div>
            <div class="center">
                <page-body ref="pageBody" class="page-body"></page-body>
            </div>
            <div class="right"></div>
        </div>
    </main>
</template>

<script setup>
import { 
    useTemplateRef
} from 'vue';
import PageHero from './components/PageHero.vue';
import PageBody from './components/PageBody.vue';
import SideBar from './components/SideBar.vue';

const pageBodyEl = useTemplateRef('pageBody');
</script>

<style scoped>
.app {
    isolation: isolate;

    display: flex;
    flex-direction: column;

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
}

.page-layout {
    display: flex;

    & > .left { 
        flex: 1 0 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;

        & > .side-bar {
            margin-inline: 2rem;
        }
    }

    & > .center { 
        flex: 0 0 0; 
    }

    & > .right { 
        flex: 1 1 0; 
    }
}

.page-body { 
    margin-top: calc(-1 * var(--hero-overlap-range));
}
</style>