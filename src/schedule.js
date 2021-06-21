function buildSchedule(){
    const element = document.querySelector('#content');
    const contentBox = document.createElement('div');
    element.appendChild(contentBox);
    contentBox.setAttribute('style', 'position:relative;width:40vw;height:20vw;background:#39658b;left:30vw;border-radius:1vw;top:-10vh;border: solid #29445a;border-width: .5vw;display:block;padding-bottom: 2%;');
    contentBox.setAttribute('id', 'schedule-box');
    scheduleActive();
    scheduleContent();
}

function scheduleContent(){
    const contentBox = document.getElementById('schedule-box');
    const table = document.createElement('table');
    table.setAttribute('style', 'width:100%;text-align: center;padding: 4%;font-weight: bold;font-size: 1.2vw;')
    contentBox.appendChild(table);
    for (let i = 1;i <= 7 ;i++){
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);
        const dayOfTheWeek = document.createElement('td');
        dayOfTheWeek.setAttribute('id', `day${i}`);
        dayOfTheWeek.setAttribute('style', 'padding-bottom: 2%;border:solid;border-width: 0px 0px 5px 0px;')
        tableRow.appendChild(dayOfTheWeek);

        const openHours = document.createElement('td');
        openHours.setAttribute('id', `hours${i}`);
        openHours.setAttribute('style', 'padding-bottom: 2%;border:solid;border-width: 0px 0px 5px 0px;')
        tableRow.appendChild(openHours);
    }
    document.getElementById('day1').textContent = 'Monday';
    document.getElementById('hours1').textContent = '6:00 - 20:00';

    document.getElementById('day2').textContent = 'Thuesday';
    document.getElementById('hours2').textContent = '6:00 - 20:00';

    document.getElementById('day3').textContent = 'Wednesday';
    document.getElementById('hours3').textContent = '10:00 - 22:00';

    document.getElementById('day4').textContent = 'Thursday';
    document.getElementById('hours4').textContent = '6:00 - 20:00';

    document.getElementById('day5').textContent = 'Friday';
    document.getElementById('hours5').textContent = '6:00 - 20:00';

    document.getElementById('day6').textContent = 'Saturday';
    document.getElementById('hours6').textContent = '12:00 - 16:00';

    document.getElementById('day7').textContent = 'Sunday';
    document.getElementById('hours7').textContent = 'Closed';
}

export function scheduleActive(){
    const scheduleBox = document.getElementById('schedule-box');
    scheduleBox.setAttribute('style', 'position:relative;width:40vw;height:20vw;background:#39658b;left:30vw;border-radius:1vw;top:-10vh;border: solid #29445a;border-width: .5vw;display:block;padding-bottom: 2%;');
    const menuBox = document.getElementById('menu-box');
    menuBox.setAttribute('style', 'display:none;');
    const contactsBox = document.getElementById('contacts-box');
    contactsBox.setAttribute('style', 'display:none;');
}

export default buildSchedule;