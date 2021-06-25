let url = location.href.slice(location.href.indexOf('Programs'));
let relUrl = url.slice(9);
let programName = relUrl.slice(0, relUrl.length-5);

const navBar = document.getElementsByTagName("nav")[0];
const darkBtn = document.getElementById("dark-btn");
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
    localStorage.setItem('mode', String(darkMode))
}

function selectLang(lang)
{
    path = '../Code/' + lang + '/' + programName +'.' + lang;
    for (i=0; i<languages.length; i++)
    {
        languages[i].style.filter = 'grayscale(100%)';
        languages[i].classList.remove('shrink');
    }
    document.getElementById(lang).style.filter = 'grayscale(0)';
    document.getElementById(lang).className += ' shrink';

    try{changeCode(lang)}
    catch{console.log('default')}
    download.href = path;
}


selectLang('c');

if (localStorage.getItem('mode') == "true")
{
    darkMode = false;
    toggle()
}
else
    darkMode = false;
