<template>
    <div class="aside-event">
        <time class="aside-date" data-bc="true">
            3000
        </time>

        <div class="aside-content">
            Oldest scrap of papyrus
        </div>
    </div>
</template>

<style scoped>
.aside-event {
    display: flex;
    flex-direction: column;
    margin-block-start: -0.1rem;
}

.aside-date {
    display: inline-block;
    align-items: center;

    font-weight: 620;
    font-size: 1.2rem;
    margin-block-start: 0.1em;
    padding-block-end: 0.1em;

    &[data-bc="true"]::after {
        content: 'BCE —';
        font-size: 0.8em;
        vertical-align: middle;
    }
}

.aside-content {
    display: inline;
    align-items: center;

    font-weight: 550;
    font-size: 1.2rem;
}
</style>