<template>
    <navbar></navbar>
    <theme></theme>
    <div class="searchContainer">
        <input type="text" id="search" class="input-field" placeholder="Search a Spray">
    </div>
    <div class="container">
        <div v-for="(p, index) in paginated" :key="index" class="card">
            <img :src="p.displayIcon" alt="displayIcon" class="displayIcon">
            <h1 class="displayName">{{ p.displayName}}</h1>
        </div>
    </div>
    <div class="buttons">
        <button @click="prev()" class="btn">Prev</button>
        <button @click="next()" class="btn">Next</button>
    </div>
</template>

<script>
import axios from "axios";
import Theme from "../components/Theme.vue";
import Navbar from "../components/Navbar.vue";

export default {
    name: "mySprays",
    components: {
        Theme,
        Navbar
    },
    data() {
        return {
            sprays: [],
            pageSize: 50,
            current: 1
        }
    },
    computed: {
        indexStart() {
            return (this.current - 1) * this.pageSize;
        },
        indexEnd() {
            return this.indexStart + this.pageSize
        },
        paginated() {
            return this.sprays.slice(this.indexStart, this.indexEnd);
        }
    },
    methods: {
        prev() {
            
            if(this.current === 1) {
                this.current = 1;
            } else {
                this.current--;
            }
        },
        next() {
            if(this.current === 8) {
                this.currnet = 8;
            } else {
                this.current++;
            }
        }
    },
    mounted() {
        axios.get('https://valorant-api.com/v1/sprays').then(res => {
            res.data.data.forEach(data => {
                let array = {
                    displayIcon: data.displayIcon,
                    displayName: data.displayName,
                    uuid: data.uuid
                }

                this.sprays.push(array);
            });
        });

        let input = document.getElementById("search");

        input.onkeyup = function() {
            let searchInput = document.getElementById("search").value;
            searchInput = searchInput.toLowerCase();
            let allSprays = document.getElementsByClassName('displayName');
            let allSpraysCard = document.getElementsByClassName('card');

            for(var i = 0; i < allSprays.length; i++) {
                if(!allSprays[i].innerHTML.toLowerCase().includes(searchInput)) {
                    allSpraysCard[i].style.display = "none"
                } else {
                    allSpraysCard[i].style.display = "block";
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
        margin: 22px;
        width: 500px;
        height: 150px;
        border-radius: 10px;
    }

    .displayIcon {
        display: flex;
        float: right;
        width: 125px;
        height: 125px;
    }

    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 500px;
    }

    .btn {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        width: 500px;
        height: 70px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.35rem;
        color: rgb(255, 255, 255);
        background-color: #007bff;
        text-decoration: none;
        margin: 22px;
    }
</style>