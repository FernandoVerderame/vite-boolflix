<script>
export default {
    name: 'MoviesCard',

    props: {
        production: Object
    },

    computed: {
        title() {
            return this.production.title || this.production.name
        },
        originalTitle() {
            return this.production.original_title || this.production.original_name
        },
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.production.original_language);
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.production.original_language}.png`, import.meta.url);

            return url.href;
        }
    }
};
</script>

<template>
    <div class="movies-card">
        <div>{{ title }}</div>
        <div>{{ originalTitle }}</div>
        <div>
            <img v-if="hasFlag" :src="flagSrc" :alt="production.original_language">
            <span v-else>{{ production.original_language }}</span>
        </div>
        <div>{{ production.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped></style>