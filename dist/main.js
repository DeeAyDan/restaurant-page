(()=>{"use strict";(function(){const t=document.querySelector("body");t.setAttribute("style","background:#39658b;");const e=document.createElement("div");t.appendChild(e),e.setAttribute("style",'background-image: url("../src/imgs/ramen-stand.gif");background-repeat:no-repeat;height:1350px;width:100vw;position:fixed;background-position: top center;top: -500px;z-index:-1;');const n=document.querySelector("#content");n.setAttribute("style",'position:absolute;width:100vw;height:1000px;top:1000px;background-image: url("../src/imgs/background-transition.png");left: 0%;right: 0%;bottom: 0%;');const o=document.createElement("h1");n.appendChild(o),o.textContent="Bear-Paw Ramen",o.setAttribute("style",'text-align:center;position:relative;top:-700px;padding-top: 25px;padding-bottom: 25px;background-color: #39658b61;font-size: 300%;text-shadow: 2px 2px aliceblue;font-family: "Trebuchet MS", sans-serif;');const d=document.createElement("div");n.appendChild(d),d.setAttribute("style","display: grid;grid-template-columns: 30vw 30vw;grid-column-gap: 0vw;top: -600px;padding-left: 25vw;position: relative;background-color: #39658b61;color: white;text-align: center;font-size: 250%;text-shadow: 2px 2px black;");const i=document.createElement("p");d.appendChild(i),i.textContent="Welcome to the Bear-Paw Ramen. The best pixelated restaurant you can find in all of Kamakura.";const r=document.createElement("img");d.appendChild(r),r.setAttribute("src","../src/imgs/promotion-image.png"),r.setAttribute("style","padding-left: 25%;");const a=document.createElement("div");n.appendChild(a),a.setAttribute("style","display:grid;grid-template-columns:20vw 20vw 20vw;left: 10vw;position: relative;grid-column-gap: 10vw;top: -200px;");const c=document.createElement("button");a.appendChild(c),c.textContent="Schedule",c.setAttribute("style","background: #39658b;height: 5vw;border-width: 10px;border-color: #29445a;font-size: 2.5vw;font-weight: bold;text-shadow: 2px 2px aliceblue;color: #29445a;");const l=document.createElement("button");a.appendChild(l),l.textContent="Menu",l.setAttribute("style","background: #39658b;height: 5vw;border-width: 10px;border-color: #29445a;font-size: 2.5vw;font-weight: bold;text-shadow: 2px 2px aliceblue;color: #29445a;");const u=document.createElement("button");a.appendChild(u),u.textContent="Contacts",u.setAttribute("style","background: #39658b;height: 5vw;border-width: 10px;border-color: #29445a;font-size: 2.5vw;font-weight: bold;text-shadow: 2px 2px aliceblue;color: #29445a;")})(),function(){const t=document.querySelector("#content"),e=document.createElement("div");t.appendChild(e),e.setAttribute("style","position:relative;width:40vw;height:20vw;background:#39658b;left:30vw;border-radius:1vw;top:-10vh;border: solid #29445a;border-width: .5vw;"),e.setAttribute("id","scheduleBox"),function(){const t=document.getElementById("scheduleBox"),e=document.createElement("table");e.setAttribute("style","width:100%;text-align: center;padding: 10%;font-weight: bold;font-size: 1.2vw;"),t.appendChild(e);for(let t=1;t<=7;t++){const n=document.createElement("tr");n.setAttribute("style","padding-bottom: 2%;"),e.appendChild(n);const o=document.createElement("td");o.setAttribute("id",`day${t}`),n.appendChild(o);const d=document.createElement("td");d.setAttribute("id",`hours${t}`),n.appendChild(d)}document.getElementById("day1").textContent="Monday",document.getElementById("hours1").textContent="6:00 - 20:00",document.getElementById("day2").textContent="Thuesday",document.getElementById("hours2").textContent="6:00 - 20:00",document.getElementById("day3").textContent="Wednesday",document.getElementById("hours3").textContent="10:00 - 22:00",document.getElementById("day4").textContent="Thursday",document.getElementById("hours4").textContent="6:00 - 20:00",document.getElementById("day5").textContent="Friday",document.getElementById("hours5").textContent="6:00 - 20:00",document.getElementById("day6").textContent="Saturday",document.getElementById("hours6").textContent="12:00 - 16:00",document.getElementById("day7").textContent="Sunday",document.getElementById("hours7").textContent="Closed"}()}()})();