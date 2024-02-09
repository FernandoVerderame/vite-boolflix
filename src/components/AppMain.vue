<script>
import ProductionList from './movies/ProductionList.vue';

export default {
    name: 'AppMain',

    components: { ProductionList }
};
</script>

<template>
    <main>
        <div class="container">
            <ProductionList />
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #1B1B1B;
}
</style>