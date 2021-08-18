function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length == 4){
        return pin;
    }else{
        return getPin()
    }
}

function generatrPin(){
    const pin = getPin();
    document.getElementById('dispaly-pin').value = pin; 
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
        calcInput.value = '';
        }
    }else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }
});

function verifyPin(){
    const pin = document.getElementById('dispaly-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const passed = document.getElementById('verification-passed');
    const failError = document.getElementById('verification-fail');
    if(pin == typedNumbers){
        failError.style.display = 'none';
        passed.style.display = 'block';
    }else{
        
        failError.style.display = 'block';
        passed.style.display = 'none';
    }
}