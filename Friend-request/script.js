var istatus = document.querySelector("h5");
var add = document.querySelector("#add");
cheak = 0;

add.addEventListener("click",function(){

    if (cheak == 0){
        istatus.innerHTML="Friends";
        istatus.style.color="green";
        add.innerHTML=" Remove Friend"
        cheak = 1;     
}
else{
    istatus.innerHTML="Stranger";
    istatus.style.color="red";
    add.innerHTML="Add Friend"
    cheak = 0;
}

})


