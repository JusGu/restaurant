import noodleImage from './images/noodles.png';
function createContact() {
    // Create the main page
    const mainPage = document.createElement('div');
    mainPage.setAttribute("id", "main-page");
    
    // create tagline and description wrapper
    const taglineWrapper = document.createElement('div');
    taglineWrapper.setAttribute("id", "tagline-wrapper");
    // create the tagline
    const tagline = document.createElement('h1');
    tagline.setAttribute("id", "tagline");
    tagline.innerHTML = "Contact";

    // create the description under tagline
    const description = document.createElement('h3');
    description.setAttribute("id", "description");
    description.innerHTML = "If you have any questions or comments, please contact us at info@spicymiso.com. Or call us at 1-888-4-MISO-NO. <br></br>Thank you for choosing Spicy Miso!";
    // description.innerText += "The perfect dish to have on a cold night, our Spicy Miso Noodles are full of flavor and sure to please.";
    // description.innerText += "Made with fresh ingredients and a perfect blend of spice, these noodles are a must-try.";

    // image
    const image = document.createElement('img');
    image.setAttribute("id", "noodles-image");
    image.src = noodleImage;

    taglineWrapper.appendChild(tagline);
    taglineWrapper.appendChild(description);

    mainPage.appendChild(taglineWrapper);
    mainPage.appendChild(image);
    return mainPage;
}
export default createContact;