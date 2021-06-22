let darkMode = false;

const navBar = document.getElementsByTagName("nav")[0];
const darkBtn = document.getElementById("dark-btn");

function toggle()
{
    darkMode = !darkMode;
    if(darkMode)
    {
        document.body.style.backgroundColor = '#111';
        navBar.className += 'dark-nav';
        darkBtn.setAttribute('src', "../Images/sun.png");
    }
    else
    {
        document.body.style.backgroundColor = 'white';
        navBar.classList.remove("dark-nav")
        darkBtn.setAttribute('src', "../Images/moon.png");
    }
}