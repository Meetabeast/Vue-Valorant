<template>
    <theme></theme>
    <navbar></navbar>
    <div class="searchContainer">
        <input type="text" id="search" class="input-field" placeholder="Search a Spray">
    </div>
    <div class="container">
        <div v-for="agent in agents" :key="agent.uuid" class="card">
            <img :src="agent.displayIcon" alt="displayIcon" class="displayIcon">
            <h2 class="displayName">{{ agent.displayName }}</h2>
            <p class="role">Role: {{ agent.role }}</p>
            <p>Developer: {{ agent.developer }}</p>
            <div class="abilitie" v-for="abilitie in agent.abilities" :key="abilitie.slot">
                {{ abilitie.slot }}: {{abilitie.displayName}}
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Theme from "../components/Theme.vue";
import Navbar from "../components/Navbar.vue"

export default {
    name: "myAgents",
    components: {
        Theme,
        Navbar
    },
    data() {
        return {
            agents: []
        }
    },
    mounted() {
        axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true').then(res => {
            res.data.data.forEach(data => {
                let array = {
                    displayName: data.displayName,
                    role: data.role.displayName,
                    displayIcon: data.displayIconSmall,
                    developer: data.developerName,
                    abilities: data.abilities,
                    uuid: data.uuid
                };
                console.log(data)

                this.agents.push(array);
            })
        });

        let input = document.getElementById("search");

        input.onkeyup = function() {
            let searchInput = document.getElementById("search").value;
            searchInput = searchInput.toLowerCase();
            let allAgents = document.getElementsByClassName('displayName');
            let allAgentsCard = document.getElementsByClassName('card');

            for(var i = 0; i < allAgents.length; i++) {
                if(!allAgents[i].innerHTML.toLowerCase().includes(searchInput)) {
                    allAgentsCard[i].style.display = "none"
                } else {
                    allAgentsCard[i].style.display = "block";
                }
            }
        }
    }
}
</script>

<style scoped>

    .input-field {
        display: block;
        margin-right: auto;
        margin-left: auto;
        border: none;
        font-size: 1rem;
        padding: 1rem;
        margin-bottom: 2rem;
        margin-top: 3rem;
        border-radius: 10px;
        width: 500px;
        background-color: rgb(18, 18, 20);
        color: var(--textColor1)
    }

    .input-field:focus {
        outline: none;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .card {
        background-color: rgb(18, 18, 20);
        color: rgb(255, 255, 255);
        width: 500px;
        height: 300px;
        border-radius: 15px;
        padding: 10px 10px;
        margin: 22px;
    }

    .displayIcon {
        display: flex;
        float: right;
        width: 150px;
        height: 150px;
    }

    @media(max-width: 1200px) {
        .input-field {
            width: 300px;
        }
    }

    @media (max-width: 1600px) {
        .input-field {
            width: 470px
        }
    }

    @media (max-width: 800px) {
        .input-field {
            width: 300px;
        }
    }
</style>