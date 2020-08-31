/**/

var img = document.getElementById("img_progects");
if(img == null){alert("Nulaco");}
function changeSize(){
    
    if(img.className == "img_aux"){
        img.classList.remove('img_aux');
        img.className = ('img_aux2');
        img.style.transition = '1s';
    }else{
        img.classList.remove('img_aux2');
        img.className = ('img_aux');
        img.style.transition = '1s';
    }
    
}
/*window.addEventListener("click",function(){changeSize();});*/
setInterval(function(){changeSize();}, 1500);
