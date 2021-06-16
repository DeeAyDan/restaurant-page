function pageLoad(){
    const element = document.querySelector('#content');
    element.setAttribute('style', 'width:100vw;height:100%;background:#39658b;')

    const backgroundImage = document.createElement('IMG');
    backgroundImage.setAttribute('src', '../src/ramen-stand.gif');
    backgroundImage.setAttribute('style', 'display:block;position:absolute;margin:auto;');
    element.appendChild(backgroundImage);

}

export default pageLoad;