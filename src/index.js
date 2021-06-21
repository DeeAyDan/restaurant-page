import pageLoad from './page-load'
import buildSchedule, {scheduleActive} from './schedule'
import buildMenu, {menuActive} from './menu'
import buildContacts, {contactsActive} from './contacts'




pageLoad();
buildSchedule();
buildMenu();
buildContacts();

const scheduleButton = document.getElementById('schedule-button');
scheduleButton.addEventListener('click', scheduleActive);

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', menuActive);

const contactsButton = document.getElementById('contacts-button');
contactsButton.addEventListener('click', contactsActive);