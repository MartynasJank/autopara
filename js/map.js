$(function(){
     ////////////////////// MAP //////////////////////
    var map = document.getElementById("map");
    var mapBtn = document.getElementById("map-btn");
    
    mapBtn.onclick = function(){
        map.style.pointerEvents = "auto";
  
    }
    
    mapBtn.onmouseleave = function(){
        map.style.pointerEvents = "none";
    }
});