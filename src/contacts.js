function buildContacts(){
    contactsContent();
}

function contactsContent(){
    const contentBox = document.getElementById('contacts-box');
    const chefDiv = document.createElement('div');
    const githubDiv = document.createElement('div');
    contentBox.appendChild(chefDiv);
    contentBox.appendChild(githubDiv);

    const chefPicture = document.createElement('img');
    chefPicture.setAttribute('src', '../src/imgs/chef.png');
    chefPicture.setAttribute('style', 'position: absolute;border-radius: 50%;width: 9vw;margin-left: 5%;border: solid #1b2d3c;border-width: 0.5vw;');
    chefDiv.appendChild(chefPicture);

    const chefPTitle = document.createElement('p');
    chefPTitle.textContent = 'Manager : Polaro';
    chefPTitle.setAttribute('style', 'text-align: center;font-size: 2vw;left: 10%;position: relative;font-weight: bold;');
    chefDiv.appendChild(chefPTitle);

    const chefPPhone = document.createElement('p');
    chefPPhone.textContent = '123-456-789';
    chefPPhone.setAttribute('style', 'text-align: center;font-size: 2vw;left: 10%;position: relative;font-weight: bold;');
    chefDiv.appendChild(chefPPhone);

    const githubPicture = document.createElement('img');
    githubPicture.setAttribute('src', '../src/imgs/github-logo.png');
    githubPicture.setAttribute('style', 'position: absolute;border-radius: 50%;width: 9vw;margin-bottom: 5%;border: solid #1b2d3c;border-width: 0.5vw;margin-left: 69%;');
    githubDiv.appendChild(githubPicture);

    githubPicture.onclick = function() {
        window.location.href = 'https://github.com/DeeAyDan/';
    };

    const githubPTitle = document.createElement('p');
    githubPTitle.textContent = "Some random dude's github.";
    githubPTitle.setAttribute('style', 'text-align: center;font-size: 1.5vw;position: relative;font-weight: bold;top: 3.5vw;margin-left: -30%;');
    githubDiv.appendChild(githubPTitle);
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