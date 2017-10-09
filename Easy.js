const EasyJs = {
    Id: function(id){
        return document.getElementById(id);
    }, 
    IdValue: function(id) {
      return document.getElementById(id).value;  
    },
    emailRegex: function(email) {
        const emailRegex = new RegExp("[a-zA-Z0-9._-]+@{1}[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}");
        if(!emailRegex.test(email)){return false;} 
        else {return true;}
    },
    phoneRegex: function(phone) {
        const phoneRegex = new RegExp("[1]?[(| |-]?[2-9]{1}[0-9]{2}[)| |-]?[0-9]{3}[-| ]?[0-9]{4}");
        if(!phoneRegex.test(phone)){return false;} 
        else {return true;}
    },
    addClass: function(el, className) {
        document.getElementById(el).classList.add(className);
    },
    removeClass: function(el, className) {
        document.getElementById(el).classList.remove(className);
    },
    hideElement: function(el) {
        document.getElementById(el).style.display='none';
    },
    showElement: function(el) {
        document.getElementById(el).style.display='block';
    },
    getName: function(id) {
       return document.getElementById(id).name;
    },
    getType: function(id) {
       return document.getElementById(id).type;
    },
    toJSON: function(obj) {
        return JSON.stringify(obj);
    },
    findByTag: function(tag) {
        return document.getElementsByTagName(tag);
    },
    findByClass: function(className) {
        return document.getElementsByClassName(className);
    },
    randomNumber: function(num1, num2){
        return Math.floor((Math.random() * num2) + num1);
    },
    timesClicked: function() {
        if(typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
                localStorage.clickcount = 1;
            }
             return localStorage.clickcount;
        }
    },
    newChildNode: function(el, parentNode, text){
        var x = document.createElement(el);
        var y = document.createTextNode(text);
        x.appendChild(y);
        var z = document.getElementById(parentNode);
        z.appendChild(x);
    },
    tagCollection: function(tag){
        return document.getElementsByTagName(tag);
    },
    newCookie: function(cookie){
        document.cookie = cookie;
    },
    removeDDLItem: function(id){
        var x = document.getElementById(id);
        x.remove(x.selectedIndex);
    },
    counter: function(){
        var x = 0;
        x++;
        return x;
    },
    changeText: function(id, newText){
        document.getElementById(id).innerHTML = newText;
    },
    changeImage: function(id, imgSrc){
        document.getElementById(id).src = imgSource;
    },
    generateSALT: function(number) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < number; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
    },
    compare: function(x, y){
        return x == y;
    },
    displayDate: function(){
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",    
       "November", "December"];       
       var date = new Date();
       var d = date.getDate();
       var m = date.getMonth();
       var y = date.getFullYear();    
       var simpleDate = d + " " + month[m] + " " + y;
       return simpleDate;
    },
    toTop: function(){
        window.scrollTo(0,0);
    },
    cookiesEnabled: function(){
        if (navigator.cookieEnabled == 0)
            return false;
        else
            return true;
          
    },
    closeWindow: function(){
        window.close()
    },
    closeWindowAfter: function(seconds){
        setTimeout(function() {
            window.close();
            }, seconds);        
    },
    genPassword: function(length){
        var x = "";
        var y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%$#@^&*!+~<>";  
        for (var i = 0; i < number; i++)
          x += y.charAt(Math.floor(Math.random() * y.length));  
        return x;
    },
    getUserBrowser: function(){
        return navigator.userAgent;
    },
    keyPressed: function(e){
        var keynum;
        if(window.event) { // IE                    
          keynum = e.keyCode;
        } else if(e.which){ // Netscape/Firefox/Opera                   
          keynum = e.which;
        }
        return String.fromCharCode(keynum);
    },
    isChecked: function(id){
        if (document.getElementById(id).checked = true)
            return true;
        else
            return false;
    },
    arrayTopItem: function(array){
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
    },
    isEqual: function(x, y){
        return x === y;
    }
}

export default EasyJs;