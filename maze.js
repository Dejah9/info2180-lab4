 
    var gameStart = false;
    var lose = false;

//Exercise 3
window.onload = function(){
    var boundary = document.querySelectorAll(".boundary");


    for (var i=0; i< boundary.length-1; i++){
        boundary[i].addEventListener("mouseover", lost);
    }

    document.getElementById("end").addEventListener("mouseover", endgame);
}

    

function lost(){
    if (!gameStart){
        var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].className += " youlose";
        gameStart = true;
        document.getElementById("status").innerHTML="You Lose!";
        }
    }
}
 
function endgame(){
    if (!gameStart)
        {
           document.getElementById("status").innerHTML="You Win!";
        }
    else
        {
            document.getElementById("status").innerHTML="You Lose!";
        }
}


