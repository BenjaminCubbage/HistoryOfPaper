import {
    onUnmounted,
    ref,
    watch
} from 'vue';

/*
    Reactively track whether an element intersects the viewport.
*/
export function useIsVisible(elRef) {
    const isVisible = ref(false);

    const observer = new IntersectionObserver(([entry]) => {
        if (entry == null)
            return;

        isVisible.value = entry.isIntersecting;
    }, {
        threshold: 0
    });

    const stopWatching = watch(elRef, (newEl, oldEl) => {
        if (oldEl)
            observer.unobserve(oldEl);

        isVisible.value = false;

        if (newEl)
            observer.observe(newEl);
    }, {
        immediate: true
    });

    onUnmounted(() => {
        stopWatching();
        observer.disconnect();
    });

    return isVisible;
}