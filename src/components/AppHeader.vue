<script>
import SearchForm from './SearchForm.vue';

export default {
    name: 'AppHeader',

    components: { SearchForm },

    emits: ['search-productions', 'term-change']
};
</script>

<template>
    <header>
        <div class="nav-bar d-flex justify-content-between align-items-center">
            <div class="logo-image">
                <img src="../assets/img/logo-boolflix.png" alt="logo">
            </div>
            <SearchForm @submit-search="$emit('search-productions')" @term-change="$emit('term-change', $event)"
                placeholder="Scrivi qui..." buttonLabel="Cerca" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #EE3424;
}

.nav-bar {
    width: 80vw;
    margin: 0 auto;

    img {
        width: 250px;
    }
}
</style>