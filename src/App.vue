<script>
import axios from 'axios';
import { apiUri } from './data/index';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import MoviesList from './components/movies/MoviesList.vue';

export default {
    name: 'Boolflix',

    components: { AppHeader, MoviesList },

    methods: {
        fetchMovies(endpoint = apiUri) {
            axios.get(endpoint).then(res => {
                const movies = res.data.results;

                store.movies = movies.map(movie => {
                    const { title, originalTitle, language, vote } = movie;
                    return { title, originalTitle, language, vote };
                });
            })
        }
    }
};
</script>

<template>
    <AppHeader />

    <main id="screen">
        <MoviesList />
    </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>