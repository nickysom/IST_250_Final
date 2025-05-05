//A script that toggles on dark mode via a button

//Finds the dark mode css file 
const darkLink = document.getElementById("darkStyles");

//Finds the button to toggle dark mode on/off
const toggleBtn = document.getElementById("mode_toggle");

//Function to enable the dark mode css file
toggleBtn.addEventListener("click", () => {
    const darkOn = darkLink.disabled === false;
    darkLink.disabled = darkOn;

    //Switches the text when the button is pressed. 
    toggleBtn.textContent = darkOn ? "Dark Mode" : "Light Mode";
});
