/***********
 * 
 * Used with scientific.html or standard.html and calcstyle.css
 * this file will produce a standard and a scientific calculator
 * 
 * Radians, Degrees, Exponent and Parentheses are not operational 
 * in this release, but will be in the next release.  Still need 
 * determine the algorithm for Exponent.
 * 
 ************/

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const point = document.querySelector('.point');
const equals = document.querySelector('.equals');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const times = document.querySelector('.times');
const dividedby = document.querySelector('.dividedby');
const AC = document.querySelector('.AC');
const percent = document.querySelector('.percent');
const openparen = document.querySelector('.openparen');
const closeparen = document.querySelector('.closeparen');
const factorial = document.querySelector('.factorial');
const natlog = document.querySelector('.natlog');
const log10 = document.querySelector('.log10');
const sqroot = document.querySelector('.sqroot');
const x2y = document.querySelector('.x2y');
const degrees = document.querySelector('.degrees');
const sine = document.querySelector('.sine');
const cosine = document.querySelector('.cosine');
const tangent = document.querySelector('.tangent');
const exponent = document.querySelector('.exponent');
const radians = document.querySelector('.radians');
const inverse = document.querySelector('.inverse');
const pi = document.querySelector('.pi');
const euler = document.querySelector('.euler');
const lastanswer = document.querySelector('.lastanswer');
const outcome = document.querySelector('p.outcome');

outcome.value = '0';
let displayline = '';
let result = 0;
let key = '';
let multiplier = 1;
let operator = '';
let initialPass = true;
let prevdisplay = 0;
let lastresult = 0;

function getNum(key) {
    outcome.value = key;
    displayline = displayline + outcome.value;
    outcome.innerHTML = displayline;
    return displayline;
};
   
    zero.addEventListener('click', () => {
        getNum ("0");
     });
    one.addEventListener('click', () => {
        getNum ("1");
    });
    two.addEventListener('click', () => {
        getNum ("2");
    });
    three.addEventListener('click', () => {
        getNum ("3");
    });
    four.addEventListener('click', () => {
        getNum ("4");
    });
    five.addEventListener('click', () => {
        getNum ("5");
    });
    six.addEventListener('click', () => {
        getNum ("6");
    });
    seven.addEventListener('click', () => {
        getNum ("7");
    });
    eight.addEventListener('click', () => {
        getNum ("8");
    });
    nine.addEventListener('click', () => {
        getNum ("9");
    });
    point.addEventListener('click', () => {
        getNum (".");
    });
    // openparen.addEventListener('click', () => {
    //     getNum ("(");
    // });
    // closeparen.addEventListener('click', () => {
    //     getNum (")");
    // });

    plus.addEventListener('click', () => {
        result = Number(result) + Number(displayline);
        prevdisplay = displayline;
        displayline = result;
        outcome.innerHTML = displayline;
        displayline = '';
        operator = 'plus';
    });

    minus.addEventListener('click', () => {
        prevdisplay = displayline;
        if (initialPass)    {
            result = displayline;
        }   else    {
            result = Number(result) - Number(displayline);
            displayline = result;
        };
        outcome.innerHTML = displayline;
        displayline = '';
        initialPass = false;
        operator = 'minus';
    });

    times.addEventListener('click', () => {
        prevdisplay = displayline;
        multiplier = Number(multiplier) * Number(displayline);
        displayline = multiplier;
        outcome.innerHTML = displayline;
        displayline = '';
        operator = 'times';
    });

    dividedby.addEventListener('click', () => {
        prevdisplay = displayline;
        if (initialPass)    {
            result = displayline;
        }   else if (displayline == 0)  {
                result = 'CANNOT DIVIDE BY 0';
        }   else    {
            result = Number(result) / Number(displayline);
            displayline = result;
        };
        outcome.innerHTML = displayline;
        displayline = '';
        initialPass = false;
        operator = 'dividedby';
    });

    percent.addEventListener('click', () => {
        if (operator == 'minus') {
            displayline = displayline * -1
        };
        prevdisplay = Number(prevdisplay);
        result = prevdisplay * Number(displayline) / 100 + prevdisplay;
        displayline = result;
        outcome.innerHTML = displayline;  
        operator = 'percent';
    });

    factorial.addEventListener('click', () => {
        for (let i=1; i<=displayline; ++i)  {
            multiplier = multiplier * i;
        }
        displayline = multiplier;
        outcome.innerHTML = displayline;
        multiplier = 1;
        operator = 'factorial';
    });

    natlog.addEventListener('click', () => {
        displayline = Math.log(displayline);
        outcome.innerHTML = displayline;
    });

    log10.addEventListener('click', () => {
        displayline = Math.log10(displayline);
        outcome.innerHTML = displayline;
    });

    sqroot.addEventListener('click', () => {
        displayline = Math.sqrt(displayline);
        outcome.innerHTML = displayline;
    });

    sine.addEventListener('click', () => {
        displayline = Math.sin(displayline);
        outcome.innerHTML = displayline;
    });    

    cosine.addEventListener('click', () => {
        displayline = Math.cos(displayline);
        outcome.innerHTML = displayline;
    });    

    // exponent.addEventListener('click', () => {
    //     displayline = displayline + '  E ';
    //     outcome.innerHTML = displayline;
    // });    



    inverse.addEventListener('click', () => {
        displayline = 1 / Number(displayline);
        outcome.innerHTML = displayline;
    });    

    pi.addEventListener('click', () => {
        displayline = Math.PI;
        outcome.innerHTML = displayline;
    });    

    euler.addEventListener('click', () => {
        displayline = Math.E;
        outcome.innerHTML = displayline;
    });    

    x2y.addEventListener('click', () => {   
        outcome.innerHTML = displayline;
        multiplier = displayline;
        initialPass = false;
        operator = 'x2y';
    });

    equals.addEventListener('click', () => {
        result = Number(result);
        displayline = Number(displayline);
        if (operator == 'plus') {
            result = result + displayline;
        } else if (operator == 'minus') {
            result = result - displayline;
        } else if (operator == 'times') {
            result = multiplier * displayline;
        } else if (operator == 'dividedby') {
            if (displayline == 0)  {
                result = 'CANNOT DIVIDE BY 0';
            } else    {
                result = result / displayline;
            }
        } else if (operator == 'x2y') {
            for (let i=1; i<=displayline; ++i)  {
                multiplier = displayline * multiplier;
            }
                displayline = multiplier;
                outcome.innerHTML = displayline;
                displayline = '';
                multiplier = 1;
                operator = 'x2y';
        }
        lastresult = result;
        displayline = result;
        outcome.innerHTML = displayline;
        result = 0;
        multiplier = 1;
        initialPass = true;
    });

    lastanswer.addEventListener('click', () => {
            outcome.innerHTML = lastresult;
            operator = 'lastanswer';
    });

    AC.addEventListener('click', () => {
        displayline = '';
        outcome.innerHTML = 0;
        result = 0;
        multiplier =1;
        prevdisplay = 0;
        initialPass = true;
    });