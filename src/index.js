import './style.css';
import component from './createNavBar.js';
import createMainPage from './createMainPage';


function createContent(){
    document.body.innerHTML="";
    const content = document.createElement('div');
    content.setAttribute("id", "content");
    content.appendChild(component());
    content.appendChild(createMainPage());
    document.body.appendChild(content);
}
createContent()

const about = document.getElementById('about')
about.addEventListener('click', handleAboutClick)

function handleAboutClick(){
    document.body.innerHTML="";
    const content = document.createElement('div');
    content.setAttribute("id", "content");
    content.appendChild(component());
    document.body.appendChild(content);
}