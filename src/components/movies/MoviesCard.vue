<script>
export default {
    name: 'MoviesCard',

    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number
    }
};
</script>

<template>
    <div class="movies-card">
        <div>{{ title }}</div>
        <div>{{ originalTitle }}</div>
        <div>{{ language }}</div>
        <div>{{ vote }}</div>
    </div>
</template>

<style lang="scss" scoped></style>