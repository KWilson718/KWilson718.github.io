<template>
    <div id="navBarContainer">
        <div id="leftSide">
            <img id="logo" src="../assets/favicon/android-chrome-512x512.png" alt="Current Logo">
        </div>
        <div id="rightSide">
            <h2>Home | About | Experience | Projects | Resume | Misc</h2>
        </div>
    </div>
    
</template>

<style scoped>
    #navBarContainer{
        align-self: flex-start;
        display: flex;
        justify-content: space-between;
    }
    #leftSide{
        flex: 1;
    }
    #logo{
        width: 8rem;
        height: 8rem;
    }
    #rightSide{
        flex: 5;
    }
</style>