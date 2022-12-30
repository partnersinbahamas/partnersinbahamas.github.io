'use strict';

const form = document.querySelector('form');
const fName = document.querySelector('.inputs__name');
const songNameF = document.querySelector('.song__name-field');

const razpev = document.querySelector('.inputs__rospev');
const razpevF = document.querySelector('.song__rospev-list');
const h1songtRazpev = document.querySelector('.song__raspev');

const razpev2 = document.querySelector('.inputs__rospev-2');
const razpevF2 = document.querySelector('.song__rospev-list-2');
const h1songtRazpev2 = document.querySelector('.song__raspev-2');

const razpev3 = document.querySelector('.inputs__rospev-3');
const razpevF3 = document.querySelector('.song__rospev-list-3');
const h1songtRazpev3 = document.querySelector('.song__raspev-3');

const startWindwo = document.querySelector('.start');
const h1SongName = document.querySelector('.song__name');
const errorField = document.querySelector('.error');

const cuplet = document.querySelector('.inputs__kuplet');
const cupletField = document.querySelector('.song__kuplet-list');
const cupletH1 = document.querySelector('.song__kuplet');

const cuplet2 = document.querySelector('.inputs__kuplet-2');
const cupletField2 = document.querySelector('.song__kuplet-list-2');
const cupletH12 = document.querySelector('.song__kuplet-2');

const cuplet3 = document.querySelector('.inputs__kuplet-3');
const cupletField3 = document.querySelector('.song__kuplet-list-3');
const cupletH13 = document.querySelector('.song__kuplet-3');

const songShell = document.querySelector('.song');
const buttons = document.querySelectorAll('.closeButton');

const startVideo = document.querySelector('.video');


setTimeout(() => {
    startWindwo.classList.add('start__slide');
}, 3500);

setTimeout(() => {
    startWindwo.remove();
}, 4000);

const id = new Date();


fName.addEventListener('keydown', (event) => {
    if(event.code !== 'Enter') return 1;

    if(fName.value.length > 30) {
        errorField.textContent = `Ебать ты даун, поменьше символов` + 
        ` (${fName.value.length})`;

        errorField.style = 'transform: translateX(0%)'

        setTimeout(() => {
        errorField.style = 'transform: translateX(110%)'
            
        }, 1500);

    } else {
        h1SongName.hidden = false;
        songNameF.textContent = fName.value;
    fName.value = '';

    }

    songShell.hidden = false;

});

cuplet.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    const ArrValue = cuplet.value.split(' ');

    if(ArrValue.length > 10) {
        errorField.textContent =

        `Фатальная ошыбка:
        Много слов, в строке максимум 10 :${ArrValue.length}`;

        errorField.style = 'transform: translateX(0%)'

        setTimeout(() => {
          errorField.style = 'transform: translateX(110%)'
        }, 5000);


    } else {
        cupletH1.hidden = false;

        cupletField.insertAdjacentHTML('beforeend', `
          <div class="list__item">
            <li class="song__rospev-${id}">${cuplet.value}</li>
                <img src="./cross-img.png" alt="" class="button-img">
          </div>
        `);

    cuplet.value = '';

    }

    songShell.hidden = false;
});

cupletField.addEventListener('click', (event) => {
    const item = event.target;

    if(!item.matches('.button-img')) return;

    item.closest('.list__item').remove();
});

razpev.addEventListener('keydown', (event) => {
    if (event.code !== 'Enter') return;

    const value = razpev.value.split(' ');
    
    if(value.length > 10) {
        errorField.textContent = `Много слов, в строке максимум 10 :${value.length}`;

        errorField.style = 'transform: translateX(0%)'

        setTimeout(() => {
          errorField.style = 'transform: translateX(110%)'
        }, 1500);

    } else {
        h1songtRazpev.hidden = false;

        razpevF.insertAdjacentHTML('beforeend', `
        <div class="list__item">
        <li class="song__rospev-${id}">${razpev.value}</li>
            <img src="./cross-img.png" alt="" class="button-img">
      </div>
        `);

    razpev.value = '';

    }

    songShell.hidden = false;
});

razpevF.addEventListener('click', (event) => {
    const item = event.target;

    if(!item.matches('.button-img')) return;

    item.closest('.list__item').remove();
});


cuplet2.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    const ArrValue = cuplet2.value.split(' ');

    if(ArrValue.length > 10) {
        errorField.textContent =

        `Фатальная ошыбка:
        Много слов, в строке максимум 10 :${ArrValue.length}`;

        errorField.style = 'transform: translateX(0%)'

        setTimeout(() => {
          errorField.style = 'transform: translateX(110%)'
        }, 5000);

    } else {
        cupletH12.hidden = false;

        cupletField2.insertAdjacentHTML('beforeend', `
          <div class="list__item">
            <li class="song__rospev-${id}">${cuplet2.value}</li>
                <img src="./cross-img.png" alt="" class="button-img">
          </div>
        `);

    cuplet2.value = '';

    }

    songShell.hidden = false;
});

cupletField2.addEventListener('click', (event) => {
    const item = event.target;

    if(!item.matches('.button-img')) return;

    item.closest('.list__item').remove();
});

razpev2.addEventListener('keydown', (event) => {
    if (event.code !== 'Enter') return;

    const value = razpev2.value.split(' ');
    
    if(value.length > 10) {
        errorField.textContent = `Много слов, в строке максимум 10 :${value.length}`;

        errorField.style = 'transform: translateX(0%)'

        setTimeout(() => {
          errorField.style = 'transform: translateX(110%)'
        }, 1500);

    } else {
        h1songtRazpev2.hidden = false;

        razpevF2.insertAdjacentHTML('beforeend', `
        <div class="list__item">
        <li class="song__rospev-${id}">${razpev2.value}</li>
            <img src="./cross-img.png" alt="" class="button-img">
      </div>
        `);

        razpev2.value = '';
    }

    songShell.hidden = false;
});

razpevF2.addEventListener('click', (event) => {
    const item = event.target;

    if(!item.matches('.button-img')) return;

    item.closest('.list__item').remove();
});



cuplet3.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    const ArrValue = cuplet3.value.split(' ');

    if(ArrValue.length > 10) {
        errorField.textContent =

        `Фатальная ошыбка:
        Много слов, в строке максимум 10 :${ArrValue.length}`;

        errorField.style = 'transform: translateX(0%)'

        setTimeout(() => {
          errorField.style = 'transform: translateX(110%)'
        }, 5000);

    } else {
        cupletH13.hidden = false;

        cupletField3.insertAdjacentHTML('beforeend', `
          <div class="list__item">
            <li class="song__rospev-${id}">${cuplet3.value}</li>
                <img src="./cross-img.png" alt="" class="button-img">
          </div>
        `);

    cuplet3.value = '';

    }

    songShell.hidden = false;
});

cupletField3.addEventListener('click', (event) => {
    const item = event.target;

    if(!item.matches('.button-img')) return;

    item.closest('.list__item').remove();
});


razpev3.addEventListener('keydown', (event) => {
    if (event.code !== 'Enter') return;

    const value = razpev3.value.split(' ');
    
    if(value.length > 10) {
        errorField.textContent = `Много слов, в строке максимум 10 :${value.length}`;

        errorField.style = 'transform: translateX(0%)'

        setTimeout(() => {
          errorField.style = 'transform: translateX(110%)'
        }, 1500);

    } else {
        h1songtRazpev3.hidden = false;

        razpevF3.insertAdjacentHTML('beforeend', `
        <div class="list__item">
        <li class="song__rospev-${id}">${razpev3.value}</li>
            <img src="./cross-img.png" alt="" class="button-img">
      </div>
        `);

        razpev3.value = '';

    }

    songShell.hidden = false;
});

razpevF3.addEventListener('click', (event) => {
    const item = event.target;

    if(!item.matches('.button-img')) return;

    item.closest('.list__item').remove();
});


