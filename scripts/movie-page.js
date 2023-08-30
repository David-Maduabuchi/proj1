// buttons
const borderImage = "linear-gradient(to right, rgb(232, 43, 226), rgb(133, 113, 209), rgb(0, 174, 255)) 3";
const allMoviesButton = document.getElementById("all-movies-button");
const trendingButton = document.getElementById("trending-button");
const upcomingButton = document.getElementById("upcoming-premiere-button");
// table variables
const allMoviesTable = document.getElementById("all-movies-table");
const upcomingPremiereTable = document.getElementById("upcoming-premiere-table");
const trendingTable = document.getElementById("trending-table");


const allMovies = () => {
    allMoviesTable.style.display = "block";
    upcomingPremiereTable.style.display = "none";
    trendingTable.style.display = "none";
    // all movies Button
    allMoviesButton.style.color = "black";
    allMoviesButton.style.borderBottom = "2px solid";
    allMoviesButton.style.borderImage = borderImage;
    // Other Buttons
    trendingButton.style.color = "rgb(192, 192, 192)";
    trendingButton.style.border = "none";
    upcomingButton.style.color = "rgb(192, 192, 192)";
    upcomingButton.style.border = "none";


}
const trending = () => {
    trendingTable.style.display = "block";
    allMoviesTable.style.display = "none";
    upcomingPremiereTable.style.display = "none";
    // trending button style
    trendingButton.style.borderBottom = "2px solid";
    trendingButton.style.borderImage = borderImage;
    trendingButton.style.color = "black";
    // other buttons
    allMoviesButton.style.color = "rgb(192, 192, 192)";
    allMoviesButton.style.border = "none";
    upcomingButton.style.color = "rgb(192, 192, 192)";
    upcomingButton.style.border = "none";

}
const upcomingPremiere = () => {
    upcomingPremiereTable.style.display = "block";
    allMoviesTable.style.display = "none";
    trendingTable.style.display = "none";
    // upcoming button style
    upcomingButton.style.borderBottom = "2px solid";
    upcomingButton.style.borderImage = borderImage;
    upcomingButton.style.color = "black";
    // other buttons
    trendingButton.style.color = "rgb(192, 192, 192)";
    trendingButton.style.border = "none";
    allMoviesButton.style.color = "rgb(192, 192, 192)";
    allMoviesButton.style.border = "none";
}
