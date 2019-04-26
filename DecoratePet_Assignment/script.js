var crown = document.querySelector("#crown"); 
var group = document.querySelector("#group"); 

group.addEventListener("click", function(event){
    var xPos = event.clientX - group.getBoundingClientRect().left;
    var yPos = event.clientY - group.getBoundingClientRect().top;
    
    crown.style.left = xPos + "px"; 
    crown.style.top = yPos + "px";                       
}); 