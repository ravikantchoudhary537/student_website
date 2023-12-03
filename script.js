console.log("Hey");
let p = document.getElementById("menu-btn");
p.addEventListener("onclick",function(){
    // p.classList.add("active");
    console.log("Ravikant");
    document.getElementById("menu-and").style.right="0";
})
let q = document.getElementById("menu-close");
q.addEventListener("onclick",function(){
    q.classList.remove("active");
})