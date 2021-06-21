function buildMenu(){
    menuContent();
}

function menuContent(){
    const menuBox = document.getElementById('menu-box');
    const item1 = document.createElement('div');
    const item1Picture = document.createElement('img');
    const item1Description = document.createElement('p');
    const item1Price = document.createElement('p');

    const item2 = document.createElement('div');
    const item2Picture = document.createElement('img');
    const item2Description = document.createElement('p');
    const item2Price = document.createElement('p');

    const item3 = document.createElement('div');
    const item3Picture = document.createElement('img');
    const item3Description = document.createElement('p');
    const item3Price = document.createElement('p');

    const item4 = document.createElement('div');
    const item4Picture = document.createElement('img');
    const item4Description = document.createElement('p');
    const item4Price = document.createElement('p');



    menuBox.appendChild(item1);
    item1.setAttribute('style','width: 100%;height: 25%;display: grid;grid-template-columns: 25% 75%;grid-template-rows: 80% 20%;');

    menuBox.appendChild(item2)
    item2.setAttribute('style','width: 100%;height: 25%;display: grid;grid-template-columns: 75% 25%;grid-template-rows: 80% 20%;');

    menuBox.appendChild(item3)
    item3.setAttribute('style','width: 100%;height: 25%;display: grid;grid-template-columns: 25% 75%;grid-template-rows: 80% 20%;');

    menuBox.appendChild(item4)
    item4.setAttribute('style','width: 100%;height: 25%;display: grid;grid-template-columns: 75% 25%;grid-template-rows: 80% 20%;');

    item1.appendChild(item1Picture);
    item1Picture.setAttribute('src', '../dist/imgs/menu-plain.png');
    item1Picture.setAttribute('style', 'grid-row-start: 1;grid-row-end: 3;width: 100%;top: -100%;position: relative;');
    item1.appendChild(item1Description);
    item1Description.textContent = 'Plain ramen noodles with salt, paper and soy sauce.';
    item1Description.setAttribute('style', 'text-align: center;font-size: 1.2vw;');
    item1.appendChild(item1Price);
    item1Price.textContent = '99 円';
    item1Price.setAttribute('style', 'margin-top: 0px;font-size: 1vw;');

    item2.appendChild(item2Description);
    item2Description.textContent = '3x home made onigiri.';
    item2Description.setAttribute('style', 'text-align: center;font-size: 1.2vw;');
    item2.appendChild(item2Price);
    item2Price.textContent = '199 円';
    item2Price.setAttribute('style', 'margin-top: 0px;text-align:right;font-size: 1vw;');
    item2.appendChild(item2Picture);
    item2Picture.setAttribute('src', '../dist/imgs/menu-onigiri.png');
    item2Picture.setAttribute('style', 'grid-row-start: 1;grid-row-end: 3;width: 100%;top: -100%;position: relative;grid-column-start:2;margin-top: 1vw;');

    item3.appendChild(item3Picture);
    item3Picture.setAttribute('src', '../dist/imgs/menu-instant.png');
    item3Picture.setAttribute('style', 'grid-row-start: 1;grid-row-end: 3;width: 100%;top: -100%;position: relative;margin-top: 15%;');
    item3.appendChild(item3Description);
    item3Description.textContent = "Bear Paw's special instant cup ramen.";
    item3Description.setAttribute('style', 'text-align: center;font-size: 1.2vw;');
    item3.appendChild(item3Price);
    item3Price.textContent = '89 円';
    item3Price.setAttribute('style', 'margin-top: 0px;font-size: 1vw;');

    item4.appendChild(item4Description);
    item4Description.textContent = 'Cheap booze.';
    item4Description.setAttribute('style', 'text-align: center;font-size: 1.2vw;');
    item4.appendChild(item4Price);
    item4Price.textContent = '149 円';
    item4Price.setAttribute('style', 'margin-top: 0px;text-align:right;font-size: 1vw;');
    item4.appendChild(item4Picture);
    item4Picture.setAttribute('src', '../dist/imgs/menu-sake.png');
    item4Picture.setAttribute('style', 'grid-row-start: 1;grid-row-end: 3;width: 100%;top: -100%;position: relative;grid-column-start:2;margin-top: 1vw;');
}

export function menuActive(){
    const contactsBox = document.getElementById('contacts-box');
    contactsBox.setAttribute('style', 'display:none;');
    const scheduleBox = document.getElementById('schedule-box');
    scheduleBox.setAttribute('style', 'display:none;');
    const menuBox = document.getElementById('menu-box');
    menuBox.setAttribute('style', 'position:relative;width:40vw;height:20vw;background:#39658b;left:30vw;border-radius:1vw;top:-10vh;border: solid #29445a;border-width: .5vw;display:block;padding-bottom: 2%;');
}

export default buildMenu;