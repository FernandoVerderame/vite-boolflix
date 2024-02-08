<script>
export default {
    name: 'SearchForm',

    data: () => ({ searchTerm: '' }),

    props: {
        buttonLabel: String,
        placeholder: String
    },

    emits: ['submit-search']
};
</script>

<template>
    <form @submit.prevent="$emit('submit-search', searchTerm)">
        <input type="text" :placeholder="placeholder" v-model.trim="searchTerm">
        <button>{{ buttonLabel }}</button>
    </form>
</template>

<style lang="scss" scoped></style>