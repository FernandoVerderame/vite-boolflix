<script>
import ProductionList from './movies/ProductionList.vue';
import JumbotronMain from './JumbotronMain.vue';

export default {
    name: 'AppMain',

    components: { ProductionList, JumbotronMain }
};
</script>

<template>
    <main>
        <JumbotronMain />
        <div class="container">
            <ProductionList />
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #1B1B1B;
    min-height: calc(100vh - 80px);
}
</style>