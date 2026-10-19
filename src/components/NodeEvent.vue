<template>
    <div class="node-event">
        <div class="event-header" @click="isOpen=!isOpen">
            <time class="header-year" data-bc="true">
                3000
            </time>
        </div>
        <h3 class="header-title" @click="isOpen=!isOpen">
            Fall of the Roman <span style="display: inline-block;">Empire&nbsp;<dropdown-caret class="header-caret" :is-open="isOpen" /></span>
        </h3>

        <parchment-border 
            class="event-content" 
            :hidden="!isOpen" 
            :roughen-settings="borderRoughenSettings" 
            :tear-settings="borderTearSettings"
            background="var(--clr-beige-100)">
            <div class="content-container">
                <p class="paragraph-text">
                    The oldest scrap of papyrus was discovered in 1979. That's what they say, at least.
                </p>
                <p class="paragraph-text">
                    Who discovered it? It's not entirely clear. This fact is incorrect and just for show.
                </p>
            </div>
        </parchment-border>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import DropdownCaret from './svg/DropdownCaret.vue';
import ParchmentBorder from './effects/ParchmentBorder.vue';

const isOpen = ref(false);

const borderRoughenSettings = { 
    jaggedFrequency: 15,
    jaggedAmplitudeX: 6,
    jaggedAmplitudeY: 1 };

const borderTearSettings = {
    jaggedAmplitudeX: 10,
    jaggedAmplitudeY: 2,
    tearWidth: 10,
    tearChance: 0.2 };
</script>

<style scoped>
.node-event {
    display: flex;
    flex-direction: column;

    min-width: 0;
    max-width: 600px;
    line-height: 1.1;

    margin-block-start: 0.1rem;
}

.event-header {
    cursor: pointer;
    user-select: none;
    vertical-align: middle;

    padding-block-end: 0.2rem;
}

.header-year {
    display: inline-grid;
    grid-template-columns: auto auto;
    place-content: center;
    vertical-align: middle;

    font-size: 1.2rem;
    font-weight: 550;

    &::after {
        margin-inline-start: 0.2rem;
        margin-block-end: 0.02em;
        font-size: 0.7em;
        font-weight: 650;
        align-self: center;
    }

    &[data-bc=true]::after { content: 'BCE ⸺'; }
    &[data-ad=true]::after { content: 'AD —'; }
    
    @media (width < 800px) {
        font-size: 1.5rem;
    }
}

.header-title {
    display: inline;
    vertical-align: middle;
    cursor: pointer;

    font-weight: 730;
    font-size: 1.4rem;
    vertical-align: middle;

    user-select: none;

    @media (width < 800px) {
        font-size: 1.3rem;
    }
}

.header-caret {
    block-size: 0.65rem;
    margin-inline-start: 0.1rem;

    translate: 0 -0.1rem;
}

.event-content {
    margin-block-start: 0.2rem;
    margin-inline-start: -1.4rem;

    scale: 1;
    transition: opacity 200ms ease;
    transform-origin: top left;

    filter:
        drop-shadow(0.4rem 0.4rem var(--clr-beige-300));

    /*
        Prevent obfuscating date toggle button
    */
    pointer-events: none;
    & .header-title,
    & .paragraph-text {
        pointer-events: all;
    }
}

.content-container {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    padding-inline: 1.45rem;
    padding-block: 1rem 0.8em;

    &::after {
        content: '';
        display: inline-block;
        inline-size: 1.6rem;
        block-size: 5px;
        background: var(--clr-beige-500);
        margin-block-end: 0.2rem;

        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
}

.paragraph-text {
    font-size: 1.25rem;
    font-weight: 520;
    line-height: 1.3;
    
    @media (width < 800px) {
        font-size: 1.2rem;
    }
}
</style>