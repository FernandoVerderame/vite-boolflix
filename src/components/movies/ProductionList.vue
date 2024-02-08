<script>
import { store } from '../../data/store'
import ProductionCard from './ProductionCard.vue';

export default {
    name: 'MoviesList',

    data: () => ({ store }),

    components: { ProductionCard }
};
</script>

<template>
    <section>
        <h2>Movies</h2>
        <ProductionCard v-for="movie in store.movies" :key="movie.id" :production="movie" />
    </section>

    <section>
        <h2>Series</h2>
        <ProductionCard v-for="serie in store.series" :key="serie.id" :production="serie" />
    </section>
</template>

<style lang="scss" scoped></style>