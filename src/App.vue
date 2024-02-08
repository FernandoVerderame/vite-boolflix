<script>
import axios from 'axios';
import { api } from './data/index'
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import MoviesList from './components/movies/MoviesList.vue';

export default {
    name: 'Boolflix',

    data: () => ({ store }),

    components: { AppHeader, MoviesList },

    methods: {
        setTitleFilter(term) {
            store.filter = term;
        },
        searchMovies() {
            if (!store.filter) {
                store.movies = [];
                return;
            }

            const { baseUri, language, apiKey } = api;

            const params = {
                query: store.filter,
                api_key: apiKey,
                language
            }

            axios.get(`${baseUri}/search/movie`, { params })
                .then((res) => {
                    store.movies = res.data.results;
                }).catch((err) => {
                    console.log(err)
                })
        }

    }
};
</script>

<template>
    <AppHeader @search-movies="searchMovies" />

    <main id="screen">
        <MoviesList />
    </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>