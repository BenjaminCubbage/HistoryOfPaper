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
    align-items: start;
    margin-block-start: 0.05rem;
    gap: 0.15rem;
}


.aside-date {
    display: inline-grid;
    grid-template-columns: auto auto;
    vertical-align: middle;

    font-size: 1.05rem;
    font-weight: 550;
    letter-spacing: 0.04em;

    &::after {
        margin-inline-start: 0.2rem;
        font-size: 0.7em;
        font-weight: 650;
        align-self: center;
        margin-block-start: -0.25em;
    }

    &[data-bc=true]::after { content: 'BCE ⸺'; }
    &[data-ad=true]::after { content: 'AD ⸺'; }
}

.aside-content {
    display: inline;
    align-items: center;

    font-weight: 650;
    font-size: 1.2rem;
}
</style>