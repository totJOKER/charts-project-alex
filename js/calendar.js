
let date = new Date();
let dateMonth = date.getMonth();
let dateDay = date.getDate();
let dataHead = document.getElementById("month-calendar");
let firstDayMonth;
switch (dateMonth) {
    case 0:
        dataHead.innerText = "январь";
        firstDayMonth = 0;
        break;
    case 1:
        dataHead.innerText = "февраль";
        firstDayMonth = 1;
        break;
    case 2:
        dataHead.innerText = "март";
        firstDayMonth = 2;
        break;
    case 3:
        dataHead.innerText = "апрель";
        firstDayMonth = 3;
        break;
    case 4:
        dataHead.innerText = "май";
        firstDayMonth = 4;
        break;
    case 5:
        dataHead.innerText = "июнь";
        firstDayMonth = 5;
        break;
    case 6:
        dataHead.innerText = "июль";
        firstDayMonth = 6;
        break;
    case 7:
        dataHead.innerText = "август";
        firstDayMonth = 7;
        break;
    case 8:
        dataHead.innerText = "Сентябрь";
        firstDayMonth = 8;
        break;
    case 9:
        dataHead.innerText = "октябрь";
        firstDayMonth = 9;
        break;
    case 10:
        dataHead.innerText = "ноябрь";
        firstDayMonth = 10;
        break;
    case 11:
        dataHead.innerText = "декабрь";
        firstDayMonth = 11;
        break;
    default:
        console.log('Месяц не найден :(');
}


let year = date.getFullYear();
let yearBlock = document.getElementById("year-calendar");
yearBlock.innerText = year;
let firstDay = new Date(year, firstDayMonth, 1, 0, 0, 0, 0);
let dayMonth = firstDay.getDay();
console.log(dayMonth);

let calendar = document.getElementById("data")
let days = [];
switch (dayMonth) {
    case 1:
        break;
    case 2:
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    case 3:
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    case 4:
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    case 5:
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    case 6:
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    case 0:
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    default:
        break;
}
for (let i = 1; i <= 30; i++) {
    days.push(i);
}
for (let j = 0; j < days.length; ++j) {
    if (j + 1 !== dateDay) {
        calendar.innerHTML += `<div id="inputData" class="calendar-p calendar-back"><input type="button" value="${days[j]}" class="data-hover"></div>`;
    } else {
        calendar.innerHTML += `<div id="inputData" class="calendar-p calendar-back day-active"><input type="button" value="${days[j]}" class="data-hover"></div>`;
    }
}



let actionArr = document.querySelectorAll('#action-calendar');
let actionBlocks = []
for (let arr = 0; arr < actionArr.length; arr++) {
    actionBlocks.push(actionArr[arr].value);
}

let dataArr = document.querySelectorAll('#inputData')

for (let cont = 0; cont <= dataArr.length; cont++) {
    if (actionBlocks[0][0] + actionBlocks[0][1] == cont) {
        dataArr[cont - 1].innerHTML += `<div class="action-check"></div>` 
    }
    if (actionBlocks[1][0] + actionBlocks[1][1] == cont) {
        dataArr[cont - 1].innerHTML += `<div class="action-check"></div>`
    }
    if (actionBlocks[2][0] + actionBlocks[2][1] == cont) {
        dataArr[cont - 1].innerHTML += `<div class="action-check"></div>`
    }
    if (actionBlocks[3][0] + actionBlocks[3][1] == cont) {
        dataArr[cont - 1].innerHTML += `<div class="action-check"></div>`
    }
}