<template>
    <div class="timeline">
        <div class="line" area-hidden="true"></div>
        <ul class="nodes">
            <li class="node">
                <div class="node-marker" aria-hidden="true">
                    <node-arrow class="marker-arrow"></node-arrow>
                </div>

                <node-event />
            </li>
            <li class="node">
                <div class="node-marker" aria-hidden="true">
                    <node-arrow class="marker-arrow"></node-arrow>
                </div>

                <node-event />
            </li>
        </ul>
    </div>
</template>

<script setup>
import NodeArrow from './svg/NodeArrow.vue';
import NodeEvent from './NodeEvent.vue';
</script>

<style scoped>
.timeline {
    display: grid;
    grid-template:
        "line nodes" 1fr /
         0    1fr;

    height: 200px;

    & > .line  { grid-area: line; }
    & > .nodes { grid-area: nodes; }
}

.line {
    position: relative;
    z-index: 0;

    width: var(--wd-timeline-line);
    margin-inline-start: calc(-0.5 * var(--wd-timeline-line));
    block-size: 100%;
    background: var(--clr-beige-500);

    filter: 
        drop-shadow(
            var(--shadow-depth-sm)
            var(--shadow-depth-sm)
            var(--clr-beige-400));
}

.nodes {
    display: flex;
    flex-flow: column;
    gap: 2rem;
}

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
    
    filter: 
        drop-shadow(
            var(--shadow-depth-sm)
            var(--shadow-depth-sm)
            var(--clr-beige-400));
}
</style>