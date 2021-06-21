function pageLoad(){
    const body = document.querySelector('body');
    body.setAttribute('style', 'background:#39658b;')

    const backgroundImage = document.createElement('div');
    body.appendChild(backgroundImage);
    backgroundImage.setAttribute('style','background-image: url("../src/imgs/ramen-stand.gif");background-repeat:no-repeat;height:1350px;width:100vw;position:fixed;background-position: top center;top: -500px;z-index:-1;');

    const element = document.querySelector('#content');
    element.setAttribute('style', 'position:absolute;width:100vw;height: max-content;top:1000px;background-image: url("../src/imgs/background-transition.png");left: 0%;right: 0%;bottom: 0%;');

    const headLine = document.createElement('h1');
    element.appendChild(headLine);
    headLine.textContent = 'Bear-Paw Ramen';
    headLine.setAttribute('style', 'text-align:center;position:relative;top:-700px;padding-top: 25px;padding-bottom: 25px;background-color: #39658b61;font-size: 300%;text-shadow: 2px 2px aliceblue;font-family: "Trebuchet MS", sans-serif;')

    const greetingArea = document.createElement('div');
    element.appendChild(greetingArea);
    greetingArea.setAttribute('style', 'display: grid;grid-template-columns: 30vw 30vw;grid-column-gap: 0vw;top: -600px;padding-left: 25vw;position: relative;background-color: #39658b61;color: white;text-align: center;font-size: 250%;text-shadow: 2px 2px black;')

    const greetingText = document.createElement('p');
    greetingArea.appendChild(greetingText);
    greetingText.textContent = 'Welcome to the Bear-Paw Ramen. The best pixelated restaurant you can find in all of Kamakura.'

    const greetingPicture = document.createElement('img');
    greetingArea.appendChild(greetingPicture);
    greetingPicture.setAttribute('src', '../src/imgs/promotion-image.png');
    greetingPicture.setAttribute('style', 'padding-left: 25%;')

    const navBar = document.createElement('div');
    element.appendChild(navBar);
    navBar.setAttribute('style', 'display:grid;grid-template-columns:20vw 20vw 20vw;left: 10vw;position: relative;grid-column-gap: 10vw;top: -200px;')

    const scheduleButton = document.createElement('button');
    navBar.appendChild(scheduleButton);
    scheduleButton.textContent = 'Schedule';
    scheduleButton.setAttribute('style', 'background: #39658b;height: 5vw;border-width: 10px;border-color: #29445a;font-size: 2.5vw;font-weight: bold;text-shadow: 2px 2px aliceblue;color: #29445a;');
    scheduleButton.setAttribute('id', 'schedule-button');
    
    const menuButton = document.createElement('button');
    navBar.appendChild(menuButton);
    menuButton.textContent = 'Menu';
    menuButton.setAttribute('style', 'background: #39658b;height: 5vw;border-width: 10px;border-color: #29445a;font-size: 2.5vw;font-weight: bold;text-shadow: 2px 2px aliceblue;color: #29445a;');
    menuButton.setAttribute('id', 'menu-button');

    const contactsButton = document.createElement('button');
    navBar.appendChild(contactsButton);
    contactsButton.textContent = 'Contacts';
    contactsButton.setAttribute('style', 'background: #39658b;height: 5vw;border-width: 10px;border-color: #29445a;font-size: 2.5vw;font-weight: bold;text-shadow: 2px 2px aliceblue;color: #29445a;');
    contactsButton.setAttribute('id', 'contacts-button');

    const contentBox = document.createElement('div');
    element.appendChild(contentBox);
    contentBox.setAttribute('style', 'position:relative;width:40vw;height:20vw;background:#39658b;left:30vw;border-radius:1vw;top:-10vh;border: solid #29445a;border-width: .5vw;padding-bottom: 2%;display:none;');
    contentBox.setAttribute('id', 'menu-box');

    const contentBox2 = document.createElement('div');
    element.appendChild(contentBox2);
    contentBox2.setAttribute('style', 'position:relative;width:40vw;height:20vw;background:#39658b;left:30vw;border-radius:1vw;top:-10vh;border: solid #29445a;border-width: .5vw;padding-bottom: 2%;display:none;');
    contentBox2.setAttribute('id', 'contacts-box');
}

export default pageLoad;