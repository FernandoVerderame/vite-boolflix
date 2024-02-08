<script>
import SearchForm from './SearchForm.vue';

export default {
    name: 'AppHeader',

    components: { SearchForm },

    emits: ['search-productions', 'term-change']
};
</script>

<template>
    <SearchForm @submit-search="$emit('search-productions')" @term-change="$emit('term-change', $event)"
        placeholder="Scrivi qui..." buttonLabel="Cerca" />
</template>

<style lang="scss" scoped></style>