/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactsActive": () => (/* binding */ contactsActive),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    chefPicture.setAttribute('src', './imgs/chef.png');
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
    githubPicture.setAttribute('src', '../dist/imgs/github-logo.png');
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

function contactsActive(){
    const menuBox = document.getElementById('menu-box');
    menuBox.setAttribute('style', 'display:none;');
    const scheduleBox = document.getElementById('schedule-box');
    scheduleBox.setAttribute('style', 'display:none;');
    const contactsBox = document.getElementById('contacts-box');
    contactsBox.setAttribute('style', 'position:relative;width:40vw;height:20vw;background:#39658b;left:30vw;border-radius:1vw;top:-10vh;border: solid #29445a;border-width: .5vw;display:block;padding-bottom: 2%;');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildContacts);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuActive": () => (/* binding */ menuActive),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    item3Picture.setAttribute('src', '../src/dist/menu-instant.png');
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
    item4Picture.setAttribute('src', '../src/dist/menu-sake.png');
    item4Picture.setAttribute('style', 'grid-row-start: 1;grid-row-end: 3;width: 100%;top: -100%;position: relative;grid-column-start:2;margin-top: 1vw;');
}

function menuActive(){
    const contactsBox = document.getElementById('contacts-box');
    contactsBox.setAttribute('style', 'display:none;');
    const scheduleBox = document.getElementById('schedule-box');
    scheduleBox.setAttribute('style', 'display:none;');
    const menuBox = document.getElementById('menu-box');
    menuBox.setAttribute('style', 'position:relative;width:40vw;height:20vw;background:#39658b;left:30vw;border-radius:1vw;top:-10vh;border: solid #29445a;border-width: .5vw;display:block;padding-bottom: 2%;');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildMenu);

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pageLoad(){
    const body = document.querySelector('body');
    body.setAttribute('style', 'background:#39658b;')

    const backgroundImage = document.createElement('div');
    body.appendChild(backgroundImage);
    backgroundImage.setAttribute('style','background-image: url("../dist/imgs/ramen-stand.gif");background-repeat:no-repeat;height:1350px;width:100vw;position:fixed;background-position: top center;top: -500px;z-index:-1;');

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
    greetingPicture.setAttribute('src', '../dist/imgs/promotion-image.png');
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

/***/ }),

/***/ "./src/schedule.js":
/*!*************************!*\
  !*** ./src/schedule.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleActive": () => (/* binding */ scheduleActive),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

function scheduleActive(){
    const scheduleBox = document.getElementById('schedule-box');
    scheduleBox.setAttribute('style', 'position:relative;width:40vw;height:20vw;background:#39658b;left:30vw;border-radius:1vw;top:-10vh;border: solid #29445a;border-width: .5vw;display:block;padding-bottom: 2%;');
    const menuBox = document.getElementById('menu-box');
    menuBox.setAttribute('style', 'display:none;');
    const contactsBox = document.getElementById('contacts-box');
    contactsBox.setAttribute('style', 'display:none;');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildSchedule);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule */ "./src/schedule.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");








(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_schedule__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_contacts__WEBPACK_IMPORTED_MODULE_3__.default)();

const scheduleButton = document.getElementById('schedule-button');
scheduleButton.addEventListener('click', _schedule__WEBPACK_IMPORTED_MODULE_1__.scheduleActive);

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__.menuActive);

const contactsButton = document.getElementById('contacts-button');
contactsButton.addEventListener('click', _contacts__WEBPACK_IMPORTED_MODULE_3__.contactsActive);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxtQkFBbUIsV0FBVyxnQkFBZ0Isc0JBQXNCLG9CQUFvQjtBQUNsSjs7QUFFQTtBQUNBO0FBQ0EseURBQXlELGVBQWUsVUFBVSxtQkFBbUIsa0JBQWtCO0FBQ3ZIOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsZUFBZSxVQUFVLG1CQUFtQixrQkFBa0I7QUFDdkg7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCxtQkFBbUIsV0FBVyxrQkFBa0Isc0JBQXNCLG9CQUFvQixpQkFBaUI7QUFDdks7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQsaUJBQWlCLG1CQUFtQixrQkFBa0IsV0FBVyxrQkFBa0I7QUFDOUk7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EseURBQXlELFdBQVcsWUFBWSxtQkFBbUIsVUFBVSxrQkFBa0IsVUFBVSxzQkFBc0IsbUJBQW1CLGNBQWMsbUJBQW1CO0FBQ25OOztBQUVBLGlFQUFlLGFBQWEsRTs7Ozs7Ozs7Ozs7Ozs7O0FDbEQ1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSw0Q0FBNEMsWUFBWSxjQUFjLCtCQUErQiw0QkFBNEI7O0FBRWpJO0FBQ0EsNENBQTRDLFlBQVksY0FBYywrQkFBK0IsNEJBQTRCOztBQUVqSTtBQUNBLDRDQUE0QyxZQUFZLGNBQWMsK0JBQStCLDRCQUE0Qjs7QUFFakk7QUFDQSw0Q0FBNEMsWUFBWSxjQUFjLCtCQUErQiw0QkFBNEI7O0FBRWpJO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCLFlBQVksV0FBVyxtQkFBbUI7QUFDcEg7QUFDQTtBQUNBLCtEQUErRCxpQkFBaUI7QUFDaEY7QUFDQTtBQUNBLHNEQUFzRCxlQUFlOztBQUVyRTtBQUNBO0FBQ0EsK0RBQStELGlCQUFpQjtBQUNoRjtBQUNBO0FBQ0Esc0RBQXNELGlCQUFpQixlQUFlO0FBQ3RGO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCLFlBQVksV0FBVyxtQkFBbUIsb0JBQW9CLGdCQUFnQjs7QUFFeEo7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0IsWUFBWSxXQUFXLG1CQUFtQixnQkFBZ0I7QUFDcEk7QUFDQTtBQUNBLCtEQUErRCxpQkFBaUI7QUFDaEY7QUFDQTtBQUNBLHNEQUFzRCxlQUFlOztBQUVyRTtBQUNBO0FBQ0EsK0RBQStELGlCQUFpQjtBQUNoRjtBQUNBO0FBQ0Esc0RBQXNELGlCQUFpQixlQUFlO0FBQ3RGO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCLFlBQVksV0FBVyxtQkFBbUIsb0JBQW9CLGdCQUFnQjtBQUN4Sjs7QUFFTztBQUNQO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EscURBQXFELFdBQVcsWUFBWSxtQkFBbUIsVUFBVSxrQkFBa0IsVUFBVSxzQkFBc0IsbUJBQW1CLGNBQWMsbUJBQW1CO0FBQy9NOztBQUVBLGlFQUFlLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7QUMxRnhCO0FBQ0E7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQSwrRkFBK0YsNEJBQTRCLGNBQWMsWUFBWSxlQUFlLGdDQUFnQyxZQUFZLFdBQVc7O0FBRTNOO0FBQ0EscURBQXFELFlBQVksb0JBQW9CLFdBQVcsK0RBQStELFNBQVMsVUFBVSxXQUFXOztBQUU3TDtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsa0JBQWtCLFdBQVcsa0JBQWtCLHFCQUFxQiw0QkFBNEIsZ0JBQWdCLCtCQUErQix3Q0FBd0M7O0FBRTdPO0FBQ0E7QUFDQSxzREFBc0QsaUNBQWlDLHFCQUFxQixZQUFZLG1CQUFtQixtQkFBbUIsNEJBQTRCLGFBQWEsbUJBQW1CLGdCQUFnQiwyQkFBMkI7O0FBRXJRO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQSwrQ0FBK0MscUNBQXFDLFdBQVcsbUJBQW1CLHNCQUFzQixZQUFZOztBQUVwSjtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsWUFBWSxtQkFBbUIsc0JBQXNCLGlCQUFpQixrQkFBa0IsK0JBQStCLGVBQWU7QUFDcE07O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFlBQVksbUJBQW1CLHNCQUFzQixpQkFBaUIsa0JBQWtCLCtCQUErQixlQUFlO0FBQ2hNOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxZQUFZLG1CQUFtQixzQkFBc0IsaUJBQWlCLGtCQUFrQiwrQkFBK0IsZUFBZTtBQUNwTTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELFdBQVcsWUFBWSxtQkFBbUIsVUFBVSxrQkFBa0IsVUFBVSxzQkFBc0IsbUJBQW1CLG1CQUFtQixhQUFhO0FBQ2pOOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsV0FBVyxZQUFZLG1CQUFtQixVQUFVLGtCQUFrQixVQUFVLHNCQUFzQixtQkFBbUIsbUJBQW1CLGFBQWE7QUFDbE47QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7OztBQzlEdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsV0FBVyxZQUFZLG1CQUFtQixVQUFVLGtCQUFrQixVQUFVLHNCQUFzQixtQkFBbUIsY0FBYyxtQkFBbUI7QUFDbE47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQixZQUFZLGtCQUFrQixpQkFBaUI7QUFDOUc7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsRUFBRTtBQUNoRCwrREFBK0QsYUFBYSw4QkFBOEI7QUFDMUc7O0FBRUE7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQyw0REFBNEQsYUFBYSw4QkFBOEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EseURBQXlELFdBQVcsWUFBWSxtQkFBbUIsVUFBVSxrQkFBa0IsVUFBVSxzQkFBc0IsbUJBQW1CLGNBQWMsbUJBQW1CO0FBQ25OO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0Esb0RBQW9EO0FBQ3BEOztBQUVBLGlFQUFlLGFBQWEsRTs7Ozs7O1VDM0Q1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNzQjtBQUNaO0FBQ1k7Ozs7O0FBS3hELG1EQUFRO0FBQ1Isa0RBQWE7QUFDYiw4Q0FBUztBQUNULGtEQUFhOztBQUViO0FBQ0EseUNBQXlDLHFEQUFjOztBQUV2RDtBQUNBLHFDQUFxQyw2Q0FBVTs7QUFFL0M7QUFDQSx5Q0FBeUMscURBQWMsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYnVpbGRDb250YWN0cygpe1xuICAgIGNvbnRhY3RzQ29udGVudCgpO1xufVxuXG5mdW5jdGlvbiBjb250YWN0c0NvbnRlbnQoKXtcbiAgICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzLWJveCcpO1xuICAgIGNvbnN0IGNoZWZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBnaXRodWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGNoZWZEaXYpO1xuICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoZ2l0aHViRGl2KTtcblxuICAgIGNvbnN0IGNoZWZQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hlZlBpY3R1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltZ3MvY2hlZi5wbmcnKTtcbiAgICBjaGVmUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3JkZXItcmFkaXVzOiA1MCU7d2lkdGg6IDl2dzttYXJnaW4tbGVmdDogNSU7Ym9yZGVyOiBzb2xpZCAjMWIyZDNjO2JvcmRlci13aWR0aDogMC41dnc7Jyk7XG4gICAgY2hlZkRpdi5hcHBlbmRDaGlsZChjaGVmUGljdHVyZSk7XG5cbiAgICBjb25zdCBjaGVmUFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNoZWZQVGl0bGUudGV4dENvbnRlbnQgPSAnTWFuYWdlciA6IFBvbGFybyc7XG4gICAgY2hlZlBUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDJ2dztsZWZ0OiAxMCU7cG9zaXRpb246IHJlbGF0aXZlO2ZvbnQtd2VpZ2h0OiBib2xkOycpO1xuICAgIGNoZWZEaXYuYXBwZW5kQ2hpbGQoY2hlZlBUaXRsZSk7XG5cbiAgICBjb25zdCBjaGVmUFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNoZWZQUGhvbmUudGV4dENvbnRlbnQgPSAnMTIzLTQ1Ni03ODknO1xuICAgIGNoZWZQUGhvbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAydnc7bGVmdDogMTAlO3Bvc2l0aW9uOiByZWxhdGl2ZTtmb250LXdlaWdodDogYm9sZDsnKTtcbiAgICBjaGVmRGl2LmFwcGVuZENoaWxkKGNoZWZQUGhvbmUpO1xuXG4gICAgY29uc3QgZ2l0aHViUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGdpdGh1YlBpY3R1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltZ3MvZ2l0aHViLWxvZ28ucG5nJyk7XG4gICAgZ2l0aHViUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3JkZXItcmFkaXVzOiA1MCU7d2lkdGg6IDl2dzttYXJnaW4tYm90dG9tOiA1JTtib3JkZXI6IHNvbGlkICMxYjJkM2M7Ym9yZGVyLXdpZHRoOiAwLjV2dzttYXJnaW4tbGVmdDogNjklOycpO1xuICAgIGdpdGh1YkRpdi5hcHBlbmRDaGlsZChnaXRodWJQaWN0dXJlKTtcblxuICAgIGdpdGh1YlBpY3R1cmUub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vRGVlQXlEYW4vJztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2l0aHViUFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGdpdGh1YlBUaXRsZS50ZXh0Q29udGVudCA9IFwiU29tZSByYW5kb20gZHVkZSdzIGdpdGh1Yi5cIjtcbiAgICBnaXRodWJQVGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxLjV2dztwb3NpdGlvbjogcmVsYXRpdmU7Zm9udC13ZWlnaHQ6IGJvbGQ7dG9wOiAzLjV2dzttYXJnaW4tbGVmdDogLTMwJTsnKTtcbiAgICBnaXRodWJEaXYuYXBwZW5kQ2hpbGQoZ2l0aHViUFRpdGxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RzQWN0aXZlKCl7XG4gICAgY29uc3QgbWVudUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJveCcpO1xuICAgIG1lbnVCb3guc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7Jyk7XG4gICAgY29uc3Qgc2NoZWR1bGVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NoZWR1bGUtYm94Jyk7XG4gICAgc2NoZWR1bGVCb3guc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7Jyk7XG4gICAgY29uc3QgY29udGFjdHNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdHMtYm94Jyk7XG4gICAgY29udGFjdHNCb3guc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo0MHZ3O2hlaWdodDoyMHZ3O2JhY2tncm91bmQ6IzM5NjU4YjtsZWZ0OjMwdnc7Ym9yZGVyLXJhZGl1czoxdnc7dG9wOi0xMHZoO2JvcmRlcjogc29saWQgIzI5NDQ1YTtib3JkZXItd2lkdGg6IC41dnc7ZGlzcGxheTpibG9jaztwYWRkaW5nLWJvdHRvbTogMiU7Jyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ29udGFjdHM7IiwiZnVuY3Rpb24gYnVpbGRNZW51KCl7XG4gICAgbWVudUNvbnRlbnQoKTtcbn1cblxuZnVuY3Rpb24gbWVudUNvbnRlbnQoKXtcbiAgICBjb25zdCBtZW51Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYm94Jyk7XG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtMVBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpdGVtMURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGl0ZW0xUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW0yUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGl0ZW0yRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaXRlbTJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbTNQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaXRlbTNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBpdGVtM1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtNFBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpdGVtNERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGl0ZW00UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cblxuXG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChpdGVtMSk7XG4gICAgaXRlbTEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3dpZHRoOiAxMDAlO2hlaWdodDogMjUlO2Rpc3BsYXk6IGdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO2dyaWQtdGVtcGxhdGUtcm93czogODAlIDIwJTsnKTtcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoaXRlbTIpXG4gICAgaXRlbTIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3dpZHRoOiAxMDAlO2hlaWdodDogMjUlO2Rpc3BsYXk6IGdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NSUgMjUlO2dyaWQtdGVtcGxhdGUtcm93czogODAlIDIwJTsnKTtcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoaXRlbTMpXG4gICAgaXRlbTMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3dpZHRoOiAxMDAlO2hlaWdodDogMjUlO2Rpc3BsYXk6IGdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO2dyaWQtdGVtcGxhdGUtcm93czogODAlIDIwJTsnKTtcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoaXRlbTQpXG4gICAgaXRlbTQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3dpZHRoOiAxMDAlO2hlaWdodDogMjUlO2Rpc3BsYXk6IGdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NSUgMjUlO2dyaWQtdGVtcGxhdGUtcm93czogODAlIDIwJTsnKTtcblxuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGl0ZW0xUGljdHVyZSk7XG4gICAgaXRlbTFQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWdzL21lbnUtcGxhaW4ucG5nJyk7XG4gICAgaXRlbTFQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZ3JpZC1yb3ctc3RhcnQ6IDE7Z3JpZC1yb3ctZW5kOiAzO3dpZHRoOiAxMDAlO3RvcDogLTEwMCU7cG9zaXRpb246IHJlbGF0aXZlOycpO1xuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGl0ZW0xRGVzY3JpcHRpb24pO1xuICAgIGl0ZW0xRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnUGxhaW4gcmFtZW4gbm9vZGxlcyB3aXRoIHNhbHQsIHBhcGVyIGFuZCBzb3kgc2F1Y2UuJztcbiAgICBpdGVtMURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMS4ydnc7Jyk7XG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoaXRlbTFQcmljZSk7XG4gICAgaXRlbTFQcmljZS50ZXh0Q29udGVudCA9ICc5OSDlhoYnO1xuICAgIGl0ZW0xUHJpY2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW4tdG9wOiAwcHg7Zm9udC1zaXplOiAxdnc7Jyk7XG5cbiAgICBpdGVtMi5hcHBlbmRDaGlsZChpdGVtMkRlc2NyaXB0aW9uKTtcbiAgICBpdGVtMkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJzN4IGhvbWUgbWFkZSBvbmlnaXJpLic7XG4gICAgaXRlbTJEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDEuMnZ3OycpO1xuICAgIGl0ZW0yLmFwcGVuZENoaWxkKGl0ZW0yUHJpY2UpO1xuICAgIGl0ZW0yUHJpY2UudGV4dENvbnRlbnQgPSAnMTk5IOWGhic7XG4gICAgaXRlbTJQcmljZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21hcmdpbi10b3A6IDBweDt0ZXh0LWFsaWduOnJpZ2h0O2ZvbnQtc2l6ZTogMXZ3OycpO1xuICAgIGl0ZW0yLmFwcGVuZENoaWxkKGl0ZW0yUGljdHVyZSk7XG4gICAgaXRlbTJQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWdzL21lbnUtb25pZ2lyaS5wbmcnKTtcbiAgICBpdGVtMlBpY3R1cmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdncmlkLXJvdy1zdGFydDogMTtncmlkLXJvdy1lbmQ6IDM7d2lkdGg6IDEwMCU7dG9wOiAtMTAwJTtwb3NpdGlvbjogcmVsYXRpdmU7Z3JpZC1jb2x1bW4tc3RhcnQ6MjttYXJnaW4tdG9wOiAxdnc7Jyk7XG5cbiAgICBpdGVtMy5hcHBlbmRDaGlsZChpdGVtM1BpY3R1cmUpO1xuICAgIGl0ZW0zUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1ncy9tZW51LWluc3RhbnQucG5nJyk7XG4gICAgaXRlbTNQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZ3JpZC1yb3ctc3RhcnQ6IDE7Z3JpZC1yb3ctZW5kOiAzO3dpZHRoOiAxMDAlO3RvcDogLTEwMCU7cG9zaXRpb246IHJlbGF0aXZlO21hcmdpbi10b3A6IDE1JTsnKTtcbiAgICBpdGVtMy5hcHBlbmRDaGlsZChpdGVtM0Rlc2NyaXB0aW9uKTtcbiAgICBpdGVtM0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJCZWFyIFBhdydzIHNwZWNpYWwgaW5zdGFudCBjdXAgcmFtZW4uXCI7XG4gICAgaXRlbTNEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDEuMnZ3OycpO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKGl0ZW0zUHJpY2UpO1xuICAgIGl0ZW0zUHJpY2UudGV4dENvbnRlbnQgPSAnODkg5YaGJztcbiAgICBpdGVtM1ByaWNlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWFyZ2luLXRvcDogMHB4O2ZvbnQtc2l6ZTogMXZ3OycpO1xuXG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQoaXRlbTREZXNjcmlwdGlvbik7XG4gICAgaXRlbTREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdDaGVhcCBib296ZS4nO1xuICAgIGl0ZW00RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxLjJ2dzsnKTtcbiAgICBpdGVtNC5hcHBlbmRDaGlsZChpdGVtNFByaWNlKTtcbiAgICBpdGVtNFByaWNlLnRleHRDb250ZW50ID0gJzE0OSDlhoYnO1xuICAgIGl0ZW00UHJpY2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW4tdG9wOiAwcHg7dGV4dC1hbGlnbjpyaWdodDtmb250LXNpemU6IDF2dzsnKTtcbiAgICBpdGVtNC5hcHBlbmRDaGlsZChpdGVtNFBpY3R1cmUpO1xuICAgIGl0ZW00UGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1ncy9tZW51LXNha2UucG5nJyk7XG4gICAgaXRlbTRQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZ3JpZC1yb3ctc3RhcnQ6IDE7Z3JpZC1yb3ctZW5kOiAzO3dpZHRoOiAxMDAlO3RvcDogLTEwMCU7cG9zaXRpb246IHJlbGF0aXZlO2dyaWQtY29sdW1uLXN0YXJ0OjI7bWFyZ2luLXRvcDogMXZ3OycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVudUFjdGl2ZSgpe1xuICAgIGNvbnN0IGNvbnRhY3RzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzLWJveCcpO1xuICAgIGNvbnRhY3RzQm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xuICAgIGNvbnN0IHNjaGVkdWxlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjaGVkdWxlLWJveCcpO1xuICAgIHNjaGVkdWxlQm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xuICAgIGNvbnN0IG1lbnVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1ib3gnKTtcbiAgICBtZW51Qm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NDB2dztoZWlnaHQ6MjB2dztiYWNrZ3JvdW5kOiMzOTY1OGI7bGVmdDozMHZ3O2JvcmRlci1yYWRpdXM6MXZ3O3RvcDotMTB2aDtib3JkZXI6IHNvbGlkICMyOTQ0NWE7Ym9yZGVyLXdpZHRoOiAuNXZ3O2Rpc3BsYXk6YmxvY2s7cGFkZGluZy1ib3R0b206IDIlOycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZE1lbnU7IiwiZnVuY3Rpb24gcGFnZUxvYWQoKXtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiMzOTY1OGI7JylcblxuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltYWdlKTtcbiAgICBiYWNrZ3JvdW5kSW1hZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3NyYy9pbWdzL3JhbWVuLXN0YW5kLmdpZlwiKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7aGVpZ2h0OjEzNTBweDt3aWR0aDoxMDB2dztwb3NpdGlvbjpmaXhlZDtiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO3RvcDogLTUwMHB4O3otaW5kZXg6LTE7Jyk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwdnc7aGVpZ2h0OiBtYXgtY29udGVudDt0b3A6MTAwMHB4O2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3NyYy9pbWdzL2JhY2tncm91bmQtdHJhbnNpdGlvbi5wbmdcIik7bGVmdDogMCU7cmlnaHQ6IDAlO2JvdHRvbTogMCU7Jyk7XG5cbiAgICBjb25zdCBoZWFkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkTGluZSk7XG4gICAgaGVhZExpbmUudGV4dENvbnRlbnQgPSAnQmVhci1QYXcgUmFtZW4nO1xuICAgIGhlYWRMaW5lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1hbGlnbjpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7dG9wOi03MDBweDtwYWRkaW5nLXRvcDogMjVweDtwYWRkaW5nLWJvdHRvbTogMjVweDtiYWNrZ3JvdW5kLWNvbG9yOiAjMzk2NThiNjE7Zm9udC1zaXplOiAzMDAlO3RleHQtc2hhZG93OiAycHggMnB4IGFsaWNlYmx1ZTtmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjsnKVxuXG4gICAgY29uc3QgZ3JlZXRpbmdBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChncmVldGluZ0FyZWEpO1xuICAgIGdyZWV0aW5nQXJlYS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHZ3IDMwdnc7Z3JpZC1jb2x1bW4tZ2FwOiAwdnc7dG9wOiAtNjAwcHg7cGFkZGluZy1sZWZ0OiAyNXZ3O3Bvc2l0aW9uOiByZWxhdGl2ZTtiYWNrZ3JvdW5kLWNvbG9yOiAjMzk2NThiNjE7Y29sb3I6IHdoaXRlO3RleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDI1MCU7dGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7JylcblxuICAgIGNvbnN0IGdyZWV0aW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBncmVldGluZ0FyZWEuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdUZXh0KTtcbiAgICBncmVldGluZ1RleHQudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byB0aGUgQmVhci1QYXcgUmFtZW4uIFRoZSBiZXN0IHBpeGVsYXRlZCByZXN0YXVyYW50IHlvdSBjYW4gZmluZCBpbiBhbGwgb2YgS2FtYWt1cmEuJ1xuXG4gICAgY29uc3QgZ3JlZXRpbmdQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ3JlZXRpbmdBcmVhLmFwcGVuZENoaWxkKGdyZWV0aW5nUGljdHVyZSk7XG4gICAgZ3JlZXRpbmdQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWdzL3Byb21vdGlvbi1pbWFnZS5wbmcnKTtcbiAgICBncmVldGluZ1BpY3R1cmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwYWRkaW5nLWxlZnQ6IDI1JTsnKVxuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MjB2dyAyMHZ3IDIwdnc7bGVmdDogMTB2dztwb3NpdGlvbjogcmVsYXRpdmU7Z3JpZC1jb2x1bW4tZ2FwOiAxMHZ3O3RvcDogLTIwMHB4OycpXG5cbiAgICBjb25zdCBzY2hlZHVsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChzY2hlZHVsZUJ1dHRvbik7XG4gICAgc2NoZWR1bGVCdXR0b24udGV4dENvbnRlbnQgPSAnU2NoZWR1bGUnO1xuICAgIHNjaGVkdWxlQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogIzM5NjU4YjtoZWlnaHQ6IDV2dztib3JkZXItd2lkdGg6IDEwcHg7Ym9yZGVyLWNvbG9yOiAjMjk0NDVhO2ZvbnQtc2l6ZTogMi41dnc7Zm9udC13ZWlnaHQ6IGJvbGQ7dGV4dC1zaGFkb3c6IDJweCAycHggYWxpY2VibHVlO2NvbG9yOiAjMjk0NDVhOycpO1xuICAgIHNjaGVkdWxlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2NoZWR1bGUtYnV0dG9uJyk7XG4gICAgXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiAjMzk2NThiO2hlaWdodDogNXZ3O2JvcmRlci13aWR0aDogMTBweDtib3JkZXItY29sb3I6ICMyOTQ0NWE7Zm9udC1zaXplOiAyLjV2dztmb250LXdlaWdodDogYm9sZDt0ZXh0LXNoYWRvdzogMnB4IDJweCBhbGljZWJsdWU7Y29sb3I6ICMyOTQ0NWE7Jyk7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYnV0dG9uJyk7XG5cbiAgICBjb25zdCBjb250YWN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0c0J1dHRvbik7XG4gICAgY29udGFjdHNCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdHMnO1xuICAgIGNvbnRhY3RzQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogIzM5NjU4YjtoZWlnaHQ6IDV2dztib3JkZXItd2lkdGg6IDEwcHg7Ym9yZGVyLWNvbG9yOiAjMjk0NDVhO2ZvbnQtc2l6ZTogMi41dnc7Zm9udC13ZWlnaHQ6IGJvbGQ7dGV4dC1zaGFkb3c6IDJweCAycHggYWxpY2VibHVlO2NvbG9yOiAjMjk0NDVhOycpO1xuICAgIGNvbnRhY3RzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdHMtYnV0dG9uJyk7XG5cbiAgICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50Qm94KTtcbiAgICBjb250ZW50Qm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NDB2dztoZWlnaHQ6MjB2dztiYWNrZ3JvdW5kOiMzOTY1OGI7bGVmdDozMHZ3O2JvcmRlci1yYWRpdXM6MXZ3O3RvcDotMTB2aDtib3JkZXI6IHNvbGlkICMyOTQ0NWE7Ym9yZGVyLXdpZHRoOiAuNXZ3O3BhZGRpbmctYm90dG9tOiAyJTtkaXNwbGF5Om5vbmU7Jyk7XG4gICAgY29udGVudEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYm94Jyk7XG5cbiAgICBjb25zdCBjb250ZW50Qm94MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudEJveDIpO1xuICAgIGNvbnRlbnRCb3gyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NDB2dztoZWlnaHQ6MjB2dztiYWNrZ3JvdW5kOiMzOTY1OGI7bGVmdDozMHZ3O2JvcmRlci1yYWRpdXM6MXZ3O3RvcDotMTB2aDtib3JkZXI6IHNvbGlkICMyOTQ0NWE7Ym9yZGVyLXdpZHRoOiAuNXZ3O3BhZGRpbmctYm90dG9tOiAyJTtkaXNwbGF5Om5vbmU7Jyk7XG4gICAgY29udGVudEJveDIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0cy1ib3gnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7IiwiZnVuY3Rpb24gYnVpbGRTY2hlZHVsZSgpe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRCb3gpO1xuICAgIGNvbnRlbnRCb3guc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo0MHZ3O2hlaWdodDoyMHZ3O2JhY2tncm91bmQ6IzM5NjU4YjtsZWZ0OjMwdnc7Ym9yZGVyLXJhZGl1czoxdnc7dG9wOi0xMHZoO2JvcmRlcjogc29saWQgIzI5NDQ1YTtib3JkZXItd2lkdGg6IC41dnc7ZGlzcGxheTpibG9jaztwYWRkaW5nLWJvdHRvbTogMiU7Jyk7XG4gICAgY29udGVudEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NjaGVkdWxlLWJveCcpO1xuICAgIHNjaGVkdWxlQWN0aXZlKCk7XG4gICAgc2NoZWR1bGVDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIHNjaGVkdWxlQ29udGVudCgpe1xuICAgIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NoZWR1bGUtYm94Jyk7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhYmxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6MTAwJTt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogNCU7Zm9udC13ZWlnaHQ6IGJvbGQ7Zm9udC1zaXplOiAxLjJ2dzsnKVxuICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIGZvciAobGV0IGkgPSAxO2kgPD0gNyA7aSsrKXtcbiAgICAgICAgY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG4gICAgICAgIGNvbnN0IGRheU9mVGhlV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGRheU9mVGhlV2Vlay5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRheSR7aX1gKTtcbiAgICAgICAgZGF5T2ZUaGVXZWVrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncGFkZGluZy1ib3R0b206IDIlO2JvcmRlcjpzb2xpZDtib3JkZXItd2lkdGg6IDBweCAwcHggNXB4IDBweDsnKVxuICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZChkYXlPZlRoZVdlZWspO1xuXG4gICAgICAgIGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIG9wZW5Ib3Vycy5zZXRBdHRyaWJ1dGUoJ2lkJywgYGhvdXJzJHtpfWApO1xuICAgICAgICBvcGVuSG91cnMuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwYWRkaW5nLWJvdHRvbTogMiU7Ym9yZGVyOnNvbGlkO2JvcmRlci13aWR0aDogMHB4IDBweCA1cHggMHB4OycpXG4gICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKG9wZW5Ib3Vycyk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXkxJykudGV4dENvbnRlbnQgPSAnTW9uZGF5JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cnMxJykudGV4dENvbnRlbnQgPSAnNjowMCAtIDIwOjAwJztcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXkyJykudGV4dENvbnRlbnQgPSAnVGh1ZXNkYXknO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VyczInKS50ZXh0Q29udGVudCA9ICc2OjAwIC0gMjA6MDAnO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheTMnKS50ZXh0Q29udGVudCA9ICdXZWRuZXNkYXknO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VyczMnKS50ZXh0Q29udGVudCA9ICcxMDowMCAtIDIyOjAwJztcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXk0JykudGV4dENvbnRlbnQgPSAnVGh1cnNkYXknO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VyczQnKS50ZXh0Q29udGVudCA9ICc2OjAwIC0gMjA6MDAnO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheTUnKS50ZXh0Q29udGVudCA9ICdGcmlkYXknO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VyczUnKS50ZXh0Q29udGVudCA9ICc2OjAwIC0gMjA6MDAnO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheTYnKS50ZXh0Q29udGVudCA9ICdTYXR1cmRheSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJzNicpLnRleHRDb250ZW50ID0gJzEyOjAwIC0gMTY6MDAnO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheTcnKS50ZXh0Q29udGVudCA9ICdTdW5kYXknO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VyczcnKS50ZXh0Q29udGVudCA9ICdDbG9zZWQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBY3RpdmUoKXtcbiAgICBjb25zdCBzY2hlZHVsZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2hlZHVsZS1ib3gnKTtcbiAgICBzY2hlZHVsZUJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjQwdnc7aGVpZ2h0OjIwdnc7YmFja2dyb3VuZDojMzk2NThiO2xlZnQ6MzB2dztib3JkZXItcmFkaXVzOjF2dzt0b3A6LTEwdmg7Ym9yZGVyOiBzb2xpZCAjMjk0NDVhO2JvcmRlci13aWR0aDogLjV2dztkaXNwbGF5OmJsb2NrO3BhZGRpbmctYm90dG9tOiAyJTsnKTtcbiAgICBjb25zdCBtZW51Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYm94Jyk7XG4gICAgbWVudUJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcbiAgICBjb25zdCBjb250YWN0c0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0cy1ib3gnKTtcbiAgICBjb250YWN0c0JveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRTY2hlZHVsZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tICcuL3BhZ2UtbG9hZCdcbmltcG9ydCBidWlsZFNjaGVkdWxlLCB7c2NoZWR1bGVBY3RpdmV9IGZyb20gJy4vc2NoZWR1bGUnXG5pbXBvcnQgYnVpbGRNZW51LCB7bWVudUFjdGl2ZX0gZnJvbSAnLi9tZW51J1xuaW1wb3J0IGJ1aWxkQ29udGFjdHMsIHtjb250YWN0c0FjdGl2ZX0gZnJvbSAnLi9jb250YWN0cydcblxuXG5cblxucGFnZUxvYWQoKTtcbmJ1aWxkU2NoZWR1bGUoKTtcbmJ1aWxkTWVudSgpO1xuYnVpbGRDb250YWN0cygpO1xuXG5jb25zdCBzY2hlZHVsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2hlZHVsZS1idXR0b24nKTtcbnNjaGVkdWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2NoZWR1bGVBY3RpdmUpO1xuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnV0dG9uJyk7XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudUFjdGl2ZSk7XG5cbmNvbnN0IGNvbnRhY3RzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzLWJ1dHRvbicpO1xuY29udGFjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWN0c0FjdGl2ZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
