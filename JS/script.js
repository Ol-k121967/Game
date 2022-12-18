let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let answerText = 2;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumber = 1;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerText = Math.round(Math.random() * 3);
    switch (answerText) {
        case 0:
            answerField.innerText = `Вы загадали число ${answerNumber }?`
            gameRun = true;
          break;
        case 1:
            answerField.innerText = `Надеюсь это число ${answerNumber }?`
            gameRun = true;
          break;
        case 2:
            answerField.innerText = `Неужели это ${answerNumber }?`
            gameRun = true;
       default:
        answerField.innerText = `Как насчет ${answerNumber }?`
        gameRun = true;
      }
   
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerText = Math.round(Math.random() * 3);
            switch (answerText) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`
                    gameRun = true;
                  break;
                case 1:
                    answerField.innerText = `Надеюсь это число ${answerNumber }?`
                    gameRun = true;
                  break;
                case 2:
                    answerField.innerText = `Неужели это ${answerNumber }?`
                    gameRun = true;
               default:
                answerField.innerText = `Как насчет ${answerNumber }?`
                gameRun = true;
              }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
           answerText = Math.round(Math.random() * 3);
            switch (answerText) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`
                    gameRun = true;
                  break;
                case 1:
                    answerField.innerText = `Надеюсь это число ${answerNumber }?`
                    gameRun = true;
                  break;
                case 2:
                    answerField.innerText = `Неужели это ${answerNumber }?`
                    gameRun = true;
               default:
                answerField.innerText = `Как насчет ${answerNumber }?`
                gameRun = true;
              }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerText = Math.round(Math.random() * 3);
        switch (answerText) {
            case 0:
                answerField.innerText = `Я всегда угадываю, я умный\n\u{1F60E}`
                gameRun = false;
              break;
            case 1:
                answerField.innerText = `Математику не обманешь\n\u{01F913}`
                gameRun = false;
              break;
            case 2:
                answerField.innerText = `Это просто магия\n\u{01F638}`
                gameRun = false;
           default:
            answerField.innerText = `Учись, пока я рядом\n\u{01F602}`
            gameRun = false;
          }
    }
})

