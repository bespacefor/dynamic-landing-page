const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const person = document.getElementById('person');
const focus = document.getElementById('focus');

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);
};

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

function changeBgGreet() {
    let today = new Date();
    let hour = today.getHours();

    if (hour >= 6 && hour < 12) {
        document.body.style.backgroundImage = "url('../assets/img/1.jpg')";
        greeting.innerHTML = 'Good Morning, ';
    } else if (hour >= 12 && hour < 18) {
        document.body.style.backgroundImage = "url('../assets/img/2.jpg')";
        greeting.innerHTML = 'Good Afternoon, ';
    } else if (hour >= 18 && hour < 23) {
        document.body.style.backgroundImage = "url('../assets/img/3.jpg')";
        greeting.innerHTML = 'Good Evening, ';
    } else {
        document.body.style.backgroundImage = "url('../assets/img/4.jpg')";
        greeting.innerHTML = 'Good Night, ';
    };
};

//Get Name
function getName() {
    if (localStorage.getItem('person') === null) {
        person.textContent = '[Enter Name]';
    } else {
        person.textContent = localStorage.getItem('person');
    };
};

//Set Name
function setName(e) {
    if (e.type === 'keydown') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('person', e.target.innerText);
            person.blur();
        }
    } else {
        localStorage.setItem('person', e.target.innerText);
    };
};

//Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    };
};

//Set Focus
function setFocus(e) {
    if (e.type === 'keydown') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    };
};

person.addEventListener('keydown', setName);
person.addEventListener('blur', setName);
focus.addEventListener('keydown', setFocus);
focus.addEventListener('blur', setFocus);

//Quote's Animation
let quote = document.getElementById('quote');
focus.addEventListener('click', active);

function active() {
    focus.style.transition = 'all 0.4s';
    focus.style.color = 'white';
    quote.style.transition = 'all 0.4s';
    quote.style.color = 'white';
}

showTime();
changeBgGreet();
getName();
getFocus();
