import noodleImage from './images/noodles.png';
function createAbout() {
    // Create the main page
    const mainPage = document.createElement('div');
    mainPage.setAttribute("id", "main-page");
    
    // create tagline and description wrapper
    const taglineWrapper = document.createElement('div');
    taglineWrapper.setAttribute("id", "tagline-wrapper");
    // create the tagline
    const tagline = document.createElement('h1');
    tagline.setAttribute("id", "tagline");
    tagline.innerHTML = "About Us";

    // create the description under tagline
    const description = document.createElement('p');
    description.setAttribute("id", "description");
    description.innerHTML = "At Spicy Miso, we believe that the best noodles are made with fresh, quality ingredients. That's why we only use the finest spices and miso in our noodles. We know that some people can't handle the heat, which is why we offer a range of spice levels to suit everyone's taste. Whether you like it mild or hot, we've got the perfect noodles for you. <br></br>We started out by selling our noodles at local markets and fairs, and word quickly spread about our delicious noodles. We then decided to open our own restaurant so that everyone could enjoy our noodles. We're proud to say that we're one of the only restaurants in the world that specializes in Spicy Miso noodles. So come and visit us today. We guarantee you won't be disappointed!";
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
export default createAbout;