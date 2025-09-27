
// Selector variables
const selector = document.getElementById("mode");
const body = document.body;

// Attaching the function to the dropdown
selector.addEventListener("change", changeTheme);

// Changes the theme: either light or dark mode
function changeTheme(){
    if(selector.value == "dark"){
        console.log("dark mode activated")
        body.classList.add("dark")
        console.log(body.classList)
    } else{
        body.classList.remove("dark")
        console.log(body.classList)
    }
}