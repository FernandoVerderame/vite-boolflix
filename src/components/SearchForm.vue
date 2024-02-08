<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'SearchForm',
    data: () => ({ searchTerm: '' }),
    props: {
        buttonLabel: String,
        placeholder: String
    },
    emits: ['submit-search', 'term-change'],
    components: { FontAwesomeIcon }
};
</script>

<template>
    <form @submit.prevent="$emit('submit-search')" class="d-flex gap-2">
        <div class="input-group">
            <span class="input-group-text">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </span>
            <input type="text" class="form-control" :placeholder="placeholder" v-model.trim="searchTerm"
                @keyup="$emit('term-change', searchTerm)">
        </div>
        <button class="btn btn-primary">{{ buttonLabel }}</button>
    </form>
</template>

<style lang="scss" scoped>
.input-group {}

button {
    background-color: black;
    border: 0;
    box-shadow: 0px 0px 8px #000;
    font-weight: 600;

    &:hover {
        background-color: gray;
    }
}
</style>