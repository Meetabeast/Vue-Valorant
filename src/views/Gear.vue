<template>
    <theme></theme>
    <navbar></navbar>
    <div class="container">
        <div v-for="gr in gear" :key="gr.uuid" class="card">
            <img :src="gr.displayIcon" alt="Display Icon" class="displayIcon">
            <h1 class="displayName">{{ gr.displayName }}</h1>
            <p class="info">Cost: {{ gr.cost}}</p>
            <p class="info">Category: {{gr.category}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Theme from "../components/Theme.vue";
import Navbar from "../components/Navbar.vue";

export default {
    name: "myGear",
    components: {
        Theme,
        Navbar
    },
    data() {
        return {
            gear: []
        }
    },
    mounted() {
        axios.get("https://valorant-api.com/v1/gear").then(res => {
            res.data.data.forEach(a => {
                let array = {
                    description: a.description,
                    displayIcon: a.displayIcon,
                    displayName: a.displayName,
                    cost: a.shopData.cost,
                    category: a.shopData.category,
                    uuid: a.uuid
                }

                this.gear.push(array);
            })
        });
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .card {
        width: 500px;
        height: 180px;
        border-radius: 15px;
        background-color: rgb(18, 18, 20);
        color: rgb(255, 255, 255);
        padding: 10px 10px;
        margin: 22px;
    }

    .card:hover {
        transform: scale(1.05)
    }

    .displayIcon {
        padding: 10px 10px;
        width: 150px;
        height: 150px;
        display: flex;
        float: right;
    }
</style>