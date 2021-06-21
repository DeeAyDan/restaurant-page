function buildContacts(){
    const contactsBox = document.querySelector('#contacts-box');
}

export function contactsActive(){
    const menuBox = document.getElementById('menu-box');
    menuBox.setAttribute('style', 'display:none;');
    const scheduleBox = document.getElementById('schedule-box');
    scheduleBox.setAttribute('style', 'display:none;');
    const contactsBox = document.getElementById('contacts-box');
    contactsBox.setAttribute('style', 'position:relative;width:40vw;height:20vw;background:#39658b;left:30vw;border-radius:1vw;top:-10vh;border: solid #29445a;border-width: .5vw;display:block;padding-bottom: 2%;');
}

export default buildContacts;