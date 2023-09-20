
var arr =[
    {
    dp:"https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    Story:"https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
},
{
    dp:"https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1919&q=80",
    Story:"https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1919&q=80"
},

{
    dp:"https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    Story:"https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
},
{
    dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    Story:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
},

{
    dp:"https://images.unsplash.com/photo-1614806142513-483ee47d539b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    Story:"https://images.unsplash.com/photo-1614806142513-483ee47d539b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
}

]

var clutter = ""

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id ="${idx}" src="${elem.dp}" alt=""> </div>`
})


var storyes = document.querySelector("#storyes");

    storyes.innerHTML = clutter;

// What will happen when click happen 

storyes.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"

    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].Story})`


    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },2000)
})


