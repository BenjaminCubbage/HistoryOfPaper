<template>
    <div class="node-event">
        <time class="event-year" data-bc="true">
            3000
        </time>
        <h3 class="event-title">
            <div class="title-text">Oldest Scrap of Papyrus</div>
        </h3>
        <dropdown-caret class="event-caret" />
    </div>
</template>

<script setup>
import DropdownCaret from './svg/DropdownCaret.vue';
</script>

<style scoped>
.node-event {
    display: flex;
    flex-direction: row;
    align-items: center;

    height: var(--sz-timeline-node);
}

.event-year {
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

.event-title {
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

.event-caret {
    block-size: 0.65rem;
    margin-inline-start: 0.28rem;

    filter: 
        drop-shadow(
            var(--shadow-depth-xs)
            var(--shadow-depth-xs)
            var(--clr-beige-400));
}
</style>