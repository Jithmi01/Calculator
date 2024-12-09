let inputElObj = document.getElementById('inputEl');
let numberOne;
let numberTwo;
let Operator;
let output;

const Num1Display = document.getElementById('num1display');
const Num2Display = document.getElementById('num2display');
const OperatorDisplay = document.getElementById('operator');
const OutputDisplay = document.getElementById('output');
const EQL = document.getElementById('eql');



inputElObj.addEventListener('keyup',(event)=>{
    if(event.key=='Enter' || event.keyCode==13){

        let tempVal1 =inputElObj.value;

        if(!isNaN(tempVal1)){
            if(numberOne==null){
                numberOne = parseFloat(tempVal1);
            Num1Display.innerText=numberOne;
            inputElObj.value='';
            }
            else if (Operator !== null && numberTwo == null) {
                numberTwo = parseFloat(tempVal1);
                Num2Display.innerText = numberTwo;
                inputElObj.value='';
            }
            else{
                alert('You have already entered both numbers');
            }
        }
        else{
            alert('Your inputs are incorrect');
        }
             
    }

});


let btnEL = document.querySelectorAll('button');

btnEL.forEach((button) =>{
    button.addEventListener('click',()=>{
        let opt = event.target.innerText;
        OperatorDisplay.innerText=opt;

        if (opt !== "=") {
            Operator = opt;
            OperatorDisplay.innerText = Operator;
        }

        if (opt==='=' && numberOne!=null && numberTwo!=null && Operator!=null){
            switch(Operator){
                case '+':
                    output = numberOne + numberTwo;
                    break;
                case '-':
                    output = numberOne - numberTwo;
                    break;
                case '*':
                    output = numberOne * numberTwo;
                    break;
                case '/':
                    output = numberOne / numberTwo;
                    break;
                case '%':
                    output = numberOne % numberTwo;
                    break;
            }
            console.log(output);
            OutputDisplay.innerText=output;
        }
    });
      
});









