








let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
minValue = (minValue || -999 || !isNaN(minValue));
minValue = (minValue <= -999) ? minValue = -999 : (minValue >= 999) ? minValue = 999 : minValue;
maxValue = (maxValue || 999 || !isNaN(maxValue));
maxValue = (maxValue >= 999) ? maxValue = 999 : 
                                                  (maxValue >= 999) ? maxValue = 999 : maxValue = maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let answerText = 2;
let answerNumberText = '';

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () 
{
    minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
    minValue = (minValue || -999 || !isNaN(minValue));
    minValue = (minValue <= -999) ? minValue = -999 : (minValue >= 999) ? minValue = 999 : minValue;
    maxValue = (maxValue || 999 || !isNaN(maxValue));
    maxValue = (maxValue >= 999) ? maxValue = 999 : 
                                                      (maxValue >= 999) ? maxValue = 999 : maxValue = maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumber = 1;
    answerNumberText = '';
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerText = Math.round(Math.random() * 3);
    switch (answerNumber)  {
      case 0:
        answerNumberText = "ноль"
        break;
      case 1:
        answerNumberText = "один"
        break;
      case 2:
          answerNumberText = "два"
          break;
      case 3:
          answerNumberText = "три"
          break;
      case 4:
          answerNumberText = "четыре"
          break;
      case 5:
          answerNumberText = "пять"
          break;
      case 6:
          answerNumberText = "шесть"
          break;
      case 7:
          answerNumberText = "семь"
          break;
      case 8:
          answerNumberText = "восемь"
          break;
      case 9:
          answerNumberText = "девять"
          break;
      default:
        answerNumberText = "девять LR"
    } 
    switch (answerText)
   {
        case 0:
           if (answerNumber >= 0 && answerNumber <=9 )  {
            answerField.innerText = 'Вы загадали число ' + answerNumberText + "?";
            gameRun = true;
            break;
          }
         else {  
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        gameRun = true;
          break;
        }
              case 1:
          if (answerNumber >= 0 && answerNumber <=9 )  {
              answerField.innerText = 'Надеюсь это число ' + answerNumberText + '?' ;
              gameRun = true;
              break;
            }
           else { 
            answerField.innerText = `Надеюсь это число ${answerNumber }?`;
            gameRun = true; 
            break;
           
          }
        case 2:
          if (answerNumber >= 0 && answerNumber <=9 ) {
              answerField.innerText = 'Неужели это ' + answerNumberText + '?';
              gameRun = true;
              break;
            }
            else { 
            answerField.innerText = `Неужели это ${answerNumber }?`;
            gameRun = true;
            break;
          }
       default:
        if (answerNumber >= 0 && answerNumber <=9 ) 
        {
            answerField.innerText = 'Как насчет ' + answerNumberText +'?'; 
            gameRun = true;
            break;
        }  else { 
          answerField.innerText = `Как насчет ${answerNumber }?`;
          gameRun = true;
          break;
        }
    }

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun)
    {
        if (minValue === maxValue)
        {
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else 
        {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerText = Math.round(Math.random() * 3);

            switch (answerNumber)  {
              case 0:
                answerNumberText = "ноль"
                break;
              case 1:
                answerNumberText = "один"
                break;
              case 2:
                  answerNumberText = "два"
                  break;
              case 3:
                  answerNumberText = "три"
                  break;
              case 4:
                  answerNumberText = "четыре"
                  break;
              case 5:
                  answerNumberText = "пять"
                  break;
              case 6:
                  answerNumberText = "шесть"
                  break;
              case 7:
                  answerNumberText = "семь"
                  break;
              case 8:
                  answerNumberText = "восемь"
                  break;
              case 9:
                  answerNumberText = "девять"
                  break;
              default:
                answerNumberText = "девять LR"
            } 
            switch (answerText)
           {
                case 0:
                   if (answerNumber >= 0 && answerNumber <=9 )  {
                    answerField.innerText = 'Вы загадали число ' + answerNumberText + "?";
                    gameRun = true;
                    break;
                  }
                 else {  
                answerField.innerText = `Вы загадали число ${answerNumber }?`;
                gameRun = true;
                  break;
                }
                      case 1:
                  if (answerNumber >= 0 && answerNumber <=9 )  {
                      answerField.innerText = 'Надеюсь это число ' + answerNumberText + '?' ;
                      gameRun = true;
                      break;
                    }
                   else { 
                    answerField.innerText = `Надеюсь это число ${answerNumber }?`;
                    gameRun = true; 
                    break;
                   
                  }
                case 2:
                  if (answerNumber >= 0 && answerNumber <=9 ) {
                      answerField.innerText = 'Неужели это ' + answerNumberText + '?';
                      gameRun = true;
                      break;
                    }
                    else { 
                    answerField.innerText = `Неужели это ${answerNumber }?`;
                    gameRun = true;
                    break;
                  }
               default:
                if (answerNumber >= 0 && answerNumber <=9 ) 
                {
                    answerField.innerText = 'Как насчет ' + answerNumberText +'?'; 
                    gameRun = true;
                    break;
                }  else { 
                  answerField.innerText = `Как насчет ${answerNumber }?`;
                  gameRun = true;
                  break;
                }
            }
            
          
//          
      
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
           switch (answerNumber)  {
            case 0:
              answerNumberText = "ноль"
              break;
            case 1:
              answerNumberText = "один"
              break;
            case 2:
                answerNumberText = "два"
                break;
            case 3:
                answerNumberText = "три"
                break;
            case 4:
                answerNumberText = "четыре"
                break;
            case 5:
                answerNumberText = "пять"
                break;
            case 6:
                answerNumberText = "шесть"
                break;
            case 7:
                answerNumberText = "семь"
                break;
            case 8:
                answerNumberText = "восемь"
                break;
            case 9:
                answerNumberText = "девять"
                break;
            default:
              answerNumberText = "девять LR"
          } 
          switch (answerText)
         {
              case 0:
                 if (answerNumber >= 0 && answerNumber <=9 )  {
                  answerField.innerText = 'Вы загадали число ' + answerNumberText + "?";
                  gameRun = true;
                  break;
                }
               else {  
              answerField.innerText = `Вы загадали число ${answerNumber }?`;
              gameRun = true;
                break;
              }
                    case 1:
                if (answerNumber >= 0 && answerNumber <=9 )  {
                    answerField.innerText = 'Надеюсь это число ' + answerNumberText + '?' ;
                    gameRun = true;
                    break;
                  }
                 else { 
                  answerField.innerText = `Надеюсь это число ${answerNumber }?`;
                  gameRun = true; 
                  break;
                 
                }
              case 2:
                if (answerNumber >= 0 && answerNumber <=9 ) {
                    answerField.innerText = 'Неужели это ' + answerNumberText + '?';
                    gameRun = true;
                    break;
                  }
                  else { 
                  answerField.innerText = `Неужели это ${answerNumber }?`;
                  gameRun = true;
                  break;
                }
             default:
              if (answerNumber >= 0 && answerNumber <=9 ) 
              {
                  answerField.innerText = 'Как насчет ' + answerNumberText +'?'; 
                  gameRun = true;
                  break;
              }  else { 
                answerField.innerText = `Как насчет ${answerNumber }?`;
                gameRun = true;
                break;
              }
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

