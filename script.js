const navBar = document.getElementsByTagName("nav")[0];
const darkBtn = document.getElementById("dark-btn");
const cardSection = document.getElementById("cards-section");

const languageNames = document.getElementsByClassName('language-name');
const languageDescription = document.getElementsByClassName('language-description');
const programCard = document.getElementsByClassName('program-card');
const programNames = document.getElementsByClassName('program-name');
const programDescription = document.getElementsByClassName('program-description');

function changeColor(array, color)
{
    for (i=0; i<array.length;i++)
    {
        array[i].style.color = color;
    }
}

function darkOn()
{
    document.body.style.backgroundColor = '#111';
    navBar.className += 'dark-nav';
    darkBtn.setAttribute('src', "Images/sun.png");
    changeColor(languageNames, 'white');
    changeColor(languageDescription, 'white');
    cardSection.style.background = "linear-gradient(135deg, rgb(0,125,255), rgb(55,155,255))";
    changeColor(programNames, 'white');
    changeColor(programDescription, 'white');

    for (i=0; i<programCard.length;i++)
    {
        programCard[i].className += ' dark-program-card';
    }
}

function toggle()
{
    darkMode = !darkMode;
    if(darkMode)
    {
        darkOn();
    }
    else
    {
        document.body.style.backgroundColor = 'white';
        navBar.classList.remove("dark-nav")
        darkBtn.setAttribute('src', "Images/moon.png");
        changeColor(languageNames, 'black');
        changeColor(languageDescription, 'black');
        cardSection.style.background = "linear-gradient(135deg, rgb(0,125,255), rgb(55,0,55))";
        changeColor(programNames, 'black');
        changeColor(programDescription, 'black');
        
        for (i=0; i<programCard.length;i++)
        {
            programCard[i].classList.remove("dark-program-card");
        }
    }
    localStorage.setItem('mode', String(darkMode))
}

if (localStorage.length == 0)
{
    darkMode = false;
    localStorage.setItem('mode', "false")
}
else if (localStorage.getItem('mode') == "true")
{
    darkMode = true;
    darkOn();
}
else
{
    darkMode = false;
}