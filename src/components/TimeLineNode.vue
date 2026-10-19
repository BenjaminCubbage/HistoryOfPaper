<template>
    <li class="node">
        <div class="node-marker" aria-hidden="true">
            <node-arrow-lg class="marker-arrow marker-arrow--lg" />
            <node-arrow-sm class="marker-arrow marker-arrow--sm" />
        </div>

        <node-event />
    </li>
</template>

<script setup>
import NodeArrowLg from './svg/NodeArrowLg.vue';
import NodeArrowSm from './svg/NodeArrowSm.vue';
import NodeEvent from './NodeEvent.vue';
</script>

<style scoped>
.node {
    display: flex;
    gap: 0.3rem;
}

.node-marker {
    position: relative;

    display: grid;
    place-content: center;

    height: var(--sz-timeline-node);

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: 1;

        inset-inline-start: calc(-0.5 * var(--sz-timeline-node));

        width: var(--sz-timeline-node);
        height: var(--sz-timeline-node);

        background: var(--clr-red-100);

        rotate: 45deg;
    }

    &::after {
        z-index: -1;
        background: var(--clr-beige-400);
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

.node-event {
    flex: 1 0 0;
}
</style>