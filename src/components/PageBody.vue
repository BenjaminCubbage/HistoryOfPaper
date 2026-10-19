<template>
    <parchment-border 
        class="page-body" 
        background="var(--clr-beige-200)"
        :roughen-settings="borderRoughenSettings" 
        :tear-settings="borderTearSettings">
        <section class="page-section">
            <time-line />
        </section>
    </parchment-border>
</template>

<script setup>
import TimeLine from './TimeLine.vue';
import ParchmentBorder from './effects/ParchmentBorder.vue';

const borderRoughenSettings = { 
    jaggedFrequency: 15,
    jaggedAmplitudeX: 7,
    jaggedAmplitudeY: 2 };

const borderTearSettings = {
    jaggedAmplitudeX: 25,
    jaggedAmplitudeY: 2,
    tearWidth: 10,
    tearChance: 0.2,
    jaggedFrequency: 30 };
</script>

<style scoped>
.page-body {
    width: 750px;
}

.page-section {
    padding-block-start: var(--hero-overlap-range);
    padding-inline: 3rem;

    isolation: isolate;

    margin: 0;

    @media (width < 1100px) {
        width: calc(100% - 1.6rem);
        align-self: stretch;
    }

    @media (width < 800px) {
        width: 100%;
        margin: 0;
        background: var(--clr-beige-300);

        --timeline-margin-inl: 0rem;
        --timeline-margin-blk: 1rem;
    }
}
</style>