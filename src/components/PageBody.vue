<template>
    <div class="page-body">
        <section class="page-section">
            <time-line ref="timeline" />
        </section>
    </div>
</template>

<script setup>
import { 
    computed,
    useTemplateRef
} from 'vue';
import TimeLine from './TimeLine.vue';

const timelineEl = useTemplateRef('timeline');

defineExpose({
    navigateToEra: era => timelineEl.value?.navigateToEra(era),
    visibleEras: computed(() => timelineEl.value?.visibleEras)
});
</script>

<style scoped>
.page-body {
    width: 750px;
    background: url('@/assets/img/parchment-bg.svg') top / 100% repeat-y;
}

.page-section {
    padding-block-start: var(--hero-overlap-range);
    padding-inline: 3rem;

    isolation: isolate;

    margin: 0;
}
</style>