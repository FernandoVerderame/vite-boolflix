<script>
import { store } from '../../data/store'
import MoviesCard from './MoviesCard.vue';

export default {
    name: 'MoviesList',

    components: { MoviesCard },

    data: () => store
};
</script>

<template>
    <MoviesCard v-for="movie in movies" :key="movie.id" v-bind="movie" />
</template>

<style lang="scss" scoped></style>