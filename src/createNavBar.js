import logoImage from './images/logo.png';
function component() {
    const element = document.createElement('div');
    const about = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
    const logo = document.createElement('img');
    const navbarwrapper = document.createElement('div');
    navbarwrapper.setAttribute("id", "navbar-wrapper");
    about.setAttribute("id", "about");
    contact.setAttribute("id", "contact");
    menu.setAttribute("id", "menu");
    element.setAttribute("id", "nav-bar");
    about.innerText=('About');
    menu.innerText=('Menu');
    contact.innerText=('Contact');
    logo.src=logoImage;
    navbarwrapper.appendChild(about);
    navbarwrapper.appendChild(menu);
    navbarwrapper.appendChild(contact);
    element.appendChild(logo);
    element.appendChild(navbarwrapper);
    return element;
  }
  export default component;