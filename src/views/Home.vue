<template>
    <navbar></navbar>
    <theme></theme>
    <div class="wrapper">
        <div class="container">
            <h1 class="title">Valorant Stats</h1>
            <p class="description">Welcome to the Valorant Stats website here you can find many informations about Bundles, Gear, Seasons, Sprays and Agents</p>
            <a href="https://github.com/meetabeast/vue-valorant" style="text-align: center; color: rgb(255, 255, 255); text-decoration: none; font-size: 19px;">Github</a>
        </div>
    </div>
</template>

<script>
import Theme from "../components/Theme.vue"
import Navbar from "../components/Navbar.vue";

export default {
    name: "myHome",
    components: {
        Theme,
        Navbar
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 98px;
    }

    .description {
        font-size: 25px;
        position: relative;
        bottom: 40px;
    }

    body.ThemeLight a {
        color: rgb(0, 0, 0) !important
    }
</style>