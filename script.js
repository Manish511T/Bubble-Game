var timer =60
var score=0
var hitrn=0

// bubble click
document.querySelector(".btm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent)
    if(hitrn==clickednum){
        increaseScore();
        makeBubble();
        getNewHit();
    }
     
})


// increase score
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent=score
}



// hit

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=hitrn
}


// bubbleMaker

function makeBubble(){
    var clutter = ""

    for(var i=1;i<=180;i++){
        var n = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${n}</div>`
    }

    document.querySelector(".btm").innerHTML=clutter
}


// for timercount

function runtimer(){
    var timerint = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer
    }
    else{
        clearInterval(timerint)
        document.querySelector(".btm").innerHTML = `<h1>Game Over</h1>`;
    }
    },1000);
}



runtimer();
makeBubble();
getNewHit();
increaseScore();

