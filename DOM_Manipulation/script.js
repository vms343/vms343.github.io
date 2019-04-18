//GATSBY BUTTON


function buyGatsby(){
        
        var button1 = document.getElementById('buy-gatsby'); 
        var list = document.getElementsByTagName('p'); 
        alert('There are' + ' ' + list.length + ' paragraph items on the page'); 
    }

//FAULT IN OUR STARS BUTTON 

function buyStars(){
    var button2 = document.getElementById('buy-stars');
    var text = document.getElementById('stars'); 
    alert('There are' + ' ' + text.children.length + ' items inside this section'); 
    
}

//MOCKINGBIRD BUTTON 

function buyMockingbird(){
    var button3 = document.getElementById('buy-mockingbird');
    var text2 = document.getElementById('mockingbird'); 
    alert('There are' + ' ' + text2.children.length + ' items inside this section');
    
}

//CATCHER IN THE RYE BUTTON 

function buyRye(obj){
    obj.innerHTML = "Great Book! :)"
    
}

function mouseOutRye(obj) {
    obj.innerHTML = "Bad Book :("
}
