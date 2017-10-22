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
        for (var i = 0; i < length; i++)
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
    },
    plotPoint: function(x,y, canvasID){
        var canvas = document.getElementById(canvasID);
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        var ctx = canvas.getContext("2d");
        var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
        return ctx.fillRect(x,y,3,3);    
    },
    findDistance: function(x1, x2, y1, y2){
        var a = x1 - x2
        var b = y1 - y2    
        return Math.sqrt( a*a + b*b );
    },
    drawLine: function(x1,y1, x2, y2 , canvasID){
        var c=document.getElementById(canvasID);
        var ctx=c.getContext("2d");
    
        ctx.beginPath();
        ctx.strokeStyle="black"; // black path
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2); 
        ctx.stroke(); // Draw it
    },
    query: function(selector) {
        var selectorType = 'querySelectorAll';
    
        if (selector.indexOf('#') === 0) {
            selectorType = 'getElementById';
            selector = selector.substr(1, selector.length);
        }
        return document[selectorType](selector);
    },
    JSONToString: function(json){
        return JSON.parse(json);
    },
    sortNumArray: function(...array){
        return array.sort(function(x,y){return x-y});
    },
    sortTextArray: function(...array){
        return array.sort();
    },
    isNumber: (x) =>{
        return Number.isNaN(x);
    },
    filterNumArray: function(array, value){
        function checkIfHigher(arry){
            let x = arry <value;
            let y = arry > value;
            return x +y;
        }
        if (Array.isArray(array))    
            return array.filter(checkIfHigher);
    },
    toInt : function(string){
        return parseInt(string);
    },
    toString : function(string){
        return String(string);
    },
    capitalize : function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    trim : function(string){
        return str.trim();
    },
    splitEmail : function(email){
        return email.replace('@', " ").split(" ");
    },
    wholeNum : function(value){
        return value.toFixed(0);
    },
    toDec : function(value){
        return value.toFixed(2);
    },
    currentTime : function(){
        let v = new Date();
        return v.toLocaleTimeString();
    },
    currentDate : function(){
        let v = new Date();
        return v.toLocaleDateString();
    },
    saveInfo : function(key, value){
        sessionStorage.setItem(key, value);
    },
    getInfo : function(key){
        return sessionStorage.getItem(key);
    },
    screenSize: function(){
        return [screen.width, screen.height];
    },
    browserOS: function(){
        return navigator.platform;
    },
    browserLang: function(){
        return navigator.language;
    },
    lbKG: function(pounds){
        return pounds/2.2046;
    },
    kgLB: function(kilo){
        return kilo*2.2046;
    },
    ozG: function(ounce){
        return ounce/0.035274;
    },
    gOZ: function(grams){
        return grams*0.035274;
    },
    farToCel: function(fahrenheit){
        return (fahrenheit-32) / 1.8;
    },
    celToFar: function(celsius){
        return (celsius*1.8) + 32;
    },
    MPHtoKPH: function(mph){
        return mph*1.609344;
    },
    KPHtoMPH: function(kph){
        return kph/1.609344
    },
    boolToNum: function(bool){
        return Number(bool);
    },
    numToBool: function(number){
        return Boolean(number);
    },
    isNull: function(x){
        if (x === null)
            return true;
        else
            return false;
    },
    isEven: function(number){
        if (number % 2 === 0 )
            return true;
        else
            return false;
    },
    Control: function(id){
        this.y = document.getElementById(id);

        this.FontSize = function(number){
            return this.y.fontSize = number;
        }
        this.color = function(color){
            return this.y.style.color = color;
        }
        this.bgColor = function(bg){
            return this.y.style.backgroundColor = bg;
        }
        this.textAlign = function(pos){
            return this.y.style.textAlign = pos;
        }
        this.textDecoration = function(value){
            return this.y.style.textDecoration = value;
        }
        this.FontStyle = function(style){
            return this.y.style.fontStyle = style;
        }
        this.FontWeight = function(w){
            return this.y.style.fontWeight = w;
        }
        this.bgIMG = function(src){
            return this.y.style.backgroundImage = "url(" + src +")";
        }
        this.addClass = function(className){
            return this.y.style.classList.add(className);
        }
        this.removeClass = function(className){
            return this.y.style.classList.remove(className);
        }
        this.hide = function(){
            return this.y.style.display = 'none';
        }
        this.show = function(){
            return this.y.style.display = 'block';
        }
        this.Opacity = function(value){
            return this.y.style.opacity = value;
        }
        this.Cursor = function(cursor){
            return this.y.style.cursor = cursor;
        }
        this.floatLeft = function(){
            return this.y.style.cssFloat = 'left';
        }
        this.floatRight = function(){
            return this.y.style.cssFloat = 'right';
        }
        this.Text = function(text){
            return this.y.innerHTML = text;
        }        
    }
}


export default EasyJs;