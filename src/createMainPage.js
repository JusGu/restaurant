import noodleImage from './images/noodles.png';
function createMainPage() {
    // Create the main page
    const mainPage = document.createElement('div');
    mainPage.setAttribute("id", "main-page");
    
    // create tagline and description wrapper
    const taglineWrapper = document.createElement('div');
    taglineWrapper.setAttribute("id", "tagline-wrapper");
    // create the tagline
    const tagline = document.createElement('h1');
    tagline.setAttribute("id", "tagline");
    tagline.innerHTML = "If you can handle the <span>heat</span>, we've got the perfect noodles for you.";

    // create the description under tagline
    const description = document.createElement('h2');
    description.setAttribute("id", "description");
    description.innerText = "Made with fresh ingredients, our Spicy Miso noodles are a must-try for those who love spice.";
    // description.innerText += "The perfect dish to have on a cold night, our Spicy Miso Noodles are full of flavor and sure to please.";
    // description.innerText += "Made with fresh ingredients and a perfect blend of spice, these noodles are a must-try.";

    // create order button
    const orderButton = document.createElement('a');
    orderButton.href = "https://github.com/JusGu/restaurant";
    orderButton.target = "_blank";
    orderButton.setAttribute("id", "order-button");
    orderButton.innerText = "Order Now";

    // create menu button
    // const menuButton = document.createElement('button');
    // menuButton.setAttribute("id", "menu-button");
    // menuButton.innerText = "Menu";

    // image
    const image = document.createElement('img');
    image.setAttribute("id", "noodles-image");
    image.src = noodleImage;

    taglineWrapper.appendChild(tagline);
    taglineWrapper.appendChild(description);
    taglineWrapper.appendChild(orderButton);

    mainPage.appendChild(taglineWrapper);
    mainPage.appendChild(image);
    return mainPage;
}
export default createMainPage;