let hud = document.getElementById('hud');
let time = document.getElementById('time');
let date = document.getElementById('date');
let heal = document.getElementById('heal');
let armor = document.getElementById('armor');
let healtext = document.getElementById('healtext');
let armortext = document.getElementById('armortext');
let cash = document.getElementById('cash');
let nick = document.getElementById('nick');
let id = document.getElementById('id');
let position = document.getElementById('position');
let city = document.getElementById('city');
let street = document.getElementById('street');

// radial menu

let _radialShow = false;
const currentInterface = document.getElementById('radialka');

window.onload = function() {
    window.setInterval(function() {
        var d = new Date();
        var month = d.getMonth() + 1;
        time.innerHTML = `${d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0') + ":" + d.getSeconds().toString().padStart(2, '0')}`;
        date.innerHTML = `${d.getDate().toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${d.getFullYear()}`;
    }, 1000);
};

window.addEventListener("keyup", (event) => {
    if (event.key === 'Escape') {
        if (_radialShow === true) {
            _radialShow = false;
            currentInterface.style = 'display:none;';
            cef.hide(true);
            cef.set_focus(false);
        }
    }
});

cef.on("game:hud:newVisibleState", (success) => {
    cef.hide(!success);
});
cef.emit("game:hud:setComponentVisible", "interface", false);
cef.emit("game:data:pollPlayerStats", true, 50);
cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => {
    heal.value = `${hp}`;
    healtext.innerHTML = Math.round(`${hp}`);
    armor.value = `${arm}`;
    armortext.innerHTML = Math.round(`${arm}`);
    var moneyInt = (money).toLocaleString('ru');
    cash.innerText = moneyInt;
    hud.style = "display: block";
    position.style = "display: block";
});

cef.emit('ShowNick:try');

cef.on('ShowNick:nickname', (name, ids) => {
    nick.innerHTML = name;
    id.innerHTML = ids;

});
cef.on('ShowNick:position', (gorod, streets) => {
    city.innerHTML = gorod;
    street.innerHTML = streets;

});

cef.emit('Radial:try');
cef.on('Radial:show', () => {
    currentInterface.style = "display: block;";
    _radialShow = true;
    cef.set_focus(true);
});

function ClickRadial(event) {
    let click = event;
    switch (click) {
        case 0:
            {
                cef.emit('Radial:inter', 1);
                console.log('good 0');
                break;
            }
        case 1:
            {
                cef.emit('Radial:inter', 2);
                console.log('good 1');
                break;
            }
        case 2:
            {
                cef.emit('Radial:inter', 3);
                console.log('good 2');
                break;
            }
        case 3:
            {
                cef.emit('Radial:inter', 4);
                console.log('good 3');
                break;
            }
        case 4:
            {
                currentInterface.style = "display: none;";
                cef.set_focus(false);
                console.log('close');
                break;
            }
    }
};