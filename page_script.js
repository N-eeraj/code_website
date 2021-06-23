let darkMode = false;

const navBar = document.getElementsByTagName("nav")[0];
const darkBtn = document.getElementById("dark-btn");
const description = document.getElementById("details");
const terminal = document.getElementById("code");


function toggle()
{
    darkMode = !darkMode;
    if(darkMode)
    {
        document.body.style.backgroundColor = '#111';
        navBar.className += 'dark-nav';
        darkBtn.setAttribute('src', "../Images/sun.png");
        description.style.color = 'white';
        terminal.style.backgroundColor = "#222";
    }
    else
    {
        document.body.style.backgroundColor = 'white';
        navBar.classList.remove("dark-nav")
        darkBtn.setAttribute('src', "../Images/moon.png");
        description.style.color = 'black';
        terminal.style.backgroundColor = "#111";
    }
}