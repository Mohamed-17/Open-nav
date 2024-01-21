let myList = document.getElementById('menu');
let icon = document.getElementById('icon');

icon.onclick = function(){
    myList.classList.toggle("active");
    if(myList.classList.contains("active")){
        myList.style.display = "flex";
    } else{
        myList.style.display = "none";
    }
}