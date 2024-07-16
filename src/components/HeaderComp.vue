<script>
    import navigationMethods from '@/mixins/navigation.js';

    export default{
        name: 'HeaderComponent',
        methods: {
            ...navigationMethods.methods,
        }
    }
</script>

<template>
    <div id="navbarContainer" class="navbar">
        <div id="leftSide">
            <img id="logo" src="../assets/favicon/android-chrome-512x512.png" alt="Current Logo">
        </div>
        <div id="middle">
            <div class="navButton" @click="goToHome">
                <button>Home</button>
            </div>
            <div class="navButton" @click="goToAbout">
                <button>About</button>
            </div>
            <div class="navButton" @click="goToExperience">
                <button>Experience</button>
            </div>
            <div class="navButton" @click="goToProjects">
                <button>Projects</button>
            </div>
            <div class="navButton" @click="goToResume">
                <button>Resume</button>
            </div>
            <div class="navButton" @click="goToMisc">
                <button>Misc</button>
            </div>
        </div>
        <div id="rightBumper"></div>
    </div>
    
</template>

<style scoped>
    /* Formats size of each section of the bar */
    #navbarContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:gray;
    }
    #leftSide{
        flex: 1;
    }
    #middle{
        flex: 3;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #rightBumper{
        flex: 1;
    }

    /* Formatting the Main Nav Buttons */
    .navButton{
        flex: 1;
    }

    /* Handles sizing of the logo image to the top left */
    #logo{
        padding: .5rem;
        width: 6rem;
        height: 6rem;
    }
</style>