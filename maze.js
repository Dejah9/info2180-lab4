 
    var gameStart = false;
    var lose = false;

//Exercise 4
window.onload = function(){
    var boundary = document.querySelectorAll(".boundary");

    for (var i=0; i< boundary.length-1; i++){
        boundary[i].addEventListener("mouseover", lost);
    }

    
    document.getElementById("end").addEventListener("mouseover", endgame);
    document.getElementById("start").addEventListener("click", gameGo);

}

    

function lost(){
    if (gameStart){
        console.log(this);
        var boundary = document.querySelectorAll(".boundary");
        for (var i = 0; i < boundary.length-1; i++) {
            boundary[i].className += " youlose";
            document.getElementById("status").innerHTML="You Lose!";
        }
        lose = true;
    }
}
 
function endgame(){
    if(lose){
           document.getElementById("status").innerHTML="You Win!";
    }
}



function gameGo(){
    resetBoundary("boundary");
    gameStart = true;
    document.getElementById("status").innerHTML="PLAYING";
}


function resetBoundary(cssName){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].className = cssName;
    } 
}
