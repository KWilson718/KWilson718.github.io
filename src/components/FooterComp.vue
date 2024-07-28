<template>
    <div id="footerContainer">
        <!-- <div id="leftSide">
            <h1>Kyle Wilson</h1>
        </div>
        <div id="center">
            
        </div>
        <div id="rightSide">
            <table id="socialTable">
                <tr>
                    <th colspan="3">
                        <p>Links for Social Media</p>
                    </th>
                </tr>
                <tr>
                    <td>
                        <p>GitHub:</p>
                    </td>
                    <td colspan="2">
                        <a href="https://github.com/KWilson718" class="socialLink">github.com/KWilson718</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>LinkedIn:</p>
                    </td>
                    <td colspan="2">
                        <a href="https://www.linkedin.com/in/wilson--kyle/" class="socialLink">linkedin.com/in/wilson--kyle</a>
                    </td>
                </tr>
            </table>
        </div> -->
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
    color: lightgray;
}
.socialLink:active{
    text-decoration: underline;
    color: white;
} 

</style>