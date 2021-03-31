'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd'),
      inputEuro = document.querySelector('#euro');


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); //собирает настройки. метод, путь, асинхронность. логин, пассворд
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // 1 вариант
    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //         inputEuro.value = (+inputRub.value / data.current.euro).toFixed(2);
    //     } else {
    //         inputUsd.value = "Что то пошло нет так, бро!";
    //         inputEuro.value = "Что то пошло нет так, бро!";
    //     }
    // });

    // 2 вариант
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            inputEuro.value = (+inputRub.value / data.current.euro).toFixed(2);
        } else {
            inputUsd.value = "Что то пошло нет так, бро!";
            inputEuro.value = "Что то пошло нет так, бро!";
        }
    });

    // status
    // statusText
    // response
    // readyState



});