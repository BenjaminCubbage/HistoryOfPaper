<template>
    <section class="timeline" aria-label="timeline">
        <div class="timeline-era">
            <h3 class="header">
                <time-line-era-header era="medieval" height="100%" />
            </h3>

            <div class="line" area-hidden="true"></div>

            <ul class="nodes">
                <time-line-node />
                <time-line-aside />
                <time-line-aside />
                <time-line-aside />
                <time-line-node />
                <time-line-node />
                <time-line-node />
                <time-line-node />
                <time-line-node />
                <time-line-node />
                <time-line-aside />
                <time-line-aside />
                <time-line-aside />
                <time-line-node />
                <time-line-node />
                <time-line-node />
                <time-line-node />
                <time-line-node />
                <time-line-node />
            </ul>
        </div>
    </section>
</template>

<script setup>
import TimeLineNode from './TimeLineNode.vue';
import TimeLineAside from './TimeLineAside.vue';
import TimeLineEraHeader from './svg/TimeLineEraHeader.vue';
</script>

<style scoped>
.timeline-era {
    display: grid;
    grid-template:
        "header header" auto
        "line   nodes"  1fr /
         0      minmax(0, 1fr);

    & > .header { grid-area: header; }
    & > .line   { grid-area: line; }
    & > .nodes  { grid-area: nodes; }
}

.line {
    position: relative;
    z-index: 0;

    width: var(--wd-timeline-line);
    margin-inline-start: calc(-0.5 * var(--wd-timeline-line));
    block-size: 100%;
    background: var(--clr-beige-500);
}

.header {
    height: 48px;
    margin-block: 0.6rem 1.3rem;

    margin-inline-start: -1rem;
}

.nodes {
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
}
</style>