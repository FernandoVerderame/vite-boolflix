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
    <section class="py-5">
        <h2 class="mb-4">Movies</h2>
        <div class="row layout">
            <ProductionCard v-for="movie in store.movies" :key="movie.id" :production="movie" />
        </div>
    </section>

    <section class="py-5">
        <h2 class="mb-4">Series</h2>
        <div class="row">
            <ProductionCard v-for="serie in store.series" :key="serie.id" :production="serie" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
h2 {
    color: white;
    font-weight: 600;
}

section .layout {
    row-gap: 100px;
}
</style>