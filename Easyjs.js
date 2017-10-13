function getId(id){
    return document.getElementById(id);
}
function idValue(id) {
    return document.getElementById(id).value;  
  }
function emailRegex(email) {
      const emailRegex = new RegExp("[a-zA-Z0-9._-]+@{1}[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}");
      if(!emailRegex.test(email)){return false;} 
      else {return true;}
  }
function phoneRegex(phone) {
      const phoneRegex = new RegExp("[1]?[(| |-]?[2-9]{1}[0-9]{2}[)| |-]?[0-9]{3}[-| ]?[0-9]{4}");
      if(!phoneRegex.test(phone)){return false;} 
      else {return true;}
  }
function addClass(el, className) {
      document.getElementById(el).classList.add(className);
  }
function removeClass(el, className) {
      document.getElementById(el).classList.remove(className);
  }
function hideElement(el) {
      document.getElementById(el).style.display='none';
  }
function showElement(el) {
      document.getElementById(el).style.display='block';
  }
function getName(id) {
     return document.getElementById(id).name;
  }
function getType(id) {
     return document.getElementById(id).type;
  }
function toJSON(obj) {
      return JSON.stringify(obj);
  }
function FindByTag(tag) {
      return document.getElementsByTagName(tag);
  }
function FindByClass(className) {
      return document.getElementsByClassName(className);
  }
function randomNumber(num1, num2){
      return Math.floor((Math.random() * num2) + num1);
  }
function timesClicked() {
      if(typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
              localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
              localStorage.clickcount = 1;
          }
           return localStorage.clickcount;
      }
  }
function newChild(el, parentNode, text){
      var x = document.createElement(el);
      var y = document.createTextNode(text);
      x.appendChild(y);
      var z = document.getElementById(parentNode);
      z.appendChild(x);
  }
function tagCollection(tag){
      return document.getElementsByTagName(tag);
  }
function newCookie(cookie){
      document.cookie = cookie;
  }
function removeDDLItem(id){
      var x = document.getElementById(id);
      x.remove(x.selectedIndex);
  }
function counter(){
      var x = 0;
      x++;
      return x;
  }
function changeText(id, newText){
      document.getElementById(id).innerHTML = newText;
  }
function changeImg(id, imgSrc){
      document.getElementById(id).src = imgSource;
  }
function genSALT(number) {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%$#@^&*!";
    
      for (var i = 0; i < number; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
      return text;
  }
function compare(x, y){
    return x == y;
}
function displayDate(){
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",    
   "November", "December"];
   
   var date = new Date();
   var d = date.getDate();
   var m = date.getMonth();
   var y = date.getFullYear();    
   var simpleDate = d + " " + month[m] + " " + y;
   return simpleDate;
}
function toTop(){
    window.scrollTo(0,0);
}
function cookiesEnabled(){
    if (navigator.cookieEnabled == 0)
        return false;
    else
        return true;      
}
function closeWindow(){
    window.close()
}
function closeWindowAfter(seconds){
    setTimeout(function() {
        window.close();
        }, seconds);        
}
function genPassword(length){
    var x = "";
    var y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%$#@^&*!+~<>";  
    for (var i = 0; i < number; i++)
      x += y.charAt(Math.floor(Math.random() * y.length));  
    return x;
}
function getUserBrowser(){
    return navigator.userAgent;
}
function keyPressed(e){
    var keynum;
    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }
    return String.fromCharCode(keynum);
}
function isChecked(id){
    if (document.getElementById(id).checked = true)
        return true;
    else
        return false;
}
function arrayTopItem(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
function isEqual(x, y){
    return x === y;
}
function plotPoint(x,y, canvasID){
    var canvas = document.getElementById(canvasID);
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var ctx = canvas.getContext("2d");
    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    return ctx.fillRect(x,y,3,3);    
}
function findDistance(x1, x2, y1, y2){
    var a = x1 - x2
    var b = y1 - y2    
    return Math.sqrt( a*a + b*b );
}
function drawLine(x1,y1, x2, y2 , canvasID){
    var c=document.getElementById(canvasID);
    var ctx=c.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle="black"; // Purple path
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2); 
    ctx.stroke(); // Draw it
}
window.query = function(selector) {
    var selectorType = 'querySelectorAll';

    if (selector.indexOf('#') === 0) {
        selectorType = 'getElementById';
        selector = selector.substr(1, selector.length);
    }
    return document[selectorType](selector);
}