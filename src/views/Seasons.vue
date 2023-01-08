<template>
    <theme></theme>
    <navbar></navbar>
    <div class="container">
        <div v-for="ss in seasons" :key="ss.uuid" class="card">
            <h2>{{ss.displayName}}</h2>
            <p class="info">Started At: {{ ss.startTime}}</p>
            <p class="info">Ended At: {{ss.endTime}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Theme from "../components/Theme.vue";
import Navbar from "../components/Navbar.vue";

export default {
    name: "mySeasons",
    components: {
        Theme,
        Navbar
    },
    data() {
        return {
            seasons: []
        }
    },
    mounted() {
        axios.get('https://valorant-api.com/v1/seasons').then(res => {
            res.data.data.forEach(data => {
                let array = {
                    displayName: data.displayName,
                    startTime: new Date(data.startTime).toLocaleDateString("en-US"),
                    endTime: new Date(data.endTime).toLocaleDateString("en-US"),
                    uuid: data.uuid
                }
                
                this.seasons.push(array);
            });
        })
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
</style>