cont toTop=document.querySelector(",to-top")
window.addEventListen("scroll",()=>{
    if(window.pageYOffset>100){
        to-top.class.add("active");
    }
})