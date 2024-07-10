<template>
    <div id="navbarContainer" class="navbar">
        <div id="leftSide">
            <img id="logo" src="../assets/favicon/android-chrome-512x512.png" alt="Current Logo">
        </div>
        <div id="middle">
            <h2>Home | About | Experience | Projects | Resume | Misc</h2>
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
        flex: 5;
        text-align: center;
    }
    #rightBumper{
        flex: 1;
    }

    /* Handles sizing of the logo image to the top left */
    #logo{
        width: 6rem;
        height: 6rem;
    }
</style>