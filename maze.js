 
    var gameStart = true;
    var lose = false;

//Exercise 6
window.onload = function(){
    var boundary = document.querySelectorAll(".boundary");

    for (var i=0; i< boundary.length-1; i++){
        boundary[i].addEventListener("mouseover", lost);
    }

    
    document.getElementById("end").addEventListener("mouseover", endgame);
    document.getElementById("maze").addEventListener("mouseleave",endgame2);
    document.getElementById("start").addEventListener("click", gameGo);
}

    

function lost(){
    if (gameStart){
        var boundary = document.querySelectorAll(".boundary");
        for (var i = 0; i < boundary.length-1; i++) {
            boundary[i].className += " youlose";
            document.getElementById("status").innerHTML="You Lose!";
        }
        lose = true;
    }
}
 
function endgame(){
    if(!lose){
       document.getElementById("status").innerHTML="You Win!";
       gameStart = false;
    }

}



function gameGo(){
    resetBoundary("boundary");
    gameStart = true;
    lose = false;
    document.getElementById("status").innerHTML="PLAYING";
}


function resetBoundary(cssName){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].className = cssName;
    } 
}

function endgame2(){
    lost();
    if(!lose && gameStart){
        document.getElementById("status").innerHTML="You Lose!";
        gameStart = false;
        lose = true;
    }
    
}
