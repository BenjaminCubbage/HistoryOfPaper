<template>
    <div class="node-event">
        <div class="event-header" @click="isOpen=!isOpen">
            <time class="header-year" data-bc="true">
                3000
            </time>
            <h3 class="header-title" :hidden="isOpen">
                <span class="title-text">Oldest Scrap of Papyrus</span>
            </h3>
            <dropdown-caret class="header-caret" :is-open="isOpen" />
        </div>

        <parchment-border class="event-content" :hidden="!isOpen">
            <div class="content-container">
                <span class="title-text">
                    Oldest Scrap of Papyrus
                </span>
                <p class="paragraph-text">
                    The oldest scrap of papyrus ever found was discovered at some point
                </p>
            </div>
        </parchment-border>
    </div>
</template>

<script setup>
import DropdownCaret from './svg/DropdownCaret.vue';
import ParchmentBorder from './effects/ParchmentBorder.vue';

const isOpen = defineModel('isOpen', {
    required: true
});
</script>

<style scoped>
.node-event {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    max-width: 500px;
}

.event-header {
    display: flex;
    flex-direction: row;
    align-items: center;

    height: var(--sz-timeline-node);
    
    cursor: pointer;
    user-select: none;
}

.header-year {
    display: grid;
    grid-template-columns: auto auto;
    place-content: center;

    font-size: 1.7rem;
    font-weight: 550;
    margin-block-start: 0.15em;
    
    filter: 
        drop-shadow(
            var(--shadow-depth-sm)
            var(--shadow-depth-sm)
            var(--clr-beige-400));

    &::after {
        margin-inline-start: 0.3rem;
        font-size: 0.7em;
        align-self: center;
    }

    &[data-bc=true]::after { content: 'BCE'; }
    &[data-ad=true]::after { content: 'AD'; }
}

.header-title {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;

    &::before {
        content: '';

        display: inline-block;
        width: 1rem;
        height: 1.5px;
        background: black;

        margin-inline: 0.4rem;
    }
}

.title-text {
    font-weight: 730;
    font-size: 1.55rem;
    margin-block-start: 0.15em;
}

.header-caret {
    block-size: 0.65rem;
    margin-inline-start: 0.28rem;

    filter: 
        drop-shadow(
            var(--shadow-depth-xs)
            var(--shadow-depth-xs)
            var(--clr-beige-400));
}

.event-content {
    margin-inline-start: -2rem;

    filter: 
        drop-shadow(
            var(--shadow-depth-lg)
            var(--shadow-depth-lg)
            var(--clr-beige-400));
}

.content-container {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    padding-inline: 2.05rem;
    padding-block: 1rem;
}

.paragraph-text {
    font-size: 1.3rem;
    font-weight: 500;
}
</style>