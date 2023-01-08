<template>
    <div class="navbar">
        <a href="/" class="navbar-button">
            Home
        </a>
        <a href="/bundles" class="navbar-button">
            Bundles
        </a>
        <a href="/gear" class="navbar-button">
            Gear
        </a>
        <a href="/seasons" class="navbar-button">
            Seasons
        </a>
        <a href="/sprays" class="navbar-button">
            Sprays
        </a>
        <a href="/agents" class="navbar-button">
            Agents
        </a>
    </div>
</template>

<script>
export default {
    name: "myNavbar"
}
</script>

<style>
    .navbar {
        display: flex;
        justify-content: center;
        width: 500px;
        padding: 10px 10px;
        margin: auto;
        border-radius: 15px;
    }

    .navbar-button {
        padding: 10px;
        text-decoration: none;
        color: rgb(255, 255, 255);
    }

    .navbar-button:hover {
        color: rgb(180, 24, 24)
    }

    @media(max-width: 1600px) {
        .navbar {
            width: 300px;
            font-size: 11px;
        }
    }

    @media(max-width: 1200px) {
        .navbar {
            width: 500px;
            font-size: 17px;
        }
    }
</style>