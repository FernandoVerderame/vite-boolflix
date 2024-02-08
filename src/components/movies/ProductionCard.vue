<script>
import { baseUriPoster } from '../../data/index'

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
            const url = new URL(`../../assets/img/${this.production.original_language}.png`, import.meta.url);

            return url.href;
        },
        hasPoster() {
            const posters = [`${this.production.poster_path}`];

            return posters.includes(this.production.poster_path);
        },
        posterSrc() {
            const url = new URL(`${baseUriPoster}` + `${this.production.poster_path}`, import.meta.url);

            return url.href;
        },
        roundedVote() {
            return Math.floor(this.production.vote_average / 2 + 1);
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
        <div>{{ roundedVote }}</div>
        <div>
            <img v-if="hasPoster" :src="posterSrc" :alt="production.poster_path">
            <img class="poster-image" v-else src="../../assets/img/poster-path.jpg" alt="poster-path">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.poster-image {
    width: 342px;
}
</style>