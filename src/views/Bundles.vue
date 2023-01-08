<template>
    <navbar></navbar>
    <theme></theme>
    <div class="searchContainer">
        <input type="text" id="search" class="input-field" placeholder="Search a Bundle">
    </div>
    <div class="wrapper">
        <div class="container">
            <div v-for="bundle in bundles" :key="bundle.uuid" class="card">
                <h1 class="description">{{bundle.description}}</h1>
                <img :src=bundle.displayIcon class="displayIcon">
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Theme from "../components/Theme.vue";
import axios from "axios";

export default {
    name: "myBundels",
    components: {
        Navbar,
        Theme
    },
    data() {
        return {
            bundles: []
        }
    },
    mounted() {
        axios.get('https://valorant-api.com/v1/bundles').then(res => {
            res.data.data.forEach(a => {
                let array = {
                    uuid: a.uuid,
                    description: a.description,
                    displayIcon: a.displayIcon
                }

                this.bundles.push(array);
            })
        });

        let input = document.getElementById("search");

        input.onkeyup = function() {
            let searchInput = document.getElementById("search").value;
            searchInput = searchInput.toLowerCase();
            let allBundles = document.getElementsByClassName('description');
            let allBundlesCard = document.getElementsByClassName('card');

            for(var i = 0; i < allBundles.length; i++) {
                if(!allBundles[i].innerHTML.toLowerCase().includes(searchInput)) {
                    allBundlesCard[i].style.display = "none"
                } else {
                    allBundlesCard[i].style.display = "block";
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
        padding: 10px 10px;
        margin: 10px;
        width: 500px;
        height: 450px;
        border-radius: 15px;
    }

    .description {
        padding-top: 30px;
        text-align: center;
    }

    .displayIcon {
        padding-top: 30px;
        width: 100%;
        height: 250px;
    }

    .searchContainer {
        display: block;
        justify-content: center
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