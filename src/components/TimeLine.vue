<template>
    <section class="timeline" aria-label="timeline">
        <div class="timeline-era">
            <div ref="ancientScrollSentinel" class="scroll-sentinel"></div>

            <h3 class="header" ref="ancientHeader">
                <time-line-era-header era="ancient" height="100%" />
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
                <time-line-node />
                <time-line-node />
                <time-line-node />
            </ul>
        </div>
        
        <div class="timeline-era">
            <div ref="medievalScrollSentinel" class="scroll-sentinel"></div>

            <h3 class="header" ref="medievalHeader">
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
                <time-line-aside />
                <time-line-node />
                <time-line-node />
                <time-line-node />
            </ul>
        </div>
        
        <div class="timeline-era">
            <div ref="modernScrollSentinel" class="scroll-sentinel"></div>

            <h3 class="header" ref="modernHeader">
                <time-line-era-header era="modern" height="100%" />
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
                <time-line-aside />
                <time-line-node />
                <time-line-node />
                <time-line-node />
            </ul>
        </div>
    </section>
</template>

<script setup>
import {
    useTemplateRef,
    readonly,
    ref
} from 'vue';
import { useIsVisible } from '@/composables/useIsVisible.js';
import TimeLineNode from './TimeLineNode.vue';
import TimeLineAside from './TimeLineAside.vue';
import TimeLineEraHeader from './svg/TimeLineEraHeader.vue';

const emit = defineEmits(['visibleErasChanged']);

const eraHeaderEls = {
    ancient: useTemplateRef('ancientHeader'),
    medieval: useTemplateRef('medievalHeader'),
    modern: useTemplateRef('modernHeader')
};

/*
    Refs for visible eras
*/
const visibleEras = ref({
    ancient: useIsVisible(useTemplateRef('ancientScrollSentinel')),
    medieval: useIsVisible(useTemplateRef('medievalScrollSentinel')),
    modern: useIsVisible(useTemplateRef('modernScrollSentinel'))
});

function navigateToEra(era) {
    const boundingRect = eraHeaderEls[era]?.value?.getBoundingClientRect();

    if (!boundingRect)
        return;

    console.log(document.body.scrollTop);

    document.body.scrollTo({
        top: boundingRect.top + document.body.scrollTop - 30,
        behavior: 'smooth'
    });
}

defineExpose({ 
    navigateToEra,
    visibleEras: readonly(visibleEras)
});
</script>

<style scoped>
.timeline-era {
    position: relative;
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
    margin-block: 2rem 1.3rem;

    margin-inline-start: -1rem;
}

.nodes {
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
}

.scroll-sentinel {
    position: absolute;
    inset: 0;
    inset-block: 50dvh;
    pointer-events: none;
}

.timeline {
    & > :nth-child(1 of .timeline-era) > .scroll-sentinel {
        inset-block-start: 0;
    }

    & > :nth-child(-1 of .timeline-era) > .scroll-sentinel {
        inset-block-end: 0;
    }
}
</style>