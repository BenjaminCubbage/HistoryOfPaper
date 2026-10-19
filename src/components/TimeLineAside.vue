<template>
    <li class="aside">
        <div class="aside-marker" aria-hidden="true">
            <node-arrow-sm class="marker-arrow marker-arrow--sm" />
            <node-arrow-lg class="marker-arrow marker-arrow--lg" />
        </div>

        <aside-event />
    </li>
</template>

<script setup>
import NodeArrowLg from './svg/NodeArrowLg.vue';
import NodeArrowSm from './svg/NodeArrowSm.vue';
import AsideEvent from './AsideEvent.vue';
</script>

<style scoped>
.aside {
    display: flex;
    gap: 0.4rem;
}

.aside-marker {
    position: relative;

    display: grid;
    place-content: center;

    height: var(--sz-timeline-aside);

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: 1;

        inset-inline-start: calc(-0.5 * var(--sz-timeline-aside));

        width: var(--sz-timeline-aside);
        height: var(--sz-timeline-aside);

        background: var(--clr-beige-200);
        border: 0.3rem solid var(--clr-red-100);

        rotate: 45deg;
    }

    &::after {
        z-index: -1;
        background: var(--clr-beige-400);
        border-color: var(--clr-beige-400);
        translate: var(--shadow-depth-sm) var(--shadow-depth-sm);
    }
}

.marker-arrow {
    block-size: 9px;
    margin-inline-start: 1.2rem;

    &.marker-arrow--lg {
        @media (width < 800px) {
            display: none;
        }
    }
    
    &.marker-arrow--sm {
        @media (width >= 800px) {
            display: none;
        }
    }
}

.aside-event {
    flex: 1 0 0;
}
</style>