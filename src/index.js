import './style.css';
import createNav from './createNavBar.js';
import createMainPage from './createMainPage';
import createAbout from './createAbout';
import createMenu from './createMenu';
import createContact from './createContact';


function createContent(){
    document.body.innerHTML="";
    const content = document.createElement('div');
    content.setAttribute("id", "content");
    content.appendChild(createNav());
    content.appendChild(createMainPage());
    document.body.appendChild(content);
}
createContent()

const logo = document.querySelector('#nav-bar > img');
const about = document.getElementById('about');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');


logo.addEventListener('click', handleLogoClick);
function handleLogoClick(){
    const last  = document.querySelector('#content').lastChild;
    last.remove();
    document.querySelector('#content').appendChild(createMainPage());
}


about.addEventListener('click', handleAboutClick);
function handleAboutClick(){
    const last  = document.querySelector('#content').lastChild;
    last.remove();
    document.querySelector('#content').appendChild(createAbout());
}


menu.addEventListener('click', handleMenuClick)
function handleMenuClick(){
    const last  = document.querySelector('#content').lastChild;
    last.remove();
    document.querySelector('#content').appendChild(createMenu());
}

contact.addEventListener('click', handleContactClick)
function handleContactClick(){
    const last  = document.querySelector('#content').lastChild;
    last.remove();
    document.querySelector('#content').appendChild(createContact());
}

