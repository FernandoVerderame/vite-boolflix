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
            <div class="nav-left d-flex align-items-center ">
                <div class="logo-image">
                    <img src="../assets/img/logo-boolflix.png" alt="logo">
                </div>

                <div class="nav-links">
                    <ul class="d-flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serie TV</a></li>
                        <li><a href="#">Film</a></li>
                        <li><a href="#">Originali</a></li>
                        <li><a href="#">Aggiunti di recente</a></li>
                        <li><a href="#">La mia lista</a></li>
                    </ul>
                </div>
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
    width: 90vw;
    margin: 0 auto;

    .nav-left {
        img {
            width: 250px;
        }
    }
}

ul li a {
    font-weight: 600;
    text-shadow: 0px 0px 8px #000;
    width: 100%;
    padding: 10px;

    &:hover {
        background-color: black;
        transition: .4s;
    }
}
</style>