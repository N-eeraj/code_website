const programName = document.head.id;

const description = document.getElementById("details");
const terminal = document.getElementById("code");
const download = document.getElementById("download");

const languages = document.getElementsByClassName("language-btn");


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

function selectLang(lang)
{
    path = '../Code/' + lang + '/' + programName +'.' + lang;
    for (i=0; i<languages.length; i++)
    {
        languages[i].style.filter = 'grayscale(100%)';
    }
    document.getElementById(lang).style.filter = 'grayscale(0)';

    changeCode(lang);

    download.href = path;
}

toggle()
selectLang('c');