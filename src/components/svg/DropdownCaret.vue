<template>
    <svg viewBox="0 0 8.56 7.52">
        <polygon class="caret" :data-is-open="isOpen" points="4.28 7.52 8.56 0 0 0 4.28 7.52" />
    </svg>
</template>

<script setup>
defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})
</script>

<style scoped>
.caret[data-is-open="true"] {
    rotate: 180deg;
}
</style>