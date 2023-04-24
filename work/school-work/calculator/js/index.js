var iReg='',aReg='',oReg='',digitsEnabled=true;// input register, accumulator register and previous selected operation register
function updInputReg(key){
    if(!digitsEnabled){
        return;
    }
    iReg= iReg + key;/*conc
    atenate the current input with the key.
        We are covered even if key is a number because iReg is a string.
    */;
    document.querySelector('#out').innerText=iReg;
}

function opKeyPressed(key){

    console.log('operator key pressed', key);
    let iRegV=iReg-0,aRegV=aReg-0,res;//place the numeric value of iReg in iRegV, and the numeric value of aReg in aRegV
    if (key=='%') {
        res=aRegV*iRegV/100;
        iReg=res+'';
        console.log('addition result', res);
        digitsEnabled=false;
        return;
    }


    // TODO Other ways

    // ? Number(ireg)
    // ? +ireg
    // ? parsefloat 

    console.log('iReg and aReg numbers', iRegV, aRegV);
    switch(oReg){
        case '-'://subtract iRegV from aRegV and store it res
            res=aRegV - iRegV;
            console.log('subtraction result', res);
        break;
        case '+'://add iRegV to aRegV and store it in res
            res=aRegV + iRegV;
            console.log('addition result', res);
        break;
        case '*'://add iRegV to aRegV and store it in res
            res=aRegV * iRegV;
            console.log('addition result', res);
        break;
        case '/'://add iRegV to aRegV and store it in res
            res=aRegV / iRegV;
            console.log('addition result', res);
        break;
        default	://nothing better to do
            res=iRegV;
            console.log('no better to do result', res);
    };
    digitsEnabled=true;
    aReg=res+'';//convert the result to a string and store it in aReg
    oReg=key;//keep the key for the next time we needed it
    iReg='';//clear the input register so that the user can enter the next number
    document.querySelector('#out').innerText=aReg;//Display aReg on the LCD.
    console.log('here the user should see ',aReg, 'on the screen');
}

// var inputRegister = '', areg = '', opperationRegister = '';

// function updateInput(key) {
//     // We expect the key to be '1', '2' or '3'
//     console.log('key ', key, 'must be 1 2 or 0')

//     // concatenate the current input wth the key
//     inputRegister= inputRegister + key; // We are covered even if the key is a number beceeause inpurTegister is a string.

//     document.querySelector('#out').innerText=inputRegister;
// }

// function oppKeyPressed(key) {
//     // Turns inputRegister into a number
//     let inputRegisterV = inputRegister-0, aRegV= areg-0;

//     // Switch statement
//     switch(opp) {
//         // Substract number from inputRegister from the number from areg and store it as a string in areg
//         // And display this on the lcd
//         case '-':
//             let res=aRegV - inputRegisterV
//             // Turn it into a string
//             areg = res+'';
//         break;

//         // add number from inputRegister from the number from areg and store it as a string in areg
//         // And display this on the lcd
//         case '+':
//             let res=aRegV + inputRegisterV;
//             // Turn it into a string
//             areg = res+'';
//         break;
//         // Nothing better to do, just store input in areg
//         default :
//             let res=inputRegisterV;
//             areg=res+''
//     }
//     document.querySelector('#out').innerText=inputRegister;
// }

