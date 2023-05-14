let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;


const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

    
    minValue = 
    

    minValue = '' || false || 1;
    console.log(minValue);


    minValue<-999? -999: parseInt(minValue)||0;
    maxValue>999? 999: parseInt(maxValue)||100;





    document.getElementById('btnOver').addEventListener('click', function () {
    
   if (gameRun){
    if (minValue === maxValue){}
        const phraseRandom = Math.round( Math.random()*2);
       
    //if ( phraseRandom === 1){
            
            //answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`;
           //console.log(answerField.innerText)
         
       // } else {
         //   answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
            
               
        //} if ( phraseRandom === 2){
            
        //    answerField.innerText = `Это очень сложно!!!`;
           
       // } else {
       //     answerField.innerText =  `надо подумать ...`;
            
           
           
       // } 
   // } 

   (phraseRandom === 1)? answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`:answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
   ( phraseRandom === 2)? answerField.innerText = `Это очень сложно!!!`: answerField.innerText =  `надо подумать ...`;

   }
        if (minValue != maxValue){
                 
        
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            if ( phraseRandom === 1){
            
                answerField.innerText = `Это число ...${answerNumber }`;
               
             
            } else {
                answerField.innerText = `Это просто! Вы загадали ${answerNumber }`;
                
                   
            } if ( phraseRandom === 2){
                
                answerField.innerText = `Вы загадали число ${answerNumber }`;
               
            } else {
                answerField.innerText =  `Ураа... Это..${answerNumber }`;

            
        
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
            
        } else {
            maxValue = answerNumber  - 0;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        if ( phraseRandom === 1){
        
            answerField.innerText = `Здорово!`;
           
         
        } else {
            answerField.innerText = `Восхитительно`;
            
               
        } if ( phraseRandom === 2){
            
            answerField.innerText = `Класс!!!}`;
           
        } else {
            answerField.innerText =  `Я всегда угадываю\n\u{1F60E}`;

        
    
    }
    }

})
    

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    orderNumberField.innerText = 1;

            
if (gameRun){

        answerNumber  = Math.floor((minValue + maxValue) / 2);

            answerField.innerText = `Вы загадали число ${answerNumber }?`;
    }


})


    

    