<script>
import axios from 'axios';
import { api } from './data/index'
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'Boolflix',

    data: () => ({ store }),

    components: { AppHeader, AppMain },

    methods: {
        setTitleFilter(term) {
            store.filter = term;
        },
        searchProductions() {
            if (!store.filter) {
                store.movies = [];
                store.series = [];
                return;
            }

            this.fetchApi("search/movie", 'movies');
            this.fetchApi("search/tv", 'series');
        },
        fetchApi(endpoint, collection) {
            const { baseUri, language, apiKey } = api;
            const params = {
                query: store.filter,
                api_key: apiKey,
                language
            }

            axios.get(`${baseUri}/${endpoint}`, { params })
                .then((res) => {
                    store[collection] = res.data.results;
                }).catch((err) => {
                    console.log(err)
                })
        }
    }
};
</script>

<template>
    <AppHeader @search-productions="searchProductions" @term-change="setTitleFilter" />

    <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>