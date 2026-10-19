<template>
    <nav class="side-bar">
        <h1 class="bar-title">Contents</h1>
        <ul class="bar-links">
            <li class="bar-link">
                <a class="link" data-numeral="I" data-active="true">
                    Ancient World
                </a>
            </li>
            <li class="bar-link">
                <a class="link" data-numeral="II">
                    Medieval Era
                </a>
            </li>
            <li class="bar-link">
                <a class="link" data-numeral="III">
                    Modern World
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.side-bar {
    --side-bar-stick-margin: 36px;

    container-type: scroll-state;
    container-name: my-container;

    position: sticky;
    top: var(--side-bar-stick-margin);
    margin-block-start: var(--side-bar-stick-margin);

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.5rem;
}

.bar-title {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.7rem;
    font-weight: bolder;
    text-align: center;

    &::after {
        content: '';
        display: block;
        
        margin-block: 0.1rem;

        height: 3px;
        width: 50%;
        background: var(--clr-beige-500);
    }
}

.bar-links {
    display: flex;
    flex-flow: column;
    gap: 0.2rem;
}

.link {
    display: inline-block;

    font-weight: bold;
    font-size: 1.25rem;

    padding-block: 0.5rem 0.22rem;
    padding-inline-start: 1.1rem;

    width: 270px;

    clip-path: polygon(
        0 0,
        100% 0,
        92% 50%,
        100% 100%,
        0 100%
    );

    &::before {
        content: attr(data-numeral) ".";
        display: inline-block;
        width: 2.5ch;
    }

    &[data-active="true"] {
        background: var(--clr-red-100);
        color: white;
    }
}
</style>