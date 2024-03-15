//formta the minu 
document.querySelector(".sidebar .minu-btn").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".sidebar .minu-btn").classList.toggle("active");
})
window.onresize = ()=>{
    document.querySelector(".sidebar").classList.remove("active");
    document.querySelector(".sidebar .minu-btn").classList.remove("active");
}
