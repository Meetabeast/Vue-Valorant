import { createRouter, createWebHistory } from "vue-router";

// Routes
import Home from "../views/Home.vue"
import Bundles from "../views/Bundles.vue";
import Gear from "../views/Gear.vue";
import Seasons from "../views/Seasons.vue";
import Sprays from "../views/Sprays.vue";
import Agents from "../views/Agents.vue";

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Bundles",
        path: "/bundles",
        component: Bundles
    },
    {
        name: "Gear",
        path: "/gear",
        component: Gear
    },
    {
        name: "Seasons",
        path: "/seasons",
        component: Seasons
    },
    {
        name: "Sprays",
        path: "/sprays",
        component: Sprays
    },
    {
        name: "Agents",
        path: "/agents",
        component: Agents
    }
]

const router = createRouter({
    history: createWebHistory(),
    parseQuery: false,
    mode: 'history',
    routes
});

export default router;