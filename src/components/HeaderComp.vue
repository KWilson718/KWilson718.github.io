<template>
    <div id="navbarContainer" class="navbar">
        <div id="leftSide">
            <img id="logo" src="../assets/favicon/android-chrome-512x512.png" alt="Current Logo">
        </div>
        <div id="middle">
            <!-- <h2>Home | About | Experience | Projects | Resume | Misc</h2> -->
            <div class="navButton">
                <h2>Home</h2>
            </div>
            <div class="navButton">
                <h2>About</h2>
            </div>
            <div class="navButton">
                <h2>Experience</h2>
            </div>
            <div class="navButton">
                <h2>Projects</h2>
            </div>
            <div class="navButton">
                <h2>Resume</h2>
            </div>
            <div class="navButton">
                <h2>Misc</h2>
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