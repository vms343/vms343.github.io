//BUTTON 1 VARIABLE

var button1 = document.getElementById('square-button'); 

//SQUARE NUMBER FUNCTION

button1.addEventListener('click', squareNumber) 

function squareNumber(){

        var number = document.getElementById('square-input').value; //get value of what someone puts in square-input box  
        console.log('The result of squaring the number' + ' ' + number + ' is ' + number*number); //display text
        document.getElementById('solution').innerHTML = number*number; //display squared number in solution div of HTML
        return number*number; //return the number squared
    
    }

//BUTTON 2 VARIABLE

var button2 = document.getElementById('half-button'); 

//HALF NUMBER FUNCTION 

button2.addEventListener('click', halfNumber)

function halfNumber(){
    
    var number2 = document.getElementById('half-input').value; //get vallue of what someone puts in half-input box 
    console.log('Half of ' + number2 + ' is ' + number2/2); //display text
    document.getElementById('solution').innerHTML = number2/2; //display halved number in solution div of HTML 
    return number2/2; //return the number halved 
}


//BUTTON 3 VARIABLE

var button3 = document.getElementById('percent-button'); 

//PERCENT FUNCTION 

button3.addEventListener('click', percentOf)

function percentOf(){
    
    var number3 = document.getElementById('percent1-input').value; //get value of percent1 input box
    var number4 = document.getElementById('percent2-input').value; //get value of percent2 input box
    console.log(number3 + ' is ' + [(number3/number4)*100] + '% ' + 'of ' + number4); //display text
    document.getElementById('solution').innerHTML = [(number3/number4)*100] + '%'; //display percentage number in solution div of HTML
    return [(number3/number4)*100]; //return calculated percentage 
}

//BUTTON 4 VARIABLE

var button4 = document.getElementById('area-button');

//AREA OF CIRCLE FUNCTION 

button4.addEventListener('click', areaOfCircle)

function areaOfCircle(){
    
    var radius = document.getElementById('area-input').value; //get value of area input box
    var area = (2 * Math.PI * radius); 
    console.log('The area for a circle with radius ' + radius + ' is ' + area.toFixed(2)); //display text
    document.getElementById('solution').innerHTML = area.toFixed(2); //display area in solution div of HTML 
    return area.toFixed(2); //return area of circle  
}
