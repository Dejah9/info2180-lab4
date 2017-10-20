window.onload = function(){

//Exercise 1 
  var avoid = document.getElementById("boundary1");
  avoid.onmouseover = function(){
    this.setAttribute("class","youlose");
}
