let darkMode = false;

const darkBtn = document.getElementById("dark-btn");

function toggle()
{
    darkMode = !darkMode;
    if(darkMode)
        darkBtn.setAttribute('src', "Images/sun.png");
    else
        darkBtn.setAttribute('src', "Images/moon.png");
}