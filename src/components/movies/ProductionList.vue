<script>
import { store } from '../../data/store'
import ProductionCard from './ProductionCard.vue';

export default {
    name: 'MoviesList',

    data: () => ({ store }),

    components: { ProductionCard },

    computed: {
        isEmpty() {
            return !this.store.movies.length && !this.store.series.length;
        }
    }
};
</script>

<template>
    <div v-if="isEmpty">
        <section class="sec-search">
            <h2 class="mb-4 text-center">Cerca un film o una serie TV!</h2>
        </section>
    </div>

    <div v-else>
        <section class="py-5">
            <h2 class="mb-4">Movies</h2>
            <div class="row layout">
                <ProductionCard v-for="movie in store.movies" :key="movie.id" :production="movie" />
            </div>
        </section>

        <section class="py-5">
            <h2 class="mb-4">Series</h2>
            <div class="row layout">
                <ProductionCard v-for="serie in store.series" :key="serie.id" :production="serie" />
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    color: white;
    font-weight: 600;
}

.sec-search {
    padding-top: 150px;
}

section .layout {
    row-gap: 100px;
}
</style>