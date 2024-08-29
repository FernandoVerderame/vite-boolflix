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
            <div class="nav-right d-flex align-items-center">
                <SearchForm @submit-search="$emit('search-productions')" @term-change="$emit('term-change', $event)"
                    placeholder="Scrivi qui..." buttonLabel="Cerca" />
                <div class="notifications">
                    <a href="#">
                        <FontAwesomeIcon icon="fa-solid fa-bell" class="fa-2x m-3 bell" />
                        <div class="number-not">1</div>
                    </a>
                </div>
                <div class="profile-icon">
                    <img src="../assets/img/profile-icon.png" alt="profile">
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #EE3424;
    height: 80px;
}

.nav-bar {
    width: 90vw;
    margin: 0 auto;

    .nav-left {
        img {
            width: 150px;
            margin-right: 20px;
        }
    }

    .nav-right {
        img {
            width: 50px;
            background-color: dodgerblue;
            box-shadow: 0px 0px 8px black;
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

.notifications {
    position: relative;

    .bell {
        color: #000;
    }

    .number-not {
        position: absolute;
        top: 10px;
        right: 10px;
        font-weight: 600;
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 50%;
        background-color: dodgerblue;
    }
}
</style>