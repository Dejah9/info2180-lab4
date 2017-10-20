 
    var gameStart = false;
    var lose = false;

//Exercise 2
window.onload = function(){
    var boundary = document.querySelectorAll(".boundary");


    for (var i=0; i< boundary.length-1; i++){
        boundary[i].addEventListener("mouseover", lost);

    }
}
    

function lost(){
    if (!gameStart){
        var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].className += " youlose";
        gameStart = true;
        }
    }
}
 
