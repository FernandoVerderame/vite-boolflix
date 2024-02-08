<script>
export default {
    name: 'SearchForm',

    data: () => ({ searchTerm: '' }),

    props: {
        buttonLabel: String,
        placeholder: String
    },

    emits: ['submit-search', 'term-change']
};
</script>

<template>
    <form @submit.prevent="$emit('submit-search')">
        <input type="text" :placeholder="placeholder" v-model.trim="searchTerm" @keyup="$emit('term-change', searchTerm)">
        <button>{{ buttonLabel }}</button>
    </form>
</template>

<style lang="scss" scoped></style>