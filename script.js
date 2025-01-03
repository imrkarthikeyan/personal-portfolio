document.addEventListener("DOMContentLoaded",function(){
    const contactme=document.getElementById("contactme");
    const con=document.getElementById("con");
    const mobile=document.getElementById("mobile");
    const email=document.getElementById("email");
    const btn=document.getElementById("btn");
    contactme.addEventListener("click",function(){
        con.style.display="block";
    });
    mobile.addEventListener("click", function(){
        window.location.href="tel:+91 9025758149";
    });
    email.addEventListener("click",function(){
        window.location.href="mailto:rkarthikeyan578@gmail.com";
    });
    btn.addEventListener("click",function(){
        window.open("https://drive.google.com/file/d/13L1UIkRFBhFrEMJcL2XJH0F-wDtfhoGA/view?usp=sharing","_blank");
    });
});
