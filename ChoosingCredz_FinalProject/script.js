var TxtRotate = function(el, toRotate, period) { //a variable for the rotating text 
  this.toRotate = toRotate; //rotating the text 
  this.el = el;
  this.loopNum = 0; 
  this.period = parseInt(period, 10) || 2000; //the period of rotation 
  this.txt = ''; //the text that is displayed is in an array string 
  this.tick(); //typewriter ticking 
  this.isDeleting = false; 
};

TxtRotate.prototype.tick = function() { 
  var i = this.loopNum % this.toRotate.length; //keep looping until it reaches the end
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) { //create an if statement, for whe the text is deleting
    this.txt = fullTxt.substring(0, this.txt.length - 1); //subtracting one letter 
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100; //calculate random time for the time 

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate'); //get element by class name 'txt-rotate'
  for (var i=0; i<elements.length; i++) { //add a letter to each word until it reaches the end of the word (length)
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
    
  //IMPLEMENT CSS 
  var css = document.createElement("style"); //use the style from css to make the rotating text look the way you want 
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

//change color of text 

function flash() {
    var change = document.getElementById('colorchange');
    change.style.color = (change.style.color=='white') ? '#355C7D':'white'; //if it is white change it to navy conditional statement
}
var flashing = setInterval(flash, 1200);

//function to get current page and underline it 

var current = document.getElementById('default');

  function underline(el)
  {
     if (current != null)
     {
         current.className = "";
     }
     el.className = "underline";
     current = el;
  }
