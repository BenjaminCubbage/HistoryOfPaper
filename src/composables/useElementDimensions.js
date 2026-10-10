import {
    onUnmounted,
    ref,
    watch
} from 'vue';

/*
    Reactively track the dimensions of an element using a
    ResizeObserver.
*/
export function useElementDimensions(elRef) {
    const inlineSize = ref(0);
    const blockSize  = ref(0);

    const observer = new ResizeObserver(([entry]) => {
        if (entry == null)
            return;

        inlineSize.value = entry.borderBoxSize[0].inlineSize;
        blockSize.value  = entry.borderBoxSize[0].blockSize;
    });

    watch(elRef, (newEl, oldEl) => {
        if (oldEl)
            observer.unobserve(oldEl);

        if (newEl)
            observer.observe(newEl);
    }, {
        immediate: true
    });

    onUnmounted(() => {
        observer.disconnect();
    });

    return {
        inline: inlineSize,
        block:  blockSize
    };
}