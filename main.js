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
    const contactsBox = document.querySelector('#contacts-box');
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
    item1Picture.setAttribute('src', '../src/imgs/menu-plain.png');
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
    item2Picture.setAttribute('src', '../src/imgs/menu-onigiri.png');
    item2Picture.setAttribute('style', 'grid-row-start: 1;grid-row-end: 3;width: 100%;top: -100%;position: relative;grid-column-start:2;margin-top: 1vw;');

    item3.appendChild(item3Picture);
    item3Picture.setAttribute('src', '../src/imgs/menu-instant.png');
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
    item4Picture.setAttribute('src', '../src/imgs/menu-sake.png');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EseURBQXlELFdBQVcsWUFBWSxtQkFBbUIsVUFBVSxrQkFBa0IsVUFBVSxzQkFBc0IsbUJBQW1CLGNBQWMsbUJBQW1CO0FBQ25OOztBQUVBLGlFQUFlLGFBQWEsRTs7Ozs7Ozs7Ozs7Ozs7O0FDYjVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLDRDQUE0QyxZQUFZLGNBQWMsK0JBQStCLDRCQUE0Qjs7QUFFakk7QUFDQSw0Q0FBNEMsWUFBWSxjQUFjLCtCQUErQiw0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Q0E7QUFDQTtBQUNBLDhDQUE4QyxFQUFFO0FBQ2hELCtEQUErRCxhQUFhLDhCQUE4QjtBQUMxRzs7QUFFQTtBQUNBLDZDQUE2QyxFQUFFO0FBQy9DLDREQUE0RCxhQUFhLDhCQUE4QjtBQUN2RztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSx5REFBeUQsV0FBVyxZQUFZLG1CQUFtQixVQUFVLGtCQUFrQixVQUFVLHNCQUFzQixtQkFBbUIsY0FBYyxtQkFBbUI7QUFDbk47QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUEsaUVBQWUsYUFBYSxFOzs7Ozs7VUMzRDVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ3NCO0FBQ1o7QUFDWTs7Ozs7QUFLeEQsbURBQVE7QUFDUixrREFBYTtBQUNiLDhDQUFTO0FBQ1Qsa0RBQWE7O0FBRWI7QUFDQSx5Q0FBeUMscURBQWM7O0FBRXZEO0FBQ0EscUNBQXFDLDZDQUFVOztBQUUvQztBQUNBLHlDQUF5QyxxREFBYyxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBidWlsZENvbnRhY3RzKCl7XG4gICAgY29uc3QgY29udGFjdHNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMtYm94Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWN0c0FjdGl2ZSgpe1xuICAgIGNvbnN0IG1lbnVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1ib3gnKTtcbiAgICBtZW51Qm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xuICAgIGNvbnN0IHNjaGVkdWxlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjaGVkdWxlLWJveCcpO1xuICAgIHNjaGVkdWxlQm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xuICAgIGNvbnN0IGNvbnRhY3RzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzLWJveCcpO1xuICAgIGNvbnRhY3RzQm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NDB2dztoZWlnaHQ6MjB2dztiYWNrZ3JvdW5kOiMzOTY1OGI7bGVmdDozMHZ3O2JvcmRlci1yYWRpdXM6MXZ3O3RvcDotMTB2aDtib3JkZXI6IHNvbGlkICMyOTQ0NWE7Ym9yZGVyLXdpZHRoOiAuNXZ3O2Rpc3BsYXk6YmxvY2s7cGFkZGluZy1ib3R0b206IDIlOycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZENvbnRhY3RzOyIsImZ1bmN0aW9uIGJ1aWxkTWVudSgpe1xuICAgIG1lbnVDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIG1lbnVDb250ZW50KCl7XG4gICAgY29uc3QgbWVudUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJveCcpO1xuICAgIGNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbTFQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaXRlbTFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBpdGVtMVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtMlBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpdGVtMkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGl0ZW0yUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW0zUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGl0ZW0zRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaXRlbTNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbTRQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaXRlbTREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBpdGVtNFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG5cblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoaXRlbTEpO1xuICAgIGl0ZW0xLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd3aWR0aDogMTAwJTtoZWlnaHQ6IDI1JTtkaXNwbGF5OiBncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtncmlkLXRlbXBsYXRlLXJvd3M6IDgwJSAyMCU7Jyk7XG5cbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKGl0ZW0yKVxuICAgIGl0ZW0yLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd3aWR0aDogMTAwJTtoZWlnaHQ6IDI1JTtkaXNwbGF5OiBncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczogNzUlIDI1JTtncmlkLXRlbXBsYXRlLXJvd3M6IDgwJSAyMCU7Jyk7XG5cbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKGl0ZW0zKVxuICAgIGl0ZW0zLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd3aWR0aDogMTAwJTtoZWlnaHQ6IDI1JTtkaXNwbGF5OiBncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtncmlkLXRlbXBsYXRlLXJvd3M6IDgwJSAyMCU7Jyk7XG5cbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKGl0ZW00KVxuICAgIGl0ZW00LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd3aWR0aDogMTAwJTtoZWlnaHQ6IDI1JTtkaXNwbGF5OiBncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczogNzUlIDI1JTtncmlkLXRlbXBsYXRlLXJvd3M6IDgwJSAyMCU7Jyk7XG5cbiAgICBpdGVtMS5hcHBlbmRDaGlsZChpdGVtMVBpY3R1cmUpO1xuICAgIGl0ZW0xUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1ncy9tZW51LXBsYWluLnBuZycpO1xuICAgIGl0ZW0xUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2dyaWQtcm93LXN0YXJ0OiAxO2dyaWQtcm93LWVuZDogMzt3aWR0aDogMTAwJTt0b3A6IC0xMDAlO3Bvc2l0aW9uOiByZWxhdGl2ZTsnKTtcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChpdGVtMURlc2NyaXB0aW9uKTtcbiAgICBpdGVtMURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1BsYWluIHJhbWVuIG5vb2RsZXMgd2l0aCBzYWx0LCBwYXBlciBhbmQgc295IHNhdWNlLic7XG4gICAgaXRlbTFEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDEuMnZ3OycpO1xuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGl0ZW0xUHJpY2UpO1xuICAgIGl0ZW0xUHJpY2UudGV4dENvbnRlbnQgPSAnOTkg5YaGJztcbiAgICBpdGVtMVByaWNlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWFyZ2luLXRvcDogMHB4O2ZvbnQtc2l6ZTogMXZ3OycpO1xuXG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQoaXRlbTJEZXNjcmlwdGlvbik7XG4gICAgaXRlbTJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICczeCBob21lIG1hZGUgb25pZ2lyaS4nO1xuICAgIGl0ZW0yRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxLjJ2dzsnKTtcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChpdGVtMlByaWNlKTtcbiAgICBpdGVtMlByaWNlLnRleHRDb250ZW50ID0gJzE5OSDlhoYnO1xuICAgIGl0ZW0yUHJpY2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW4tdG9wOiAwcHg7dGV4dC1hbGlnbjpyaWdodDtmb250LXNpemU6IDF2dzsnKTtcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChpdGVtMlBpY3R1cmUpO1xuICAgIGl0ZW0yUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1ncy9tZW51LW9uaWdpcmkucG5nJyk7XG4gICAgaXRlbTJQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZ3JpZC1yb3ctc3RhcnQ6IDE7Z3JpZC1yb3ctZW5kOiAzO3dpZHRoOiAxMDAlO3RvcDogLTEwMCU7cG9zaXRpb246IHJlbGF0aXZlO2dyaWQtY29sdW1uLXN0YXJ0OjI7bWFyZ2luLXRvcDogMXZ3OycpO1xuXG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNQaWN0dXJlKTtcbiAgICBpdGVtM1BpY3R1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltZ3MvbWVudS1pbnN0YW50LnBuZycpO1xuICAgIGl0ZW0zUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2dyaWQtcm93LXN0YXJ0OiAxO2dyaWQtcm93LWVuZDogMzt3aWR0aDogMTAwJTt0b3A6IC0xMDAlO3Bvc2l0aW9uOiByZWxhdGl2ZTttYXJnaW4tdG9wOiAxNSU7Jyk7XG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNEZXNjcmlwdGlvbik7XG4gICAgaXRlbTNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQmVhciBQYXcncyBzcGVjaWFsIGluc3RhbnQgY3VwIHJhbWVuLlwiO1xuICAgIGl0ZW0zRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxLjJ2dzsnKTtcbiAgICBpdGVtMy5hcHBlbmRDaGlsZChpdGVtM1ByaWNlKTtcbiAgICBpdGVtM1ByaWNlLnRleHRDb250ZW50ID0gJzg5IOWGhic7XG4gICAgaXRlbTNQcmljZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21hcmdpbi10b3A6IDBweDtmb250LXNpemU6IDF2dzsnKTtcblxuICAgIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW00RGVzY3JpcHRpb24pO1xuICAgIGl0ZW00RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQ2hlYXAgYm9vemUuJztcbiAgICBpdGVtNERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMS4ydnc7Jyk7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQoaXRlbTRQcmljZSk7XG4gICAgaXRlbTRQcmljZS50ZXh0Q29udGVudCA9ICcxNDkg5YaGJztcbiAgICBpdGVtNFByaWNlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWFyZ2luLXRvcDogMHB4O3RleHQtYWxpZ246cmlnaHQ7Zm9udC1zaXplOiAxdnc7Jyk7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQoaXRlbTRQaWN0dXJlKTtcbiAgICBpdGVtNFBpY3R1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltZ3MvbWVudS1zYWtlLnBuZycpO1xuICAgIGl0ZW00UGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2dyaWQtcm93LXN0YXJ0OiAxO2dyaWQtcm93LWVuZDogMzt3aWR0aDogMTAwJTt0b3A6IC0xMDAlO3Bvc2l0aW9uOiByZWxhdGl2ZTtncmlkLWNvbHVtbi1zdGFydDoyO21hcmdpbi10b3A6IDF2dzsnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVBY3RpdmUoKXtcbiAgICBjb25zdCBjb250YWN0c0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0cy1ib3gnKTtcbiAgICBjb250YWN0c0JveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcbiAgICBjb25zdCBzY2hlZHVsZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2hlZHVsZS1ib3gnKTtcbiAgICBzY2hlZHVsZUJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcbiAgICBjb25zdCBtZW51Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYm94Jyk7XG4gICAgbWVudUJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjQwdnc7aGVpZ2h0OjIwdnc7YmFja2dyb3VuZDojMzk2NThiO2xlZnQ6MzB2dztib3JkZXItcmFkaXVzOjF2dzt0b3A6LTEwdmg7Ym9yZGVyOiBzb2xpZCAjMjk0NDVhO2JvcmRlci13aWR0aDogLjV2dztkaXNwbGF5OmJsb2NrO3BhZGRpbmctYm90dG9tOiAyJTsnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRNZW51OyIsImZ1bmN0aW9uIHBhZ2VMb2FkKCl7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDojMzk2NThiOycpXG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWFnZSk7XG4gICAgYmFja2dyb3VuZEltYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zcmMvaW1ncy9yYW1lbi1zdGFuZC5naWZcIik7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2hlaWdodDoxMzUwcHg7d2lkdGg6MTAwdnc7cG9zaXRpb246Zml4ZWQ7YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjt0b3A6IC01MDBweDt6LWluZGV4Oi0xOycpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMHZ3O2hlaWdodDogbWF4LWNvbnRlbnQ7dG9wOjEwMDBweDtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zcmMvaW1ncy9iYWNrZ3JvdW5kLXRyYW5zaXRpb24ucG5nXCIpO2xlZnQ6IDAlO3JpZ2h0OiAwJTtib3R0b206IDAlOycpO1xuXG4gICAgY29uc3QgaGVhZExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZExpbmUpO1xuICAgIGhlYWRMaW5lLnRleHRDb250ZW50ID0gJ0JlYXItUGF3IFJhbWVuJztcbiAgICBoZWFkTGluZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtYWxpZ246Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotNzAwcHg7cGFkZGluZy10b3A6IDI1cHg7cGFkZGluZy1ib3R0b206IDI1cHg7YmFja2dyb3VuZC1jb2xvcjogIzM5NjU4YjYxO2ZvbnQtc2l6ZTogMzAwJTt0ZXh0LXNoYWRvdzogMnB4IDJweCBhbGljZWJsdWU7Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7JylcblxuICAgIGNvbnN0IGdyZWV0aW5nQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdBcmVhKTtcbiAgICBncmVldGluZ0FyZWEuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczogMzB2dyAzMHZ3O2dyaWQtY29sdW1uLWdhcDogMHZ3O3RvcDogLTYwMHB4O3BhZGRpbmctbGVmdDogMjV2dztwb3NpdGlvbjogcmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjogIzM5NjU4YjYxO2NvbG9yOiB3aGl0ZTt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAyNTAlO3RleHQtc2hhZG93OiAycHggMnB4IGJsYWNrOycpXG5cbiAgICBjb25zdCBncmVldGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZ3JlZXRpbmdBcmVhLmFwcGVuZENoaWxkKGdyZWV0aW5nVGV4dCk7XG4gICAgZ3JlZXRpbmdUZXh0LnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gdGhlIEJlYXItUGF3IFJhbWVuLiBUaGUgYmVzdCBwaXhlbGF0ZWQgcmVzdGF1cmFudCB5b3UgY2FuIGZpbmQgaW4gYWxsIG9mIEthbWFrdXJhLidcblxuICAgIGNvbnN0IGdyZWV0aW5nUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGdyZWV0aW5nQXJlYS5hcHBlbmRDaGlsZChncmVldGluZ1BpY3R1cmUpO1xuICAgIGdyZWV0aW5nUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1ncy9wcm9tb3Rpb24taW1hZ2UucG5nJyk7XG4gICAgZ3JlZXRpbmdQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncGFkZGluZy1sZWZ0OiAyNSU7JylcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICBuYXZCYXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjIwdncgMjB2dyAyMHZ3O2xlZnQ6IDEwdnc7cG9zaXRpb246IHJlbGF0aXZlO2dyaWQtY29sdW1uLWdhcDogMTB2dzt0b3A6IC0yMDBweDsnKVxuXG4gICAgY29uc3Qgc2NoZWR1bGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoc2NoZWR1bGVCdXR0b24pO1xuICAgIHNjaGVkdWxlQnV0dG9uLnRleHRDb250ZW50ID0gJ1NjaGVkdWxlJztcbiAgICBzY2hlZHVsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQ6ICMzOTY1OGI7aGVpZ2h0OiA1dnc7Ym9yZGVyLXdpZHRoOiAxMHB4O2JvcmRlci1jb2xvcjogIzI5NDQ1YTtmb250LXNpemU6IDIuNXZ3O2ZvbnQtd2VpZ2h0OiBib2xkO3RleHQtc2hhZG93OiAycHggMnB4IGFsaWNlYmx1ZTtjb2xvcjogIzI5NDQ1YTsnKTtcbiAgICBzY2hlZHVsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NjaGVkdWxlLWJ1dHRvbicpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogIzM5NjU4YjtoZWlnaHQ6IDV2dztib3JkZXItd2lkdGg6IDEwcHg7Ym9yZGVyLWNvbG9yOiAjMjk0NDVhO2ZvbnQtc2l6ZTogMi41dnc7Zm9udC13ZWlnaHQ6IGJvbGQ7dGV4dC1zaGFkb3c6IDJweCAycHggYWxpY2VibHVlO2NvbG9yOiAjMjk0NDVhOycpO1xuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJ1dHRvbicpO1xuXG4gICAgY29uc3QgY29udGFjdHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdHNCdXR0b24pO1xuICAgIGNvbnRhY3RzQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3RzJztcbiAgICBjb250YWN0c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQ6ICMzOTY1OGI7aGVpZ2h0OiA1dnc7Ym9yZGVyLXdpZHRoOiAxMHB4O2JvcmRlci1jb2xvcjogIzI5NDQ1YTtmb250LXNpemU6IDIuNXZ3O2ZvbnQtd2VpZ2h0OiBib2xkO3RleHQtc2hhZG93OiAycHggMnB4IGFsaWNlYmx1ZTtjb2xvcjogIzI5NDQ1YTsnKTtcbiAgICBjb250YWN0c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RzLWJ1dHRvbicpO1xuXG4gICAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudEJveCk7XG4gICAgY29udGVudEJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjQwdnc7aGVpZ2h0OjIwdnc7YmFja2dyb3VuZDojMzk2NThiO2xlZnQ6MzB2dztib3JkZXItcmFkaXVzOjF2dzt0b3A6LTEwdmg7Ym9yZGVyOiBzb2xpZCAjMjk0NDVhO2JvcmRlci13aWR0aDogLjV2dztwYWRkaW5nLWJvdHRvbTogMiU7ZGlzcGxheTpub25lOycpO1xuICAgIGNvbnRlbnRCb3guc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJveCcpO1xuXG4gICAgY29uc3QgY29udGVudEJveDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRCb3gyKTtcbiAgICBjb250ZW50Qm94Mi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjQwdnc7aGVpZ2h0OjIwdnc7YmFja2dyb3VuZDojMzk2NThiO2xlZnQ6MzB2dztib3JkZXItcmFkaXVzOjF2dzt0b3A6LTEwdmg7Ym9yZGVyOiBzb2xpZCAjMjk0NDVhO2JvcmRlci13aWR0aDogLjV2dztwYWRkaW5nLWJvdHRvbTogMiU7ZGlzcGxheTpub25lOycpO1xuICAgIGNvbnRlbnRCb3gyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdHMtYm94Jyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkOyIsImZ1bmN0aW9uIGJ1aWxkU2NoZWR1bGUoKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50Qm94KTtcbiAgICBjb250ZW50Qm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NDB2dztoZWlnaHQ6MjB2dztiYWNrZ3JvdW5kOiMzOTY1OGI7bGVmdDozMHZ3O2JvcmRlci1yYWRpdXM6MXZ3O3RvcDotMTB2aDtib3JkZXI6IHNvbGlkICMyOTQ0NWE7Ym9yZGVyLXdpZHRoOiAuNXZ3O2Rpc3BsYXk6YmxvY2s7cGFkZGluZy1ib3R0b206IDIlOycpO1xuICAgIGNvbnRlbnRCb3guc2V0QXR0cmlidXRlKCdpZCcsICdzY2hlZHVsZS1ib3gnKTtcbiAgICBzY2hlZHVsZUFjdGl2ZSgpO1xuICAgIHNjaGVkdWxlQ29udGVudCgpO1xufVxuXG5mdW5jdGlvbiBzY2hlZHVsZUNvbnRlbnQoKXtcbiAgICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjaGVkdWxlLWJveCcpO1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOjEwMCU7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDQlO2ZvbnQtd2VpZ2h0OiBib2xkO2ZvbnQtc2l6ZTogMS4ydnc7JylcbiAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICBmb3IgKGxldCBpID0gMTtpIDw9IDcgO2krKyl7XG4gICAgICAgIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVSb3cpO1xuICAgICAgICBjb25zdCBkYXlPZlRoZVdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBkYXlPZlRoZVdlZWsuc2V0QXR0cmlidXRlKCdpZCcsIGBkYXkke2l9YCk7XG4gICAgICAgIGRheU9mVGhlV2Vlay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3BhZGRpbmctYm90dG9tOiAyJTtib3JkZXI6c29saWQ7Ym9yZGVyLXdpZHRoOiAwcHggMHB4IDVweCAwcHg7JylcbiAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQoZGF5T2ZUaGVXZWVrKTtcblxuICAgICAgICBjb25zdCBvcGVuSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBvcGVuSG91cnMuc2V0QXR0cmlidXRlKCdpZCcsIGBob3VycyR7aX1gKTtcbiAgICAgICAgb3BlbkhvdXJzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncGFkZGluZy1ib3R0b206IDIlO2JvcmRlcjpzb2xpZDtib3JkZXItd2lkdGg6IDBweCAwcHggNXB4IDBweDsnKVxuICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZChvcGVuSG91cnMpO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5MScpLnRleHRDb250ZW50ID0gJ01vbmRheSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJzMScpLnRleHRDb250ZW50ID0gJzY6MDAgLSAyMDowMCc7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5MicpLnRleHRDb250ZW50ID0gJ1RodWVzZGF5JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cnMyJykudGV4dENvbnRlbnQgPSAnNjowMCAtIDIwOjAwJztcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXkzJykudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cnMzJykudGV4dENvbnRlbnQgPSAnMTA6MDAgLSAyMjowMCc7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5NCcpLnRleHRDb250ZW50ID0gJ1RodXJzZGF5JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cnM0JykudGV4dENvbnRlbnQgPSAnNjowMCAtIDIwOjAwJztcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXk1JykudGV4dENvbnRlbnQgPSAnRnJpZGF5JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cnM1JykudGV4dENvbnRlbnQgPSAnNjowMCAtIDIwOjAwJztcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXk2JykudGV4dENvbnRlbnQgPSAnU2F0dXJkYXknO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VyczYnKS50ZXh0Q29udGVudCA9ICcxMjowMCAtIDE2OjAwJztcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXk3JykudGV4dENvbnRlbnQgPSAnU3VuZGF5JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cnM3JykudGV4dENvbnRlbnQgPSAnQ2xvc2VkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlQWN0aXZlKCl7XG4gICAgY29uc3Qgc2NoZWR1bGVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NoZWR1bGUtYm94Jyk7XG4gICAgc2NoZWR1bGVCb3guc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo0MHZ3O2hlaWdodDoyMHZ3O2JhY2tncm91bmQ6IzM5NjU4YjtsZWZ0OjMwdnc7Ym9yZGVyLXJhZGl1czoxdnc7dG9wOi0xMHZoO2JvcmRlcjogc29saWQgIzI5NDQ1YTtib3JkZXItd2lkdGg6IC41dnc7ZGlzcGxheTpibG9jaztwYWRkaW5nLWJvdHRvbTogMiU7Jyk7XG4gICAgY29uc3QgbWVudUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJveCcpO1xuICAgIG1lbnVCb3guc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7Jyk7XG4gICAgY29uc3QgY29udGFjdHNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdHMtYm94Jyk7XG4gICAgY29udGFjdHNCb3guc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7Jyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkU2NoZWR1bGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9wYWdlLWxvYWQnXG5pbXBvcnQgYnVpbGRTY2hlZHVsZSwge3NjaGVkdWxlQWN0aXZlfSBmcm9tICcuL3NjaGVkdWxlJ1xuaW1wb3J0IGJ1aWxkTWVudSwge21lbnVBY3RpdmV9IGZyb20gJy4vbWVudSdcbmltcG9ydCBidWlsZENvbnRhY3RzLCB7Y29udGFjdHNBY3RpdmV9IGZyb20gJy4vY29udGFjdHMnXG5cblxuXG5cbnBhZ2VMb2FkKCk7XG5idWlsZFNjaGVkdWxlKCk7XG5idWlsZE1lbnUoKTtcbmJ1aWxkQ29udGFjdHMoKTtcblxuY29uc3Qgc2NoZWR1bGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NoZWR1bGUtYnV0dG9uJyk7XG5zY2hlZHVsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjaGVkdWxlQWN0aXZlKTtcblxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ1dHRvbicpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVBY3RpdmUpO1xuXG5jb25zdCBjb250YWN0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0cy1idXR0b24nKTtcbmNvbnRhY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGFjdHNBY3RpdmUpOyJdLCJzb3VyY2VSb290IjoiIn0=