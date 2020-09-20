var bbtn = document.getElementById("Black");
var rbtn = document.getElementById("Red");
var blbtn = document.getElementById("Blue");
var wbtn = document.getElementById("White");
var heart = document.getElementById("heart_img")
var hrtbtn = document.getElementById("Heart");
var timebtn= document.getElementById("time"); 
var hc= document.getElementById("Hid"); 
var tc= document.getElementById("Tid"); 
var mimg=document.getElementById("watch_img");



bbtn.addEventListener('click',function(){
    mimg.src="assets/b.png";
});

rbtn.addEventListener('click',function(){
    mimg.src="assets/r.png";
});

blbtn.addEventListener('click',function(){
    mimg.src="assets/bl.png";
});

wbtn.addEventListener('click',function(){
    mimg.src="assets/w.png";
});


   
var state = 1;
setInterval(() => {
   
    if(state == 1){
      
    
    heart.style.height=70+"px";
    state=0;
    }
    else{
        heart.style.height=60+"px";
        state=1;
    }
    },800);

    hrtbtn.addEventListener('click',function(){
   
  hc.style.visibility="visible";
tc.style.visibility="hidden";     
 });


timebtn.addEventListener('click',function(){
    hc.style.visibility="hidden";
    tc.style.visibility="visible";


});


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('Tid').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


