let user_box = document.getElementById("user_box");

var img1 = document.getElementsByClassName("img1");
var close_icon = document.getElementsByClassName("close_icon");

img1[0].addEventListener("click", ()=>{
    user_box.classList.remove("hide_details");
    if(screen.width = 928){
        close_icon[0].style.height = "200px";
    }
});

close_icon[0].addEventListener("click", ()=>{
    user_box.classList.add("hide_details");
    if(screen.width = 928){
        close_icon[0].style.height = "0px";
    }
});