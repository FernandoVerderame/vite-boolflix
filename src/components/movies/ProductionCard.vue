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
    <div class="col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center">
        <div class="movies-card">
            <div class="main-poster">
                <img v-if="hasPoster" :src="posterSrc" :alt="production.poster_path">
                <img class="poster-image" v-else src="../../assets/img/poster-path.jpg" alt="poster-path">
            </div>
            <div class="secondary-poster">
                <div><strong>Titolo: </strong>{{ title }}</div>
                <div><strong>Titolo originale: </strong>{{ originalTitle }}</div>
                <div class="language">
                    <img v-if="hasFlag" :src="flagSrc" :alt="production.original_language">
                    <span v-else>{{ production.original_language }}</span>
                </div>
                <div>
                    <span><strong>Voto: </strong><i v-for="n in 5" :key="n" class="fa-star"
                            :class="n <= roundedVote ? 'fas' : 'far'"></i></span>
                </div>
                <div>
                    <strong>Overview: </strong>
                    <div class="overview">{{ production.overview }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movies-card {
    color: white;
    width: 342px;

    .secondary-poster,
    &:hover .main-poster {
        display: none;
    }

    &:hover .secondary-poster {
        display: block;
    }
}

.main-poster {

    img {
        height: 550px;
        width: 342px;
        border: 1px solid black;
        box-shadow: 0px 0px 20px black;

        .poster-image {
            width: 342px;
        }
    }
}

.secondary-poster {
    height: 550px;
    border: 1px solid black;
    box-shadow: 0px 0px 20px black;
    padding: 15px;

    .language img {
        width: 30px;
    }

    .fa-star {
        color: goldenrod;
    }
}

.overview {
    height: 350px;
    overflow: auto;
}
</style>