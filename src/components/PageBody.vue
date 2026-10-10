<template>
    <section class="page-body">
        <time-line />
    </section>
</template>

<script setup>
import TimeLine from './TimeLine.vue';
</script>

<style scoped>
.page-body {
    --timeline-margin-inl: 4rem;
    --timeline-margin-blk: 2rem;

    isolation: isolate;

    padding-block:  calc(var(--timeline-margin-blk) + var(--hero-overlap-range)) calc(var(--timeline-margin-blk) + 1rem);
    padding-inline: calc(var(--timeline-margin-inl) + 2.5rem);

    background: url("@/assets/img/parchment-bg.svg") center / 100% repeat-y;

    width: 1000px;
    margin: 0;
    align-self: center;
    
    @media (width < 1100px) {
        width: calc(100% - 1.6rem);
        align-self: stretch;
    }

    @media (width < 800px) {
        width: 100%;
        margin: 0;
        background: var(--clr-beige-300);
    }
}
</style>