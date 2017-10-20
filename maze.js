//Exercise 1 
window.onload = function(){
    var boundary = document.getElementById("boundary1");
    boundary.onmouseover= function(){
        if(boundary.className !== "boundary youlose"){
            boundary.className += " youlose";
        }

    }
}
