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
import { roughenPath } from '@/core/svg.js';
import { createParchmentBasis } from '@/core/svg';

const parchmentSVG = useTemplateRef('parchmentSVG');

const {
    inline,
    block
} = useElementDimensions(useTemplateRef('parchmentContainer'));

watch([inline, block], async () => {
    await nextTick();

    if (!parchmentSVG.value)
        return;

    const passes = [
        { jaggedFrequency: 15,  jaggedAmplitude: 3 } 
    ];


    let path = createParchmentBasis(inline.value, block.value);

    for (const settings of passes)
        path = roughenPath(path, settings);

    if (parchmentSVG.value.children[0])
        parchmentSVG.value.removeChild(parchmentSVG.value.children[0]);

    path.setAttribute('fill', 'white');
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