<script>
export default {
    name: 'JumbotronMain'
};
</script>

<template>
    <section id="jumbotron">
        <h1>I tuoi film e le tue serie TV preferite <br> a portata di mano.</h1>
    </section>
</template>

<style lang="scss" scoped>
#jumbotron {
    height: 500px;
    background-image: url('../assets/img/sfondo-netflix.jpg');
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        color: white;
        z-index: 1;
    }
}

#jumbotron::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}
</style>
