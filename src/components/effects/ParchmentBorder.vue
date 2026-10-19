<template>
    <div ref="parchmentContainer" class="parchment-border">
        <svg 
            ref="parchmentSVG" 
            :width="inline"
            :height="block"
            :view-box="`0 0 ${inline} ${block}`">
        </svg>
        <slot></slot>
    </div>
</template>

<script setup>
import {
    useTemplateRef,
    watch,
    nextTick
} from 'vue';

import { useElementDimensions } from '../../composables/useElementDimensions';
import { 
    roughenPath,
    tearPath,
    createRectangularBasis 
} from '@/core/svg.js';

const props = defineProps({
    roughenSettings: {
        type: Object,
        default: undefined
    },
    tearSettings: {
        type: Object,
        default: undefined
    },
    background: {
        type: String,
        default: 'white'
    }
});

const parchmentSVG = useTemplateRef('parchmentSVG');

const {
    inline,
    block
} = useElementDimensions(useTemplateRef('parchmentContainer'));

watch([inline, block], async () => {
    await nextTick();

    if (!parchmentSVG.value)
        return;

    let path = createRectangularBasis(inline.value, block.value);
    path = roughenPath(path, props.roughenSettings);
    path = tearPath(path, props.tearSettings);

    if (parchmentSVG.value.children[0])
        parchmentSVG.value.removeChild(parchmentSVG.value.children[0]);

    path.setAttribute('style', `fill: ${props.background}`);
    parchmentSVG.value.appendChild(path);
});
</script>

<style scoped>
.parchment-border {
    isolation: isolate;
    position: relative;

    display: grid;

    & > * {
        grid-area: 1 / 1;
    }
}

svg {
    position: absolute;
    inset: 0;
    z-index: -1;
}
</style>