const popup = document.getElementById("popup");
// The updateHeader and the newMovieName are the variables expecting a new name to be inserted into them
let updateHeader = document.querySelectorAll(".updated-h1-tag");
let newMovieName = document.querySelectorAll(".updated-movie-name");
// no 8-10 represent the input and their default values 
let popupUpmovieName = document.getElementById("movie-name");
let popupOwner = document.getElementById("movie-owner");
popupOwner.defaultValue = "Sony Entertainment";
popupUpmovieName.defaultValue = "Wreck-it Ralph";

window.onclick = ((event => {
    if (event.target.matches(".popup")) { cancel(); }
}))
const updateMovieName = () => {
    popup.style.left = "0%";
}
const cancel = () => {
    popup.style.left = "100%"
}
const closePopup = () => {
    updateHeader.forEach((i) => i.innerHTML = popupUpmovieName.value);
    newMovieName.forEach((i) => i.innerHTML = popupOwner.value);

    if (popupUpmovieName.value === "") {
        alert("Movie name cannot be empty");
        // this is to prevent the header updating to an empty string
        updateHeader.forEach((i) => i.innerHTML = "Wreck-it Ralph");
    } else if (popupUpmovieName.value === "Wreck-it-Ralph") {
        alert("Please insert a new Movie name or press cancel");
    } else {
        cancel();
    }

}