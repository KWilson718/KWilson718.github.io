<template>
    <div id="footerContainer">
        <table class="footerTable">
            <thead>
                <tr>
                    <td><p><b>Social Links</b></p></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="https://github.com/KWilson718" class="socialLink">GitHub</a></td>
                </tr>
                <tr>
                    <td><a href="https://www.linkedin.com/in/wilson--kyle/" class="socialLink">LinkedIn</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
/* General Formatting */
#footerContainer{
    padding: 0rem;
    margin: 0rem;
    display: flex;
    justify-content: space-evenly;
    background-color: gray;
}
#leftSide{
    flex: 1;
}
#center{
    flex: 2;
}
#rightSide{
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Table Structure */
.footerTable thead tr td p{
    padding: 0;
    margin: 0;
}

/* Link Handling */

.socialLink:link,
.socialLink:visited,
.socialLink:hover{
    text-decoration: none;
    color: white;
}
.socialLink:active{
    text-decoration: underline;
    color: white;
} 

</style>