//const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

//Не удобный вариант, так как если записать еще одно событие, предыдущее сотрется
// btn.onclick = function() {
//     alert('asd');
// };

//Правильный подход! Можно назначать несколько событий на одно действие в очередь
// btn.addEventListener('click', () => {
//     alert('fff');
// });

let i = 0;
const deleteElement = (e) => {
    //console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

//Если нужно задать действие на все одинаковые элементы
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); //важная штука! всегда использоваться! отмена деф действий браузера!

    console.log(event.target);
});
