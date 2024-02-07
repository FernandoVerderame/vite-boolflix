<script>
import axios from 'axios';
import { apiUri } from './data';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'Boolflix',

    components: { AppHeader, AppMain },

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
    <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>