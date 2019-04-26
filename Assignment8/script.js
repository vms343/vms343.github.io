//var crown = document.querySelector("#crown"); 

//document.addEventListener("click", function findCrown(event) {
    //var x = event.clientX; 
    //var y = event.clientY; 
    //var crown = x + y; 
    
//}

//var crown = docuement.getElementById("crown"); 
//var group = document.getElementById("group"); 

//document.addEventListener("click", updateCrownPosition(){
                          
//function updateCrownPosition(e){ 
    //var crown = docuement.getElementById("crown");
    //var x = event.clientX; 
    //var y = event.clientY; 
    
    //crown.style.left = e.clientX + "px"; 
    //crown.style.top = e.clientY + "px"; 
//}

//}

//function updateCrownPosition(e){
    //var crown = document.getElementById("crown"); 
    //crown.style.top = e.clientY + 'px'; 
    //crown.style.left = e.clientX + 'px'; 
   
//}

//document.onmousemove = updateCrownPosition; 


var crown = document.querySelector("#crown"); 
var group = document.querySelector("#group"); 

group.addEventListener("click", function(event){
    var xPos = event.clientX - group.getBoundingClientRect().left;
    var yPos = event.clientY - group.getBoundingClientRect().top;
    
    crown.style.left = xPos + "px"; 
    crown.style.top = yPos + "px";                       
}); 