<template>
    <div class="timeline">
        <div class="line" area-hidden="true"></div>

        <ul class="nodes">
            <time-line-node />
            <time-line-node />
            <time-line-node />
            <time-line-node />
            <time-line-node />
            <time-line-node />
        </ul>
    </div>
</template>

<script setup>
import TimeLineNode from './TimeLineNode.vue';
import TimeLineAside from './TimeLineAside.vue';
</script>

<style scoped>
.timeline {
    display: grid;
    grid-template:
        "line nodes" 1fr /
         0    minmax(0, 1fr);

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
}

.nodes {
    display: flex;
    flex-flow: column;
    gap: 2rem;
}
</style>